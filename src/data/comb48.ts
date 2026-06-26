import type { FormData } from '../types';

// 48-Posture Combined Taijiquan (四十八式太极拳), compiled in 1976 by the Chinese
// Sports Commission (Men Huifeng and colleagues). Predominantly Yang-style in
// flavour but deliberately combines movements from the Chen, Wu and Sun
// families to give intermediate practitioners a richer routine than the 24.
// The official routine is fixed and arranged in six sections (段); here they are
// grouped into four display parts that cover all 48 postures contiguously.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'comb48',
    name: {
      en: '48-Posture Combined Taijiquan',
      sv: '48-positioners kombinerad taijiquan',
      zh_pinyin: 'Sìshíbā Shì Tàijíquán',
      zh_hans: '四十八式太极拳',
    },
    parts: [
      {
        id: 'P1',
        label: {
          en: 'Part I: Opening (Sections 1–2)',
          sv: 'Del I: Öppning (avsnitt 1–2)',
          zh_pinyin: 'Dì Yī Èr Duàn',
          zh_hans: '第一、二段',
        },
        range: [1, 12],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Kicks & Cloud Hands (Sections 3–4)',
          sv: 'Del II: Sparkar & molnhänder (avsnitt 3–4)',
          zh_pinyin: 'Dì Sān Sì Duàn',
          zh_hans: '第三、四段',
        },
        range: [13, 25],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Family Blend (Section 5)',
          sv: 'Del III: Stilblandning (avsnitt 5)',
          zh_pinyin: 'Dì Wǔ Duàn',
          zh_hans: '第五段',
        },
        range: [26, 37],
      },
      {
        id: 'P4',
        label: {
          en: 'Part IV: Shuttles & Closing (Section 6)',
          sv: 'Del IV: Skyttlar & avslutning (avsnitt 6)',
          zh_pinyin: 'Dì Liù Duàn',
          zh_hans: '第六段',
        },
        range: [38, 50],
      },
    ],
  },
  milestones: [
    { label: "Start", seq: 1 },
    { label: "Play the", seq: 13 },
    { label: "Heel Kick", seq: 26 },
    { label: "Empty Step", seq: 38 },
    { label: 'Closing', seq: 50 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: "Commencing Form",
        sv: "Inledande form",
        zh_pinyin: "Qǐshì",
        zh_hans: '起势',
      },
      description: {
        en: "From a natural standing posture, raise both arms forward to shoulder height, then sink the elbows and press the palms down as the knees soften into a slight squat.",
        sv: "Från naturligt stående, lyft båda armarna framåt till axelhöjd, sänk sedan armbågarna och tryck handflatorna nedåt medan knäna mjuknar till en lätt böjning.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "White Crane Spreads Its Wings",
        sv: "Vit trana sprider vingarna",
        zh_pinyin: "Bái hè liàng chì",
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: "Shift into a left empty stance as the right palm lifts and spreads to the upper right while the left palm presses down beside the hip, opening the body like a crane.",
        sv: "Skifta till en vänster tomställning medan höger handflata lyfter och sprider sig uppåt höger samtidigt som vänster handflata trycker ned vid höften, och öppnar kroppen som en trana.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Brush Knee and Twist Step (Left)",
        sv: "Borsta knät och vrid steget (vänster)",
        zh_pinyin: "Zuǒ lōu xī ǎo bù",
        zh_hans: '左搂膝拗步',
      },
      description: {
        en: "The left hand sweeps across to brush past the left knee while the right palm pushes forward at shoulder height, settling into a left bow stance.",
        sv: "Vänster hand sveper tvärs över för att borsta förbi vänster knä medan höger handflata trycker framåt i axelhöjd, och sätter sig i en vänster bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: "Single Whip (Left)",
        sv: "Enkelt piskslag (vänster)",
        zh_pinyin: "Zuǒ dān biān",
        zh_hans: '左单鞭',
      },
      description: {
        en: "The right hand forms a hooked beak pulling to the rear while the left palm pushes out to the side in a wide bow stance, the arms extended like a stretched whip.",
        sv: "Höger hand formar en krok som drar bakåt medan vänster handflata trycker ut åt sidan i en bred bågställning, armarna utsträckta som en spänd piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: "Play the Lute (Left)",
        sv: "Spela luta (vänster)",
        zh_pinyin: "Zuǒ pí pá shì",
        zh_hans: '左琵琶势',
      },
      description: {
        en: "Draw the right foot into an empty stance while both hands close in front, the left hand forward and the right hand below, as if cradling and plucking a lute.",
        sv: "Dra in höger fot till en tomställning medan båda händerna sluts framför, vänster hand fram och höger hand under, som om man höll och knäppte på en luta.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: "Roll Back and Press (Three Times)",
        sv: "Rulla tillbaka och pressa (tre gånger)",
        zh_pinyin: "Lǚ jǐ shì (sān)",
        zh_hans: '捋挤势（三）',
      },
      description: {
        en: "Roll back diagonally to neutralize, then turn and press the forearm forward with the other palm backing it, repeating the deflect-and-press to alternating corners three times.",
        sv: "Rulla tillbaka diagonalt för att neutralisera, vrid sedan och pressa underarmen framåt med den andra handflatan bakom, och upprepa avvärj-och-pressa till växlande hörn tre gånger.",
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Deflect, Parry and Punch (Left)",
        sv: "Avled, parera och slå (vänster)",
        zh_pinyin: "Zuǒ bān lán chuí",
        zh_hans: '左搬拦捶',
      },
      description: {
        en: "Deflect with the fist, parry across with the open palm, then step in and drive a forward punch with the right fist into a left bow stance.",
        sv: "Avled med näven, parera tvärs med öppen handflata, kliv sedan in och driv en framåtriktad stöt med höger näve in i en vänster bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "Ward Off, Roll Back, Press and Push (Left)",
        sv: "Avvärja, rulla tillbaka, pressa och trycka (vänster)",
        zh_pinyin: "Zuǒ pīng lǚ jǐ àn",
        zh_hans: '左掤捋挤按',
      },
      description: {
        en: "The signature four-energy sequence to the left: ward-off (peng), roll-back (lü), press (ji) and push (an), flowing into a left bow stance.",
        sv: "Den karakteristiska fyrenergisekvensen åt vänster: avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), in i en vänster bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: "Oblique Body Shoulder Stroke",
        sv: "Snett kroppsstöt med axeln",
        zh_pinyin: "Xié shēn kào",
        zh_hans: '斜身靠',
      },
      description: {
        en: "Turn the body diagonally and crossing the arms in front, lean the shoulder and upper arm outward to deliver a shoulder stroke in a bow stance.",
        sv: "Vrid kroppen diagonalt och korsa armarna framför, luta axeln och överarmen utåt för att leverera en axelstöt i en bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: "Fist Under Elbow",
        sv: "Näve under armbågen",
        zh_pinyin: "Zhǒu dǐ chuí",
        zh_hans: '肘底捶',
      },
      description: {
        en: "Shift into a left empty stance with the left palm raised edge-forward while the right fist tucks in beneath the left elbow, ready to strike.",
        sv: "Skifta till en vänster tomställning med vänster handflata höjd med kanten framåt medan höger näve gömmer sig under vänster armbåge, redo att slå.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Step Back and Whirl Arms on Both Sides (Four Times)",
        sv: "Kliv bakåt och rulla armarna (fyra gånger)",
        zh_pinyin: "Dào juǎn gōng (sì)",
        zh_hans: '倒卷肱（四）',
      },
      description: {
        en: "Step back repeatedly while one palm withdraws spiraling past the ear and pushes forward as the other draws back, whirling the arms on both sides four times.",
        sv: "Kliv bakåt upprepade gånger medan en handflata dras tillbaka spiralande förbi örat och trycker framåt medan den andra dras bakåt, och virvlar armarna på båda sidor fyra gånger.",
      },
      tags: ['hand-deflection', 'repetitive', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: "Turn Body and Push Palm (Four Times)",
        sv: "Vrid kroppen och tryck handflatan (fyra gånger)",
        zh_pinyin: "Zhuǎn shēn tuī zhǎng (sì)",
        zh_hans: '转身推掌（四）',
      },
      description: {
        en: "Pivot the body around on the heel, brush down past the knee, and push the palm forward into a drop stance, repeating the turn and push four times.",
        sv: "Pivotera kroppen runt på hälen, borsta ned förbi knät och tryck handflatan framåt i en sänkställning, och upprepa vridningen och trycket fyra gånger.",
      },
      tags: ['transition', 'strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: "Play the Lute (Right)",
        sv: "Spela luta (höger)",
        zh_pinyin: "Yòu pí pá shì",
        zh_hans: '右琵琶势',
      },
      description: {
        en: "Draw the left foot into an empty stance while both hands close in front, the right hand forward and the left hand below, as if cradling and plucking a lute.",
        sv: "Dra in vänster fot till en tomställning medan båda händerna sluts framför, höger hand fram och vänster hand under, som om man höll och knäppte på en luta.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: "Brush Knee and Punch Downward",
        sv: "Borsta knät och slå nedåt",
        zh_pinyin: "Lōu xī zāi chuí",
        zh_hans: '搂膝栽捶',
      },
      description: {
        en: "Brush the left hand past the knee while the right fist drives downward and forward in a planting punch, settling into a left bow stance.",
        sv: "Borsta vänster hand förbi knät medan höger näve driver nedåt och framåt i en planterande stöt, och sätter sig i en vänster bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: "White Snake Spits Out Its Tongue (Twice)",
        sv: "Vit orm spottar ut tungan (två gånger)",
        zh_pinyin: "Bái shé tǔ xìn (èr)",
        zh_hans: '白蛇吐信（二）',
      },
      description: {
        en: "Turn and flick the palm forward at throat height like a snake's darting tongue, withdrawing and thrusting the flat hand twice in succession.",
        sv: "Vrid och snärta handflatan framåt i halshöjd som en orms framstickande tunga, och dra tillbaka och stöt den platta handen två gånger i följd.",
      },
      tags: ['strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: "Slap Foot and Subdue the Tiger (Twice)",
        sv: "Slå mot foten och kuva tigern (två gånger)",
        zh_pinyin: "Pāi jiǎo fú hǔ (èr)",
        zh_hans: '拍脚伏虎（二）',
      },
      description: {
        en: "Slap the raised toes with the palm, then step across and form low guarding fists in a bow stance to subdue the tiger, repeating to both sides.",
        sv: "Slå mot de upplyfta tårna med handflatan, kliv sedan tvärs över och forma låga skyddande nävar i en bågställning för att kuva tigern, och upprepa åt båda sidor.",
      },
      tags: ['kick', 'strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: "Throw Body and Punch (Left)",
        sv: "Kasta kroppen och slå (vänster)",
        zh_pinyin: "Zuǒ piē shēn chuí",
        zh_hans: '左撇身捶',
      },
      description: {
        en: "Turn the body and throw the left back-fist outward over the lead leg while the other hand supports, snapping the punch in a bow stance.",
        sv: "Vrid kroppen och kasta vänster baknäve utåt över det främre benet medan den andra handen stödjer, och snärtar slaget i en bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: "Thrust Fist and Push Down",
        sv: "Stöt med näven och sänk dig",
        zh_pinyin: "Chuān quán xià shì",
        zh_hans: '穿拳下势',
      },
      description: {
        en: "Sink onto the bent leg into a low crouch stance while threading the fist forward and downward along the inside of the extended front leg.",
        sv: "Sjunk ned på det böjda benet till en låg hukställning medan näven träs framåt och nedåt längs insidan av det utsträckta främre benet.",
      },
      tags: ['stance', 'strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Stand on One Leg and Prop Up Palm (Twice)",
        sv: "Stå på ett ben och stötta handflatan (två gånger)",
        zh_pinyin: "Dú lì chēng zhǎng (èr)",
        zh_hans: '独立撑掌（二）',
      },
      description: {
        en: "Rise onto one leg with the opposite knee lifted high while one palm props upward overhead, alternating the standing leg and propping hand twice.",
        sv: "Res dig på ett ben med det motsatta knät högt lyft medan en handflata stöttar uppåt ovanför huvudet, och växlar ståben och stöttande hand två gånger.",
      },
      tags: ['stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: "Single Whip (Right)",
        sv: "Enkelt piskslag (höger)",
        zh_pinyin: "Yòu dān biān",
        zh_hans: '右单鞭',
      },
      description: {
        en: "The left hand forms a hooked beak pulling to the rear while the right palm pushes out to the side in a wide bow stance, the arms extended like a stretched whip.",
        sv: "Vänster hand formar en krok som drar bakåt medan höger handflata trycker ut åt sidan i en bred bågställning, armarna utsträckta som en spänd piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: "Cloud Hands (Right, Three Times)",
        sv: "Molnhänder (höger, tre gånger)",
        zh_pinyin: "Yòu yún shǒu (sān)",
        zh_hans: '右云手（三）',
      },
      description: {
        en: "Step sideways to the right while the hands circle vertically in front of the body, one rising past the face as the other sinks, repeating the cloud motion three times.",
        sv: "Kliv i sidled åt höger medan händerna cirklar lodrätt framför kroppen, en stiger förbi ansiktet medan den andra sjunker, och upprepar molnrörelsen tre gånger.",
      },
      tags: ['cloud-hands', 'hand-deflection', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: "Part the Wild Horse's Mane (Right and Left)",
        sv: "Dela vildhästens man (höger och vänster)",
        zh_pinyin: "Yòu zuǒ fēn zōng",
        zh_hans: '右左分鬃',
      },
      description: {
        en: "Step forward and split the arms apart diagonally, one palm slicing upward and outward while the other presses down, alternating right and left in bow stances.",
        sv: "Kliv framåt och dela armarna isär diagonalt, en handflata skär uppåt och utåt medan den andra trycker ned, och växlar höger och vänster i bågställningar.",
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: "High Pat on Horse",
        sv: "Hög klappning på hästen",
        zh_pinyin: "Gāo tàn mǎ",
        zh_hans: '高探马',
      },
      description: {
        en: "Draw the rear foot up into an empty stance while the right palm pushes forward at face height and the left hand withdraws to the waist.",
        sv: "Dra upp den bakre foten till en tomställning medan höger handflata trycker framåt i ansiktshöjd och vänster hand dras tillbaka till midjan.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: "Heel Kick (Right)",
        sv: "Hälspark (höger)",
        zh_pinyin: "Yòu dēng jiǎo",
        zh_hans: '右蹬脚',
      },
      description: {
        en: "Open the crossed wrists apart and thrust the right heel out to the front-right, the foot flexed and the arms extended in balance.",
        sv: "Öppna de korsade handlederna isär och stöt höger häl ut mot framsidan-höger, foten flexerad och armarna utsträckta i balans.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: "Strike Opponent's Ears with Both Fists",
        sv: "Slå mot motståndarens öron med båda nävarna",
        zh_pinyin: "Shuāng fēng guàn ěr",
        zh_hans: '双峰贯耳',
      },
      description: {
        en: "Lower the kicking foot into a bow stance while both fists swing up and around in arcs to strike toward the opponent's ears like two peaks closing.",
        sv: "Sänk sparkfoten till en bågställning medan båda nävarna svingar upp och runt i bågar för att slå mot motståndarens öron som två toppar som möts.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: "Heel Kick (Left)",
        sv: "Hälspark (vänster)",
        zh_pinyin: "Zuǒ dēng jiǎo",
        zh_hans: '左蹬脚',
      },
      description: {
        en: "Open the crossed wrists apart and thrust the left heel out to the front-left, the foot flexed and the arms extended in balance.",
        sv: "Öppna de korsade handlederna isär och stöt vänster häl ut mot framsidan-vänster, foten flexerad och armarna utsträckta i balans.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: "Hide Hand and Thrust Fist",
        sv: "Dölj handen och stöt näven",
        zh_pinyin: "Yǎn shǒu liáo quán",
        zh_hans: '掩手撩拳',
      },
      description: {
        en: "A Chen-style explosive movement: coil and store energy, then hide one hand back to the waist and snap the right fist forward with a sudden fa-jin release.",
        sv: "En Chen-rörelse med explosiv kraft: spola upp och lagra energi, dölj sedan en hand bak vid midjan och snärta höger näve framåt med en plötslig fa-jin-urladdning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: "Needle at Sea Bottom",
        sv: "Nål på havets botten",
        zh_pinyin: "Hǎi dǐ zhēn",
        zh_hans: '海底针',
      },
      description: {
        en: "Shift into a left empty stance and bend forward, stabbing the right fingertips downward toward the ground as the left hand guards.",
        sv: "Skifta till en vänster tomställning och böj framåt, och stick höger fingertoppar nedåt mot marken medan vänster hand vaktar.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: "Fan Through the Back",
        sv: "Fläkt genom ryggen",
        zh_pinyin: "Shǎn tōng bèi",
        zh_hans: '闪通背',
      },
      description: {
        en: "Step forward into a bow stance, raising the right hand to brace overhead while the left palm pushes forward, the arms spreading open like a fan.",
        sv: "Kliv framåt till en bågställning, lyft höger hand för att stötta ovanför huvudet medan vänster handflata trycker framåt, armarna sprids öppna som en solfjäder.",
      },
      tags: ['strike', 'stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: "Toe Kick (Right and Left)",
        sv: "Tåspark (höger och vänster)",
        zh_pinyin: "Yòu zuǒ fēn jiǎo",
        zh_hans: '右左分脚',
      },
      description: {
        en: "Open the crossed wrists and snap the toes out diagonally to the front, kicking with the right then the left foot in turn.",
        sv: "Öppna de korsade handlederna och snärta tårna ut diagonalt framåt, och sparka med höger sedan vänster fot i tur och ordning.",
      },
      tags: ['kick', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: "Brush Knee and Twist Step (Twice)",
        sv: "Borsta knät och vrid steget (två gånger)",
        zh_pinyin: "Lōu xī ǎo bù (èr)",
        zh_hans: '搂膝拗步（二）',
      },
      description: {
        en: "Brush the hand past the knee while the opposite palm pushes forward at shoulder height in a bow stance, alternating left and right twice.",
        sv: "Borsta handen förbi knät medan den motsatta handflatan trycker framåt i axelhöjd i en bågställning, och växlar vänster och höger två gånger.",
      },
      tags: ['hand-deflection', 'strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 32,
      names: {
        en: "Step Forward, Grasp and Strike",
        sv: "Kliv fram, grip och slå",
        zh_pinyin: "Shàng bù qín dǎ",
        zh_hans: '上步擒打',
      },
      description: {
        en: "Step forward while one hand grasps and pulls down as the other fist drives a straight punch ahead into a bow stance.",
        sv: "Kliv framåt medan en hand griper och drar ned medan den andra näven driver en rak stöt framåt in i en bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: "Apparent Close-Up",
        sv: "Skenbar stängning",
        zh_pinyin: "Rú fēng sì bì",
        zh_hans: '如封似闭',
      },
      description: {
        en: "Withdraw and cross the forearms to neutralize, separate the hands, then settle back and push both palms forward into a bow stance.",
        sv: "Dra tillbaka och korsa underarmarna för att neutralisera, separera händerna, sätt dig sedan tillbaka och tryck båda handflatorna framåt in i en bågställning.",
      },
      tags: ['hand-deflection', 'opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: "Cloud Hands (Left, Three Times)",
        sv: "Molnhänder (vänster, tre gånger)",
        zh_pinyin: "Zuǒ yún shǒu (sān)",
        zh_hans: '左云手（三）',
      },
      description: {
        en: "Step sideways to the left while the hands circle vertically in front of the body, one rising past the face as the other sinks, repeating the cloud motion three times.",
        sv: "Kliv i sidled åt vänster medan händerna cirklar lodrätt framför kroppen, en stiger förbi ansiktet medan den andra sjunker, och upprepar molnrörelsen tre gånger.",
      },
      tags: ['cloud-hands', 'hand-deflection', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: "Throw Body and Punch (Right)",
        sv: "Kasta kroppen och slå (höger)",
        zh_pinyin: "Yòu piē shēn chuí",
        zh_hans: '右撇身捶',
      },
      description: {
        en: "Turn the body and throw the right back-fist outward over the lead leg while the other hand supports, snapping the punch in a bow stance.",
        sv: "Vrid kroppen och kasta höger baknäve utåt över det främre benet medan den andra handen stödjer, och snärtar slaget i en bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: "Fair Lady Works the Shuttles (Left and Right)",
        sv: "Skön dam sköter skyttlarna (vänster och höger)",
        zh_pinyin: "Zuǒ yòu chuān suō",
        zh_hans: '左右穿梭',
      },
      description: {
        en: "Step diagonally and brace one palm overhead while the other pushes forward at chest height, weaving the shuttles to alternating corners in bow stances.",
        sv: "Kliv diagonalt och stötta en handflata ovanför huvudet medan den andra trycker framåt i brösthöjd, och väver skyttlarna till växlande hörn i bågställningar.",
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: "Step Back and Thrust Palm",
        sv: "Kliv bakåt och stöt handflatan",
        zh_pinyin: "Tuì bù chuān zhǎng",
        zh_hans: '退步穿掌',
      },
      description: {
        en: "Step backward and thread the left palm forward and low past the right arm while the right hand draws back, sinking the weight in balance.",
        sv: "Kliv bakåt och trä vänster handflata framåt och lågt förbi höger arm medan höger hand dras tillbaka, och sänk vikten i balans.",
      },
      tags: ['strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 38,
      names: {
        en: "Empty Step and Press Palm Down",
        sv: "Tomställning och tryck handflatan nedåt",
        zh_pinyin: "Xū bù yā zhǎng",
        zh_hans: '虚步压掌',
      },
      description: {
        en: "Turn the body and settle into an empty stance, pressing the left palm down across the body while the right hand rests above the head.",
        sv: "Vrid kroppen och sätt dig i en tomställning, och tryck vänster handflata nedåt tvärs över kroppen medan höger hand vilar ovanför huvudet.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 39,
      names: {
        en: "Stand on One Leg and Hold Up Palm",
        sv: "Stå på ett ben och håll upp handflatan",
        zh_pinyin: "Dú lì tuō zhǎng",
        zh_hans: '独立托掌',
      },
      description: {
        en: "Rise onto the standing leg with the opposite knee lifted, holding the right palm up as if supporting a weight while the left hand presses aside.",
        sv: "Res dig på ståbenet med det motsatta knät lyft, och håll höger handflata uppåt som om man bär en vikt medan vänster hand trycker åt sidan.",
      },
      tags: ['stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: "Horse-Riding Stance Shoulder Stroke",
        sv: "Hästställning med axelstöt",
        zh_pinyin: "Mǎ bù kào",
        zh_hans: '马步靠',
      },
      description: {
        en: "Drop into a horse-riding stance and lean the shoulder and forearm outward to deliver a shoulder stroke, the fist pressing down at the hip.",
        sv: "Sjunk ned i en hästställning och luta axeln och underarmen utåt för att leverera en axelstöt, näven trycker ned vid höften.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: "Turn Body and Large Roll-Back",
        sv: "Vrid kroppen och stor rulla tillbaka",
        zh_pinyin: "Zhuǎn shēn dà lǚ",
        zh_hans: '转身大捋',
      },
      description: {
        en: "Turn the body and step around while both hands roll back in a large sweeping arc, guiding the opponent's force off to the side.",
        sv: "Vrid kroppen och kliv runt medan båda händerna rullar tillbaka i en stor svepande båge, och leder bort motståndarens kraft åt sidan.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: "Lift Palm and Push Down",
        sv: "Lyft handflatan och sänk dig",
        zh_pinyin: "Liáo zhǎng xià shì",
        zh_hans: '撩掌下势',
      },
      description: {
        en: "Lift the palm upward in an arc, then sink onto the bent leg into a low crouch stance, extending the other leg flat to the side.",
        sv: "Lyft handflatan uppåt i en båge, sjunk sedan ned på det böjda benet till en låg hukställning, och sträck ut det andra benet platt åt sidan.",
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 43,
      names: {
        en: "Step Forward to Form Seven Stars",
        sv: "Kliv fram till sju stjärnor",
        zh_pinyin: "Shàng bù qī xīng",
        zh_hans: '上步七星',
      },
      description: {
        en: "Step forward into a left empty stance and cross both fists in front of the chest, wrists touching to form the seven-star guard.",
        sv: "Kliv framåt till en vänster tomställning och korsa båda nävarna framför bröstet, handlederna möts för att forma sjustjärnegarden.",
      },
      tags: ['stance', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 44,
      names: {
        en: "Stand on One Leg and Ride the Tiger",
        sv: "Stå på ett ben och rid på tigern",
        zh_pinyin: "Dú lì kuà hǔ",
        zh_hans: '独立跨虎',
      },
      description: {
        en: "Step back and rise onto one leg with the other knee lifted, the hands separating into open palms above and to the side in balance.",
        sv: "Kliv bakåt och res dig på ett ben med det andra knät lyft, händerna separeras till öppna handflator ovanför och åt sidan i balans.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 45,
      names: {
        en: "Turn Body and Sweep Lotus with Leg",
        sv: "Vrid kroppen och svep lotus med benet",
        zh_pinyin: "Zhuǎn shēn bǎi lián",
        zh_hans: '转身摆莲',
      },
      description: {
        en: "Spin the body around and sweep the right leg in a crescent arc across the front, slapping both palms against the foot in passing.",
        sv: "Snurra kroppen runt och svep höger ben i en halvmånebåge tvärs över framsidan, och slå båda handflatorna mot foten i förbifarten.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 46,
      names: {
        en: "Draw the Bow and Shoot the Tiger",
        sv: "Spänn bågen och skjut tigern",
        zh_pinyin: "Wān gōng shè hǔ",
        zh_hans: '弯弓射虎',
      },
      description: {
        en: "Settle into a bow stance and swing both fists up to one side, the upper fist drawing back like a bow while the other strikes forward.",
        sv: "Sätt dig i en bågställning och sving båda nävarna upp åt ena sidan, den övre näven dras tillbaka som en båge medan den andra slår framåt.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 47,
      names: {
        en: "Deflect, Parry and Punch (Right)",
        sv: "Avled, parera och slå (höger)",
        zh_pinyin: "Yòu bān lán chuí",
        zh_hans: '右搬拦捶',
      },
      description: {
        en: "Deflect with the fist, parry across with the open palm, then step in and drive a forward punch with the left fist into a right bow stance.",
        sv: "Avled med näven, parera tvärs med öppen handflata, kliv sedan in och driv en framåtriktad stöt med vänster näve in i en höger bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 48,
      names: {
        en: "Ward Off, Roll Back, Press and Push (Right)",
        sv: "Avvärja, rulla tillbaka, pressa och trycka (höger)",
        zh_pinyin: "Yòu pīng lǚ jǐ àn",
        zh_hans: '右掤捋挤按',
      },
      description: {
        en: "The signature four-energy sequence to the right: ward-off (peng), roll-back (lü), press (ji) and push (an), flowing into a right bow stance.",
        sv: "Den karakteristiska fyrenergisekvensen åt höger: avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), in i en höger bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 49,
      names: {
        en: "Cross Hands",
        sv: "Korshänder",
        zh_pinyin: "Shí zì shǒu",
        zh_hans: '十字手',
      },
      description: {
        en: "Shift the weight back and bring both arms down and around to cross at the wrists in front of the chest, drawing the feet parallel.",
        sv: "Skifta vikten bakåt och för båda armarna ned och runt för att korsa vid handlederna framför bröstet, och dra fötterna parallella.",
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 50,
      names: {
        en: "Closing Form",
        sv: "Avslutande form",
        zh_pinyin: "Shōu shì",
        zh_hans: '收势',
      },
      description: {
        en: "Turn the crossed palms over and lower both hands quietly to the sides, then bring the feet together to return to the natural standing posture.",
        sv: "Vänd de korsade handflatorna och sänk lugnt båda händerna till sidorna, och för sedan fötterna samman för att återgå till den naturliga stående ställningen.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
