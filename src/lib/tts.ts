// ---------------------------------------------------------------------------
// Mandarin pronunciation via the Web Speech API (SpeechSynthesis).
//
// On-device and offline-capable: the browser's installed Chinese voice speaks
// the hanzi directly, so there are no audio assets to bundle or download. This
// is the "TTS for now" path (see PLAN.md); pre-rendered recordings can later
// take over per-posture via Media.audio without touching this module.
//
// Voice quality/availability varies by platform (iOS and Android Chrome ship
// good zh-CN voices; some desktops have none) — callers gate the UI on
// ttsAvailable() so the control is only offered when a Chinese voice exists.
// ---------------------------------------------------------------------------

let cachedVoices: SpeechSynthesisVoice[] = [];
let voicesReady: Promise<void> | null = null;

function synth(): SpeechSynthesis | null {
  return typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
}

/** Voices populate asynchronously; resolve once they're available (with a fallback tick). */
function loadVoices(): Promise<void> {
  const s = synth();
  if (!s) return Promise.resolve();
  if (voicesReady) return voicesReady;

  voicesReady = new Promise((resolve) => {
    const grab = () => {
      cachedVoices = s.getVoices();
      return cachedVoices.length > 0;
    };
    if (grab()) {
      resolve();
      return;
    }
    s.addEventListener(
      'voiceschanged',
      () => {
        grab();
        resolve();
      },
      { once: true },
    );
    // Some engines never fire voiceschanged — don't hang the UI forever.
    window.setTimeout(resolve, 800);
  });
  return voicesReady;
}

/** Best available Mandarin voice, preferring Mainland (zh-CN), or null if none. */
function pickZhVoice(): SpeechSynthesisVoice | null {
  const zh = cachedVoices.filter((v) => v.lang?.toLowerCase().startsWith('zh'));
  if (zh.length === 0) return null;
  return zh.find((v) => /cn|hans|mandarin|putonghua/i.test(`${v.lang} ${v.name}`)) ?? zh[0];
}

/** True if the device can synthesize Mandarin speech. */
export async function ttsAvailable(): Promise<boolean> {
  if (!synth()) return false;
  await loadVoices();
  return pickZhVoice() !== null;
}

/** Speak the given Chinese text (hanzi) in Mandarin, slightly slowed for learners. */
export async function speakMandarin(text: string): Promise<void> {
  const s = synth();
  if (!s) return;
  await loadVoices();
  const voice = pickZhVoice();
  if (!voice) return;

  s.cancel(); // stop anything in flight; also a known iOS Safari workaround
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.85;
  u.pitch = 1;
  s.speak(u);
}

/** Stop any in-progress speech. */
export function stopSpeaking(): void {
  synth()?.cancel();
}
