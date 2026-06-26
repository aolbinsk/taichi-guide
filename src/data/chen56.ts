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
    { label: "Start", seq: 1 },
    { label: "Green Dragon", seq: 15 },
    { label: "White Ape", seq: 29 },
    { label: "Punch Toward", seq: 43 },
    { label: 'Closing', seq: 56 },
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
        en: "From a quiet upright stance, step the left foot out to shoulder width and slowly raise both arms forward to shoulder height, then sink and settle as the knees soften.",
        sv: "Från en lugn upprätt ställning, kliv ut med vänster fot till axelbredd och lyft långsamt båda armarna framåt till axelhöjd, sjunk sedan och sätt dig medan knäna mjuknar.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Right Buddha's Warrior Attendant Pounds the Mortar",
        sv: "Höger Buddhas väktare stöter i mortel",
        zh_pinyin: "Yòu Jīngāng Dǎo Duì",
        zh_hans: '右金刚捣碓',
      },
      description: {
        en: "Circle the hands and step forward, then lift the right knee and fist and stamp them down into the left palm with a grounded thud in this signature Chen opening.",
        sv: "Cirkla händerna och kliv framåt, lyft sedan höger knä och näve och stampa ned dem i vänster handflata med en jordad duns i denna karakteristiska Chen-öppning.",
      },
      tags: ['kick', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Lazily Tying the Coat",
        sv: "Lättjefullt knyta rocken",
        zh_pinyin: "Lǎn Zā Yī",
        zh_hans: '揽扎衣',
      },
      description: {
        en: "Open into a wide right bow stance, the right palm sweeping outward to the side with the left hand resting at the waist, coiling silk-reeling energy through the arms.",
        sv: "Öppna till en bred höger bågställning, höger handflata sveper utåt åt sidan med vänster hand vid midjan, och spinn silkesenergi genom armarna.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: "Right Six Sealing and Four Closing",
        sv: "Höger sex förseglingar och fyra stängningar",
        zh_pinyin: "Yòu Liù Fēng Sì Bì",
        zh_hans: '右六封四闭',
      },
      description: {
        en: "Roll back and gather both hands, then press and push down toward the right front corner into a small stance, sealing off the opponent's lines of attack.",
        sv: "Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot höger främre hörn till en liten ställning, och försegla motståndarens angreppslinjer.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: "Left Single Whip",
        sv: "Vänster enkelt piskslag",
        zh_pinyin: "Zuǒ Dān Biān",
        zh_hans: '左单鞭',
      },
      description: {
        en: "The right hand forms a hooked beak pulling to the rear while the left palm threads out and opens into a wide left bow stance, the arms stretched like a whip.",
        sv: "Höger hand formar en krok som drar bakåt medan vänster handflata trär ut och öppnar till en bred vänster bågställning, armarna sträckta som en piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: "Deflect, Parry and Punch",
        sv: "Avled, parera och slå",
        zh_pinyin: "Bān Lán Chuí",
        zh_hans: '搬拦捶',
      },
      description: {
        en: "Turn the body to deflect and parry with the hands, then drive the right fist forward into a left bow stance along the centerline.",
        sv: "Vrid kroppen för att avleda och parera med händerna, driv sedan höger näve framåt till en vänster bågställning längs mittlinjen.",
      },
      tags: ['hand-deflection', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Protect the Heart with Fist",
        sv: "Skydda hjärtat med näven",
        zh_pinyin: "Hù Xīn Chuí",
        zh_hans: '护心捶',
      },
      description: {
        en: "Coil both fists across the chest in a circling motion, drawing them inward to guard the centerline while turning down into a stable horse stance.",
        sv: "Vira båda nävarna över bröstet i en cirklande rörelse, dra in dem för att skydda mittlinjen medan du vrider ned i en stadig hästställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "White Crane Spreads Its Wings",
        sv: "Vit trana brer ut vingarna",
        zh_pinyin: "Bái Hè Liàng Chì",
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: "Separate the hands, raising the right palm high and pressing the left palm down, settling the weight onto the right leg with the left toe touching lightly.",
        sv: "Skilj händerna åt, lyft höger handflata högt och tryck vänster handflata nedåt, och flytta tyngden till höger ben med vänster tå lätt nuddande.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: "Walk Obliquely with Twist Step",
        sv: "Gå snett med vriden gång",
        zh_pinyin: "Xié Xíng Ǎo Bù",
        zh_hans: '斜行拗步',
      },
      description: {
        en: "Step diagonally into a bow stance, the left hand forming a hook at the rear while the right palm pushes outward to the front corner with a coiling twist.",
        sv: "Kliv diagonalt till en bågställning, vänster hand formar en krok bakåt medan höger handflata trycker utåt mot främre hörnet med en spinnande vridning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: "Lift and Retract",
        sv: "Lyft och dra in",
        zh_pinyin: "Tí Shōu",
        zh_hans: '提收',
      },
      description: {
        en: "Gather both palms inward and upward as the right knee lifts, retracting the weight back to close and concentrate the energy at the center.",
        sv: "Samla båda handflatorna inåt och uppåt medan höger knä lyfts, dra tillbaka tyngden för att sluta och koncentrera energin i centrum.",
      },
      tags: ['transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Wade Forward",
        sv: "Vada framåt",
        zh_pinyin: "Qián Tāng",
        zh_hans: '前趟',
      },
      description: {
        en: "Open both arms and wade the feet sideways step by step into a wide horse stance, the palms spreading outward to the sides.",
        sv: "Öppna båda armarna och vada med fötterna i sidled steg för steg till en bred hästställning, handflatorna sprider sig utåt åt sidorna.",
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: "Left Hidden Hand Punch",
        sv: "Vänster dold hand-näve",
        zh_pinyin: "Zuǒ Yǎn Shǒu Gōng Quán",
        zh_hans: '左掩手肱拳',
      },
      description: {
        en: "Store the left fist at the waist, then release it in an explosive fa-jin punch straight forward as the waist snaps and the right hand recoils back.",
        sv: "Lagra vänster näve vid midjan, släpp den sedan i ett explosivt fa-jin-slag rakt framåt medan midjan snärtar och höger hand rycker tillbaka.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: "Punch Draping Over the Body",
        sv: "Slå draperad över kroppen",
        zh_pinyin: "Pī Shēn Chuí",
        zh_hans: '披身捶',
      },
      description: {
        en: "Turn and drop into a side bow stance, the fists coiling to ward off and strike with a body-driven blow angled across the side.",
        sv: "Vrid och sjunk ned i en sidobågställning, nävarna virar för att avvärja och slå med ett kroppsdrivet hugg vinklat tvärs över sidan.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: "Back Folding and Leaning",
        sv: "Vika ryggen och luta",
        zh_pinyin: "Bèi Zhé Kào",
        zh_hans: '背折靠',
      },
      description: {
        en: "Fold the upper body and lean the back and shoulder outward into the opponent, issuing a short shoulder-stroke from the bow stance.",
        sv: "Vik överkroppen och luta ryggen och axeln utåt mot motståndaren, och avge en kort axelstöt från bågställningen.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: "Green Dragon Comes Out of Water",
        sv: "Grön drake stiger ur vattnet",
        zh_pinyin: "Qīng Lóng Chū Shuǐ",
        zh_hans: '青龙出水',
      },
      description: {
        en: "Coil and then snap the right fist outward and downward with a sharp fa-jin, the left hand recoiling to the waist over a horse stance.",
        sv: "Vira och snärta sedan höger näve utåt och nedåt med ett skarpt fa-jin, vänster hand rycker tillbaka till midjan över en hästställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: "Chop with Hand",
        sv: "Hugga med handen",
        zh_pinyin: "Zhǎn Shǒu",
        zh_hans: '斩手',
      },
      description: {
        en: "Raise the right hand and chop it sharply down onto the left palm with a stamping step, cutting straight through the centerline.",
        sv: "Lyft höger hand och hugg den skarpt nedåt i vänster handflata med ett stampande steg, och skär rakt genom mittlinjen.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: "Turn Flowers and Wave Sleeves",
        sv: "Vända blommor och vifta med ärmarna",
        zh_pinyin: "Fān Huā Wǔ Xiù",
        zh_hans: '翻花舞袖',
      },
      description: {
        en: "Spin the body around, swinging both arms in large circling arcs like waving sleeves, then settle the weight into a stable stance.",
        sv: "Snurra kroppen runt och sväng båda armarna i stora cirklande bågar som viftande ärmar, och sätt sedan tyngden i en stadig ställning.",
      },
      tags: ['transition', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: "Turn Flowers from the Sea Bottom",
        sv: "Vända blommor från havsbotten",
        zh_pinyin: "Hǎi Dǐ Fān Huā",
        zh_hans: '海底翻花',
      },
      description: {
        en: "Circle both fists upward from below while lifting the right knee, coiling the arms in an upward spiraling flourish from the lower gate.",
        sv: "Cirkla båda nävarna uppåt nedifrån medan höger knä lyfts, och vira armarna i en uppåtgående spiralande utsmyckning från den nedre porten.",
      },
      tags: ['transition', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Right Hidden Hand Punch",
        sv: "Höger dold hand-näve",
        zh_pinyin: "Yòu Yǎn Shǒu Gōng Quán",
        zh_hans: '右掩手肱拳',
      },
      description: {
        en: "Store the right fist at the waist, then release it in an explosive fa-jin punch straight forward as the waist snaps and the left hand recoils back.",
        sv: "Lagra höger näve vid midjan, släpp den sedan i ett explosivt fa-jin-slag rakt framåt medan midjan snärtar och vänster hand rycker tillbaka.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: "Left Six Sealing and Four Closing",
        sv: "Vänster sex förseglingar och fyra stängningar",
        zh_pinyin: "Zuǒ Liù Fēng Sì Bì",
        zh_hans: '左六封四闭',
      },
      description: {
        en: "Roll back and gather both hands, then press and push down toward the left front corner into a small stance, sealing off the lines of attack.",
        sv: "Rulla tillbaka och samla båda händerna, pressa och tryck sedan nedåt mot vänster främre hörn till en liten ställning, och försegla angreppslinjerna.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: "Right Single Whip",
        sv: "Höger enkelt piskslag",
        zh_pinyin: "Yòu Dān Biān",
        zh_hans: '右单鞭',
      },
      description: {
        en: "The left hand forms a hooked beak pulling to the rear while the right palm threads out and opens into a wide right bow stance, the arms stretched like a whip.",
        sv: "Vänster hand formar en krok som drar bakåt medan höger handflata trär ut och öppnar till en bred höger bågställning, armarna sträckta som en piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: "Right Wave Hands Like Clouds",
        sv: "Höger molnhänder",
        zh_pinyin: "Yòu Yún Shǒu",
        zh_hans: '右云手',
      },
      description: {
        en: "Shift the weight from side to side, the hands circling continuously in front of the body like rolling clouds while stepping to the right.",
        sv: "Flytta tyngden från sida till sida, händerna cirklar oavbrutet framför kroppen som rullande moln medan du kliver åt höger.",
      },
      tags: ['cloud-hands', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: "Left Wave Hands Like Clouds",
        sv: "Vänster molnhänder",
        zh_pinyin: "Zuǒ Yún Shǒu",
        zh_hans: '左云手',
      },
      description: {
        en: "Continue the circling cloud-hand motion, stepping to the left as the palms coil one over the other across the centerline.",
        sv: "Fortsätt den cirklande molnhandsrörelsen och kliv åt vänster medan handflatorna virar den ena över den andra över mittlinjen.",
      },
      tags: ['cloud-hands', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: "High Pat on Horse",
        sv: "Klappa hästen högt",
        zh_pinyin: "Gāo Tàn Mǎ",
        zh_hans: '高探马',
      },
      description: {
        en: "Turn and extend the right palm forward at head height while the left hand draws back to the waist, rising tall over a forward stance.",
        sv: "Vänd och sträck höger handflata framåt i huvudhöjd medan vänster hand dras tillbaka till midjan, och res dig hög över en främre ställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: "Right Continuous Cannon",
        sv: "Höger sammanhängande kanon",
        zh_pinyin: "Yòu Lián Zhū Pào",
        zh_hans: '右连珠炮',
      },
      description: {
        en: "Advance with repeated press-and-push cannon strikes, both hands driving forward in quick successive bursts of fa-jin to the right.",
        sv: "Avancera med upprepade press-och-tryck-kanonslag, båda händerna driver framåt i snabba på varandra följande fa-jin-utbrott åt höger.",
      },
      tags: ['strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: "Left Continuous Cannon",
        sv: "Vänster sammanhängande kanon",
        zh_pinyin: "Zuǒ Lián Zhū Pào",
        zh_hans: '左连珠炮',
      },
      description: {
        en: "Mirror the continuous cannon to the left, stepping forward and issuing repeated rolling press-and-push strikes with both hands.",
        sv: "Spegla den sammanhängande kanonen åt vänster, kliv framåt och avge upprepade rullande press-och-tryck-slag med båda händerna.",
      },
      tags: ['strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: "Flash Through the Back",
        sv: "Blixt genom ryggen",
        zh_pinyin: "Shǎn Tōng Bì",
        zh_hans: '闪通臂',
      },
      description: {
        en: "Turn the body sharply through the spine, sweeping one arm down and back as the other extends, threading power across the back.",
        sv: "Vrid kroppen skarpt genom ryggraden, svep en arm nedåt och bakåt medan den andra sträcks ut, och trä kraften tvärs över ryggen.",
      },
      tags: ['transition', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: "Punch to the Crotch",
        sv: "Slag mot skrevet",
        zh_pinyin: "Zhǐ Dāng Chuí",
        zh_hans: '指裆捶',
      },
      description: {
        en: "Step into a bow stance and drive a downward right fist toward the opponent's lower gate while the left hand guards above.",
        sv: "Kliv till en bågställning och driv en nedåtriktad höger näve mot motståndarens nedre port medan vänster hand skyddar ovanför.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: "White Ape Presents Fruit",
        sv: "Vit apa erbjuder frukt",
        zh_pinyin: "Bái Yuán Xiàn Guǒ",
        zh_hans: '白猿献果',
      },
      description: {
        en: "Raise both fists upward in front as the right knee lifts, offering them forward like presenting fruit while balancing on the left leg.",
        sv: "Lyft båda nävarna uppåt framtill medan höger knä lyfts, och erbjud dem framåt som att räcka fram frukt medan du balanserar på vänster ben.",
      },
      tags: ['strike', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: "Push with Both Palms",
        sv: "Tryck med båda handflatorna",
        zh_pinyin: "Shuāng Tuī Zhǎng",
        zh_hans: '双推掌',
      },
      description: {
        en: "Draw both palms back toward the chest, then push them forward together into a bow stance with a single unified pressing force.",
        sv: "Dra båda handflatorna tillbaka mot bröstet, tryck dem sedan framåt tillsammans till en bågställning med en enad pressande kraft.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: "Middle Winding",
        sv: "Mittlindning",
        zh_pinyin: "Zhōng Pán",
        zh_hans: '中盘',
      },
      description: {
        en: "Coil the arms in a low winding motion across the middle, gathering and settling the weight into a stable lowered stance.",
        sv: "Vira armarna i en låg lindande rörelse tvärs över mitten, och samla och sätt tyngden i en stadig sänkt ställning.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 32,
      names: {
        en: "Forward Trick",
        sv: "Främre knep",
        zh_pinyin: "Qián Zhāo",
        zh_hans: '前招',
      },
      description: {
        en: "Sweep the right hand across to the front, deflecting outward while shifting the weight forward in a nimble guarding gesture.",
        sv: "Svep höger hand tvärs över framåt, avled utåt medan tyngden flyttas framåt i en smidig skyddande gest.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: "Backward Trick",
        sv: "Bakre knep",
        zh_pinyin: "Hòu Zhāo",
        zh_hans: '后招',
      },
      description: {
        en: "Sweep the left hand across to the rear corner, deflecting in the opposite direction as the body turns to cover the back.",
        sv: "Svep vänster hand tvärs över mot bakre hörnet, avled i motsatt riktning medan kroppen vänder för att täcka ryggen.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: "Right Part the Wild Horse's Mane",
        sv: "Höger dela vildhästens man",
        zh_pinyin: "Yòu Yě Mǎ Fēn Zōng",
        zh_hans: '右野马分鬃',
      },
      description: {
        en: "Step into a right bow stance, the right arm threading upward and outward while the left presses down, parting the hands like a horse's mane.",
        sv: "Kliv till en höger bågställning, höger arm trär uppåt och utåt medan vänster trycker nedåt, och dela händerna som en hästman.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: "Left Part the Wild Horse's Mane",
        sv: "Vänster dela vildhästens man",
        zh_pinyin: "Zuǒ Yě Mǎ Fēn Zōng",
        zh_hans: '左野马分鬃',
      },
      description: {
        en: "Mirror to the left, stepping into a left bow stance with the left arm threading up and out and the right hand pressing down.",
        sv: "Spegla åt vänster, kliv till en vänster bågställning med vänster arm som trär upp och ut och höger hand som trycker nedåt.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: "Swing Lotus Kick and Drop into Split",
        sv: "Lotusspark och fall i spagat",
        zh_pinyin: "Bǎi Lián Diē Chà",
        zh_hans: '摆莲跌叉',
      },
      description: {
        en: "Swing the right foot in a crescent lotus kick slapping both palms, then drop low into a full split stretched along the ground.",
        sv: "Sväng höger fot i en halvmånsformad lotusspark som smackar mot båda handflatorna, och fall sedan lågt ned i en full spagat utsträckt längs marken.",
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: "Golden Rooster Stands on One Leg (Left and Right)",
        sv: "Gyllene tuppen står på ett ben (vänster och höger)",
        zh_pinyin: "Zuǒ Yòu Jīn Jī Dú Lì",
        zh_hans: '左右金鸡独立',
      },
      description: {
        en: "Rise from the split lifting one knee high with the palm raised overhead, then sink and rise again to balance on the other leg.",
        sv: "Res dig ur spagaten och lyft ett knä högt med handflatan upp över huvudet, sjunk sedan och res dig igen för att balansera på det andra benet.",
      },
      tags: ['stance', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 38,
      names: {
        en: "Step Back and Whirl Arms",
        sv: "Kliv bakåt och virvla armarna",
        zh_pinyin: "Dào Juǎn Gōng",
        zh_hans: '倒卷肱',
      },
      description: {
        en: "Step backward repeatedly while whirling the arms, one palm pushing forward as the other withdraws past the hip in alternating circles.",
        sv: "Kliv bakåt upprepade gånger medan armarna virvlas, en handflata trycker framåt medan den andra dras tillbaka förbi höften i växlande cirklar.",
      },
      tags: ['repetitive', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 39,
      names: {
        en: "Step Back and Press the Elbow",
        sv: "Kliv bakåt och pressa armbågen",
        zh_pinyin: "Tuì Bù Yā Zhǒu",
        zh_hans: '退步压肘',
      },
      description: {
        en: "Withdraw a step and press the right elbow downward and across into a low stance, pinning with the coordinated forearm and elbow.",
        sv: "Dra tillbaka ett steg och pressa höger armbåge nedåt och tvärsöver till en låg ställning, och fäst med samordnad underarm och armbåge.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: "Slap the Foot",
        sv: "Smacka foten",
        zh_pinyin: "Cā Jiǎo",
        zh_hans: '擦脚',
      },
      description: {
        en: "Kick the right foot upward and slap it sharply with the right palm at full extension, the supporting leg rooted firmly.",
        sv: "Sparka höger fot uppåt och smacka den skarpt med höger handflata vid full sträckning, med stödbenet stadigt rotat.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: "Kick with the Heel",
        sv: "Spark med hälen",
        zh_pinyin: "Dēng Yī Gēn",
        zh_hans: '蹬一根',
      },
      description: {
        en: "Lift the knee and thrust the heel out to the side with the toes flexed back, extending the arms in opposition for balance.",
        sv: "Lyft knät och stöt hälen ut åt sidan med tårna böjda bakåt, och sträck ut armarna i motriktning för balans.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: "Turn Flowers from the Sea Bottom",
        sv: "Vända blommor från havsbotten",
        zh_pinyin: "Hǎi Dǐ Fān Huā",
        zh_hans: '海底翻花',
      },
      description: {
        en: "Circle both fists upward from below while lifting the knee, coiling the arms in an upward spiraling flourish from the lower gate.",
        sv: "Cirkla båda nävarna uppåt nedifrån medan knät lyfts, och vira armarna i en uppåtgående spiralande utsmyckning från den nedre porten.",
      },
      tags: ['transition', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 18,
    },
    {
      seq: 43,
      names: {
        en: "Punch Toward the Ground",
        sv: "Slag mot marken",
        zh_pinyin: "Jī Dì Chuí",
        zh_hans: '击地捶',
      },
      description: {
        en: "Step forward and drive the right fist downward toward the ground while the left hand rises overhead, bending into a low stance.",
        sv: "Kliv framåt och driv höger näve nedåt mot marken medan vänster hand reser sig över huvudet, och böj ned i en låg ställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 44,
      names: {
        en: "Turn Over and Double Kick",
        sv: "Vänd kroppen och dubbelspark",
        zh_pinyin: "Fān Shēn Èr Qǐ Jiǎo",
        zh_hans: '翻身二起脚',
      },
      description: {
        en: "Turn the body over and leap, kicking the right foot upward in the air and slapping it with the palm at the height of the jump.",
        sv: "Vänd kroppen och hoppa, sparka höger fot uppåt i luften och smacka den med handflatan på toppen av hoppet.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 45,
      names: {
        en: "Double Stamp the Feet",
        sv: "Dubbel fotstamp",
        zh_pinyin: "Shuāng Zhèn Jiǎo",
        zh_hans: '双震脚',
      },
      description: {
        en: "Gather both hands and jump, stamping both feet down flat together with a sharp grounded thud that shakes the floor.",
        sv: "Samla båda händerna och hoppa, stampa båda fötterna platt ned tillsammans med en skarp jordad duns som skakar golvet.",
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 46,
      names: {
        en: "Heel Kick",
        sv: "Hälspark",
        zh_pinyin: "Dēng Jiǎo",
        zh_hans: '蹬脚',
      },
      description: {
        en: "Raise the knee and thrust the heel straight out to the front, the palms pushing open to the sides to keep balance.",
        sv: "Lyft knät och stöt hälen rakt ut framåt, handflatorna trycker öppet åt sidorna för att hålla balansen.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 47,
      names: {
        en: "Jade Girl Works the Shuttles",
        sv: "Jadeflickan väver med skytteln",
        zh_pinyin: "Yù Nǚ Chuān Suō",
        zh_hans: '玉女穿梭',
      },
      description: {
        en: "Leap and step quickly forward, one palm warding upward while the other thrusts out like passing a shuttle through the loom.",
        sv: "Hoppa och kliv snabbt framåt, en handflata avvärjer uppåt medan den andra stöter ut som att föra en skyttel genom vävstolen.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 48,
      names: {
        en: "Smooth Phoenix Elbow",
        sv: "Mjuk fenix-armbåge",
        zh_pinyin: "Shùn Luán Zhǒu",
        zh_hans: '顺鸾肘',
      },
      description: {
        en: "Drop into a horse stance and strike outward with both elbows in a smooth coordinated phoenix-elbow motion to the sides.",
        sv: "Sjunk ned i en hästställning och slå utåt med båda armbågarna i en mjuk samordnad fenix-armbågsrörelse åt sidorna.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 49,
      names: {
        en: "Wrap Firecrackers",
        sv: "Vira in smällare",
        zh_pinyin: "Guǒ Biān Pào",
        zh_hans: '裹鞭炮',
      },
      description: {
        en: "Wrap both fists across the body, then snap them open outward with an explosive fa-jin burst like cracking firecrackers.",
        sv: "Vira båda nävarna tvärs över kroppen, snärt dem sedan öppna utåt med ett explosivt fa-jin-utbrott som smällande smällare.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 50,
      names: {
        en: "Dragon Lies on the Ground",
        sv: "Drake ligger på marken",
        zh_pinyin: "Què Dì Lóng",
        zh_hans: '雀地龙',
      },
      description: {
        en: "Sink low into a one-legged crouch stance, extending the left fist along the inside of the outstretched leg close to the floor.",
        sv: "Sjunk lågt ned i en enbent hukställning och sträck vänster näve längs insidan av det utsträckta benet nära golvet.",
      },
      tags: ['stance', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 51,
      names: {
        en: "Step Forward to Seven Stars",
        sv: "Kliv fram till sju stjärnor",
        zh_pinyin: "Shàng Bù Qī Xīng",
        zh_hans: '上步七星',
      },
      description: {
        en: "Rise and step forward, crossing both fists in front at face height into a wrist-over-wrist guard like the seven-star pattern.",
        sv: "Res dig och kliv framåt, korsa båda nävarna framtill i ansiktshöjd till ett handled-över-handled-skydd likt sjustjärnemönstret.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 52,
      names: {
        en: "Step Back to Ride the Tiger",
        sv: "Kliv bakåt och rid på tigern",
        zh_pinyin: "Tuì Bù Kuà Hǔ",
        zh_hans: '退步跨虎',
      },
      description: {
        en: "Step back and separate the hands, the right palm lifting and the left pressing down while settling the weight onto the rear leg.",
        sv: "Kliv bakåt och skilj händerna åt, höger handflata lyfter och vänster trycker nedåt medan tyngden sätts på det bakre benet.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 53,
      names: {
        en: "Turn Body and Lotus Kick",
        sv: "Vänd kroppen och lotusspark",
        zh_pinyin: "Zhuǎn Shēn Bǎi Lián",
        zh_hans: '转身摆莲',
      },
      description: {
        en: "Spin the body around and swing the right foot in a wide crescent lotus arc, slapping it with both palms in quick succession.",
        sv: "Snurra kroppen runt och sväng höger fot i en bred halvmånsformad lotusbåge, och smacka den med båda handflatorna i snabb följd.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 54,
      names: {
        en: "Cannon Right Overhead",
        sv: "Kanon rakt över huvudet",
        zh_pinyin: "Dāng Tóu Pào",
        zh_hans: '当头炮',
      },
      description: {
        en: "Draw both fists back to the waist, then drive them forward together in an explosive overhead cannon strike into a bow stance.",
        sv: "Dra båda nävarna tillbaka till midjan, driv dem sedan framåt tillsammans i ett explosivt kanonslag över huvudet till en bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 55,
      names: {
        en: "Left Buddha's Warrior Attendant Pounds the Mortar",
        sv: "Vänster Buddhas väktare stöter i mortel",
        zh_pinyin: "Zuǒ Jīngāng Dǎo Duì",
        zh_hans: '左金刚捣碓',
      },
      description: {
        en: "Circle the hands and step, then lift the left knee and fist and stamp them down into the right palm with a grounded thud.",
        sv: "Cirkla händerna och kliv, lyft sedan vänster knä och näve och stampa ned dem i höger handflata med en jordad duns.",
      },
      tags: ['kick', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 56,
      names: {
        en: "Closing Form",
        sv: "Avslutande form",
        zh_pinyin: "Shōu Shì",
        zh_hans: '收势',
      },
      description: {
        en: "Lower both hands slowly to the sides and draw the left foot back together, returning to a quiet upright stance to gather the energy.",
        sv: "Sänk båda händerna långsamt åt sidorna och dra tillbaka vänster fot, och återgå till en lugn upprätt ställning för att samla energin.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
