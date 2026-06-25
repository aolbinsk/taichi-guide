import type { FormData } from '../types';

// Chen Style 56-Posture Competition Routine (陈式太极拳竞赛套路), compiled in
// 1989 by the Chinese Wushu Research Institute as a standardized competition
// taolu drawn from the traditional Chen old-frame (laojia) and new-frame
// (xinjia) routines. It preserves Chen-style hallmarks — silk-reeling (chan si),
// alternating soft coiling with explosive fa-jin, low stances and stamping.
// Officially organized into four sections (duan).
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'chen56',
    name: {
      en: 'Chen Style 56 — Competition Routine',
      sv: 'Chen-stil 56 — tävlingsform',
      zh_pinyin: 'Chénshì Tàijíquán Jìngsài Tàolù',
      zh_hans: '陈式太极拳竞赛套路',
    },
    parts: [
      {
        id: 'P1',
        label: {
          en: 'Section I',
          sv: 'Del I',
          zh_pinyin: 'Dì Yī Duàn',
          zh_hans: '第一段',
        },
        range: [1, 14],
      },
      {
        id: 'P2',
        label: {
          en: 'Section II',
          sv: 'Del II',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [15, 28],
      },
      {
        id: 'P3',
        label: {
          en: 'Section III',
          sv: 'Del III',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [29, 42],
      },
      {
        id: 'P4',
        label: {
          en: 'Section IV',
          sv: 'Del IV',
          zh_pinyin: 'Dì Sì Duàn',
          zh_hans: '第四段',
        },
        range: [43, 56],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 6 },
    { label: 'Fa-jin Punch', seq: 9 },
    { label: 'Cloud Hands', seq: 21 },
    { label: 'Kicks', seq: 29 },
    { label: 'Cannon Fists', seq: 47 },
    { label: 'Closing', seq: 56 },
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
        en: 'From a quiet upright stance, step the left foot out to shoulder width and slowly raise both arms forward to shoulder height, then sink and settle as the knees soften.',
        sv: 'Från lugnt upprätt ställning, kliv ut med vänster fot till axelbredd och lyft långsamt båda armarna framåt till axelhöjd, sjunk sedan och sätt dig medan knäna mjuknar.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: 'Buddha’s Warrior Attendant Pounds the Mortar',
        sv: 'Buddhas väktare stöter i mortel',
        zh_pinyin: 'Jīngāng Dǎo Duì',
        zh_hans: '金刚捣碓',
      },
      description: {
        en: 'A signature Chen opening: circle the hands and step forward, then lift the right knee and fist and stamp them down into the left palm with a grounded thud.',
        sv: 'En karakteristisk Chen-öppning: cirkla händerna och kliv framåt, lyft sedan höger knä och näve och stampa ned dem i vänster handflata med en jordad duns.',
      },
      tags: ['kick', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: 'Lazily Tying the Coat',
        sv: 'Lättjefullt knyta rocken',
        zh_pinyin: 'Lǎn Zhā Yī',
        zh_hans: '懒扎衣',
      },
      description: {
        en: 'Open into a wide right bow stance, the right palm sweeping outward to the side with the left hand resting at the waist, coiling silk-reeling energy through the arms.',
        sv: 'Öppna till en bred höger bågställning, höger handflata sveper utåt åt sidan med vänster hand vid midjan, och spinn silkesenergi genom armarna.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: 'Six Sealing and Four Closing',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'Roll back and gather both hands, then press and push down to the right front corner into a small stance, sealing off the opponent’s lines of attack.',
        sv: 'Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot höger främre hörn till en liten ställning, och försegla motståndarens angreppslinjer.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand forms a hooked beak pulling to the rear while the left palm threads out and opens to a wide left bow stance, the arms stretched like a whip.',
        sv: 'Höger hand formar en krok som drar bakåt medan vänster handflata trär ut och öppnar till en bred vänster bågställning, armarna sträckta som en piska.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: 'Block With the Body and Punch',
        sv: 'Blockera med kroppen och slå',
        zh_pinyin: 'Pīshēn Chuí',
        zh_hans: '劈身捶',
      },
      description: {
        en: 'Turn and drop into a side bow stance, the fists working to ward off and strike with a coiling, body-driven blow to the side.',
        sv: 'Vänd och sjunk till en sidobågställning, nävarna avvärjer och slår med ett spiralande, kroppsdrivet slag åt sidan.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: 'Twist Step on Both Sides',
        sv: 'Vridsteg på båda sidor',
        zh_pinyin: 'Zuǒyòu Ǎobù',
        zh_hans: '左右拗步',
      },
      description: {
        en: 'Advance in bow stances with the opposite hand and foot leading, one palm brushing past the knee while the other pushes forward, repeated to the left and right.',
        sv: 'Avancera i bågställningar med motsatt hand och fot ledande, en handflata sveper förbi knäet medan den andra trycker framåt, upprepat åt vänster och höger.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Wading Forward (Covering Hands)',
        sv: 'Vada framåt (täckande händer)',
        zh_pinyin: 'Yǎnshǒu Gōngbù',
        zh_hans: '掩手肱拳',
      },
      description: {
        en: 'Gather and coil, then step forward and cover with the hands before extending the body, preparing to release power along the arms.',
        sv: 'Samla och spinn, kliv sedan framåt och täck med händerna innan kroppen sträcks ut, redo att frigöra kraft längs armarna.',
      },
      tags: ['hand-deflection', 'stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'Hidden Hand Strike (Fa-jin Punch)',
        sv: 'Dolt handslag (fa-jin-slag)',
        zh_pinyin: 'Yǎnshǒu Hóng Chuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'A trademark Chen explosive release: coil and store, then snap the waist and shoot the right fist straight forward with sudden fa-jin power.',
        sv: 'Ett kännetecknande explosivt Chen-utbrott: spinn och lagra, snärta sedan med midjan och skjut höger näve rakt framåt med plötslig fa-jin-kraft.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: 'Punch of Draping Over the Body',
        sv: 'Slag draperat över kroppen',
        zh_pinyin: 'Piē Shēn Chuí',
        zh_hans: '撇身捶',
      },
      description: {
        en: 'Turn the waist and drape one fist over the body, twisting the torso to deliver a backfist-like strike off the turning power.',
        sv: 'Vrid midjan och drapera en näve över kroppen, vrid bålen för att leverera ett bakhandsliknande slag ur vridkraften.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: 'Green Dragon Comes Out of Water',
        sv: 'Grön drake kommer ur vattnet',
        zh_pinyin: 'Qīnglóng Chū Shuǐ',
        zh_hans: '青龙出水',
      },
      description: {
        en: 'Coil down and then surge, the fists flicking outward in quick succession like a dragon bursting up from the water.',
        sv: 'Spinn nedåt och bryt sedan fram, nävarna snärtar utåt i snabb följd som en drake som bryter upp ur vattnet.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Push With Both Hands',
        sv: 'Tryck med båda händerna',
        zh_pinyin: 'Shuāng Tuī Shǒu',
        zh_hans: '双推手',
      },
      description: {
        en: 'Gather both hands inward to neutralize, then step up and push both palms forward in a controlled, rooted advance.',
        sv: 'Samla båda händerna inåt för att neutralisera, kliv sedan upp och tryck båda handflatorna framåt i ett kontrollerat, rotat framsteg.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: 'Fist Under Elbow',
        sv: 'Näve under armbåge',
        zh_pinyin: 'Zhǒu Dǐ Chuí',
        zh_hans: '肘底捶',
      },
      description: {
        en: 'Draw into a small stance and tuck the right fist beneath the raised left elbow, hands poised to trap and counter.',
        sv: 'Dra ihop till en liten ställning och stoppa in höger näve under den lyfta vänstra armbågen, händerna redo att fånga och kontra.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: 'Step Back and Whirl Arms on Both Sides',
        sv: 'Kliv bakåt och virvla armarna på båda sidor',
        zh_pinyin: 'Dào Juǎn Gōng',
        zh_hans: '倒卷肱',
      },
      description: {
        en: 'Retreating step by step, the arms whirl in alternating backward circles, one hand withdrawing as the other rolls forward.',
        sv: 'Kliv bakåt steg för steg medan armarna virvlar i omväxlande bakåtcirklar, en hand dras tillbaka medan den andra rullar framåt.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: 'Step Back and Press the Elbow',
        sv: 'Kliv bakåt och pressa armbågen',
        zh_pinyin: 'Tuì Bù Yā Zhǒu',
        zh_hans: '退步压肘',
      },
      description: {
        en: 'Step back and press downward with the elbow and forearm, pinning an opponent’s arm while sinking the weight.',
        sv: 'Kliv bakåt och pressa nedåt med armbågen och underarmen, fastlås motståndarens arm medan tyngden sjunker.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Middle Winding',
        sv: 'Mittlindning',
        zh_pinyin: 'Zhōng Pán',
        zh_hans: '中盘',
      },
      description: {
        en: 'Coil the arms across the centre with silk-reeling circles, settling into a low rooted stance that gathers the energy inward.',
        sv: 'Spinn armarna över mitten med silkescirklar och sätt dig i en låg rotad ställning som samlar energin inåt.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Bái Hè Liàng Chì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'Shift back into an empty stance, the right hand rising to the temple and the left settling by the hip, opening like a crane spreading its wings.',
        sv: 'Skifta tillbaka till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och öppnar som en trana som breder ut vingarna.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: 'Brush Knee and Twist Step',
        sv: 'Borsta knä och vrid steg',
        zh_pinyin: 'Lōu Xī Ǎobù',
        zh_hans: '搂膝拗步',
      },
      description: {
        en: 'In a bow stance one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: 'Flash the Back',
        sv: 'Blixtra med ryggen',
        zh_pinyin: 'Shǎn Tōng Bèi',
        zh_hans: '闪通背',
      },
      description: {
        en: 'Thread the hands and turn sharply, spreading the arms open and connecting power through the back as the body whirls around.',
        sv: 'Trä händerna och vänd skarpt, sprid armarna öppna och förbind kraften genom ryggen medan kroppen virvlar runt.',
      },
      tags: ['strike', 'stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: 'Hidden Hand Strike (Fa-jin Punch)',
        sv: 'Dolt handslag (fa-jin-slag)',
        zh_pinyin: 'Yǎnshǒu Hóng Chuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'Coil and store the energy, then snap the waist and explode the right fist straight forward with sudden fa-jin power.',
        sv: 'Spinn och lagra energin, snärta sedan med midjan och explodera höger näve rakt framåt med plötslig fa-jin-kraft.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 9,
    },
    {
      seq: 21,
      names: {
        en: 'Six Sealing and Four Closing',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'Roll back and gather both hands, then press and push down to the right front corner, sealing off the opponent’s lines of attack.',
        sv: 'Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot höger främre hörn, och försegla motståndarens angreppslinjer.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 22,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand forms a hooked beak to the rear while the left palm threads out into a wide bow stance, the arms stretched like a whip.',
        sv: 'Höger hand formar en krok bakåt medan vänster handflata trär ut till en bred bågställning, armarna sträckta som en piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 5,
    },
    {
      seq: 23,
      names: {
        en: 'Wave Hands Like Clouds (to the Right)',
        sv: 'Vinka händerna som moln (åt höger)',
        zh_pinyin: 'Yún Shǒu (Xiàng Yòu)',
        zh_hans: '云手（向右）',
      },
      description: {
        en: 'Stepping sideways to the right, the hands trace continuous overlapping silk-reeling circles in front of the body as the weight shifts foot to foot.',
        sv: 'Med sidledes förflyttning åt höger ritar händerna kontinuerliga överlappande silkescirklar framför kroppen medan tyngden skiftar från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: 'Wave Hands Like Clouds (with Quick Steps)',
        sv: 'Vinka händerna som moln (med snabba steg)',
        zh_pinyin: 'Yún Shǒu (Kuài Bù)',
        zh_hans: '云手（快步）',
      },
      description: {
        en: 'The cloud-hands circles continue across the floor with brisk crossing steps, the arms coiling without pause.',
        sv: 'Molnhänder-cirklarna fortsätter över golvet med raska korsande steg, armarna spinner utan paus.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 23,
    },
    {
      seq: 25,
      names: {
        en: 'High Pat on Horse',
        sv: 'Klappa hästen högt',
        zh_pinyin: 'Gāo Tàn Mǎ',
        zh_hans: '高探马',
      },
      description: {
        en: 'Draw into a small stance, the right palm reaching forward over the upturned left hand at face height as if patting a tall horse.',
        sv: 'Dra ihop till en liten ställning, höger handflata sträcks framåt över den uppåtvända vänstra handen i ansiktshöjd som att klappa en hög häst.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: 'Right Heel Kick',
        sv: 'Höger hälspark',
        zh_pinyin: 'Yòu Dēng Yī Gēn',
        zh_hans: '右蹬一根',
      },
      description: {
        en: 'Open the fists and balance on the left leg, then drive the right heel out to the side with an explosive kicking release.',
        sv: 'Öppna nävarna och balansera på vänster ben, driv sedan höger häl ut åt sidan med ett explosivt sparkutbrott.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: 'Punch Toward the Ground',
        sv: 'Slag mot marken',
        zh_pinyin: 'Jī Dì Chuí',
        zh_hans: '击地捶',
      },
      description: {
        en: 'Step forward and bend the body low, driving the right fist down toward the ground while the left guards above.',
        sv: 'Kliv framåt och böj kroppen lågt, driv höger näve nedåt mot marken medan vänster vaktar ovanför.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: 'Turn Over and Double Kick',
        sv: 'Vänd och dubbelspark',
        zh_pinyin: 'Fān Shēn Èr Qǐ Jiǎo',
        zh_hans: '翻身二起脚',
      },
      description: {
        en: 'Turn the body over and leap up, slapping the right instep with the hand in mid-air for a jumping double kick.',
        sv: 'Vänd kroppen och hoppa upp, slå höger vrist med handen i luften för en hoppande dubbelspark.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: 'Protect the Heart With Fist',
        sv: 'Skydda hjärtat med näve',
        zh_pinyin: 'Hù Xīn Quán',
        zh_hans: '护心拳',
      },
      description: {
        en: 'Land and gather both fists in front of the chest in a low stance, coiling the body protectively before the next attack.',
        sv: 'Landa och samla båda nävarna framför bröstet i en låg ställning, och spinn kroppen skyddande inför nästa angrepp.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: 'Whirlwind Kick',
        sv: 'Virvelvindsspark',
        zh_pinyin: 'Xuán Fēng Jiǎo',
        zh_hans: '旋风脚',
      },
      description: {
        en: 'Spin the body in a full turn and swing the left leg around in a sweeping inside crescent kick, slapping it with the hand.',
        sv: 'Snurra kroppen ett helt varv och svinga vänster ben runt i en svepande inåtgående halvmånespark, och slå det med handen.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: 'Right Heel Kick',
        sv: 'Höger hälspark',
        zh_pinyin: 'Yòu Dēng Yī Gēn',
        zh_hans: '右蹬一根',
      },
      description: {
        en: 'Settle from the spin, then balance and drive the right heel out to the side again with an explosive kicking release.',
        sv: 'Sätt dig från snurren, balansera sedan och driv höger häl ut åt sidan igen med ett explosivt sparkutbrott.',
      },
      tags: ['kick', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 26,
    },
    {
      seq: 32,
      names: {
        en: 'Hidden Hand Strike (Fa-jin Punch)',
        sv: 'Dolt handslag (fa-jin-slag)',
        zh_pinyin: 'Yǎnshǒu Hóng Chuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'Coil and store, then snap the waist and explode the right fist straight forward with sudden fa-jin power.',
        sv: 'Spinn och lagra, snärta sedan med midjan och explodera höger näve rakt framåt med plötslig fa-jin-kraft.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 9,
    },
    {
      seq: 33,
      names: {
        en: 'Small Catching and Hitting',
        sv: 'Litet gripa och slå',
        zh_pinyin: 'Xiǎo Qín Dǎ',
        zh_hans: '小擒打',
      },
      description: {
        en: 'Catch and seize an incoming arm with both hands, then step in and strike, combining a small joint-lock with a close blow.',
        sv: 'Fånga och grip en inkommande arm med båda händerna, kliv sedan in och slå, och kombinera ett litet ledlås med ett nära slag.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: 'Embrace Head and Push Mountain',
        sv: 'Omfamna huvudet och tryck berget',
        zh_pinyin: 'Bào Tóu Tuī Shān',
        zh_hans: '抱头推山',
      },
      description: {
        en: 'Gather the hands by the head, then step forward into a bow stance and push both palms outward as if shoving a mountain.',
        sv: 'Samla händerna vid huvudet, kliv sedan framåt till bågställning och tryck båda handflatorna utåt som att knuffa ett berg.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: 'Three Changes of the Palm',
        sv: 'Tre handbyten',
        zh_pinyin: 'Sān Huàn Zhǎng',
        zh_hans: '三换掌',
      },
      description: {
        en: 'Exchange the palms three times in quick coiling rotations, each turn neutralizing and reissuing energy through the hands.',
        sv: 'Byt handflatorna tre gånger i snabba spiralrotationer, varje vändning neutraliserar och återutsänder energi genom händerna.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: 'Six Sealing and Four Closing',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'Roll back and gather both hands, then press and push down to the corner, sealing off the opponent’s lines of attack.',
        sv: 'Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot hörnet, och försegla motståndarens angreppslinjer.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 37,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand hooks to the rear while the left palm threads out into a wide bow stance, the arms stretched like a whip.',
        sv: 'Höger hand krokar bakåt medan vänster handflata trär ut till en bred bågställning, armarna sträckta som en piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 5,
    },
    {
      seq: 38,
      names: {
        en: 'Forward Trick (Front Trap)',
        sv: 'Främre fälla',
        zh_pinyin: 'Qián Zhāo',
        zh_hans: '前招',
      },
      description: {
        en: 'Shift the weight and lead the hands across to the front, setting up a forward deflecting trap to one side.',
        sv: 'Skifta tyngden och led händerna tvärs över till fronten, och ställ upp en framåtriktad avledande fälla åt ena sidan.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 39,
      names: {
        en: 'Backward Trick (Rear Trap)',
        sv: 'Bakre fälla',
        zh_pinyin: 'Hòu Zhāo',
        zh_hans: '后招',
      },
      description: {
        en: 'Turn and lead the hands to the other side, mirroring the previous trap to cover the rear angle.',
        sv: 'Vänd och led händerna till andra sidan, som spegling av föregående fälla för att täcka den bakre vinkeln.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: 'Part the Wild Horse’s Mane',
        sv: 'Dela vildhästens man',
        zh_pinyin: 'Yě Mǎ Fēn Zōng',
        zh_hans: '野马分鬃',
      },
      description: {
        en: 'Step into deep bow stances and separate the hands diagonally, one arm threading upward and outward like splitting a horse’s mane.',
        sv: 'Kliv till djupa bågställningar och separera händerna diagonalt, en arm trär uppåt och utåt som att dela en hästs man.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: 'Six Sealing and Four Closing',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'Roll back and gather, then press and push down to the corner once more, sealing off the opponent.',
        sv: 'Rulla tillbaka och samla, pressa och tryck sedan nedåt mot hörnet ännu en gång, och försegla motståndaren.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 42,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand hooks to the rear while the left palm opens out into a wide bow stance, the arms stretched like a whip.',
        sv: 'Höger hand krokar bakåt medan vänster handflata öppnar ut till en bred bågställning, armarna sträckta som en piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 5,
    },
    {
      seq: 43,
      names: {
        en: 'Jade Girl Works the Shuttles',
        sv: 'Jadeflickan sköter skyttlarna',
        zh_pinyin: 'Yùnǚ Chuān Suō',
        zh_hans: '玉女穿梭',
      },
      description: {
        en: 'Leap and step quickly across the floor, the hands warding off and pushing forward in succession like a weaver passing the shuttle.',
        sv: 'Hoppa och kliv snabbt över golvet, händerna avvärjer och trycker framåt i följd likt en vävare som för skytteln.',
      },
      tags: ['hand-deflection', 'strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 44,
      names: {
        en: 'Swing Foot and Lotus Kick',
        sv: 'Svinga foten och lotusspark',
        zh_pinyin: 'Bǎi Jiǎo Diē Chā',
        zh_hans: '摆脚跌叉',
      },
      description: {
        en: 'Swing the right foot across in an outward lotus kick slapping both hands, then drop down into a full split stance.',
        sv: 'Svinga höger fot tvärs över i en utåtgående lotusspark som slår mot båda händerna, släpp dig sedan ned till en full spagatställning.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 45,
      names: {
        en: 'Golden Rooster Stands on One Leg',
        sv: 'Gyllene tupp står på ett ben',
        zh_pinyin: 'Jīn Jī Dú Lì',
        zh_hans: '金鸡独立',
      },
      description: {
        en: 'Rise from the split to balance on one leg, lifting the opposite knee and hand high, then repeat on the other side.',
        sv: 'Res dig från spagaten och balansera på ett ben, lyft motsatt knä och hand högt, och upprepa sedan på andra sidan.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 46,
      names: {
        en: 'Step Back and Whirl Arms on Both Sides',
        sv: 'Kliv bakåt och virvla armarna på båda sidor',
        zh_pinyin: 'Dào Juǎn Gōng',
        zh_hans: '倒卷肱',
      },
      description: {
        en: 'Retreating step by step, the arms whirl in alternating backward circles, one hand withdrawing as the other rolls forward.',
        sv: 'Kliv bakåt steg för steg medan armarna virvlar i omväxlande bakåtcirklar, en hand dras tillbaka medan den andra rullar framåt.',
      },
      tags: ['hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 14,
    },
    {
      seq: 47,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Bái Hè Liàng Chì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'Shift back into an empty stance, the right hand rising to the temple and the left settling by the hip, opening like a crane.',
        sv: 'Skifta tillbaka till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och öppnar som en trana.',
      },
      tags: ['stance', 'opening-closing', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 17,
    },
    {
      seq: 48,
      names: {
        en: 'Brush Knee and Twist Step',
        sv: 'Borsta knä och vrid steg',
        zh_pinyin: 'Lōu Xī Ǎobù',
        zh_hans: '搂膝拗步',
      },
      description: {
        en: 'In a bow stance one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height.',
        sv: 'I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 18,
    },
    {
      seq: 49,
      names: {
        en: 'Flash the Back',
        sv: 'Blixtra med ryggen',
        zh_pinyin: 'Shǎn Tōng Bèi',
        zh_hans: '闪通背',
      },
      description: {
        en: 'Thread the hands and turn sharply, spreading the arms open and connecting power through the back as the body whirls around.',
        sv: 'Trä händerna och vänd skarpt, sprid armarna öppna och förbind kraften genom ryggen medan kroppen virvlar runt.',
      },
      tags: ['strike', 'stance', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 19,
    },
    {
      seq: 50,
      names: {
        en: 'Hidden Hand Strike (Fa-jin Punch)',
        sv: 'Dolt handslag (fa-jin-slag)',
        zh_pinyin: 'Yǎnshǒu Hóng Chuí',
        zh_hans: '掩手肱捶',
      },
      description: {
        en: 'Coil and store, then snap the waist and explode the right fist straight forward with sudden fa-jin power.',
        sv: 'Spinn och lagra, snärta sedan med midjan och explodera höger näve rakt framåt med plötslig fa-jin-kraft.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 9,
    },
    {
      seq: 51,
      names: {
        en: 'Six Sealing and Four Closing',
        sv: 'Sex förseglingar och fyra stängningar',
        zh_pinyin: 'Liù Fēng Sì Bì',
        zh_hans: '六封四闭',
      },
      description: {
        en: 'Roll back and gather both hands, then press and push down to the corner, sealing off the opponent’s lines of attack.',
        sv: 'Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot hörnet, och försegla motståndarens angreppslinjer.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 4,
    },
    {
      seq: 52,
      names: {
        en: 'Single Whip',
        sv: 'Enkelt piskslag',
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand hooks to the rear while the left palm threads out into a wide bow stance, the arms stretched like a whip.',
        sv: 'Höger hand krokar bakåt medan vänster handflata trär ut till en bred bågställning, armarna sträckta som en piska.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 5,
    },
    {
      seq: 53,
      names: {
        en: 'Wave Hands Like Clouds',
        sv: 'Vinka händerna som moln',
        zh_pinyin: 'Yún Shǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Moving sideways, the hands trace continuous overlapping silk-reeling circles in front of the body as the weight shifts foot to foot.',
        sv: 'Med sidledes förflyttning ritar händerna kontinuerliga överlappande silkescirklar framför kroppen medan tyngden skiftar från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 23,
    },
    {
      seq: 54,
      names: {
        en: 'Wrap Firecrackers',
        sv: 'Linda smällare',
        zh_pinyin: 'Guǒ Biān Pào',
        zh_hans: '裹鞭炮',
      },
      description: {
        en: 'Wrap both fists inward then burst them outward together with a sharp double fa-jin release, like firecrackers going off.',
        sv: 'Linda båda nävarna inåt och brist dem sedan utåt tillsammans med ett skarpt dubbelt fa-jin-utbrott, som smällare som exploderar.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 55,
      names: {
        en: 'Cannon Right Overhead',
        sv: 'Kanon över huvudet',
        zh_pinyin: 'Dāng Tóu Pào',
        zh_hans: '当头炮',
      },
      description: {
        en: 'Gather and load, then drive both fists forward and upward together in an explosive cannon-like strike toward the head.',
        sv: 'Samla och ladda, driv sedan båda nävarna framåt och uppåt tillsammans i ett explosivt kanonliknande slag mot huvudet.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 56,
      names: {
        en: 'Buddha’s Warrior Attendant Pounds the Mortar & Closing Form',
        sv: 'Buddhas väktare stöter i mortel & avslutande form',
        zh_pinyin: 'Jīngāng Dǎo Duì, Shōushì',
        zh_hans: '金刚捣碓、收势',
      },
      description: {
        en: 'Repeat the mortar-pounding stamp to gather the energy, then lower the hands, draw the feet together and settle back to a quiet standing posture to close the form.',
        sv: 'Upprepa mortelstampningen för att samla energin, sänk sedan händerna, dra ihop fötterna och återgå till en lugn stående position för att avsluta formen.',
      },
      tags: ['kick', 'strike', 'opening-closing', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
  ],
};
