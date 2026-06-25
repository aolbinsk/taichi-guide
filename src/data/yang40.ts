import type { FormData } from '../types';

// Yang Style 40-Posture Competition Form, the standardized Wushu routine
// compiled by the Chinese Wushu Research Institute in 1988 for international
// competition. It distills the traditional Yang long form into a balanced,
// symmetrical 40-posture sequence with a fixed, widely documented order.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'yang40',
    name: {
      en: 'Yang Style 40 — Competition Form',
      sv: 'Yang-stil 40 — tävlingsform',
      zh_pinyin: 'Sìshí Shì Tàijíquán',
      zh_hans: '四十式太极拳',
    },
    parts: [
      {
        id: 'P1',
        label: {
          en: 'Part I: Opening & Foundations',
          sv: 'Del I: Öppning & grunder',
          zh_pinyin: 'Dì Yī Duàn',
          zh_hans: '第一段',
        },
        range: [1, 14],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Kicks & Cloud Hands',
          sv: 'Del II: Sparkar & molnhänder',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [15, 28],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Shuttles & Closing',
          sv: 'Del III: Skyttlar & avslutning',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [29, 40],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 5 },
    { label: 'Cloud Hands', seq: 12 },
    { label: 'Kicks', seq: 18 },
    { label: 'Shuttles', seq: 31 },
    { label: 'Snake & Rooster', seq: 33 },
    { label: 'Closing', seq: 40 },
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
        en: 'From a natural standing posture, step the left foot out to shoulder width, raise both arms forward to shoulder height, then sink the elbows and press the palms down as the knees soften.',
        sv: 'Från naturligt stående, kliv ut med vänster fot till axelbredd, lyft båda armarna framåt till axelhöjd, sänk sedan armbågarna och tryck handflatorna nedåt medan knäna mjuknar.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Grasp the Peacock's Tail — Right",
        sv: 'Grip påfågelns stjärt — höger',
        zh_pinyin: 'Yòu Lǎn Què Wěi',
        zh_hans: '右揽雀尾',
      },
      description: {
        en: 'The signature sequence to the right: ward-off (peng), roll-back (lü), press (ji) and push (an), flowing through the four primary energies in a right bow stance.',
        sv: 'Den karakteristiska sekvensen åt höger: avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), genom de fyra grundenergierna i höger bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Grasp the Peacock's Tail — Left",
        sv: 'Grip påfågelns stjärt — vänster',
        zh_pinyin: 'Zuǒ Lǎn Què Wěi',
        zh_hans: '左揽雀尾',
      },
      description: {
        en: 'The same ward-off, roll-back, press and push sequence performed as a mirror image to the left side.',
        sv: 'Samma sekvens av avvärja, rulla tillbaka, pressa och trycka, utförd som spegelbild åt vänster sida.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
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
      seq: 5,
      names: {
        en: 'Fist Under Elbow',
        sv: 'Knytnäve under armbåge',
        zh_pinyin: 'Zhǒudǐ Chuí',
        zh_hans: '肘底捶',
      },
      description: {
        en: 'Step around and gather the hands, the left palm raising forward while the right fist tucks in beneath the left elbow, ready to strike from concealment.',
        sv: 'Kliv runt och samla händerna, vänster handflata lyfts framåt medan höger knytnäve gömmer sig under vänster armbåge, redo att slå från dold position.',
      },
      tags: ['strike', 'stance'],
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
        en: 'Shift back onto the right leg into an empty stance, the right hand rising to the temple and the left settling by the hip, opening the arms like a crane spreading its wings.',
        sv: 'Skifta tillbaka på höger ben till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och armarna öppnas som en trana som breder ut vingarna.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: 'Brush Knee and Twist Step (Left & Right)',
        sv: 'Borsta knä och vrid steg (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Lōuxī Àobù',
        zh_hans: '左右搂膝拗步',
      },
      description: {
        en: 'In a bow stance, one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height. Repeated alternately to both sides.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd. Upprepas omväxlande till båda sidor.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Playing the Lute',
        sv: 'Spela luta',
        zh_pinyin: 'Shǒuhuī Pípá',
        zh_hans: '手挥琵琶',
      },
      description: {
        en: 'Draw into an empty stance with the left heel touching down, hands closing in front as if cradling and strumming a lute, ready to trap an opponent’s arm.',
        sv: 'Dra ihop till tom ställning med vänster häl i marken, händerna sluts framför som om de håller och knäpper på en luta, redo att fånga motståndarens arm.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'Twist Step and Strike Down with Fist',
        sv: 'Vrid steg och slå nedåt med näve',
        zh_pinyin: 'Pīshēn Chuí',
        zh_hans: '撇身捶',
      },
      description: {
        en: 'Turn the body and swing the right fist outward and down in an arc, the back-fist flinging across to strike as the body twists into a bow stance.',
        sv: 'Vrid kroppen och svinga höger näve utåt och nedåt i en båge, baksidan av näven slungas över för att slå medan kroppen vrids till bågställning.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: 'Turn, Deflect, Parry and Punch',
        sv: 'Vänd, avled, parera och slå',
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
      seq: 11,
      names: {
        en: 'Apparent Close Up',
        sv: 'Skenbar stängning',
        zh_pinyin: 'Rúfēng Sìbì',
        zh_hans: '如封似闭',
      },
      description: {
        en: 'Cross the forearms to withdraw and neutralize, then settle and push both palms forward in a bow stance — "sealing as if shutting a door."',
        sv: 'Korsa underarmarna för att dra tillbaka och neutralisera, sjunk sedan och tryck båda handflatorna framåt i bågställning — "förslut som att stänga en dörr."',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Wave Hands Like Clouds',
        sv: 'Vinka händerna som moln',
        zh_pinyin: 'Yúnshǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Moving sideways, the hands trace continuous overlapping circles in front of the body as the weight shifts from foot to foot. Performed several times.',
        sv: 'Med sidledes förflyttning ritar händerna kontinuerliga överlappande cirklar framför kroppen medan tyngden skiftar från fot till fot. Utförs flera gånger.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
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
      repeatOf: 4,
    },
    {
      seq: 14,
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
      seq: 15,
      names: {
        en: 'Heel Kick — Right',
        sv: 'Hälspark — höger',
        zh_pinyin: 'Yòu Dēngjiǎo',
        zh_hans: '右蹬脚',
      },
      description: {
        en: 'Cross and open the hands, then kick out to the right front corner with the heel leading and the arms extending to balance the strike.',
        sv: 'Korsa och öppna händerna, sparka sedan ut mot höger främre hörn med hälen först och armarna utsträckta för att balansera sparken.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Brush Knee and Punch Low',
        sv: 'Borsta knä och slå lågt',
        zh_pinyin: 'Lōuxī Zāichuí',
        zh_hans: '搂膝栽捶',
      },
      description: {
        en: 'Step into a bow stance, the left hand brushing across the knee while the right fist drives downward and forward in a low planting punch.',
        sv: 'Kliv till bågställning, vänster hand sveper över knäet medan höger näve driver nedåt och framåt i ett lågt planterande slag.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: 'Turn and Strike Down with Fist',
        sv: 'Vänd och slå nedåt med näve',
        zh_pinyin: 'Zhuǎnshēn Piēshēn Chuí',
        zh_hans: '转身撇身捶',
      },
      description: {
        en: 'Turn the body around and fling the right back-fist outward and down in an arc, twisting into a bow stance to strike.',
        sv: 'Vrid kroppen runt och slunga höger baknäve utåt och nedåt i en båge, vrid till bågställning för att slå.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: 'Strike Opponent’s Ears with Both Fists',
        sv: 'Slå motståndarens öron med båda nävarna',
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
      seq: 19,
      names: {
        en: 'Heel Kick — Left',
        sv: 'Hälspark — vänster',
        zh_pinyin: 'Zuǒ Dēngjiǎo',
        zh_hans: '左蹬脚',
      },
      description: {
        en: 'Cross the hands and open them, then kick out to the left front corner with the heel leading, mirroring the earlier right heel kick.',
        sv: 'Korsa händerna och öppna dem, sparka sedan ut mot vänster främre hörn med hälen först, som spegling av den tidigare högra hälsparken.',
      },
      tags: ['kick', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 15,
    },
    {
      seq: 20,
      names: {
        en: 'Turn and Lotus Kick',
        sv: 'Vänd och lotusspark',
        zh_pinyin: 'Zhuǎnshēn Bǎilián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: 'Swing the body around on a turn and sweep the right leg across in a crescent lotus kick, the hands slapping the top of the foot in passing.',
        sv: 'Svinga kroppen runt i en vändning och svep höger ben tvärs över i en halvmånformad lotusspark, händerna slår mot fotens ovansida i förbifarten.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: 'Punch to the Groin',
        sv: 'Slag mot ljumsken',
        zh_pinyin: 'Wāngōng Shèhǔ',
        zh_hans: '弯弓射虎',
      },
      description: {
        en: 'Settle into a bow stance and draw both fists across the body, the rear hand pulling back and the front fist punching downward like an archer bending the bow to shoot the tiger.',
        sv: 'Sjunk till bågställning och dra båda nävarna tvärs över kroppen, den bakre handen drar tillbaka och den främre näven slår nedåt som en bågskytt som spänner bågen för att skjuta tigern.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: 'Turn, Deflect, Parry and Punch',
        sv: 'Vänd, avled, parera och slå',
        zh_pinyin: 'Zhuǎnshēn Bānlánchuí',
        zh_hans: '转身搬拦捶',
      },
      description: {
        en: 'Turn the body, deflect with the forearm, parry with the open hand, and drive a right fist forward into a bow stance.',
        sv: 'Vrid kroppen, avled med underarmen, parera med öppen hand och driv höger näve framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 10,
    },
    {
      seq: 23,
      names: {
        en: "Grasp the Peacock's Tail — Right",
        sv: 'Grip påfågelns stjärt — höger',
        zh_pinyin: 'Yòu Lǎn Què Wěi',
        zh_hans: '右揽雀尾',
      },
      description: {
        en: 'Flow once more through ward-off, roll-back, press and push in a right bow stance, the four primary energies linked in one continuous arc.',
        sv: 'Flöda än en gång genom avvärja, rulla tillbaka, pressa och trycka i höger bågställning, de fyra grundenergierna förbundna i en sammanhängande båge.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 24,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'Single Whip again: the right hand hooks and pulls to the rear while the left palm presses out to the side in a wide bow stance.',
        sv: 'Enkelt piskslag igen: höger hand krokar och drar bakåt medan vänster handflata trycker ut åt sidan i en bred bågställning.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 25,
      names: {
        en: 'Wave Hands Like Clouds',
        sv: 'Vinka händerna som moln',
        zh_pinyin: 'Yúnshǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Step sideways once more, the hands tracing continuous overlapping circles before the body as the weight rolls smoothly from foot to foot.',
        sv: 'Kliv sidledes än en gång, händerna ritar kontinuerliga överlappande cirklar framför kroppen medan tyngden rullar mjukt från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 12,
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
        en: 'Single Whip closes the second Cloud Hands run, the hooked right hand drawing back as the left palm extends outward in a wide bow stance.',
        sv: 'Enkelt piskslag avslutar den andra molnhänder-omgången, den krokade höger handen dras tillbaka medan vänster handflata sträcks utåt i en bred bågställning.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 27,
      names: {
        en: 'High Pat on Horse with Palm Thrust',
        sv: 'Klappa hästen högt med handflatsstöt',
        zh_pinyin: 'Gāo Tàn Mǎ Chuān Zhǎng',
        zh_hans: '高探马穿掌',
      },
      description: {
        en: 'Draw into an empty stance to pat the horse, then thread the left palm forward and out beneath the right hand in a piercing thrust.',
        sv: 'Dra ihop till tom ställning för att klappa hästen, för sedan vänster handflata framåt och ut under höger hand i en genomträngande stöt.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: 'Toe Kick — Right',
        sv: 'Tåspark — höger',
        zh_pinyin: 'Yòu Fēn Jiǎo',
        zh_hans: '右分脚',
      },
      description: {
        en: 'Cross and open the hands, then snap the right foot out to the front corner with the toes leading, the arms spreading apart to balance the kick.',
        sv: 'Korsa och öppna händerna, snärta sedan ut höger fot mot främre hörnet med tårna först, armarna sprids isär för att balansera sparken.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: 'Step Up and Punch Forward',
        sv: 'Kliv fram och slå framåt',
        zh_pinyin: 'Jìnbù Zāichuí',
        zh_hans: '进步栽捶',
      },
      description: {
        en: 'Step forward into a bow stance, the left hand brushing aside while the right fist drives downward and forward in a low planting punch.',
        sv: 'Kliv framåt till bågställning, vänster hand sveper undan medan höger näve driver nedåt och framåt i ett lågt planterande slag.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: 'Single Whip Low Posture',
        sv: 'Enkelt piskslag lågt',
        zh_pinyin: 'Dānbiān Xiàshì',
        zh_hans: '单鞭下势',
      },
      description: {
        en: 'Form the hooked right hand of Single Whip, then sink deep into a low crouching stance, threading the left hand forward along the inside of the extended leg.',
        sv: 'Forma den krokade höger handen i enkelt piskslag, sjunk sedan djupt i en låg hukande ställning och för vänster hand framåt längs insidan av det utsträckta benet.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: 'Golden Rooster Stands on One Leg (Left & Right)',
        sv: 'Gyllene tupp står på ett ben (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Jīnjī Dúlì',
        zh_hans: '左右金鸡独立',
      },
      description: {
        en: 'Rise up to balance on one leg, lifting the opposite knee and hand high, then settle and switch to balance on the other leg in mirror image.',
        sv: 'Res dig och balansera på ett ben, lyft motsatt knä och hand högt, sjunk sedan och byt till att balansera på det andra benet som spegelbild.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 32,
      names: {
        en: 'Repulse the Monkey (Left & Right)',
        sv: 'Driv tillbaka apan (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Dào Juǎngōng',
        zh_hans: '左右倒卷肱',
      },
      description: {
        en: 'Stepping backward, withdraw one hand to the hip while the other pushes forward at face height, retreating in a smooth coil. Repeated alternately.',
        sv: 'Kliv bakåt, dra in en hand till höften medan den andra trycker framåt i ansiktshöjd, i en mjuk spiralrörelse bakåt. Upprepas omväxlande.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: 'Diagonal Flying',
        sv: 'Diagonal flykt',
        zh_pinyin: 'Xiéfēishì',
        zh_hans: '斜飞势',
      },
      description: {
        en: 'Hold a ball, then open into a wide bow stance splitting the hands diagonally — the upper hand slicing out and upward, the lower pressing down to the hip.',
        sv: 'Håll en boll, öppna sedan till en bred bågställning och dela händerna diagonalt — den övre handen skär ut och uppåt, den nedre trycker ned vid höften.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
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
      seq: 35,
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
      seq: 36,
      names: {
        en: 'Turn and White Snake Spits Out Tongue',
        sv: 'Vänd och vit orm spottar ut tungan',
        zh_pinyin: 'Zhuǎnshēn Báishé Tǔxìn',
        zh_hans: '转身白蛇吐信',
      },
      description: {
        en: 'Turn the body, swing the back of the right hand outward to deflect, then thread the right palm forward and out at throat height like a snake’s flicking tongue.',
        sv: 'Vrid kroppen, svinga baksidan av höger hand utåt för att avvärja, för sedan höger handflata framåt och ut i halshöjd som en orms vibrerande tunga.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: 'Fair Lady Works the Shuttles (Left & Right)',
        sv: 'Vacker dam sköter skyttlarna (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Chuānsuō',
        zh_hans: '左右穿梭',
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
      seq: 38,
      names: {
        en: "Grasp the Peacock's Tail — Left",
        sv: 'Grip påfågelns stjärt — vänster',
        zh_pinyin: 'Zuǒ Lǎn Què Wěi',
        zh_hans: '左揽雀尾',
      },
      description: {
        en: 'A final pass through ward-off, roll-back, press and push, performed in a left bow stance to gather the form back toward its close.',
        sv: 'En sista genomgång av avvärja, rulla tillbaka, pressa och trycka, utförd i vänster bågställning för att samla formen mot sitt slut.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 39,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The last Single Whip: the right hand hooks back while the left palm presses outward in a wide bow stance, the arms stretched like a whip.',
        sv: 'Det sista enkla piskslaget: höger hand krokar bakåt medan vänster handflata trycker utåt i en bred bågställning, armarna utsträckta som en piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 40,
      names: {
        en: 'Cross Hands & Closing Form',
        sv: 'Korsade händer & avslutande form',
        zh_pinyin: 'Shízìshǒu Shōushì',
        zh_hans: '十字手收势',
      },
      description: {
        en: 'Turn and open the arms wide, gather them to cross at the wrists before the chest, then turn the palms down, lower the hands, and draw the feet together to a calm standing close.',
        sv: 'Vänd och öppna armarna brett, samla dem och korsa vid handlederna framför bröstet, vänd sedan handflatorna nedåt, sänk händerna och dra ihop fötterna till en lugn stående avslutning.',
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
