import type { FormData, MediaSource, MediaView, Posture } from '../types';

// ---------------------------------------------------------------------------
// Shared media library — the single source of truth for posture/form media.
//
// Why a shared library instead of editing 14 datasets: the same posture recurs
// across many forms (White Crane appears in all 14, Single Whip in 13, …). We
// key posture media by hanzi so ONE catalogued resource is reused everywhere
// that posture appears. `attachMedia()` merges this into a form's postures at
// load time, so no posture data file needs to change.
//
// Provenance: every URL here was found via web research and recorded with its
// title + author for attribution. The human-readable catalogue with full
// rights notes lives in RESOURCES.md. Most videos are third-party YouTube
// uploads — linked for private reference/study, not redistributed. To localize
// assets for true offline use, run `scripts/localize-media.mjs` (see RESOURCES).
// ---------------------------------------------------------------------------

/** Build a YouTube MediaSource compactly. */
function yt(
  id: string,
  title: string,
  view: MediaView,
  author: string | null = null,
  note?: string,
): MediaSource {
  return {
    kind: 'video',
    url: `https://www.youtube.com/watch?v=${id}`,
    title,
    author,
    source: 'YouTube',
    license: '© respective channel — linked for private reference',
    view,
    note,
  };
}

// ---------------------------------------------------------------------------
// Whole-form routine videos. Multiple angles per form where they exist:
// `front` / `back` (mirror, for follow-along) / `instruction` (step-by-step) /
// `demo`. Sourced wherever possible to the form's lineage holder or its author.
// ---------------------------------------------------------------------------
export const FORM_MEDIA: Record<string, MediaSource[]> = {
  yang24: [
    yt('msPD0LcbSTM', 'Yang Style Tai Chi 24 Form — Front View Demo with Subtitles', 'front', null, 'English + Chinese subtitles'),
    yt('e4VIw41R-PU', '24 Form Tai Chi Demonstration (Back View) — 吳阿敏背向示範楊式24式太極拳', 'back', 'Amin Wu 吳阿敏', 'Mirror view for follow-along'),
    yt('FUpeJ3Bkr9o', 'Tai Chi Yang Style 24 Form — Full Set Back View with Verbal Cues', 'back', null),
    yt('R8NbQecDygQ', '24 Yang Style Tai Chi Form — Full Beginner Instruction', 'instruction', 'Master Pei'),
  ],
  yang40: [
    yt('FowwENJg1xU', 'Yang-Style Tai Chi 40 Form — Front-View Demonstration', 'front', 'Amin Wu 吳阿敏'),
    yt('inPP1EF8okk', '楊式40式太極拳 — Yang Style 40 Form Competition Routine', 'demo', 'Yi Peng 易鵬'),
    yt('QMwZfFVVnCI', '杨氏太极拳四十式 背向演练带口令', 'back', null, 'Back view with spoken count'),
    yt('w67MYzzl8xk', 'Tai Chi 40 Form — Slow Motion with Instructions', 'instruction', 'Peter Chen', 'Step-by-step slow-motion walkthrough'),
  ],
  yang85: [
    yt('CpyWUq6eMyI', 'Yang-Style Tai Chi Traditional Long Form — Full Front View | 楊式太極拳傳統85式 全套正面演練', 'front', 'Amin Wu 吳阿敏'),
    yt('X9HGPGDdiig', 'Yang-Style Tai Chi Traditional Long Form — Back View | 楊式太極拳傳統85式 全套背向演練', 'back', 'Amin Wu 吳阿敏'),
    yt('GYmYgCTpwKI', 'Fu Zhongwen — Yang Family Tai Chi 85 Form (Part 1) with Yang Chengfu Images', 'demo', 'Fu Zhongwen 傅鍾文'),
    yt('T6thmaIbLjc', '85式杨氏太极拳分解教学 — Step-by-step Breakdown (Eng CC)', 'instruction', null),
  ],
  yang103: [
    yt('LiGdYlPC7Ko', 'Step by Step Walkthrough of the Yang Family 103 Form', 'instruction', 'Yang Family Tai Chi (Yang Jun)'),
    yt('rl2gDGgOOXM', 'Traditional Yang Style Taijiquan 103 Form — Back View', 'back', null),
    yt('keWLHacjNWI', 'Yang Style Taijiquan 103 Form — Part 1', 'demo', 'Yang Jun'),
    yt('d1rTZCX6Xzg', 'Yang Family 103 Form — Step by Step, Close-Up Practice', 'instruction', 'Yang Family Tai Chi'),
  ],
  yang108: [
    yt('a6pJf2otwv8', 'Traditional Yang Style 108 Form Tai Chi Chuan 太极拳', 'demo', null),
    yt('V9h7zU7cr6E', '108 Yang Style Tai Chi Chuan Long Form (Back View)', 'back', null),
    yt('MJHqVSzURLE', 'Tai Chi Yang Style 108 Form Demo with 8 Technique Analysis', 'demo', 'Dr. Todd Martin'),
    yt('LmHZE5oklag', 'Yang Tai Chi 108 Form — Step-by-step Series (1/93)', 'instruction', null, 'First of a 93-part breakdown'),
  ],
  chen18: [
    yt('1EEALpy2JOM', 'Chen Zhenglei 陳正雷 — Chen-Style Taijiquan Essential 18 Form 陳氏太極拳精要十八式', 'front', 'Chen Zhenglei 陳正雷'),
    yt('YtUqaedweSQ', 'Chen-style Tai Chi 18 Form 陈氏18式太极拳 — Beginner Front View', 'front', null),
    yt('66T-uY8cW-U', 'Chen Tai Chi 18 Form (Back View) 陈氏18式太极拳 背面', 'back', null),
    yt('otF4DxyJN2c', 'Chen Style Tai Chi 18 Form — Tutorial, Back View & Slow Motion', 'instruction', 'Marco Insalata'),
  ],
  chen_laojia: [
    yt('Xqhj3NqQ9Zk', 'Laojia Yilu Complete — Chen Xiaowang', 'front', 'Chen Xiaowang 陳小旺'),
    yt('ZTyIQm-_Bj4', 'Chen Taijiquan — Chen Zhenglei — Lao Jia Yi Lu (subtitled)', 'demo', 'Chen Zhenglei 陳正雷', '~75 postures marked'),
    yt('SuZgYRS2Xok', 'Chen Xiaowang — Laojia Yi Lu (2013)', 'demo', 'Chen Xiaowang 陳小旺'),
    yt('CqX_riDPLz8', 'Chen Style Tai Chi Laojia Yilu Tutorial — Chen Zhenglei 1/5', 'instruction', 'Chen Zhenglei 陳正雷'),
  ],
  chen56: [
    yt('7aS8JLJcBvU', '56 Chen Style Taijiquan Competition Routine — Kan Gui Xiang', 'front', 'Kan Gui Xiang 阚桂香', 'Performed by the routine’s author'),
    yt('u7hy2jqwu-0', 'Chen Style Taiji 56 Competition Form 陈式太极拳56式竞赛套路', 'demo', 'Wong Yong Wushu Academy'),
    yt('UvzkkwY141U', 'Kan Gui Xiang — 56 Chen — Tutorial', 'instruction', 'Kan Gui Xiang 阚桂香'),
    yt('FUqUCDcOsSk', 'Chen Style 56 Form Competition Routine Tutorial 1~11', 'instruction', null),
  ],
  wu_long: [
    yt('v6zbcMUYJ5g', 'Wu Style 108 Traditional Standard Hand Form', 'front', 'GM Eddie Wu Kwong Yu 吳光宇'),
    yt('5EY2i9m5XKg', 'Wu-style Tai Chi Chuan — 108 Movements Joint Form, Demonstration + Explanations', 'instruction', 'GM Eddie Wu 吳光宇'),
    yt('41XGr7WQ3Ok', 'Wu-style Tai Chi Chuan — 108 Movements Traditional Square Form', 'demo', 'Li Koon-kuan 李冠群'),
    yt('7GXUgz7P278', '108 Wu Style Traditional Form — Tutorial, Complete Demonstration', 'instruction', null),
  ],
  wuhao: [
    yt('8EJqwLScVR4', 'Hao-Style Tai Chi 46 Form — Full Demo, Front View', 'front', 'Amin Wu 吳阿敏'),
  ],
  sun73: [
    yt('Ex0BTGpkq0E', '高佳敏 — 孫式73式太極拳 全套示範（正面）— Sun Style 73 Form', 'front', 'Gao Jiamin 高佳敏'),
    yt('NtXbaqPH7ek', '高佳敏 — 孫式73式太極拳 全套示範（背面）— Sun Style 73 Form', 'back', 'Gao Jiamin 高佳敏'),
    yt('EYNe5qxd2y4', '孙式太极拳竞赛套路 背面演示（带口令）', 'back', null, 'Back view with spoken count'),
    yt('SoQ7Mwze_ko', 'Sun Style Tai Chi 73 Form — Demonstration', 'demo', 'Susan Thompson', 'English-language demo'),
  ],
  sun97: [
    yt('Sli40SubueI', 'Sun-style Taiji Quan 97 Posture — Lecture by Sun Jianyun 孙氏太极拳 (1/2)', 'instruction', 'Sun Jianyun 孙剑云', 'By the form’s main inheritor'),
    yt('UjunL9tlut0', '孙氏太极拳97式 孙剑云教学', 'instruction', 'Sun Jianyun 孙剑云'),
    yt('VOIu2iTKVMk', 'Sun Style Taijiquan 97 Form Demo — Slow Version', 'demo', 'Feng Yue'),
  ],
  comb42: [
    yt('rj19U_UR6zI', '高佳敏 — 42式太極拳 全套示範（正面）— 42 Form Tai Chi', 'front', 'Gao Jiamin 高佳敏'),
    yt('VBhy59de37Q', 'Tai Chi 42 Form (Back View) 42式太极拳 背面', 'back', null),
    yt('eiSPJ4gn4zM', 'Tai Chi 42 Forms — International Competition Routine', 'demo', null),
    yt('A-T7FO_dfRw', 'Sifu Amin Wu — Competition 42 Form Tai Chi Chuan', 'demo', 'Amin Wu 吴阿敏'),
  ],
  comb48: [
    yt('AK5XDZN-t74', '48 Form Tai Chi — Front-View Demonstration', 'front', 'Amin Wu 吴阿敏'),
    yt('skI-_GcpP6g', 'Tai Chi 48 Form (Back View) 48式太极拳 背面', 'back', null),
    yt('vMPyFG5E888', '吴阿敏 — 48式太极拳 正面背面合一示范', 'instruction', 'Amin Wu 吴阿敏', 'Front + back combined in one video'),
    yt('VTgfWeCIQfE', '邱慧芳 48式太极拳精简教学（李德印）', 'instruction', 'Qiu Huifang 邱慧芳 / Li Deyin 李德印'),
  ],
};

// ---------------------------------------------------------------------------
// Per-posture media, keyed by hanzi (base form). Reused across every form that
// contains the posture. Filled from research; see RESOURCES.md for provenance.
// ---------------------------------------------------------------------------
// A reference page (per-posture article / illustrated breakdown). Rendered as a
// link chip rather than an <img>, since these are HTML pages, not image files.
// (Direct image files couldn't be resolved from the build sandbox — its egress
// blocks Wikimedia et al. — so these link out; localize later if desired.)
function ref(
  url: string,
  title: string,
  source: string,
  license: string | null = null,
  note?: string,
): MediaSource {
  return { kind: 'page', url, title, author: null, source, license, note };
}

// A self-hosted still image, rendered inline as an <img>. ONLY use for genuinely
// free assets (public-domain / Creative Commons) — the gallery shows the author +
// license caption. `url` is an app-bundled path under public/media/postures/
// (resolved against the deploy base at render time). Provenance + exact license +
// original file URL are recorded in RESOURCES.md. Localized with
// `scripts/localize-media.mjs` (thumbnails) / manual Commons download (these).
function img(
  url: string,
  title: string,
  author: string | null,
  source: string,
  license: string,
  note?: string,
): MediaSource {
  return { kind: 'image', url, title, author, source, license, note };
}

export const POSTURE_MEDIA: Record<string, MediaSource[]> = {
  白鹤亮翅: [ref('https://www.everydaytaichi.org/white-crane-spreads-its-wings1.html', 'White Crane Spreads its Wings', 'everydaytaichi.org', '© everydaytaichi.org', 'Per-posture page with photos')],
  单鞭: [
    img('/media/postures/single-whip.webp', 'Yang Chengfu — Single Whip application', 'Yang Chengfu (via chipellis.com)', 'commons.wikimedia.org', 'Public domain', 'Historical application photograph'),
    ref('https://www.everydaytaichi.org/single-whip.html', 'Single Whip', 'everydaytaichi.org', '© everydaytaichi.org', 'Hand/foot positioning photos'),
  ],
  高探马: [
    ref('http://www.everydaytaichi.org/high-pat-on-the-horse-kick-out-right.html', 'High Pat on the Horse, Kick Out Right', 'everydaytaichi.org', '© everydaytaichi.org'),
    ref('http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html', 'High Pat on Horse — Front & Back View', 'everydaytaichi.org', '© everydaytaichi.org', 'Front and back view photos'),
  ],
  云手: [
    ref('https://www.everydaytaichi.org/cloud-hands.html', 'Cloud Hands', 'everydaytaichi.org', '© everydaytaichi.org', 'Movement photos'),
    ref('http://www.everydaytaichi.org/grasping-the-birds-tail-thru-cloud-hands-single-whip-back-view.html', 'Cloud Hands — Back View sequence', 'everydaytaichi.org', '© everydaytaichi.org', 'Front and back view photos'),
  ],
  上步七星: [ref('https://www.everydaytaichi.org/yang-style-16-form.html', 'Step Up to Seven Stars (in Yang 16 sequence)', 'everydaytaichi.org', '© everydaytaichi.org', 'Within a form-sequence page')],
  如封似闭: [
    ref('https://www.everydaytaichi.org/apparent-closing.html', 'Apparent Closing', 'everydaytaichi.org', '© everydaytaichi.org'),
    ref('https://www.everydaytaichi.org/lesson-10-turn-deflect-parry-punch-apparent-closing.html', 'Apparent Closing — Lesson with photos', 'everydaytaichi.org', '© everydaytaichi.org'),
  ],
  双峰贯耳: [ref('http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html', 'Strike Ears with Both Fists (double punch) — Front & Back', 'everydaytaichi.org', '© everydaytaichi.org')],
  手挥琵琶: [ref('http://www.everydaytaichi.org/playing-the-lute1.html', 'Playing the Lute', 'everydaytaichi.org', '© everydaytaichi.org')],
  起势: [
    img('/media/postures/commencing.webp', 'Dong Yingjie — Commencement of Taiji', 'Dong Yingjie 董英杰 (via chipellis.com)', 'commons.wikimedia.org', 'Public domain', 'Opening posture, historical photograph'),
    ref('https://www.egreenway.com/taichichuan/TY1.htm', 'Opening Posture of Taijiquan (Green Way Research)', 'egreenway.com', '© Michael Garofalo', 'Illustrated per-posture page'),
    ref('https://www.everydaytaichi.org/commencing-form-part-horses-mane.html', 'Commencing Form', 'everydaytaichi.org', '© everydaytaichi.org'),
  ],
  金鸡独立: [ref('https://classicaltaichi.blogspot.com/2013/07/form-and-martial-intent-golden-rooster.html', 'Golden Rooster Stands on One Leg — form & martial intent', 'classicaltaichi.blogspot.com', '© Classical Tai Chi')],
  摆莲: [ref('https://taichimastermoy.org/sweep-lotus-the-move-unlike-any-other-part-1-first-impressions/', 'Sweep Lotus — Part 1', 'taichimastermoy.org', "© Master Moy's Tai Chi")],
  收势: [ref('http://www.everydaytaichi.org/closing-form.html', 'Closing Form', 'everydaytaichi.org', '© everydaytaichi.org')],
  搂膝拗步: [ref('https://www.everydaytaichi.org/brush-knee2.html', 'Brush Knee', 'everydaytaichi.org', '© everydaytaichi.org')],
  海底针: [ref('https://www.everydaytaichi.org/needle-at-the-bottom-of-the-sea2.html', 'Needle at the Bottom of the Sea', 'everydaytaichi.org', '© everydaytaichi.org')],
  提手上势: [ref('https://www.egreenway.com/taichichuan/TY1.htm', 'Raise Hands and Step Up (Green Way Research)', 'egreenway.com', '© Michael Garofalo')],
  搬拦捶: [ref('http://www.everydaytaichi.org/turn-deflect-parry-and-punch.html', 'Turn, Deflect, Parry and Punch', 'everydaytaichi.org', '© everydaytaichi.org')],
  十字手: [ref('http://www.everydaytaichi.org/cross-hands.html', 'Cross Hands', 'everydaytaichi.org', '© everydaytaichi.org')],
  肘底捶: [ref('https://thetaichinotebook.com/2017/03/02/fist-under-elbow-and-natural-posture/', 'Fist Under Elbow', 'thetaichinotebook.com', '© The Tai Chi Notebook')],
  野马分鬃: [ref('https://www.everydaytaichi.org/commencing-form-part-horses-mane.html', "Part the Wild Horse's Mane", 'everydaytaichi.org', '© everydaytaichi.org')],
  揽雀尾: [
    img("/media/postures/grasp-birds-tail.webp", "Eddie Wu — Grasp Bird's Tail (1998)", 'Bradeos Graphon', 'commons.wikimedia.org', 'Public domain'),
    ref('https://www.everydaytaichi.org/grasping-the-birds-tail1.html', "Grasping the Bird's Tail", 'everydaytaichi.org', '© everydaytaichi.org'),
    ref('https://www.egreenway.com/taichichuan/gtst.htm', "Grasping the Sparrow's Tail (Green Way Research)", 'egreenway.com', '© Michael Garofalo', 'Photographs of Peng/Lu/Ji/An positions'),
  ],
  抱虎归山: [ref('https://balancedlifetaichi.com/blog/what-is-embrace-tiger-return-to-mountain-yang-all-about', 'Embrace Tiger, Return to Mountain', 'balancedlifetaichi.com', '© Balanced Life Tai Chi', 'References Yang Chengfu 1931 imagery')],
  扇通背: [ref('https://www.egreenway.com/taichichuan/longyang.htm', 'Fan Through the Back (Yang long-form reference)', 'egreenway.com', '© Michael Garofalo')],
  斜飞势: [
    img('/media/postures/diagonal-flying.webp', 'Gary Wragg performs Cross Step Slant Flying', 'Ronnie Robinson', 'commons.wikimedia.org', 'CC BY-SA 4.0'),
    ref('https://www.egreenway.com/taichichuan/yangn1.htm', 'Diagonal Flying (Notes on Yang Style)', 'egreenway.com', '© Michael Garofalo'),
  ],
  六封四闭: [ref("http://www.tcmwindow.com/taiji/Illustrations/movements/Six-Sealing-and-Four-Closing-in-form-of-Chen-Style-Taiji.shtml", 'Six Sealing and Four Closing (Chen, illustrated)', 'tcmwindow.com', '© tcmwindow.com', 'Illustrated Chen-style page')],
  金刚捣碓: [ref("http://www.tcmwindow.com/taiji/Illustrations/movements/Buddha's-Warrior-Attendant-Pounds-Mortar-in-Chen-Style-Taiji.shtml", "Buddha's Warrior Attendant Pounds Mortar (Chen, illustrated)", 'tcmwindow.com', '© tcmwindow.com')],
  掩手肱拳: [
    ref('https://practicalmethod.com/2017/05/the-fist-of-covering-hand-yan-shou-gong-chui-toronto-north-york-taiji-class/', 'The Fist of Covering Hand (Yan Shou Gong Chui)', 'practicalmethod.com', '© Chen Zhonghua / Practical Method'),
  ],
  掩手肱捶: [ref('https://practicalmethod.com/2017/05/the-fist-of-covering-hand-yan-shou-gong-chui-toronto-north-york-taiji-class/', 'The Fist of Covering Hand (Yan Shou Gong Chui)', 'practicalmethod.com', '© Chen Zhonghua / Practical Method')],
  倒撵猴: [ref('https://www.everydaytaichi.org/repulsing-the-monkey2.html', 'Repulsing the Monkey', 'everydaytaichi.org', '© everydaytaichi.org')],
  倒卷肱: [ref('https://www.everydaytaichi.org/repulsing-the-monkey2.html', 'Repulsing the Monkey (Dao Juan Gong)', 'everydaytaichi.org', '© everydaytaichi.org')],
  下势: [
    ref('https://www.taijiworld.com/tai-chi-posture.html', 'Snake Creeps Down', 'taijiworld.com', '© taijiworld.com', 'Includes a Yang Chengfu posture picture'),
    ref('https://www.chandao.co.uk/taijiquan-snake-creeps-down.html', 'Snake Creeps Down', 'chandao.co.uk', "© Ch'an Dao Martial Arts"),
  ],
  // The four primary energies (掤捋挤按) — shared reference for each gate.
  掤: [ref('https://thetaichinotebook.com/2015/09/10/peng-lu-ji-an-grasping-the-birds-tail/', "Peng, Lu, Ji, An — Grasping the Bird's Tail", 'thetaichinotebook.com', '© The Tai Chi Notebook')],
  捋: [ref('https://thetaichinotebook.com/2015/09/10/peng-lu-ji-an-grasping-the-birds-tail/', "Peng, Lu, Ji, An — Grasping the Bird's Tail", 'thetaichinotebook.com', '© The Tai Chi Notebook')],
  挤: [ref('https://thetaichinotebook.com/2015/09/10/peng-lu-ji-an-grasping-the-birds-tail/', "Peng, Lu, Ji, An — Grasping the Bird's Tail", 'thetaichinotebook.com', '© The Tai Chi Notebook')],
  按: [ref('https://www.egreenway.com/taichichuan/powers13.htm', 'Thirteen Postures / Eight Gates (Peng Lu Ji An …)', 'egreenway.com', '© Michael Garofalo')],
  // --- Phase E: expanded coverage (researched, then verified for liveness +
  // license). Pages are reference articles; the 2 images are free (PD/CC). ---
  "开手": [ref("https://balancedlifetaichi.com/blog/what-is-character-is-the-he-in-the-concept-of-kai-he-open-close", "The Concept of \"Kai He\" (Open/Close) in Tai Chi", "balancedlifetaichi.com", "© balancedlifetaichi.com")],
  "合手": [ref("https://balancedlifetaichi.com/blog/what-is-character-is-the-he-in-the-concept-of-kai-he-open-close", "The Concept of \"Kai He\" (Open/Close) in Tai Chi", "balancedlifetaichi.com", "© balancedlifetaichi.com")],
  "撇身捶": [ref("https://practicalmethod.com/2017/07/fist-draping-over-body-pi-shen-chui-and-lean-with-back-bei-zhe-kao-toronto-north-york-taiji-class-on-july-13-2017/", "Fist Draping Over Body (Pi Shen Chui) and Lean with Back (Bei Zhe Kao)", "practicalmethod.com", "© practicalmethod.com")],
  "弯弓射虎": [ref("https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/", "#MartialMonday 4 - Bend the Bow to Shoot the Tiger", "taiji-forum.com", "© taiji-forum.com")],
  "退步跨虎": [ref("https://thetaichinotebook.com/2024/04/04/retreat-to-ride-tiger/", "Retreat to Ride Tiger", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "懒扎衣": [ref("http://www.tcmwindow.com/taiji/Illustrations/movements/Lazy-About-Tying-Coat-in-form-of-Chen-Style-Taiji.shtml", "Lazy About Tying Coat in form of Chen Style Taiji (with image)", "tcmwindow.com", "© tcmwindow.com")],
  "玉女穿梭": [ref("http://www.tcmwindow.com/taiji/Illustrations/movements/Jade-Girl-Works-at-Shuttles-in-form-of-Chen-Style-Taiji.shtml", "Jade Girl Works at Shuttles in form of Chen Style Taiji (with image)", "tcmwindow.com", "© tcmwindow.com")],
  "右蹬脚": [ref("https://nwfighting.com/yang-24-form-tai-chi-movement-kick-right-heel/", "Yang 24 Form – Tai Chi Movement: Kick With Right Heel", "nwfighting.com", "© nwfighting.com")],
  "右分脚": [ref("https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/", "Separate Foot, Left and Right", "sanctuaryoftao.org", "© sanctuaryoftao.org")],
  "单鞭下势": [
    img('/media/postures/single-whip-low.webp', "Single Whip — Low Posture — Serpiente se arrastra", "Yanira Masich", 'commons.wikimedia.org', "CC BY-SA 4.0"),
    ref("https://nwfighting.com/yang-24-form-tai-chi-movement-dragon-waves-tail/", "Yang 24 Form – Tai Chi Movement: Dragon Waves It's Tail (Snake Creeps Down / Single Whip Low Posture)", "nwfighting.com", "© nwfighting.com"),
  ],
  "左分脚": [ref("https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/", "Separate Foot, Left and Right", "sanctuaryoftao.org", "© sanctuaryoftao.org")],
  "转身白蛇吐信": [ref("https://thetaichinotebook.com/2024/01/20/tai-chi-applications-needle-at-sea-bottom-fan-through-back-white-snake-spits-out-tongue-torso-flung-punch/", "Tai Chi Applications: Needle at Sea Bottom, Fan through back, White Snake Spits out Tongue + Torso-Flung punch", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "左蹬脚": [ref("http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html", "Single Whip, High Pat on Horse, Kick Outs, Double Punch (Front/Back View)", "everydaytaichi.org", "© everydaytaichi.org")],
  "闪通臂": [ref("https://kitrain.com/courses/tai-chi-yang-24/lessons/16-fan-through-the-back/", "16. Fan Through the Back", "kitrain.com", "© kitrain.com")],
  "青龙出水": [ref("https://bigbangtaiji.wordpress.com/2015/04/02/green-dragon-emerges-from-water/", "Green Dragon Emerges From Water (Qing Long Chu Shui)", "bigbangtaiji.wordpress.com", "© bigbangtaiji.wordpress.com")],
  "斜行拗步": [ref("https://thetaichinotebook.com/2019/03/25/brush-knee-twist-step-tai-chi-application-and-style-comparison/", "Brush Knee Twist Step: Tai Chi application and style comparison", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "预备势": [ref("https://yorkshiretaichi.uk/fastform1-preparation-form/", "Preparation Form, 预备式, yu bei shi (Wu style fast form)", "yorkshiretaichi.uk", "© yorkshiretaichi.uk")],
  "搂膝": [ref("https://practicalmethod.com/2017/03/brush-the-knee-in-oblique-stance-lou-xi-ao-bu-toronto-north-york-taiji-class-on-march-24-2017/", "Brush the Knee in Oblique Stance (Lou Xi Ao Bu) - Practical Method class notes", "practicalmethod.com", "© practicalmethod.com")],
  "双推手": [ref("https://practicalmethod.com/2007/03/yilu-18-step-forward-and-double-handed-push/", "Yilu 18. Step Forward and Double-Handed Push", "practicalmethod.com", "© practicalmethod.com")],
  "翻身二起脚": [ref("https://practicalmethod.com/2007/03/yilu-36-turn-over-body-and-double-kick-er-qi-jiao/", "Yilu: 36. Turn Over Body and Double Kick (Er Qi Jiao)", "practicalmethod.com", "© practicalmethod.com")],
  "捋挤式": [ref("https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/", "#MartialMonday 4 – Bend the Bow to Shoot the Tiger", "taiji-forum.com", "© taiji-forum.com")],
  "抱虎推山": [ref("https://balancedlifetaichi.com/blog/what-is-embrace-tiger-return-to-mountain-yang-all-about", "What is Embrace Tiger Return to Mountain (Yang) All About? - Balanced Life Tai Chi", "balancedlifetaichi.com", "© balancedlifetaichi.com")],
  "肘底看捶": [ref("https://thetaichinotebook.com/2017/03/02/fist-under-elbow-and-natural-posture/", "Fist Under Elbow, and natural posture | The Tai Chi Notebook", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "左打虎势": [ref("http://discuss.yangfamilytaichi.com/viewtopic.php?t=840", "Changes to the Strike Tiger forms - Yang Family Tai Chi Discussion Board", "discuss.yangfamilytaichi.com", "© discuss.yangfamilytaichi.com")],
  "右打虎势": [ref("http://discuss.yangfamilytaichi.com/viewtopic.php?t=840", "Changes to the Strike Tiger forms - Yang Family Tai Chi Discussion Board", "discuss.yangfamilytaichi.com", "© discuss.yangfamilytaichi.com")],
  "左右穿梭": [ref("https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners", "Fair lady weaves at shuttles - four corners — Blackwater Tai Chi", "blackwatertaichi.com", "© blackwatertaichi.com")],
  "转身摆莲脚": [ref("https://www.egreenway.com/taichichuan/sun73.htm", "Sun Taijiquan, International Standard Competition 73 Movements Form (covers Movement 69: Turn Body, Swinging Lotus Kick / Zhuan Shen Bai Lian)", "egreenway.com", "© egreenway.com")],
  "云手（向右）": [ref("https://earthbalance-taichi.com/2013/10/chen-taiji-cloud-hands/", "Chen Taiji Cloud Hands (Yun Shou)", "earthbalance-taichi.com", "© earthbalance-taichi.com")],
  "云手（快步）": [ref("https://earthbalance-taichi.com/2013/10/chen-taiji-cloud-hands/", "Chen Taiji Cloud Hands (Yun Shou)", "earthbalance-taichi.com", "© earthbalance-taichi.com")],
  "金刚捣碓、收势": [ref("https://chenscotland.wordpress.com/2010/09/22/what-is-a-jin-gang/", "What is a \"Jin Gang\"? — Chen Tai Chi Scotland", "chenscotland.wordpress.com", "© chenscotland.wordpress.com")],
  "铺地锦": [
    img('/media/postures/spread-brocade-ground.webp', "Earth Dragon (Snake Creeps Down) — Dfw snake creaps", "Clftruthseeking", 'commons.wikimedia.org', "Public domain"),
    ref("https://www.taijiworld.com/tai-chi-posture.html", "Snake Creeps Down Tai Chi Posture", "taijiworld.com", "© taijiworld.com"),
  ],
  "下步跨虎": [ref("https://thetaichinotebook.com/2024/04/04/retreat-to-ride-tiger/", "Retreat to Ride Tiger", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "提手": [ref("https://classicaltaichi.blogspot.com/2011/05/ti-shou-shang-shi-2-raise-hands.html", "Ti Shou Shang Shi - Raise Hands", "classicaltaichi.blogspot.com", "© classicaltaichi.blogspot.com")],
  "左右玉女穿梭": [ref("https://www.everydaytaichi.org/maiden-working-the-shuttles.html", "Maiden Working the Shuttles", "everydaytaichi.org", "© everydaytaichi.org")],
  "斜飞式": [ref("https://www.sam-ma.com/blog/tai-chi-long-form-diagonal-flying", "Tai Chi Long Form - Diagonal Flying", "sam-ma.com", "© sam-ma.com")],
  "如封似闭·收势": [ref("https://www.everydaytaichi.org/apparent-closing.html", "Apparent Closing", "everydaytaichi.org", "© everydaytaichi.org")],
  "右起脚": [ref("https://www.egreenway.com/taichichuan/sun73.htm", "Sun Taijiquan 73 Movements Form (movement #33, Right Toes/Separation Kick)", "egreenway.com", "© egreenway.com")],
  "左起脚": [ref("https://www.egreenway.com/taichichuan/sun73.htm", "Sun Taijiquan 73 Movements Form (movement #32, Left Toes/Separation Kick)", "egreenway.com", "© egreenway.com")],
  "翻身二起": [ref("https://www.egreenway.com/taichichuan/sun73.htm", "Sun Taijiquan 73 Movements Form (movement #35, Turn Over Body and Double Jump Kick)", "egreenway.com", "© egreenway.com")],
  "玉女穿梭（一）": [ref("https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners", "Fair lady weaves at shuttles - four corners — Blackwater Tai Chi", "blackwatertaichi.com", "© blackwatertaichi.com")],
  "玉女穿梭（二）": [ref("https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners", "Fair lady weaves at shuttles - four corners — Blackwater Tai Chi", "blackwatertaichi.com", "© blackwatertaichi.com")],
  "玉女穿梭（三）": [ref("https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners", "Fair lady weaves at shuttles - four corners — Blackwater Tai Chi", "blackwatertaichi.com", "© blackwatertaichi.com")],
  "玉女穿梭（四）": [ref("https://balancedlifetaichi.com/blog/fair-lady-works-shuttles-yang-style-tai-chi", "Fair Lady Works Shuttles - Yang Style Tai Chi", "balancedlifetaichi.com", "© balancedlifetaichi.com")],
  "横单鞭": [ref("https://thetaichinotebook.com/2011/06/03/single-whip-dan-bian/", "Single Whip – 'Dan Bian'", "thetaichinotebook.com", "© thetaichinotebook.com")],
  "左右揽扎衣": [ref("http://www.tcmwindow.com/taiji/Illustrations/movements/Lazy-About-Tying-Coat-in-form-of-Chen-Style-Taiji.shtml", "Lazy About Tying Coat in form of Chen Style Taiji (with image)", "tcmwindow.com", "© tcmwindow.com")],
  "左右分脚": [ref("https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/", "Separate Foot, Left and Right", "portal.sanctuaryoftao.org", "© portal.sanctuaryoftao.org")],
  "预备起势": [ref("https://www.egreenway.com/taichichuan/TY1.htm", "Opening Posture of Taijiquan: Wuji, Standing, Raising and Lowering Hands (Qishi / Yu Bei)", "egreenway.com", "© egreenway.com")],
  "左下势独立": [ref("https://www.everydaytaichi.org/serpent-in-the-grass-golden-cockerel.html", "Serpent in the Grass, Golden Cockerel (Snake Creeps Down / Golden Rooster Stands on One Leg) - Everyday Taichi", "everydaytaichi.org", "© everydaytaichi.org")],
  "十字手收势": [ref("http://www.everydaytaichi.org/cross-hands.html", "Cross Hands - Everyday Taichi (Yang 24 Movements)", "everydaytaichi.org", "© everydaytaichi.org")],
  "预备势 / 起势": [ref("https://www.egreenway.com/taichichuan/TY1.htm", "Opening Posture of Taijiquan: Wuji, Raise Hands and Lower Hands", "egreenway.com", "© egreenway.com")],
  "回身右蹬脚": [ref("https://nwfighting.com/yang-24-form-tai-chi-movement-kick-right-heel/", "Yang 24 Form – Tai Chi Movement: Kick With Right Heel", "nwfighting.com", "© nwfighting.com")],
  "弯弓射虎 / 收势": [ref("https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/", "#MartialMonday 4 – Bend the Bow to Shoot the Tiger", "taiji-forum.com", "© taiji-forum.com")],
};
// ---------------------------------------------------------------------------
// Yang Chengfu form-chart clips. Cropped from a single CC BY 3.0 montage on
// Wikimedia (File:Yang_Chengfu_Form.jpg, © Matthias Wagner) and SEQUENCE-MAPPED
// to postures by form order, so each cell-to-posture assignment is APPROXIMATE
// (captioned "position approx."). Kept separate and merged in lookupPostureMedia
// so they augment existing per-posture media rather than replacing it.
// ---------------------------------------------------------------------------
const MONTAGE_IMAGES: Record<string, MediaSource> = {
"预备势": img('/media/postures/yc-preparation-beginning.webp', "Preparation / Beginning — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "提手上势": img('/media/postures/yc-raise-hands-and-step-up.webp', "Raise Hands and Step Up — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "白鹤亮翅": img('/media/postures/yc-white-crane-spreads-its-wings.webp', "White Crane Spreads Its Wings — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "左搂膝拗步": img('/media/postures/yc-brush-knee-and-twist-step-left.webp', "Brush Knee and Twist Step (Left) — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "手挥琵琶": img('/media/postures/yc-hands-strum-the-lute.webp', "Hands Strum the Lute — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "搂膝拗步": img('/media/postures/yc-brush-knee-and-twist-step.webp', "Brush Knee and Twist Step — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "进步搬拦捶": img('/media/postures/yc-step-forward-deflect-parry-and-p.webp', "Step Forward, Deflect, Parry and Punch — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "如封似闭": img('/media/postures/yc-apparent-close-up-withdraw-and-p.webp', "Apparent Close-Up / Withdraw and Push — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "十字手": img('/media/postures/yc-cross-hands.webp', "Cross Hands — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "抱虎归山": img('/media/postures/yc-embrace-tiger-return-to-mountain.webp', "Embrace Tiger, Return to Mountain — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "肘底捶": img('/media/postures/yc-fist-under-elbow.webp', "Fist Under Elbow — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "倒撵猴": img('/media/postures/yc-step-back-and-repulse-the-monkey.webp', "Step Back and Repulse the Monkey — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "海底针": img('/media/postures/yc-needle-at-sea-bottom.webp', "Needle at Sea Bottom — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "扇通背": img('/media/postures/yc-fan-through-the-back.webp', "Fan Through the Back — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "撇身捶": img('/media/postures/yc-turn-body-chop-and-punch.webp', "Turn Body, Chop and Punch — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "云手": img('/media/postures/yc-cloud-hands.webp', "Cloud Hands — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "高探马": img('/media/postures/yc-high-pat-on-horse.webp', "High Pat on Horse — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "右分脚": img('/media/postures/yc-separate-right-foot.webp', "Separate Right Foot — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "左分脚": img('/media/postures/yc-separate-left-foot.webp', "Separate Left Foot — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "转身左蹬脚": img('/media/postures/yc-turn-and-kick-with-left-heel.webp', "Turn and Kick with Left Heel — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "左右搂膝拗步": img('/media/postures/yc-brush-knee-and-twist-step-left-a.webp', "Brush Knee and Twist Step (Left and Right) — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "进步栽捶": img('/media/postures/yc-step-forward-and-punch-down.webp', "Step Forward and Punch Down — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "右蹬脚": img('/media/postures/yc-kick-with-right-heel.webp', "Kick with Right Heel — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "双峰贯耳": img('/media/postures/yc-strike-opponent-s-ears-with-both.webp', "Strike Opponent’s Ears with Both Fists — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "转身右蹬脚": img('/media/postures/yc-turn-body-and-kick-with-right-he.webp', "Turn Body and Kick with Right Heel — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "野马分鬃": img('/media/postures/yc-partition-of-the-wild-horse-s-ma.webp', "Partition of the Wild Horse’s Mane — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "玉女穿梭": img('/media/postures/yc-fair-lady-works-the-shuttles.webp', "Fair Lady Works the Shuttles — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "右金鸡独立": img('/media/postures/yc-golden-rooster-stands-on-one-leg.webp', "Golden Rooster Stands on One Leg (Right) — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "左金鸡独立": img('/media/postures/yc-golden-rooster-stands-on-one-leg.webp', "Golden Rooster Stands on One Leg (Left) — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "转身白蛇吐信": img('/media/postures/yc-turn-body-white-snake-spits-out-.webp', "Turn Body, White Snake Spits Out Tongue — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "穿掌": img('/media/postures/yc-palm-thrust-cross-hands-and-thru.webp', "Palm Thrust / Cross Hands and Thrust Palm — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "搂膝指裆捶": img('/media/postures/yc-brush-knee-and-punch-opponent-s-.webp', "Brush Knee and Punch Opponent’s Groin — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "上步七星": img('/media/postures/yc-step-forward-to-seven-stars.webp', "Step Forward to Seven Stars — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "退步跨虎": img('/media/postures/yc-step-back-to-ride-the-tiger.webp', "Step Back to Ride the Tiger — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "转身摆莲": img('/media/postures/yc-turn-body-and-sweep-lotus.webp', "Turn Body and Sweep Lotus — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "弯弓射虎": img('/media/postures/yc-bend-the-bow-and-shoot-the-tiger.webp', "Bend the Bow and Shoot the Tiger — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
  "收势": img('/media/postures/yc-closing-of-tai-chi-return-to-ori.webp', "Closing of Tai Chi / Return to Origin — Yang Chengfu form chart (position approx.)", 'Matthias Wagner', 'commons.wikimedia.org', 'CC BY 3.0'),
};


// ---------------------------------------------------------------------------
// Hanzi normalization: map directional / stepping variants of a posture onto a
// single base key so e.g. 左右野马分鬃 / 左野马分鬃 / 右野马分鬃 all resolve to
// 野马分鬃. We only strip a leading qualifier if the remainder is a key we
// actually have media for, so we never over-merge distinct postures.
// ---------------------------------------------------------------------------
const PREFIXES = [
  '左右', '转身', '进步', '退步', '上步', '回身', '翻身', '跳步', '践步',
  '太极', '左', '右', '斜',
];

function resolveKey(hanzi: string): string | null {
  const has = (k: string) => k in POSTURE_MEDIA || k in MONTAGE_IMAGES;
  if (has(hanzi)) return hanzi;
  // Drop a trailing full-width parenthetical qualifier: 云手（左） → 云手.
  let s = hanzi.replace(/（[^）]*）/g, "");
  if (s !== hanzi && has(s)) return s;
  // Iteratively peel known leading qualifiers, checking for a hit each time.
  let changed = true;
  while (changed) {
    changed = false;
    for (const p of PREFIXES) {
      if (s.length > p.length && s.startsWith(p)) {
        const rest = s.slice(p.length);
        if (has(rest)) return rest;
        s = rest;
        changed = true;
        break;
      }
    }
  }
  return has(s) ? s : null;
}

function lookupPostureMedia(hanzi: string): MediaSource[] {
  const key = resolveKey(hanzi);
  if (!key) return [];
  // Image(s) first so attachMedia picks one as media.image and the gallery
  // renders it above the reference links.
  const montage = MONTAGE_IMAGES[key] ? [MONTAGE_IMAGES[key]] : [];
  return [...montage, ...(POSTURE_MEDIA[key] ?? [])];
}

// Per-posture clip bounds from a single chaptered demo video. Embedded (never
// downloaded) with ?start=&end= so the player is scoped to that posture's segment.
// Timestamps are the video author's own chapter markers. Add a form here when a
// demo video has reliable per-posture chapters (run yt-dlp's %(chapters)j).
export const SEGMENT_VIDEOS: Record<
  string,
  { videoId: string; title: string; author: string; bySeq: Record<number, [number, number]> }
> = {
  yang24: {
    videoId: 'FUpeJ3Bkr9o',
    title: 'Yang 24 Form — full set, back view with verbal cues',
    author: 'Jenny Lu Yoga+',
    bySeq: { 1: [24, 51], 2: [51, 81], 3: [81, 88], 4: [88, 112], 5: [112, 119], 6: [119, 142], 7: [142, 160], 8: [160, 181], 9: [181, 191], 10: [191, 208], 11: [208, 215], 12: [215, 221], 13: [221, 231], 14: [231, 237], 15: [237, 247], 16: [247, 266], 17: [266, 287], 18: [287, 306], 19: [306, 313], 20: [313, 320], 21: [320, 336], 22: [336, 347], 23: [347, 360], 24: [360, 380] },
  },
};

/** Bounded "this posture" clip from the form's chaptered demo, or null. */
function segmentClip(formId: string, seq: number): MediaSource | null {
  const f = SEGMENT_VIDEOS[formId];
  const seg = f?.bySeq[seq];
  if (!f || !seg) return null;
  return {
    kind: 'video',
    url: `https://www.youtube.com/watch?v=${f.videoId}`,
    title: f.title,
    author: f.author,
    source: 'YouTube',
    license: '© respective channel — embedded clip, linked for private reference',
    start: seg[0],
    end: seg[1],
    note: 'this posture',
  };
}

/**
 * Return a fresh FormData with every posture's `sources` and `media.{image,
 * video}` populated from the shared library: posture-specific resources first,
 * then this posture's bounded clip, then the form's routine videos (tagged
 * `formLevel`). Pure — never mutates the input dataset (module singletons).
 */
export function attachMedia(formId: string, data: FormData): FormData {
  const formVideos = (FORM_MEDIA[formId] ?? []).map((s) => ({ ...s, formLevel: true }));
  const postures: Posture[] = data.postures.map((p) => {
    const own = lookupPostureMedia(p.names.zh_hans);
    const clip = segmentClip(formId, p.seq);
    // Clip before the whole-form videos so it becomes this posture's primary video.
    const sources = [...own, ...(clip ? [clip] : []), ...formVideos];
    const firstImage = own.find((s) => s.kind === 'image');
    const firstVideo = sources.find((s) => s.kind === 'video');
    return {
      ...p,
      sources,
      media: {
        ...p.media,
        image: p.media.image ?? firstImage?.url ?? null,
        video: p.media.video ?? firstVideo?.url ?? null,
      },
    };
  });
  return { ...data, postures };
}
