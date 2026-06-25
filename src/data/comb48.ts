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
        range: [1, 13],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Kicks & Cloud Hands (Sections 3–4)',
          sv: 'Del II: Sparkar & molnhänder (avsnitt 3–4)',
          zh_pinyin: 'Dì Sān Sì Duàn',
          zh_hans: '第三、四段',
        },
        range: [14, 26],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Family Blend (Section 5)',
          sv: 'Del III: Stilblandning (avsnitt 5)',
          zh_pinyin: 'Dì Wǔ Duàn',
          zh_hans: '第五段',
        },
        range: [27, 38],
      },
      {
        id: 'P4',
        label: {
          en: 'Part IV: Shuttles & Closing (Section 6)',
          sv: 'Del IV: Skyttlar & avslutning (avsnitt 6)',
          zh_pinyin: 'Dì Liù Duàn',
          zh_hans: '第六段',
        },
        range: [39, 48],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 9 },
    { label: 'Heel Kicks', seq: 14 },
    { label: 'Cloud Hands', seq: 25 },
    { label: 'Snake Down', seq: 32 },
    { label: 'Shuttles', seq: 43 },
    { label: 'Needle', seq: 44 },
    { label: 'Closing', seq: 48 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: 'Commencing Form',
        sv: 'Inledande form',
        zh_pinyin: 'Qǐshì',
        zh_hans: '起势',
      },
      description: {
        en: 'From a natural standing posture, step the left foot out shoulder-width, raise both arms forward to shoulder height, then sink the elbows and press the palms down as the knees soften.',
        sv: 'Från naturligt stående, kliv ut med vänster fot till axelbredd, lyft båda armarna framåt till axelhöjd, sänk sedan armbågarna och tryck handflatorna nedåt medan knäna mjuknar.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Báihè Liàngchì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'Shift back onto the right leg into an empty stance, the right hand rising to the temple and the left settling by the hip, opening the arms like a crane spreading its wings.',
        sv: 'Skifta tillbaka på höger ben till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och armarna öppnas som en trana som breder ut vingarna.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: 'Brush Knee and Twist Step (Left & Right)',
        sv: 'Borsta knä och vrid steg (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Lōuxī Àobù',
        zh_hans: '左右搂膝拗步',
      },
      description: {
        en: 'In a bow stance, one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height, repeated alternately on both sides.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd, upprepat omväxlande på båda sidor.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: 'Walk Obliquely (Left & Right)',
        sv: 'Gå snett (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Xíngbù Áoxíng',
        zh_hans: '左右斜行拗步',
      },
      description: {
        en: 'Step diagonally into a bow stance with the leading hand hooked, the rear palm pressing forward, advancing on an oblique line on each side.',
        sv: 'Kliv diagonalt till bågställning med den ledande handen krokad och den bakre handflatan tryckande framåt, framåt på en sned linje på varje sida.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: 'Pat the Horse and Thrust the Palm',
        sv: 'Klappa hästen och stöt handflatan',
        zh_pinyin: 'Tí Shǒu',
        zh_hans: '提手',
      },
      description: {
        en: 'Draw into an empty stance, the hands rising and closing toward each other in front of the body as if lifting and trapping an opponent’s arm.',
        sv: 'Dra ihop till tom ställning, händerna stiger och sluts mot varandra framför kroppen som om de lyfter och fångar motståndarens arm.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Báihè Liàngchì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'Return to the crane posture, shifting back into an empty stance with one hand high at the temple and the other low at the hip.',
        sv: 'Återgå till tranställningen, skifta tillbaka till tom ställning med en hand högt vid tinningen och den andra lågt vid höften.',
      },
      tags: ['stance', 'opening-closing', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 7,
      names: {
        en: 'Deflect, Parry and Punch',
        sv: 'Avled, parera och slå',
        zh_pinyin: 'Piěshēn Chuí',
        zh_hans: '撇身捶',
      },
      description: {
        en: 'Turn the torso and flick the back fist outward, then deflect and drive a fist forward into a bow stance.',
        sv: 'Vrid bålen och slå ut bakhanden, avled sedan och driv en näve framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Withdraw and Push',
        sv: 'Dra tillbaka och tryck',
        zh_pinyin: 'Lǚ Jǐ Shì',
        zh_hans: '捋挤式',
      },
      description: {
        en: 'Roll back to neutralize an incoming force, then turn and press both forearms forward, squeezing power out in a bow stance.',
        sv: 'Rulla tillbaka för att neutralisera en inkommande kraft, vänd sedan och pressa båda underarmarna framåt och tryck ut kraft i bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'Palm Push (Left & Right)',
        sv: 'Handflatetryck (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Tuī Shǒu',
        zh_hans: '左右搂膝拗步',
      },
      description: {
        en: 'Advance in a bow stance pushing one palm forward at shoulder height while the other guards low, alternating to the left and right.',
        sv: 'Avancera i bågställning och tryck en handflata framåt i axelhöjd medan den andra skyddar lågt, omväxlande vänster och höger.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand forms a hooked beak pulling to the rear while the left palm pushes out to the side in a wide bow stance, the arms extended like a stretched whip.',
        sv: 'Höger hand formar en krok som drar bakåt medan vänster handflata trycker ut åt sidan i en bred bågställning, armarna utsträckta som en spänd piska.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: 'Cloud Hands (Left)',
        sv: 'Molnhänder (vänster)',
        zh_pinyin: 'Zuǒ Yúnshǒu',
        zh_hans: '左云手',
      },
      description: {
        en: 'Moving sideways to the left, the hands trace continuous overlapping circles in front of the body as the weight shifts smoothly from foot to foot.',
        sv: 'Med sidledes förflyttning åt vänster ritar händerna kontinuerliga överlappande cirklar framför kroppen medan tyngden skiftar mjukt från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'Single Whip again, closing the Cloud Hands sequence with the hooked right hand and the left palm pressing outward.',
        sv: 'Enkelt piskslag igen, som avslutar molnhänder-sekvensen med krokad höger hand och vänster handflata som trycker utåt.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 10,
    },
    {
      seq: 13,
      names: {
        en: 'High Pat on Horse',
        sv: 'Klappa hästen högt',
        zh_pinyin: 'Gāo Tàn Mǎ',
        zh_hans: '高探马',
      },
      description: {
        en: 'Draw into an empty stance, the right palm reaching forward over the upturned left hand at face height, as if patting a tall horse.',
        sv: 'Dra ihop till tom ställning, höger handflata sträcks framåt över den uppåtvända vänstra handen i ansiktshöjd, som att klappa en hög häst.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: 'Right Heel Kick',
        sv: 'Höger hälspark',
        zh_pinyin: 'Yòu Dēngjiǎo',
        zh_hans: '右蹬脚',
      },
      description: {
        en: 'Cross and open the hands, then kick out to the front with the right heel leading and the arms extending to balance the strike.',
        sv: 'Korsa och öppna händerna, sparka sedan ut framåt med höger häl först och armarna utsträckta för att balansera sparken.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: 'Strike to the Ears with Both Fists',
        sv: 'Slå mot öronen med båda nävarna',
        zh_pinyin: 'Shuāngfēng Guàn’ěr',
        zh_hans: '双峰贯耳',
      },
      description: {
        en: 'Landing into a bow stance, both fists swing up and inward in wide arcs toward the opponent’s ears, like two peaks closing together.',
        sv: 'Landa i bågställning och låt båda nävarna svinga upp och inåt i vida bågar mot motståndarens öron, som två toppar som möts.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Sweeping Lotus and Punch Down to the Groin',
        sv: 'Svepande lotus och slag nedåt',
        zh_pinyin: 'Bǎi Lián',
        zh_hans: '摆莲',
      },
      description: {
        en: 'Swing the right foot across in a crescent lotus kick, then settle into a stance driving a low fist toward the opponent’s lower body.',
        sv: 'Svinga höger fot i en halvmåneformad lotusspark, sjunk sedan i en ställning och driv en låg näve mot motståndarens nedre del.',
      },
      tags: ['kick', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: 'Left Heel Kick',
        sv: 'Vänster hälspark',
        zh_pinyin: 'Zuǒ Dēngjiǎo',
        zh_hans: '左蹬脚',
      },
      description: {
        en: 'Turn the body, cross the hands, and deliver a left heel kick forward, mirroring the earlier right kick.',
        sv: 'Vrid kroppen, korsa händerna och utför en vänster hälspark framåt, som spegling av den tidigare högra sparken.',
      },
      tags: ['kick', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 14,
    },
    {
      seq: 18,
      names: {
        en: 'Cover Hand and Thrust Punch',
        sv: 'Täck hand och stötslag',
        zh_pinyin: 'Yǎnshǒu Liáo Quán',
        zh_hans: '掩手撩拳',
      },
      description: {
        en: 'A Chen-flavoured movement: store power by covering the fist, then release a sudden explosive punch forward in a bow stance.',
        sv: 'En rörelse i Chen-anda: lagra kraft genom att täcka näven och släpp sedan ett plötsligt explosivt slag framåt i bågställning.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: 'Wild Horse Parts Its Mane (Left & Right)',
        sv: 'Vildhästen delar manen (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Yěmǎ Fēnzōng',
        zh_hans: '左右野马分鬃',
      },
      description: {
        en: 'Holding a ball, step into a bow stance and separate the hands — one arcing up to throat height, the other pressing down by the hip — alternating sides.',
        sv: 'Håll en boll, kliv till bågställning och separera händerna — en bågar upp till halshöjd, den andra trycker ned vid höften — omväxlande sidor.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: 'Fair Lady Works the Shuttles (Left & Right)',
        sv: 'Vacker dam sköter skyttlarna (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Yùnǚ Chuānsuō',
        zh_hans: '左右玉女穿梭',
      },
      description: {
        en: 'In a bow stance one hand lifts to ward off overhead while the other pushes forward, turning to repeat on the opposite side like a weaver passing the shuttle.',
        sv: 'I bågställning lyfts en hand för att avvärja ovanför medan den andra trycker framåt, och man vänder för att upprepa på motsatt sida likt en vävare som för skytteln.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: 'Needle at Sea Bottom',
        sv: 'Nål på havets botten',
        zh_pinyin: 'Hǎidǐ Zhēn',
        zh_hans: '海底针',
      },
      description: {
        en: 'Shift into an empty stance and bend forward, the right hand stabbing downward as if plunging a needle to the bottom of the sea.',
        sv: 'Skifta till tom ställning och böj framåt, höger hand stöter nedåt som att sticka en nål mot havets botten.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: 'Fan Through the Back',
        sv: 'Solfjäder genom ryggen',
        zh_pinyin: 'Shǎntōngbì',
        zh_hans: '闪通臂',
      },
      description: {
        en: 'Rise into a bow stance, one hand lifting to the temple and the other pushing forward, the arms spreading open like a fan and connecting power through the back.',
        sv: 'Res dig till bågställning, en hand lyfts till tinningen och den andra trycker framåt, armarna öppnas som en solfjäder och kraften förbinds genom ryggen.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: 'Turn Body and Sweep the Lotus',
        sv: 'Vänd kropp och svep lotus',
        zh_pinyin: 'Zhuǎnshēn Bǎi Lián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: 'Turn the body around and swing the leg across in a wide crescent lotus kick, the palms slapping the rising foot.',
        sv: 'Vrid kroppen runt och svinga benet i en bred halvmåneformad lotusspark, handflatorna klappar den stigande foten.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: 'Punch to the Groin',
        sv: 'Slag mot ljumsken',
        zh_pinyin: 'Lōuxī Zāi Chuí',
        zh_hans: '搂膝栽捶',
      },
      description: {
        en: 'Brush the knee with one hand to clear the line, then plant a downward fist into a bow stance toward the opponent’s lower body.',
        sv: 'Borsta knäet med en hand för att rensa linjen, plantera sedan en näve nedåt i bågställning mot motståndarens nedre del.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: 'Grasp the Peacock’s Tail',
        sv: 'Grip påfågelns stjärt',
        zh_pinyin: 'Lǎn Què Wěi',
        zh_hans: '揽雀尾',
      },
      description: {
        en: 'The signature sequence flowing through ward-off (peng), roll-back (lü), press (ji) and push (an), the four primary energies, in a bow stance.',
        sv: 'Den karakteristiska sekvensen genom avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), de fyra grundenergierna, i bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'Single Whip following Grasp the Peacock’s Tail, the right hand hooking to the rear and the left palm pressing outward in a wide bow stance.',
        sv: 'Enkelt piskslag efter grip påfågelns stjärt, höger hand krokar bakåt och vänster handflata trycker utåt i en bred bågställning.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 10,
    },
    {
      seq: 27,
      names: {
        en: 'Cloud Hands (Right)',
        sv: 'Molnhänder (höger)',
        zh_pinyin: 'Yòu Yúnshǒu',
        zh_hans: '右云手',
      },
      description: {
        en: 'Travelling sideways to the right, the hands draw continuous overlapping circles in front of the body while the weight shifts from foot to foot.',
        sv: 'Med sidledes förflyttning åt höger drar händerna kontinuerliga överlappande cirklar framför kroppen medan tyngden skiftar från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 11,
    },
    {
      seq: 28,
      names: {
        en: 'Stand on One Leg and Strike the Tiger',
        sv: 'Stå på ett ben och slå tigern',
        zh_pinyin: 'Dúlì Dǎ Hǔ',
        zh_hans: '独立打虎',
      },
      description: {
        en: 'Rise to balance on one leg, lifting the knee while both fists swing into a tiger-catching posture, one high and one low.',
        sv: 'Res dig och balansera på ett ben, lyft knäet medan båda nävarna svingar till en tigerfångande ställning, en hög och en låg.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: 'Right Pat the Foot',
        sv: 'Höger klappa foten',
        zh_pinyin: 'Yòu Fēnjiǎo',
        zh_hans: '右分脚',
      },
      description: {
        en: 'Cross and open the hands, then kick the right toes upward, the right palm slapping out toward the lifting foot.',
        sv: 'Korsa och öppna händerna, sparka sedan upp höger tår, höger handflata klappar ut mot den lyftande foten.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: 'Double Strike to the Ears',
        sv: 'Dubbelslag mot öronen',
        zh_pinyin: 'Shuāngfēng Guàn’ěr',
        zh_hans: '双峰贯耳',
      },
      description: {
        en: 'Land into a bow stance and swing both fists up and inward in wide arcs toward the opponent’s ears.',
        sv: 'Landa i bågställning och svinga båda nävarna upp och inåt i vida bågar mot motståndarens öron.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 15,
    },
    {
      seq: 31,
      names: {
        en: 'Left Pat the Foot',
        sv: 'Vänster klappa foten',
        zh_pinyin: 'Zuǒ Fēnjiǎo',
        zh_hans: '左分脚',
      },
      description: {
        en: 'Turn and cross the hands again, then kick the left toes upward with the left palm slapping toward the foot, mirroring the right.',
        sv: 'Vänd och korsa händerna igen, sparka sedan upp vänster tår med vänster handflata mot foten, som spegling av höger.',
      },
      tags: ['kick', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 29,
    },
    {
      seq: 32,
      names: {
        en: 'Turn Body and Heel Kick',
        sv: 'Vänd kropp och hälspark',
        zh_pinyin: 'Zhuǎnshēn Dēngjiǎo',
        zh_hans: '转身蹬脚',
      },
      description: {
        en: 'Pivot the body around, gather the hands, then thrust a heel kick out to the front to clear the new direction.',
        sv: 'Vrid kroppen runt, samla händerna och stöt sedan ut en hälspark framåt för att rensa den nya riktningen.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: 'Step Up and Punch Down',
        sv: 'Kliv fram och slå nedåt',
        zh_pinyin: 'Shàngbù Zāi Chuí',
        zh_hans: '上步栽捶',
      },
      description: {
        en: 'Advance into a bow stance and drive a fist diagonally downward, planting the strike toward the opponent’s lower body.',
        sv: 'Avancera till bågställning och driv en näve snett nedåt, plantera slaget mot motståndarens nedre del.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: 'Double Pushing Hands',
        sv: 'Dubbla skjutande händer',
        zh_pinyin: 'Zhuǎnshēn Bái Shé Tǔ Xìn',
        zh_hans: '斜飞式',
      },
      description: {
        en: 'Open into a wide diagonal flying posture, one arm spreading up and out while the other settles low, splitting the opponent’s force.',
        sv: 'Öppna till en bred diagonal flygande ställning, en arm sträcks upp och ut medan den andra sänks lågt, och delar motståndarens kraft.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: 'Single Whip Squatting Down',
        sv: 'Enkelt piskslag hukande',
        zh_pinyin: 'Dānbiān Xiàshì',
        zh_hans: '单鞭下势',
      },
      description: {
        en: 'From Single Whip, sink low into a crouching stance, threading the left hand along the inside of the extended leg.',
        sv: 'Från enkelt piskslag, sjunk lågt i en hukande ställning och för vänster hand längs insidan av det utsträckta benet.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: 'Golden Rooster Stands on One Leg (Left & Right)',
        sv: 'Gyllene tupp står på ett ben (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Jīnjī Dúlì',
        zh_hans: '左右金鸡独立',
      },
      description: {
        en: 'Rise from the crouch to stand on one leg, lifting the opposite knee and hand, then repeat balancing on the other side.',
        sv: 'Res dig från huken och stå på ett ben, lyft motsatt knä och hand, upprepa sedan balanserande på andra sidan.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: 'Step Back and Whirl Arms (Left & Right)',
        sv: 'Kliv bakåt och virvla armarna (vänster & höger)',
        zh_pinyin: 'Tuì Bù Chuān Zhǎng',
        zh_hans: '退步穿掌',
      },
      description: {
        en: 'Stepping backward, thread one palm forward low under the other arm while withdrawing in a smooth coiling retreat.',
        sv: 'Kliv bakåt och för en handflata framåt lågt under den andra armen medan du drar dig tillbaka i en mjuk spiralrörelse.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 38,
      names: {
        en: 'Empty Step and Press the Palm',
        sv: 'Tomt steg och tryck handflatan',
        zh_pinyin: 'Xūbù Yā Zhǎng',
        zh_hans: '虚步压掌',
      },
      description: {
        en: 'Settle into an empty stance, the body sinking as one palm presses down in front of the body to neutralize and seal.',
        sv: 'Sjunk till en tom ställning, kroppen sänks medan en handflata trycker nedåt framför kroppen för att neutralisera och försluta.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 39,
      names: {
        en: 'Stand on One Leg and Hold Up the Palm',
        sv: 'Stå på ett ben och håll upp handflatan',
        zh_pinyin: 'Dúlì Tuō Zhǎng',
        zh_hans: '独立托掌',
      },
      description: {
        en: 'Rise to balance on one leg, lifting the opposite knee while one palm raises upward as if supporting an object overhead.',
        sv: 'Res dig och balansera på ett ben, lyft motsatt knä medan en handflata höjs uppåt som om den stöder ett föremål ovanför.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: 'Horse Stance and Palm Strike',
        sv: 'Hästställning och handflateslag',
        zh_pinyin: 'Mǎbù Kào',
        zh_hans: '马步靠',
      },
      description: {
        en: 'Drop into a horse stance and lean the shoulder and forearm outward, issuing a short shocking strike — a Sun- and Wu-flavoured shoulder bump.',
        sv: 'Sjunk ned i hästställning och luta axeln och underarmen utåt, och släpp ett kort kraftfullt slag — en axelstöt i Sun- och Wu-anda.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: 'Turn Body and Large Roll-Back',
        sv: 'Vänd kropp och stor tillbakarullning',
        zh_pinyin: 'Zhuǎnshēn Dà Lǚ',
        zh_hans: '转身大捋',
      },
      description: {
        en: 'Turn and step around while drawing both arms in a wide roll-back, leading an opponent’s force off line in a circular retreat.',
        sv: 'Vänd och kliv runt medan du drar båda armarna i en vid tillbakarullning, och leder motståndarens kraft ur linje i en cirkulär reträtt.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: 'Palm Thrust and Sweeping Lotus',
        sv: 'Handflatestöt och svepande lotus',
        zh_pinyin: 'Liáo Zhǎng Xià Shì',
        zh_hans: '撩掌下势',
      },
      description: {
        en: 'Sweep a palm upward and forward, then sink low again into a crouching stance to thread and prepare the next rise.',
        sv: 'Svep en handflata uppåt och framåt, sjunk sedan lågt igen i en hukande ställning för att föra handen och förbereda nästa resning.',
      },
      tags: ['hand-deflection', 'stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 43,
      names: {
        en: 'Step Up to Form Seven Stars',
        sv: 'Kliv fram till sju stjärnor',
        zh_pinyin: 'Shàngbù Qīxīng',
        zh_hans: '上步七星',
      },
      description: {
        en: 'Step forward into an empty stance and cross both fists in front of the chest, the wrists meeting in the Seven Stars guard.',
        sv: 'Kliv framåt till en tom ställning och korsa båda nävarna framför bröstet, handlederna möts i sju stjärnors gard.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 44,
      names: {
        en: 'Retreat to Ride the Tiger',
        sv: 'Dra tillbaka för att rida tigern',
        zh_pinyin: 'Tuì Bù Kuà Hǔ',
        zh_hans: '退步跨虎',
      },
      description: {
        en: 'Step back into an empty stance and open the arms, one hand rising high and the other settling low, as if mounting a tiger.',
        sv: 'Kliv tillbaka till en tom ställning och öppna armarna, en hand stiger högt och den andra sänks lågt, som att bestiga en tiger.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 45,
      names: {
        en: 'Turn Body and Sweep the Lotus',
        sv: 'Vänd kropp och svep lotus',
        zh_pinyin: 'Zhuǎnshēn Bǎi Lián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: 'Spin the body around and swing the leg across in a wide crescent lotus kick, the palms slapping the rising foot.',
        sv: 'Snurra kroppen runt och svinga benet i en bred halvmåneformad lotusspark, handflatorna klappar den stigande foten.',
      },
      tags: ['kick', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 23,
    },
    {
      seq: 46,
      names: {
        en: 'Draw the Bow and Shoot the Tiger',
        sv: 'Spänn bågen och skjut tigern',
        zh_pinyin: 'Wāngōng Shè Hǔ',
        zh_hans: '弯弓射虎',
      },
      description: {
        en: 'Land into a bow stance and punch forward with both fists as if drawing a bow to shoot a tiger across the body.',
        sv: 'Landa i bågställning och slå framåt med båda nävarna som att spänna en båge för att skjuta en tiger tvärs över kroppen.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 47,
      names: {
        en: 'Deflect, Parry and Punch',
        sv: 'Avled, parera och slå',
        zh_pinyin: 'Bānlánchuí',
        zh_hans: '搬拦捶',
      },
      description: {
        en: 'Deflect with the forearm, parry with the open hand, and drive a right fist forward into a bow stance.',
        sv: 'Avled med underarmen, parera med öppen hand och driv höger näve framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 48,
      names: {
        en: 'Apparent Close Up & Closing Form',
        sv: 'Skenbar stängning & avslutande form',
        zh_pinyin: 'Rúfēng Sìbì · Shōushì',
        zh_hans: '如封似闭·收势',
      },
      description: {
        en: 'Cross the forearms to withdraw and seal, push both palms forward, then turn the palms down, lower the hands and draw the feet together to a calm standing posture to complete the form.',
        sv: 'Korsa underarmarna för att dra tillbaka och försluta, tryck båda handflatorna framåt, vänd sedan handflatorna nedåt, sänk händerna och dra fötterna samman till en lugn stående position för att avsluta formen.',
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
