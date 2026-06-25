import type { FormData } from '../types';

// Yang Style 24-Posture Simplified Form (Beijing / "Simplified Taijiquan"),
// standardized by the Chinese Sports Commission in 1956. The most widely
// practiced Tai Chi routine in the world. Posture order is fixed and uniform
// across lineages, which makes this a high-confidence dataset.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'yang24',
    name: {
      en: 'Yang Style 24 — Simplified Form',
      sv: 'Yang-stil 24 — förenklad form',
      zh_pinyin: 'Èrshísì Shì Tàijíquán',
      zh_hans: '二十四式太极拳',
    },
    parts: [
      {
        id: 'P1',
        label: {
          en: 'Part I: Opening',
          sv: 'Del I: Öppning',
          zh_pinyin: 'Dì Yī Duàn',
          zh_hans: '第一段',
        },
        range: [1, 9],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Cloud Hands & Kicks',
          sv: 'Del II: Molnhänder & sparkar',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [10, 17],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Shuttles & Closing',
          sv: 'Del III: Skyttlar & avslutning',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [18, 24],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 9 },
    { label: 'Cloud Hands', seq: 10 },
    { label: 'Kicks', seq: 13 },
    { label: 'Shuttles', seq: 18 },
    { label: 'Closing', seq: 24 },
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
        en: "Part the Wild Horse's Mane (Left & Right)",
        sv: 'Dela vildhästens man (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Yěmǎ Fēnzōng',
        zh_hans: '左右野马分鬃',
      },
      description: {
        en: 'Holding a ball, step into a bow stance and separate the hands — one arcing up to throat height, the other pressing down by the hip. Repeated alternately to the left and right three times.',
        sv: 'Håll en boll, kliv till bågställning och separera händerna — en bågar upp till halshöjd, den andra trycker ned vid höften. Upprepas omväxlande vänster och höger tre gånger.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
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
      seq: 4,
      names: {
        en: 'Brush Knee and Twist Step (Left & Right)',
        sv: 'Borsta knä och vrid steg (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Lōuxī Àobù',
        zh_hans: '左右搂膝拗步',
      },
      description: {
        en: 'In a bow stance, one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height. Repeated alternately three times.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd. Upprepas omväxlande tre gånger.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
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
      seq: 6,
      names: {
        en: 'Repulse the Monkey (Left & Right)',
        sv: 'Driv tillbaka apan (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Dào Juǎngōng',
        zh_hans: '左右倒卷肱',
      },
      description: {
        en: 'Stepping backward, withdraw one hand to the hip while the other pushes forward at face height, retreating in a smooth coil. Repeated four times.',
        sv: 'Kliv bakåt, dra in en hand till höften medan den andra trycker framåt i ansiktshöjd, i en mjuk spiralrörelse bakåt. Upprepas fyra gånger.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Grasp the Peacock's Tail — Left",
        sv: 'Grip påfågelns stjärt — vänster',
        zh_pinyin: 'Zuǒ Lǎn Què Wěi',
        zh_hans: '左揽雀尾',
      },
      description: {
        en: 'The signature sequence to the left: ward-off (peng), roll-back (lü), press (ji) and push (an), flowing through the four primary energies in a left bow stance.',
        sv: 'Den karakteristiska sekvensen åt vänster: avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an), genom de fyra grundenergierna i vänster bågställning.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "Grasp the Peacock's Tail — Right",
        sv: 'Grip påfågelns stjärt — höger',
        zh_pinyin: 'Yòu Lǎn Què Wěi',
        zh_hans: '右揽雀尾',
      },
      description: {
        en: 'The same ward-off, roll-back, press and push sequence performed as a mirror image to the right side.',
        sv: 'Samma sekvens av avvärja, rulla tillbaka, pressa och trycka, utförd som spegelbild åt höger sida.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
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
      seq: 10,
      names: {
        en: 'Wave Hands Like Clouds',
        sv: 'Vinka händerna som moln',
        zh_pinyin: 'Yúnshǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Moving sideways, the hands trace continuous overlapping circles in front of the body as the weight shifts from foot to foot. Performed three times.',
        sv: 'Med sidledes förflyttning ritar händerna kontinuerliga överlappande cirklar framför kroppen medan tyngden skiftar från fot till fot. Utförs tre gånger.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
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
      repeatOf: 9,
    },
    {
      seq: 12,
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
      seq: 13,
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
      seq: 14,
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
      seq: 15,
      names: {
        en: 'Turn and Heel Kick — Left',
        sv: 'Vänd och hälspark — vänster',
        zh_pinyin: 'Zhuǎnshēn Zuǒ Dēngjiǎo',
        zh_hans: '转身左蹬脚',
      },
      description: {
        en: 'Turn the body, cross the hands, and deliver a left heel kick to the front corner, mirroring the earlier right kick.',
        sv: 'Vrid kroppen, korsa händerna och utför en vänster hälspark mot främre hörnet, som spegling av den tidigare högra sparken.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Snake Creeps Down & Golden Rooster — Left',
        sv: 'Ormen kryper ned & gyllene tupp — vänster',
        zh_pinyin: 'Zuǒ Xiàshì Dúlì',
        zh_hans: '左下势独立',
      },
      description: {
        en: 'Sink low into a crouching stance threading the left hand along the leg (Snake Creeps Down), then rise to stand on the left leg lifting the right knee and hand (Golden Rooster Stands on One Leg).',
        sv: 'Sjunk lågt i en hukande ställning och för vänster hand längs benet (ormen kryper ned), res dig sedan på vänster ben och lyft höger knä och hand (gyllene tupp står på ett ben).',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: 'Snake Creeps Down & Golden Rooster — Right',
        sv: 'Ormen kryper ned & gyllene tupp — höger',
        zh_pinyin: 'Yòu Xiàshì Dúlì',
        zh_hans: '右下势独立',
      },
      description: {
        en: 'The mirror of the previous posture: sink down threading the right hand, then rise to stand on the right leg lifting the left knee.',
        sv: 'Spegling av föregående position: sjunk ned och för höger hand, res dig sedan på höger ben och lyft vänster knä.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
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
      seq: 19,
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
      seq: 20,
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
      seq: 21,
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
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
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
      seq: 23,
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
      seq: 24,
      names: {
        en: 'Closing Form',
        sv: 'Avslutande form',
        zh_pinyin: 'Shōushì',
        zh_hans: '收势',
      },
      description: {
        en: 'Turn the palms down and lower the hands to the sides, then draw the left foot back together, returning to a calm standing posture to complete the form.',
        sv: 'Vänd handflatorna nedåt och sänk händerna längs sidorna, dra sedan tillbaka vänster fot, och återgå till en lugn stående position för att avsluta formen.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
