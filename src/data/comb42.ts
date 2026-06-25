import type { FormData } from '../types';

// 42-Posture Combined Competition Taijiquan (四十二式太极拳竞赛套路),
// compiled in 1989 by the Chinese Wushu Research Institute as the standard
// competition routine. Built on a Yang-style framework but deliberately blends
// signature movements from the Chen, Wu and Sun families. The order is fixed by
// the official competition rules and divided into four sections.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'comb42',
    name: {
      en: '42-Posture Combined Competition Form',
      sv: '42-rörelsers kombinerade tävlingsform',
      zh_pinyin: 'Sìshí’èr Shì Tàijíquán',
      zh_hans: '四十二式太极拳',
    },
    parts: [
      {
        id: 'P1',
        label: {
          en: 'Section 1',
          sv: 'Sektion 1',
          zh_pinyin: 'Dì Yī Duàn',
          zh_hans: '第一段',
        },
        range: [1, 10],
      },
      {
        id: 'P2',
        label: {
          en: 'Section 2',
          sv: 'Sektion 2',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [11, 20],
      },
      {
        id: 'P3',
        label: {
          en: 'Section 3',
          sv: 'Sektion 3',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [21, 31],
      },
      {
        id: 'P4',
        label: {
          en: 'Section 4',
          sv: 'Sektion 4',
          zh_pinyin: 'Dì Sì Duàn',
          zh_hans: '第四段',
        },
        range: [32, 42],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 3 },
    { label: 'Brush Knee', seq: 7 },
    { label: 'Cloud Hands', seq: 13 },
    { label: 'Heel Kick', seq: 19 },
    { label: 'Snake Creeps Down', seq: 28 },
    { label: 'Cross Hands', seq: 41 },
    { label: 'Closing', seq: 42 },
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
        en: 'The signature four-energy sequence to the right: ward-off (peng), roll-back (lü), press (ji) and push (an), flowing into a right bow stance.',
        sv: 'Den karakteristiska fyrenergisekvensen åt höger: avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), in i en höger bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
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
      seq: 4,
      names: {
        en: 'Raise Hands and Step Up',
        sv: 'Lyft händerna och kliv fram',
        zh_pinyin: 'Tí Shǒu Shàng Shì',
        zh_hans: '提手上势',
      },
      description: {
        en: 'Draw into an empty stance with the right heel touching down, both hands closing inward in front of the body as if pressing an opponent’s arm between the palms.',
        sv: 'Dra ihop till tom ställning med höger häl i marken, båda händerna sluts inåt framför kroppen som om de pressar en motståndares arm mellan handflatorna.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Báihè Liàngchì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'Shift back into an empty stance, the right hand rising to the temple and the left settling by the hip, opening the arms like a crane spreading its wings.',
        sv: 'Skifta tillbaka till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och armarna öppnas som en trana som breder ut vingarna.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: 'Brush Knee and Twist Step (Left & Right)',
        sv: 'Borsta knä och vrid steg (vänster & höger)',
        zh_pinyin: 'Lōuxī Àobù',
        zh_hans: '搂膝拗步',
      },
      description: {
        en: 'In a bow stance, one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height, repeated alternately to each side.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd, omväxlande åt varje sida.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: 'Deflect, Parry and Punch',
        sv: 'Avled, parera och slå',
        zh_pinyin: 'Piěshēnchuí',
        zh_hans: '撇身捶',
      },
      description: {
        en: 'Turn the body and flick the right fist back-handed over the brow, then parry with the left hand and drive the fist forward into a bow stance.',
        sv: 'Vrid kroppen och slå höger näve med ovansidan ut över ögonbrynet, parera sedan med vänster hand och driv näven framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Drawing the Bow to Shoot the Tiger',
        sv: 'Spänn bågen för att skjuta tigern',
        zh_pinyin: 'Wān Gōng Shè Hǔ',
        zh_hans: '捋挤式',
      },
      description: {
        en: 'A roll-back and press combination: gather the opponent’s force by rolling back, then press both forearms forward into a bow stance.',
        sv: 'En kombination av rulla tillbaka och pressa: samla motståndarens kraft genom att rulla tillbaka, pressa sedan båda underarmarna framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'Step Up, Deflect, Parry and Punch',
        sv: 'Kliv fram, avled, parera och slå',
        zh_pinyin: 'Jìnbù Bānlánchuí',
        zh_hans: '进步搬拦捶',
      },
      description: {
        en: 'Stepping forward, deflect with the forearm, parry with the open hand, and drive a right fist forward into a bow stance.',
        sv: 'Kliv framåt, avled med underarmen, parera med öppen hand och driv höger näve framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: 'Apparent Close Up',
        sv: 'Skenbar stängning',
        zh_pinyin: 'Rúfēng Sìbì',
        zh_hans: '如封似闭',
      },
      description: {
        en: 'Cross the forearms to withdraw and neutralize, then settle and push both palms forward in a bow stance, sealing as if shutting a door.',
        sv: 'Korsa underarmarna för att dra tillbaka och neutralisera, sjunk sedan och tryck båda handflatorna framåt i bågställning, som att stänga en dörr.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: 'Open and Close Hands',
        sv: 'Öppna och slut händerna',
        zh_pinyin: 'Kāihé Shǒu',
        zh_hans: '开合手',
      },
      description: {
        en: 'A characteristic Sun-style movement: the palms face each other and draw apart to open, then close back together as the weight stays centered.',
        sv: 'En karakteristisk Sun-stilsrörelse: handflatorna vänds mot varandra och dras isär för att öppna, för att sedan slutas ihop medan tyngden hålls centrerad.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Single Whip — Slanting',
        sv: 'Enkelt piskslag — snett',
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'Step out to the side from the closed hands and extend into Single Whip on the diagonal, the right hand hooked behind and the left palm pressing out.',
        sv: 'Kliv ut åt sidan från de slutna händerna och sträck ut i enkelt piskslag på diagonalen, höger hand krokad bakom och vänster handflata som trycker ut.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 13,
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
      seq: 14,
      names: {
        en: 'Snake Creeps Down & Golden Rooster on One Leg',
        sv: 'Ormen kryper ned & gyllene tupp på ett ben',
        zh_pinyin: 'Dúlì Dǎ Hǔ',
        zh_hans: '独立打虎',
      },
      description: {
        en: 'Sink low along the leg, then rise to stand on one leg while a fist circles up overhead, striking the tiger from a single-leg balance.',
        sv: 'Sjunk lågt längs benet, res dig sedan på ett ben medan en näve cirklar upp över huvudet och slår tigern från enbensbalans.',
      },
      tags: ['stance', 'strike', 'transition'],
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
        en: 'Cross and open the hands, then kick out to the right with the heel leading and the arms extending to balance the strike.',
        sv: 'Korsa och öppna händerna, sparka sedan ut åt höger med hälen först och armarna utsträckta för att balansera sparken.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
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
      seq: 17,
      names: {
        en: 'Brush Knee and Punch Down',
        sv: 'Borsta knä och slå nedåt',
        zh_pinyin: 'Lōuxī Zāichuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'A Chen-style explosive punch: coil and store the energy, then release a sudden right fist forward as the rear hand pulls back to the hip.',
        sv: 'Ett explosivt slag i Chen-stil: spira och lagra kraften, släpp sedan loss en plötslig höger näve framåt medan den bakre handen dras tillbaka till höften.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: 'Hidden Hand Strike',
        sv: 'Dolt handslag',
        zh_pinyin: 'Yěmǎ Fēnzōng',
        zh_hans: '野马分鬃',
      },
      description: {
        en: 'Holding a ball, step into a bow stance and separate the hands — one arcing up to throat height, the other pressing down by the hip — like parting a wild horse’s mane.',
        sv: 'Håll en boll, kliv till bågställning och separera händerna — en bågar upp till halshöjd, den andra trycker ned vid höften — som att dela en vildhästs man.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Grasp the Peacock's Tail — Left",
        sv: 'Grip påfågelns stjärt — vänster',
        zh_pinyin: 'Zuǒ Lǎn Què Wěi',
        zh_hans: '左揽雀尾',
      },
      description: {
        en: 'The four-energy sequence mirrored to the left: ward-off, roll-back, press and push, flowing into a left bow stance.',
        sv: 'Fyrenergisekvensen speglad åt vänster: avvärja, rulla tillbaka, pressa och trycka, in i en vänster bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 20,
      names: {
        en: 'Fair Lady Works the Shuttles',
        sv: 'Vacker dam sköter skyttlarna',
        zh_pinyin: 'Yùnǚ Chuānsuō',
        zh_hans: '玉女穿梭',
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
        en: 'Step Back and Whirl Arms',
        sv: 'Kliv bakåt och virvla armarna',
        zh_pinyin: 'Dào Juǎngōng',
        zh_hans: '倒卷肱',
      },
      description: {
        en: 'Stepping backward, withdraw one hand to the hip while the other pushes forward at face height, retreating in a smooth coil repeated several times.',
        sv: 'Kliv bakåt, dra in en hand till höften medan den andra trycker framåt i ansiktshöjd, i en mjuk spiralrörelse bakåt som upprepas flera gånger.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: 'Push the Boat with the Current',
        sv: 'Skjut båten med strömmen',
        zh_pinyin: 'Tuī Zhōu Chū Liú',
        zh_hans: '右下势独立',
      },
      description: {
        en: 'Sink down low threading the right hand along the leg, then rise to stand on the right leg lifting the left knee and hand in a single-leg balance.',
        sv: 'Sjunk lågt och för höger hand längs benet, res dig sedan på höger ben och lyft vänster knä och hand i enbensbalans.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: 'Flashing Arms (Open the Fan)',
        sv: 'Blixtrande armar (öppna solfjädern)',
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
      seq: 24,
      names: {
        en: 'Cover Hand and Forearm Strike',
        sv: 'Täck handen och slå med underarmen',
        zh_pinyin: 'Yǎnshǒu Gōngchuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'A Chen-style fa-jin punch: coil to store energy in the waist, then release a fast right fist forward while the left hand withdraws to the flank.',
        sv: 'Ett fa-jin-slag i Chen-stil: spira för att lagra kraft i midjan, släpp sedan loss en snabb höger näve framåt medan vänster hand dras tillbaka till sidan.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: 'Six Sealings and Four Closings',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'A Chen-style sealing action: roll back to neutralize, then press and push both palms diagonally forward into a bow stance.',
        sv: 'En förseglande rörelse i Chen-stil: rulla tillbaka för att neutralisera, pressa och tryck sedan båda handflatorna snett framåt till bågställning.',
      },
      tags: ['hand-deflection', 'stance'],
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
        en: 'Single Whip again, the right hand hooked behind and the left palm pressing outward in a wide bow stance like a stretched whip.',
        sv: 'Enkelt piskslag igen, höger hand krokad bakom och vänster handflata som trycker utåt i en bred bågställning som en spänd piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 27,
      names: {
        en: 'Wave Hands Like Clouds',
        sv: 'Vinka händerna som moln',
        zh_pinyin: 'Yúnshǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Cloud Hands again: moving sideways, the hands trace continuous overlapping circles as the weight shifts smoothly from foot to foot.',
        sv: 'Molnhänder igen: med sidledes förflyttning ritar händerna kontinuerliga överlappande cirklar medan tyngden mjukt skiftar från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 13,
    },
    {
      seq: 28,
      names: {
        en: 'Pat the Horse and Thrust the Palm',
        sv: 'Klappa hästen och stöt med handflatan',
        zh_pinyin: 'Gāo Tàn Mǎ Chuān Zhǎng',
        zh_hans: '高探马穿掌',
      },
      description: {
        en: 'Draw into an empty stance patting forward like reaching over a tall horse, then thrust the left palm forward under the right elbow.',
        sv: 'Dra ihop till tom ställning och klappa framåt som att sträcka över en hög häst, stöt sedan vänster handflata framåt under höger armbåge.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: 'Turn and Cross-Sweep Kick',
        sv: 'Vänd och tvärsvepande spark',
        zh_pinyin: 'Shízìtuǐ',
        zh_hans: '十字腿',
      },
      description: {
        en: 'Turn the body, cross the hands, and sweep a kick out across the front with the sole, the arms opening to balance the sweep.',
        sv: 'Vrid kroppen, korsa händerna och svep en spark tvärs framåt med fotsulan medan armarna öppnas för att balansera svepet.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: 'Punch Down to the Groin',
        sv: 'Slå nedåt mot ljumsken',
        zh_pinyin: 'Jìnbù Zhǐdāngchuí',
        zh_hans: '进步指裆捶',
      },
      description: {
        en: 'Step forward into a bow stance, brush the knee with one hand, and drive a low right fist down toward the opponent’s lower body.',
        sv: 'Kliv framåt till bågställning, sopa knäet med en hand och driv en låg höger näve nedåt mot motståndarens underkropp.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: "Grasp the Peacock's Tail — Right",
        sv: 'Grip påfågelns stjärt — höger',
        zh_pinyin: 'Yòu Lǎn Què Wěi',
        zh_hans: '右揽雀尾',
      },
      description: {
        en: 'The four-energy sequence to the right again: ward-off, roll-back, press and push, settling into a right bow stance.',
        sv: 'Fyrenergisekvensen åt höger igen: avvärja, rulla tillbaka, pressa och trycka, in i en höger bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 32,
      names: {
        en: 'Single Whip — Low Posture',
        sv: 'Enkelt piskslag — låg ställning',
        zh_pinyin: 'Dānbiān Xiàshì',
        zh_hans: '单鞭下势',
      },
      description: {
        en: 'Form Single Whip then sink down low into a crouching stance, threading the left hand along the inside of the extended leg.',
        sv: 'Forma enkelt piskslag och sjunk sedan lågt i en hukande ställning, för vänster hand längs insidan av det utsträckta benet.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 33,
      names: {
        en: 'Golden Rooster Stands on One Leg (Left & Right)',
        sv: 'Gyllene tupp står på ett ben (vänster & höger)',
        zh_pinyin: 'Shàngbù Qī Xīng',
        zh_hans: '上步七星',
      },
      description: {
        en: 'Rise from the low posture to stand on one leg, lifting the opposite knee and hand, then step forward crossing the fists into a Seven Stars guard.',
        sv: 'Res dig från den låga ställningen och stå på ett ben, lyft motsatt knä och hand, kliv sedan framåt och korsa nävarna till ett sjustjärnsförsvar.',
      },
      tags: ['stance', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: 'Step Back to Ride the Tiger',
        sv: 'Kliv bakåt och rid på tigern',
        zh_pinyin: 'Tuìbù Kuà Hǔ',
        zh_hans: '退步跨虎',
      },
      description: {
        en: 'Step the rear foot back into an empty stance, the hands separating up and down to open the body as if straddling a tiger.',
        sv: 'Kliv den bakre foten tillbaka till tom ställning, händerna separeras uppåt och nedåt för att öppna kroppen som att grensla en tiger.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: 'Turn and Sweep the Lotus',
        sv: 'Vänd och svep lotusen',
        zh_pinyin: 'Zhuǎnshēn Bǎilián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: 'Turn the body in a wide spin and sweep the right leg across in a crescent arc, slapping the foot with both palms.',
        sv: 'Vrid kroppen i en bred snurr och svep höger ben tvärs i en halvmånebåge, och slå foten med båda handflatorna.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: 'Draw the Bow to Shoot the Tiger',
        sv: 'Spänn bågen för att skjuta tigern',
        zh_pinyin: 'Wāngōng Shèhǔ',
        zh_hans: '弯弓射虎',
      },
      description: {
        en: 'Land into a bow stance and swing both fists across to one side as if drawing a bow, one fist at temple height and the other at the chest.',
        sv: 'Landa i bågställning och svinga båda nävarna tvärs åt ena sidan som att spänna en båge, en näve i tinninghöjd och den andra vid bröstet.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: 'Left Brush Knee and Punch',
        sv: 'Vänster borsta knä och slå',
        zh_pinyin: 'Zuǒ Lōuxī Àobù',
        zh_hans: '左揽雀尾',
      },
      description: {
        en: 'A closing four-energy sequence to the left — ward-off, roll-back, press and push — gathering the form back toward center.',
        sv: 'En avslutande fyrenergisekvens åt vänster — avvärja, rulla tillbaka, pressa och trycka — som samlar formen mot mitten.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 19,
    },
    {
      seq: 38,
      names: {
        en: 'Deflect, Parry and Punch',
        sv: 'Avled, parera och slå',
        zh_pinyin: 'Jìnbù Bānlánchuí',
        zh_hans: '进步搬拦捶',
      },
      description: {
        en: 'Step forward again, deflect with the forearm, parry with the open hand, and drive the right fist forward into a bow stance.',
        sv: 'Kliv framåt igen, avled med underarmen, parera med öppen hand och driv höger näve framåt till bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 9,
    },
    {
      seq: 39,
      names: {
        en: 'Apparent Close Up',
        sv: 'Skenbar stängning',
        zh_pinyin: 'Rúfēng Sìbì',
        zh_hans: '如封似闭',
      },
      description: {
        en: 'Cross the forearms to withdraw and neutralize, then settle and push both palms forward in a bow stance, sealing as if shutting a door.',
        sv: 'Korsa underarmarna för att dra tillbaka och neutralisera, sjunk sedan och tryck båda handflatorna framåt i bågställning, som att stänga en dörr.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 10,
    },
    {
      seq: 40,
      names: {
        en: 'Open and Close Hands',
        sv: 'Öppna och slut händerna',
        zh_pinyin: 'Kāihé Shǒu',
        zh_hans: '开合手',
      },
      description: {
        en: 'The Sun-style open-and-close again: the palms face each other and draw apart, then close back together as the weight stays centered.',
        sv: 'Sun-stilens öppna-och-slut igen: handflatorna vänds mot varandra och dras isär, för att sedan slutas ihop medan tyngden hålls centrerad.',
      },
      tags: ['opening-closing', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 11,
    },
    {
      seq: 41,
      names: {
        en: 'Cross Hands',
        sv: 'Korsade händer',
        zh_pinyin: 'Shízìshǒu',
        zh_hans: '十字手',
      },
      description: {
        en: 'Turn and open the arms wide, then gather them inward to cross at the wrists in front of the chest, weight balanced over both feet.',
        sv: 'Vänd och öppna armarna brett, samla dem sedan inåt och korsa vid handlederna framför bröstet, med tyngden jämnt fördelad på båda fötterna.',
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: 'Closing Form',
        sv: 'Avslutande form',
        zh_pinyin: 'Shōushì',
        zh_hans: '收势',
      },
      description: {
        en: 'Turn the palms down and lower the hands to the sides, then draw the foot back together, returning to a calm standing posture to complete the form.',
        sv: 'Vänd handflatorna nedåt och sänk händerna längs sidorna, dra sedan tillbaka foten, och återgå till en lugn stående position för att avsluta formen.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
