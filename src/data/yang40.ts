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
          en: 'Part III: Descents & Closing',
          sv: 'Del III: Nedsänkningar & avslutning',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [29, 40],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 3 },
    { label: 'Shuttles', seq: 13 },
    { label: 'Cloud Hands', seq: 15 },
    { label: 'Kicks', seq: 18 },
    { label: 'Snake & Rooster', seq: 27 },
    { label: 'Closing', seq: 40 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: "Commencing Form",
        sv: "Inledande form",
        zh_pinyin: 'Qǐshì',
        zh_hans: '起势',
      },
      description: {
        en: "From a natural standing posture, step the left foot out shoulder-width, raise both arms forward to shoulder height, then sink the elbows and press the palms down as the knees soften.",
        sv: "Från naturligt stående, kliv ut med vänster fot till axelbredd, lyft båda armarna framåt till axelhöjd, sänk sedan armbågarna och tryck handflatorna nedåt medan knäna mjuknar.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Grasp the Bird's Tail",
        sv: "Grip fågelns stjärt",
        zh_pinyin: 'Lǎn Què Wěi',
        zh_hans: '揽雀尾',
      },
      description: {
        en: "Turn and shift weight to perform ward-off, roll-back, press and push in sequence, the core energy pattern of the form.",
        sv: "Vrid och flytta vikten för att utföra avvärjning, tillbakarullning, press och tryck i följd, formens centrala energimönster.",
      },
      tags: ['hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Single Whip",
        sv: "Enkelt piskslag",
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: "Form a hook hand to the rear while the front palm pushes outward, the arms opening wide across a broad bow stance.",
        sv: "Forma en krokhand bakåt medan den främre handflatan trycker utåt, armarna öppnas brett över en vid bågställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: "Raise Hands and Step Up",
        sv: "Lyft händerna och kliv fram",
        zh_pinyin: 'Tí Shǒu Shàng Shì',
        zh_hans: '提手上势',
      },
      description: {
        en: "Bring the hands together in front of the chest with the right foot on its heel, gathering energy as if pressing on an opponent.",
        sv: "För samman händerna framför bröstet med höger fot på hälen, samla energi som om man pressar mot en motståndare.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: "White Crane Spreads Its Wings",
        sv: "Vit trana sprider sina vingar",
        zh_pinyin: 'Bái Hè Liàng Chì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: "The right hand rises to guard above the head while the left hand sinks low, the body lifting on an empty front stance.",
        sv: "Höger hand stiger för att skydda ovanför huvudet medan vänster hand sjunker lågt, kroppen lyfter i en tom främre ställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: "Brush Knee and Twist Step",
        sv: "Borsta knät och vrid steget (upprepning)",
        zh_pinyin: 'Lǒu Xī Ǎo Bù',
        zh_hans: '搂膝拗步',
      },
      description: {
        en: "Repeat the knee-brushing deflection and forward palm push, advancing through successive bow stances.",
        sv: "Upprepa knäborstningens avledning och det främre handtrycket, och avancera genom flera bågställningar.",
      },
      tags: ['hand-deflection', 'strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Hands Strum the Lute",
        sv: "Händerna spelar luta",
        zh_pinyin: 'Shǒu Huī Pípá',
        zh_hans: '手挥琵琶',
      },
      description: {
        en: "Draw the hands together as if holding a lute, the front hand high and rear hand low, trapping an incoming arm.",
        sv: "För samman händerna som om man håller en luta, främre handen hög och bakre handen låg, för att fånga en inkommande arm.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "Deflect, Parry and Punch",
        sv: "Kliv fram, avled, parera och slå",
        zh_pinyin: 'Bān Lán Chuí',
        zh_hans: '搬拦捶',
      },
      description: {
        en: "Deflect with the forearm, parry with the open hand, then step in and deliver a forward fist strike.",
        sv: "Avled med underarmen, parera med den öppna handen, kliv sedan in och leverera ett framåtriktat knytnävsslag.",
      },
      tags: ['strike', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: "Apparent Close-Up / Withdraw and Push",
        sv: "Skenbar stängning / dra tillbaka och tryck",
        zh_pinyin: 'Rú Fēng Sì Bì',
        zh_hans: '如封似闭',
      },
      description: {
        en: "Cross and separate the wrists to neutralize a grab, draw back, then press both palms forward in a bow stance.",
        sv: "Korsa och separera handlederna för att neutralisera ett grepp, dra tillbaka och tryck sedan båda handflatorna framåt i en bågställning.",
      },
      tags: ['hand-deflection', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: "Slant Flying / Diagonal Flying",
        sv: "Snedflygning",
        zh_pinyin: 'Xié Fēi Shì',
        zh_hans: '斜飞势',
      },
      description: {
        en: "Split the arms apart on a diagonal, the upper hand flaring out and up as the body opens into a wide stance.",
        sv: "Dela armarna isär på diagonalen, den övre handen flammar ut och upp medan kroppen öppnas till en vid ställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Fist Under Elbow",
        sv: "Knytnäve under armbågen",
        zh_pinyin: 'Zhǒu Dǐ Chuí',
        zh_hans: '肘底捶',
      },
      description: {
        en: "Circle the hands and bring the rear fist beneath the front elbow on an empty stance, ready to strike upward.",
        sv: "Cirkla händerna och för den bakre knytnäven under den främre armbågen i en tom ställning, redo att slå uppåt.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: "Step Back and Repulse the Monkey",
        sv: "Kliv bakåt och driv bort apan",
        zh_pinyin: 'Dào Juǎn Gōng',
        zh_hans: '倒卷肱',
      },
      description: {
        en: "Retreat step by step, each time withdrawing one palm to the hip while the other pushes forward at chest height.",
        sv: "Reträtt steg för steg, varje gång dras ena handflatan till höften medan den andra trycker framåt i brösthöjd.",
      },
      tags: ['hand-deflection', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: "Fair Lady Works the Shuttles (Left & Right)",
        sv: "Vacker dam sköter skyttlarna (vänster & höger)",
        zh_pinyin: 'Zuǒyòu Chuānsuō',
        zh_hans: '左右穿梭',
      },
      description: {
        en: "In a bow stance one hand lifts to ward off overhead while the other pushes forward, turning to repeat on the opposite side like a weaver passing the shuttle.",
        sv: "I bågställning lyfts en hand för att avvärja ovanför medan den andra trycker framåt, och man vänder för att upprepa på motsatt sida likt en vävare som för skytteln.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: "Part the Wild Horse's Mane (Left & Right)",
        sv: "Dela vildhästens man (vänster & höger)",
        zh_pinyin: 'Zuǒyòu Yěmǎ Fēnzōng',
        zh_hans: '左右野马分鬃',
      },
      description: {
        en: "Holding a ball, step into a bow stance and separate the hands — one arcing up to throat height, the other pressing down by the hip. Repeated alternately to the left and right three times.",
        sv: "Håll en boll, kliv till bågställning och separera händerna — en bågar upp till halshöjd, den andra trycker ned vid höften. Upprepas omväxlande vänster och höger tre gånger.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: "Cloud Hands",
        sv: "Molnhänder",
        zh_pinyin: 'Yún Shǒu',
        zh_hans: '云手',
      },
      description: {
        en: "Circle the hands continuously in front of the body while side-stepping, the waist turning to drive the rotation.",
        sv: "Cirkla händerna kontinuerligt framför kroppen medan du sidsteg, midjan vrider för att driva rotationen.",
      },
      tags: ['cloud-hands', 'hand-deflection', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: "Single Whip",
        sv: "Enkelt piskslag",
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: "Form a hook hand to the rear while the front palm pushes outward, the arms opening wide across a broad bow stance.",
        sv: "Forma en krokhand bakåt medan den främre handflatan trycker utåt, armarna öppnas brett över en vid bågställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 17,
      names: {
        en: "High Pat on Horse",
        sv: "Klappa hästen högt",
        zh_pinyin: 'Gāo Tàn Mǎ',
        zh_hans: '高探马',
      },
      description: {
        en: "Draw the rear foot in and reach one palm forward over the other as if patting a tall horse, body upright.",
        sv: "Dra in den bakre foten och sträck ena handflatan framåt över den andra som för att klappa en hög häst, med upprätt kropp.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: "Kick with Right Heel",
        sv: "Sparka med höger häl",
        zh_pinyin: 'Yòu Dēng Jiǎo',
        zh_hans: '右蹬脚',
      },
      description: {
        en: "Cross and open the arms, then thrust the right heel forward in a controlled standing kick.",
        sv: "Korsa och öppna armarna och stöt sedan höger häl framåt i en kontrollerad stående spark.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Strike Opponent’s Ears with Both Fists",
        sv: "Slå motståndarens öron med båda nävarna",
        zh_pinyin: 'Shuāng Fēng Guàn Ěr',
        zh_hans: '双峰贯耳',
      },
      description: {
        en: "Step down and bring both fists in a wide arc toward the opponent’s temples in a pincer strike.",
        sv: "Kliv ned och för båda nävarna i en vid båge mot motståndarens tinningar i ett tångslag.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: "Separate Left Foot",
        sv: "Separera vänster fot",
        zh_pinyin: 'Zuǒ Fēn Jiǎo',
        zh_hans: '左分脚',
      },
      description: {
        en: "Cross the wrists again and kick the left toes out to the opposite diagonal, arms spreading wide for balance.",
        sv: "Korsa handlederna igen och sparka vänster tår ut mot motsatt diagonal, armarna sprids brett för balans.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: "Turn Body and Kick with Right Heel",
        sv: "Vrid kroppen och sparka med höger häl",
        zh_pinyin: 'Zhuǎn Shēn Yòu Dēng Jiǎo',
        zh_hans: '转身右蹬脚',
      },
      description: {
        en: "Turn fully on the supporting leg and drive the right heel forward, completing the heel-kick pair.",
        sv: "Vrid helt på stödbenet och driv höger häl framåt, och fullborda hälsparksparet.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: "Needle at Sea Bottom",
        sv: "Nål på havets botten",
        zh_pinyin: 'Hǎi Dǐ Zhēn',
        zh_hans: '海底针',
      },
      description: {
        en: "Bend forward and thrust the fingertips of one hand downward as if spearing toward the floor, releasing a grabbed wrist.",
        sv: "Böj framåt och stöt fingertopparna på ena handen nedåt som om man spetsar mot golvet, för att frigöra en gripen handled.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: "Fan Through the Back",
        sv: "Fläkt genom ryggen",
        zh_pinyin: 'Shǎn Tōng Bèi',
        zh_hans: '闪通背',
      },
      description: {
        en: "Rise and spread the arms like an opening fan, one hand lifting overhead while the other pushes forward.",
        sv: "Res dig och sprid armarna som en öppnande solfjäder, ena handen lyfter över huvudet medan den andra trycker framåt.",
      },
      tags: ['hand-deflection', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: "White Snake Spits Out Its Tongue",
        sv: "Vrid kroppen, vit orm spottar ut tungan",
        zh_pinyin: 'Báishé Tǔ Xìn',
        zh_hans: '白蛇吐信',
      },
      description: {
        en: "Spin the body and flick the back of the hand outward, then thrust the open palm forward like a snake’s tongue.",
        sv: "Snurra kroppen och knäpp baksidan av handen utåt, stöt sedan den öppna handflatan framåt som en ormtunga.",
      },
      tags: ['strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: "Slap the Right Foot",
        sv: "Klappa höger fot",
        zh_pinyin: 'Yòu Pāi Jiǎo',
        zh_hans: '右拍脚',
      },
      description: {
        en: "Raise the right knee and swing the right hand up to slap the top of the right foot at head height, the supporting leg rooted.",
        sv: "Lyft höger knä och sväng höger hand uppåt för att klappa höger fots ovansida i huvudhöjd, med stödbenet rotat.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: "Crouching Tiger (Left & Right)",
        sv: "Kröka tigern (vänster & höger)",
        zh_pinyin: 'Zuǒyòu Fú Hǔ Shì',
        zh_hans: '左右伏虎势',
      },
      description: {
        en: "Step across into a bow stance and strike with both fists in the tiger-taming posture — one fist high by the temple, the other low by the waist — repeated to the left and right.",
        sv: "Kliv över till bågställning och slå med båda nävarna i tigertämjande ställning — en näve högt vid tinningen, den andra lågt vid midjan — upprepat åt vänster och höger.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: "Snake Creeps Down — Right",
        sv: "Ormen kryper ned / hukande piskslag",
        zh_pinyin: 'Yòu Xià Shì',
        zh_hans: '右下势',
      },
      description: {
        en: "Sink deep into a low crouch, sliding the front palm down along the extended leg close to the floor.",
        sv: "Sjunk djupt ned i en låg huk och låt den främre handflatan glida ned längs det utsträckta benet nära golvet.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: "Golden Rooster Stands on One Leg",
        sv: "Gyllene tuppen står på ett ben (höger)",
        zh_pinyin: 'Jīnjī Dúlì',
        zh_hans: '金鸡独立',
      },
      description: {
        en: "Rise from the low stance lifting the right knee high with the right hand raised, balancing on one leg.",
        sv: "Res dig från den låga ställningen och lyft höger knä högt med höger hand upplyft, balanserande på ett ben.",
      },
      tags: ['stance', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: "Punch to the Groin",
        sv: "Borsta knät och slå motståndarens ljumske",
        zh_pinyin: 'Zhǐ Dāng Chuí',
        zh_hans: '指裆捶',
      },
      description: {
        en: "Step down, brush the knee aside and drive a low fist toward the opponent’s lower abdomen.",
        sv: "Kliv ned, borsta knät åt sidan och driv en låg knytnäve mot motståndarens nedre buk.",
      },
      tags: ['strike', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: "Grasp the Bird's Tail",
        sv: "Grip fågelns stjärt",
        zh_pinyin: 'Lǎn Què Wěi',
        zh_hans: '揽雀尾',
      },
      description: {
        en: "Turn and shift weight to perform ward-off, roll-back, press and push in sequence, the core energy pattern of the form.",
        sv: "Vrid och flytta vikten för att utföra avvärjning, tillbakarullning, press och tryck i följd, formens centrala energimönster.",
      },
      tags: ['hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 31,
      names: {
        en: "Single Whip",
        sv: "Enkelt piskslag",
        zh_pinyin: 'Dān Biān',
        zh_hans: '单鞭',
      },
      description: {
        en: "Form a hook hand to the rear while the front palm pushes outward, the arms opening wide across a broad bow stance.",
        sv: "Forma en krokhand bakåt medan den främre handflatan trycker utåt, armarna öppnas brett över en vid bågställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 32,
      names: {
        en: "Snake Creeps Down — Left",
        sv: "Ormen kryper ned / hukande piskslag",
        zh_pinyin: 'Zuǒ Xià Shì',
        zh_hans: '左下势',
      },
      description: {
        en: "Sink deep into a low crouch, sliding the front palm down along the extended leg close to the floor.",
        sv: "Sjunk djupt ned i en låg huk och låt den främre handflatan glida ned längs det utsträckta benet nära golvet.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: "Step Forward to Seven Stars",
        sv: "Kliv fram till de sju stjärnorna",
        zh_pinyin: 'Shàng Bù Qī Xīng',
        zh_hans: '上步七星',
      },
      description: {
        en: "Rise from the low stance and cross both fists in front of the chest with the front foot on its toes.",
        sv: "Res dig från den låga ställningen och korsa båda nävarna framför bröstet med den främre foten på tårna.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: "Step Back to Ride the Tiger",
        sv: "Kliv bakåt och rid på tigern",
        zh_pinyin: 'Tuì Bù Kuà Hǔ',
        zh_hans: '退步跨虎',
      },
      description: {
        en: "Step back and separate the hands, one rising overhead and one sinking low, weight back on an empty stance.",
        sv: "Kliv bakåt och separera händerna, en stiger över huvudet och en sjunker lågt, med vikten bak i en tom ställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: "Turn Body and Sweep Lotus",
        sv: "Vrid kroppen och svep lotus",
        zh_pinyin: 'Zhuǎn Shēn Bǎi Lián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: "Spin the body around and sweep the right foot in a wide outward crescent, the hands slapping the rising foot.",
        sv: "Snurra kroppen runt och svep höger fot i en vid utåtgående halvmåne, händerna klappar den stigande foten.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: "Bend the Bow and Shoot the Tiger",
        sv: "Spänn bågen och skjut tigern",
        zh_pinyin: 'Wān Gōng Shè Hǔ',
        zh_hans: '弯弓射虎',
      },
      description: {
        en: "Settle into a bow stance and draw both fists across the body as if drawing a bow, then strike forward.",
        sv: "Sätt dig i en bågställning och dra båda nävarna över kroppen som om man spänner en båge, och slå sedan framåt.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: "Deflect, Parry and Punch",
        sv: "Kliv fram, avled, parera och slå",
        zh_pinyin: 'Bān Lán Chuí',
        zh_hans: '搬拦捶',
      },
      description: {
        en: "Deflect with the forearm, parry with the open hand, then step in and deliver a forward fist strike.",
        sv: "Avled med underarmen, parera med den öppna handen, kliv sedan in och leverera ett framåtriktat knytnävsslag.",
      },
      tags: ['strike', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 8,
    },
    {
      seq: 38,
      names: {
        en: "Apparent Close-Up / Withdraw and Push",
        sv: "Skenbar stängning / dra tillbaka och tryck",
        zh_pinyin: 'Rú Fēng Sì Bì',
        zh_hans: '如封似闭',
      },
      description: {
        en: "Cross and separate the wrists to neutralize a grab, draw back, then press both palms forward in a bow stance.",
        sv: "Korsa och separera handlederna för att neutralisera ett grepp, dra tillbaka och tryck sedan båda handflatorna framåt i en bågställning.",
      },
      tags: ['hand-deflection', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 9,
    },
    {
      seq: 39,
      names: {
        en: "Cross Hands",
        sv: "Korslagda händer",
        zh_pinyin: 'Shí Zì Shǒu',
        zh_hans: '十字手',
      },
      description: {
        en: "Turn and bring the arms together crossed in front of the chest, weight even, closing this section of the form.",
        sv: "Vrid och för samman armarna korsade framför bröstet, med jämn vikt, för att avsluta denna del av formen.",
      },
      tags: ['opening-closing', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: "Closing of Tai Chi / Return to Origin",
        sv: "Tai Chi avslutning / återgång till ursprunget",
        zh_pinyin: 'Shōu Shì',
        zh_hans: '收势',
      },
      description: {
        en: "Lower the hands and press the palms gently down, returning the feet together and the mind to stillness.",
        sv: "Sänk händerna och tryck handflatorna mjukt nedåt, för fötterna samman igen och sinnet till stillhet.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
