import type { FormData } from '../types';

// Wu/Hao Style (武/郝) Taijiquan — 46-Posture Competition Routine
// (武式太极拳竞赛套路, 四十六式). This is the officially standardized
// enumeration produced for national competition use, derived from the
// Hao-family small-frame tradition that descends from Wu Yuxiang via
// Li Yiyu and Hao Weizhen. Posture order and segmentation are fixed by
// the standardized routine, which makes this a high-confidence dataset.
//
// The Wu/Hao frame is small, high and compact, with the hands kept within
// the width of the body and an exacting internal focus on opening/closing
// (kāihé) rather than large external shapes. Descriptions below reflect
// that compact, upright character.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'wuhao',
    name: {
      en: 'Wu/Hao Style 46 — Competition Routine',
      sv: 'Wu/Hao-stil 46 — tävlingsform',
      zh_pinyin: 'Wǔshì Tàijíquán Sìshíliù Shì',
      zh_hans: '武式太极拳四十六式',
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
        range: [1, 13],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Clouds, Shuttles & Kicks',
          sv: 'Del II: Moln, skyttlar & sparkar',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [14, 32],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Strikes & Closing',
          sv: 'Del III: Slag & avslutning',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [33, 46],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Left Single Whip', seq: 3 },
    { label: 'Embrace Tiger', seq: 10 },
    { label: 'Cloud Hands', seq: 15 },
    { label: 'Fair Lady Shuttles', seq: 16 },
    { label: 'Golden Rooster', seq: 26 },
    { label: 'Repulse Monkey', seq: 33 },
    { label: 'Closing', seq: 46 },
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
        en: 'From a quiet, upright standing posture the arms rise softly to a low shoulder height and then settle, the body kept high and centered. The frame stays small and the breath sinks to begin the form.',
        sv: 'Från en stilla, upprätt stående position lyfts armarna mjukt till låg axelhöjd och sänks sedan, med kroppen hög och centrerad. Ramen hålls liten och andningen sjunker när formen inleds.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: 'Lazily Tying the Coat (Left & Right)',
        sv: 'Binda rocken makligt (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Lǎn Zhā Yī',
        zh_hans: '左右揽扎衣',
      },
      description: {
        en: 'The signature Wu/Hao opening: in a high, compact stance one forearm wards across the centerline while the other hand supports beneath, the energy gathered close to the body. Performed to the left and then the right.',
        sv: 'Den karakteristiska Wu/Hao-öppningen: i en hög, kompakt ställning avvärjer ena underarmen över mittlinjen medan den andra handen stöder under, med kraften samlad nära kroppen. Utförs åt vänster och sedan höger.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: 'Single Whip — Left',
        sv: 'Enkelt piskslag — vänster',
        zh_pinyin: 'Zuǒ Dānbiān',
        zh_hans: '左单鞭',
      },
      description: {
        en: 'The hands open outward to the sides in a small, level frame, the rear hand hooking and the front palm pressing out at modest range. The torso stays upright with the shoulders relaxed and even.',
        sv: 'Händerna öppnas utåt åt sidorna i en liten, jämn ram, den bakre handen krokar och den främre handflatan trycker ut på måttligt avstånd. Bålen hålls upprätt med avslappnade, jämna axlar.',
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
        zh_pinyin: 'Tíshǒu Shàngshì',
        zh_hans: '提手上势',
      },
      description: {
        en: 'Draw the feet close into an empty stance and bring the hands together in front, one above the other, as if closing on an opponent’s arm. The frame is narrow and the weight kept high over the rear leg.',
        sv: 'Dra ihop fötterna till en tom ställning och för samman händerna framför, den ena ovanför den andra, som för att fånga motståndarens arm. Ramen är smal och tyngden hålls högt över bakre benet.',
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
        en: 'Settle back into a high empty stance with the front toe touching, the upper hand lifting to the temple and the lower hand sinking by the hip. The arms open compactly, like a crane lightly spreading its wings.',
        sv: 'Sjunk tillbaka till en hög tom ställning med främre tån i marken, övre handen lyfter till tinningen och nedre handen sjunker vid höften. Armarna öppnas kompakt, som en trana som lätt breder ut vingarna.',
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
        zh_pinyin: 'Zuǒyòu Lōuxī Àobù',
        zh_hans: '左右搂膝拗步',
      },
      description: {
        en: 'In a compact bow stance one hand brushes across the knee to clear a low attack while the other pushes forward at shoulder height. Repeated alternately on the left and right.',
        sv: 'I en kompakt bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den andra trycker framåt i axelhöjd. Upprepas omväxlande vänster och höger.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: 'Step Up, Deflect, Parry and Punch — Left',
        sv: 'Kliv fram, avled, parera och slå — vänster',
        zh_pinyin: 'Jìnbù Zuǒ Bānlánchuí',
        zh_hans: '进步左搬拦捶',
      },
      description: {
        en: 'Stepping forward, the forearm deflects and the open hand parries before a short fist drives out at the centerline. The punch stays close and grounded, with power issued from the waist rather than the arm.',
        sv: 'Med ett steg framåt avleder underarmen och den öppna handen parerar innan en kort näve drivs ut vid mittlinjen. Slaget hålls nära och förankrat, med kraft från midjan snarare än armen.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Apparent Close Up',
        sv: 'Skenbar stängning',
        zh_pinyin: 'Rúfēng Sìbì',
        zh_hans: '如封似闭',
      },
      description: {
        en: 'Cross the forearms to withdraw and neutralize, then settle and press both palms forward in a high, narrow frame — "sealing as if shutting a door." The motion is small and the elbows stay close to the ribs.',
        sv: 'Korsa underarmarna för att dra tillbaka och neutralisera, sjunk sedan och tryck båda handflatorna framåt i en hög, smal ram — "förslut som att stänga en dörr." Rörelsen är liten och armbågarna hålls nära revbenen.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'White Crane Spreads Its Wings',
        sv: 'Vit trana breder ut vingarna',
        zh_pinyin: 'Báihè Liàngchì',
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: 'White Crane again, settling back into a high empty stance with the hands opening to temple and hip, marking a transition before the turn into Embrace Tiger.',
        sv: 'Vit trana igen, sjunker tillbaka till en hög tom ställning med händerna som öppnas mot tinning och höft, vilket markerar en övergång före vändningen in i omfamna tigern.',
      },
      tags: ['stance', 'opening-closing', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 5,
    },
    {
      seq: 10,
      names: {
        en: 'Embrace Tiger, Push Mountain',
        sv: 'Omfamna tigern, skjut berget',
        zh_pinyin: 'Bàohǔ Tuīshān',
        zh_hans: '抱虎推山',
      },
      description: {
        en: 'Turn the body and gather both arms in a low embracing circle, then settle into a bow stance and press both palms forward as if pushing a mountain. The frame stays compact through the turn.',
        sv: 'Vrid kroppen och samla båda armarna i en låg omfamnande cirkel, sjunk sedan till bågställning och tryck båda handflatorna framåt som att skjuta ett berg. Ramen hålls kompakt genom vändningen.',
      },
      tags: ['hand-deflection', 'strike', 'stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Part the Wild Horse's Mane (Left & Right)",
        sv: 'Dela vildhästens man (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Yěmǎ Fēnzōng',
        zh_hans: '左右野马分鬃',
      },
      description: {
        en: 'Stepping into a bow stance, the hands separate diagonally — one arcing upward and the other pressing down by the hip — in a small, controlled shape. Performed alternately to the left and right.',
        sv: 'Med ett steg till bågställning separeras händerna diagonalt — en bågar uppåt och den andra trycker ned vid höften — i en liten, kontrollerad form. Utförs omväxlande vänster och höger.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Playing the Lute',
        sv: 'Spela luta',
        zh_pinyin: 'Shǒuhuī Pípá',
        zh_hans: '手挥琵琶',
      },
      description: {
        en: 'Draw into a high empty stance with the front heel touching and the hands closing in front, as if cradling and strumming a lute, ready to trap an arm. The shape is narrow and the posture upright.',
        sv: 'Dra ihop till en hög tom ställning med främre hälen i marken och händerna som sluts framför, som om de håller och knäpper på en luta, redo att fånga en arm. Formen är smal och hållningen upprätt.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: 'Palm Strike to the Heart',
        sv: 'Handflateslag mot hjärtat',
        zh_pinyin: 'Duìxīn Zhǎng',
        zh_hans: '对心掌',
      },
      description: {
        en: 'Step forward and drive a single palm straight to the opponent’s chest along the centerline, the rear hand supporting near the elbow. The strike is short, level and issued from a sunk, stable base.',
        sv: 'Kliv framåt och driv en enda handflata rakt mot motståndarens bröst längs mittlinjen, med bakre handen som stöder nära armbågen. Slaget är kort, jämnt och utgår från en sänkt, stabil bas.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: 'Single Whip — Right',
        sv: 'Enkelt piskslag — höger',
        zh_pinyin: 'Yòu Dānbiān',
        zh_hans: '右单鞭',
      },
      description: {
        en: 'The mirror of Single Whip to the right: the hands open level to the sides, the rear hand hooking and the front palm pressing outward in a small, upright frame.',
        sv: 'Spegling av enkelt piskslag åt höger: händerna öppnas jämnt åt sidorna, den bakre handen krokar och den främre handflatan trycker utåt i en liten, upprätt ram.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: 'Cloud Hands — Right',
        sv: 'Molnhänder — höger',
        zh_pinyin: 'Yòu Yúnshǒu',
        zh_hans: '右云手',
      },
      description: {
        en: 'Moving sideways to the right, the hands trace continuous compact circles in front of the body while the weight shifts from foot to foot. The circles stay within the body’s width in the Wu/Hao manner.',
        sv: 'Med sidledes förflyttning åt höger ritar händerna kontinuerliga kompakta cirklar framför kroppen medan tyngden skiftar från fot till fot. Cirklarna hålls inom kroppens bredd på Wu/Hao-vis.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Fair Lady Works the Shuttles',
        sv: 'Vacker dam sköter skyttlarna',
        zh_pinyin: 'Yùnǚ Chuānsuō',
        zh_hans: '玉女穿梭',
      },
      description: {
        en: 'In a bow stance one hand lifts to ward off overhead while the other pushes forward, turning to repeat toward each corner like a weaver passing the shuttle. The arms stay close and the turns are tight.',
        sv: 'I bågställning lyfts en hand för att avvärja ovanför medan den andra trycker framåt, och man vänder för att upprepa mot varje hörn likt en vävare som för skytteln. Armarna hålls nära och vändningarna är täta.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: 'High Pat on Horse',
        sv: 'Klappa hästen högt',
        zh_pinyin: 'Gāo Tàn Mǎ',
        zh_hans: '高探马',
      },
      description: {
        en: 'Draw into a high empty stance, the upper palm reaching forward over the upturned lower hand at face height, as if patting a tall horse. The posture is light and erect with the weight back.',
        sv: 'Dra ihop till en hög tom ställning, den övre handflatan sträcks framåt över den uppåtvända nedre handen i ansiktshöjd, som att klappa en hög häst. Hållningen är lätt och upprätt med tyngden bak.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: 'Separate Feet (Left & Right)',
        sv: 'Separera fötterna (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Fēnjiǎo',
        zh_hans: '左右分脚',
      },
      description: {
        en: 'Cross and open the hands, then kick out with the toes of each foot in turn toward the front corner while the arms extend to balance. The standing leg stays high and the body upright.',
        sv: 'Korsa och öppna händerna, sparka sedan ut med tårna på vardera foten i tur och ordning mot främre hörnet medan armarna sträcks ut för balans. Stödbenet hålls högt och kroppen upprätt.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: 'Turn and Heel Kick — Right',
        sv: 'Vänd och hälspark — höger',
        zh_pinyin: 'Zhuǎnshēn Yòu Dēngjiǎo',
        zh_hans: '转身右蹬脚',
      },
      description: {
        en: 'Turn the body, cross the hands, and deliver a right heel kick to the front with the sole pushing outward while the arms open to either side. The balance is kept compact over the supporting leg.',
        sv: 'Vrid kroppen, korsa händerna och utför en höger hälspark framåt med sulan som trycker utåt medan armarna öppnas åt var sin sida. Balansen hålls kompakt över stödbenet.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: 'Pressing Down Posture',
        sv: 'Nedtryckande ställning',
        zh_pinyin: 'Ànshì',
        zh_hans: '按势',
      },
      description: {
        en: 'Settle into a bow stance and press both palms downward and forward in a short, sinking motion, neutralizing and controlling at close range. The frame stays small with the elbows tucked.',
        sv: 'Sjunk till bågställning och tryck båda handflatorna nedåt och framåt i en kort, sjunkande rörelse, som neutraliserar och kontrollerar på nära håll. Ramen hålls liten med armbågarna indragna.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: 'Green Dragon Emerges from the Water',
        sv: 'Grön drake stiger ur vattnet',
        zh_pinyin: 'Qīnglóng Chūshuǐ',
        zh_hans: '青龙出水',
      },
      description: {
        en: 'Step forward and extend one hand outward and upward in a coiling thrust along the centerline, like a dragon surfacing. The spiraling energy issues from the waist while the posture stays upright.',
        sv: 'Kliv framåt och sträck ut en hand utåt och uppåt i en spiralande stöt längs mittlinjen, som en drake som bryter vattenytan. Den spiralande kraften utgår från midjan medan hållningen förblir upprätt.',
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
        zh_pinyin: 'Shǎn Tōng Bèi',
        zh_hans: '闪通背',
      },
      description: {
        en: 'Rise into a bow stance, one hand lifting to the temple and the other pushing forward, the arms spreading like a fan as power connects through the back. The opening is crisp but the frame remains narrow.',
        sv: 'Res dig till bågställning, en hand lyfter till tinningen och den andra trycker framåt, armarna öppnas som en solfjäder medan kraften förbinds genom ryggen. Öppningen är skarp men ramen förblir smal.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: 'Single Whip — Left',
        sv: 'Enkelt piskslag — vänster',
        zh_pinyin: 'Zuǒ Dānbiān',
        zh_hans: '左单鞭',
      },
      description: {
        en: 'Single Whip again to the left, the hands opening level to the sides with the rear hand hooking and the front palm pressing out, closing this section of the form.',
        sv: 'Enkelt piskslag igen åt vänster, händerna öppnas jämnt åt sidorna med bakre handen som krokar och främre handflatan som trycker ut, vilket avslutar denna del av formen.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 3,
    },
    {
      seq: 24,
      names: {
        en: 'Cloud Hands — Left',
        sv: 'Molnhänder — vänster',
        zh_pinyin: 'Zuǒ Yúnshǒu',
        zh_hans: '左云手',
      },
      description: {
        en: 'Moving sideways to the left, the hands again trace continuous compact circles in front of the body as the weight shifts from foot to foot, staying within the body’s width.',
        sv: 'Med sidledes förflyttning åt vänster ritar händerna åter kontinuerliga kompakta cirklar framför kroppen medan tyngden skiftar från fot till fot, inom kroppens bredd.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: 'Snake Creeps Down — Left',
        sv: 'Ormen kryper ned — vänster',
        zh_pinyin: 'Zuǒ Xiàshì',
        zh_hans: '左下势',
      },
      description: {
        en: 'Sink low onto the right leg in a crouching stance, threading the left hand along the inside of the extended left leg. The torso stays as upright as the small frame allows while the weight drops.',
        sv: 'Sjunk lågt på höger ben i en hukande ställning och för vänster hand längs insidan av det utsträckta vänstra benet. Bålen hålls så upprätt som den lilla ramen tillåter medan tyngden sänks.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: 'Golden Rooster Stands on One Leg — Left',
        sv: 'Gyllene tupp står på ett ben — vänster',
        zh_pinyin: 'Zuǒ Jīnjī Dúlì',
        zh_hans: '左金鸡独立',
      },
      description: {
        en: 'Rise to stand on the left leg, lifting the right knee high with the right hand rising beside it and the left hand settling by the hip. The balance is light, tall and centered.',
        sv: 'Res dig på vänster ben och lyft höger knä högt med höger hand som stiger bredvid och vänster hand som sjunker vid höften. Balansen är lätt, hög och centrerad.',
      },
      tags: ['stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: 'Snake Creeps Down — Right',
        sv: 'Ormen kryper ned — höger',
        zh_pinyin: 'Yòu Xiàshì',
        zh_hans: '右下势',
      },
      description: {
        en: 'The mirror of Snake Creeps Down: sink low onto the left leg, threading the right hand along the inside of the extended right leg before rising.',
        sv: 'Spegling av ormen kryper ned: sjunk lågt på vänster ben och för höger hand längs insidan av det utsträckta högra benet innan du reser dig.',
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: 'Golden Rooster Stands on One Leg — Right',
        sv: 'Gyllene tupp står på ett ben — höger',
        zh_pinyin: 'Yòu Jīnjī Dúlì',
        zh_hans: '右金鸡独立',
      },
      description: {
        en: 'Rise to stand on the right leg, lifting the left knee high with the left hand rising beside it. The posture mirrors the earlier rooster, balanced and erect.',
        sv: 'Res dig på höger ben och lyft vänster knä högt med vänster hand som stiger bredvid. Hållningen speglar den tidigare tuppen, balanserad och upprätt.',
      },
      tags: ['stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: 'Skip Step and Strike with Fist',
        sv: 'Glidsteg och slag med näve',
        zh_pinyin: 'Jiànbù Dǎchuí',
        zh_hans: '践步打捶',
      },
      description: {
        en: 'Step forward with a quick treading footwork and drive a downward fist toward a low target, the body sinking behind the blow. The motion is compact and the power rooted in the step.',
        sv: 'Kliv framåt med ett snabbt trampande fotarbete och driv en nedåtriktad näve mot ett lågt mål, med kroppen som sjunker bakom slaget. Rörelsen är kompakt och kraften rotad i steget.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: 'Turn Over and Double Jump Kick',
        sv: 'Vänd och dubbel hoppspark',
        zh_pinyin: 'Fānshēn Èr Qǐ Jiǎo',
        zh_hans: '翻身二起脚',
      },
      description: {
        en: 'Turn the body over, then spring up to slap the rising foot with the hand in a light leaping kick. The landing returns immediately to a stable, compact base.',
        sv: 'Vänd kroppen, fjädra sedan upp och slå den stigande foten med handen i en lätt hoppande spark. Landningen återgår omedelbart till en stabil, kompakt bas.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: 'Drape the Body and Subdue the Tiger (Left & Right)',
        sv: 'Svep kroppen och kuva tigern (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Pīshēn Fúhǔ',
        zh_hans: '左右披身伏虎',
      },
      description: {
        en: 'Wheel the arms across the body into fists, one raised by the temple and the other low at the waist, in a coiled crouching stance as if pinning a tiger. Performed to both the left and right.',
        sv: 'Sväng armarna över kroppen till nävar, en höjd vid tinningen och den andra låg vid midjan, i en hoprullad hukande ställning som för att tygla en tiger. Utförs åt både vänster och höger.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 32,
      names: {
        en: 'Fist Under Elbow',
        sv: 'Näve under armbågen',
        zh_pinyin: 'Zhǒudǐ Chuí',
        zh_hans: '肘底捶',
      },
      description: {
        en: 'Draw into a high empty stance with the front hand raised on edge and the rear fist tucked beneath the leading elbow, ready to strike. The shape is small, coiled and upright.',
        sv: 'Dra ihop till en hög tom ställning med främre handen rest på kant och bakre näven instoppad under den ledande armbågen, redo att slå. Formen är liten, hoprullad och upprätt.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: 'Repulse the Monkey (Left & Right)',
        sv: 'Driv tillbaka apan (vänster & höger)',
        zh_pinyin: 'Zuǒyòu Dào Juǎngōng',
        zh_hans: '左右倒卷肱',
      },
      description: {
        en: 'Stepping backward, withdraw one hand to the hip while the other pushes forward at face height, retreating in a smooth compact coil. Performed alternately on both sides.',
        sv: 'Kliv bakåt, dra in en hand till höften medan den andra trycker framåt i ansiktshöjd, i en mjuk kompakt spiralrörelse bakåt. Utförs omväxlande på båda sidor.',
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: 'Green Dragon Emerges from the Water',
        sv: 'Grön drake stiger ur vattnet',
        zh_pinyin: 'Qīnglóng Chūshuǐ',
        zh_hans: '青龙出水',
      },
      description: {
        en: 'Green Dragon again: step forward and extend one hand in a coiling thrust along the centerline, the spiraling power issued from the waist.',
        sv: 'Grön drake igen: kliv framåt och sträck ut en hand i en spiralande stöt längs mittlinjen, med den spiralande kraften från midjan.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 21,
    },
    {
      seq: 35,
      names: {
        en: 'Slap the Foot — Left',
        sv: 'Slå foten — vänster',
        zh_pinyin: 'Zuǒ Pāijiǎo',
        zh_hans: '左拍脚',
      },
      description: {
        en: 'Swing the left foot up and slap the instep with the open hand at the top of the kick, balancing tall on the right leg. The motion is light and controlled within the small frame.',
        sv: 'Sväng upp vänster fot och slå vristen med den öppna handen högst upp i sparken, balanserande högt på höger ben. Rörelsen är lätt och kontrollerad inom den lilla ramen.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: 'Turn and Cross-Wave Lotus Kick',
        sv: 'Vänd och korsande lotusspark',
        zh_pinyin: 'Zhuǎnshēn Shízì Bǎilián',
        zh_hans: '转身十字摆莲',
      },
      description: {
        en: 'Cross the hands, turn the body, and sweep the foot across in a fanning lotus kick, the palms slapping the instep as it passes. The turn is tight and the balance kept over the standing leg.',
        sv: 'Korsa händerna, vrid kroppen och svep foten tvärs i en vajande lotusspark, medan handflatorna slår vristen när den passerar. Vändningen är tät och balansen hålls över stödbenet.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: 'Jump Step and Punch to the Groin',
        sv: 'Hoppsteg och slag mot ljumsken',
        zh_pinyin: 'Tiàobù Zhǐdāng Chuí',
        zh_hans: '跳步指裆捶',
      },
      description: {
        en: 'Following a small jumping step, settle into a bow stance and drive a low fist toward the opponent’s groin along the centerline. The strike sinks with the body and stays compact.',
        sv: 'Efter ett litet hoppsteg, sjunk till bågställning och driv en låg näve mot motståndarens ljumske längs mittlinjen. Slaget sjunker med kroppen och förblir kompakt.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 38,
      names: {
        en: 'Snake Creeps Down — Left',
        sv: 'Ormen kryper ned — vänster',
        zh_pinyin: 'Zuǒ Xiàshì',
        zh_hans: '左下势',
      },
      description: {
        en: 'Snake Creeps Down again, sinking low onto the right leg and threading the left hand along the extended left leg before the body rises into the next posture.',
        sv: 'Ormen kryper ned igen, sjunker lågt på höger ben och för vänster hand längs det utsträckta vänstra benet innan kroppen reser sig till nästa position.',
      },
      tags: ['stance', 'transition', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 25,
    },
    {
      seq: 39,
      names: {
        en: 'Step Up to Form Seven Stars',
        sv: 'Kliv fram till sju stjärnor',
        zh_pinyin: 'Shàngbù Qīxīng',
        zh_hans: '上步七星',
      },
      description: {
        en: 'Step up into a high empty stance and cross the wrists into fists in front of the chest, forming the "seven stars" guard. The frame is narrow, light and ready.',
        sv: 'Kliv fram till en hög tom ställning och korsa handlederna till nävar framför bröstet och forma "sju stjärnor"-gardet. Ramen är smal, lätt och redo.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: 'Step Back to Ride the Tiger',
        sv: 'Kliv tillbaka och rid tigern',
        zh_pinyin: 'Tuìbù Kuàhǔ',
        zh_hans: '退步跨虎',
      },
      description: {
        en: 'Step back into a high empty stance, the hands separating with one rising above the head and the other sinking by the hip, as if mounting a tiger. The posture is tall and balanced over the rear leg.',
        sv: 'Kliv tillbaka till en hög tom ställning, händerna separeras med en som stiger över huvudet och den andra som sjunker vid höften, som att bestiga en tiger. Hållningen är hög och balanserad över bakre benet.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: 'Turn and Sweep the Lotus',
        sv: 'Vänd och svep lotus',
        zh_pinyin: 'Zhuǎnshēn Bǎilián',
        zh_hans: '转身摆莲',
      },
      description: {
        en: 'Turn the body in a full circle and sweep the foot across in a fanning lotus kick, the palms slapping the instep as it crosses. The spin stays compact with the balance centered.',
        sv: 'Vrid kroppen ett helt varv och svep foten tvärs i en vajande lotusspark, medan handflatorna slår vristen när den korsar. Snurren hålls kompakt med balansen centrerad.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: 'Bend the Bow and Shoot the Tiger',
        sv: 'Spänn bågen och skjut tigern',
        zh_pinyin: 'Wāngōng Shèhǔ',
        zh_hans: '弯弓射虎',
      },
      description: {
        en: 'Settle into a bow stance and punch with both fists on a diagonal, as if drawing a bow and loosing an arrow at a tiger. The shape is small and the power issued from the turning waist.',
        sv: 'Sjunk till bågställning och slå med båda nävarna diagonalt, som att spänna en båge och avlossa en pil mot en tiger. Formen är liten och kraften utgår från den vridande midjan.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 43,
      names: {
        en: 'Step Up, Deflect, Parry and Punch — Right',
        sv: 'Kliv fram, avled, parera och slå — höger',
        zh_pinyin: 'Jìnbù Yòu Bānlánchuí',
        zh_hans: '进步右搬拦捶',
      },
      description: {
        en: 'Step forward, deflect with the forearm and parry with the open hand, then drive a right fist out at the centerline. The punch is short and rooted, mirroring the earlier left version.',
        sv: 'Kliv framåt, avled med underarmen och parera med den öppna handen, driv sedan ut en höger näve vid mittlinjen. Slaget är kort och förankrat och speglar den tidigare vänstra versionen.',
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 44,
      names: {
        en: 'Apparent Close Up',
        sv: 'Skenbar stängning',
        zh_pinyin: 'Rúfēng Sìbì',
        zh_hans: '如封似闭',
      },
      description: {
        en: 'Apparent Close Up again: cross the forearms to withdraw and neutralize, then settle and press both palms forward in a high, narrow frame to prepare the closing.',
        sv: 'Skenbar stängning igen: korsa underarmarna för att dra tillbaka och neutralisera, sjunk sedan och tryck båda handflatorna framåt i en hög, smal ram för att förbereda avslutningen.',
      },
      tags: ['hand-deflection', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 8,
    },
    {
      seq: 45,
      names: {
        en: 'Double Striking Fists',
        sv: 'Dubbelslag med nävar',
        zh_pinyin: 'Shuāng Zhuàng Chuí',
        zh_hans: '双撞捶',
      },
      description: {
        en: 'Settle into a bow stance and drive both fists forward together along the centerline in a short, level double strike. The blow stays compact with the power issued from a sunk, stable base.',
        sv: 'Sjunk till bågställning och driv båda nävarna framåt tillsammans längs mittlinjen i ett kort, jämnt dubbelslag. Slaget förblir kompakt med kraften från en sänkt, stabil bas.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 46,
      names: {
        en: 'Closing Form',
        sv: 'Avslutande form',
        zh_pinyin: 'Shōushì',
        zh_hans: '收势',
      },
      description: {
        en: 'Turn the palms down and lower the hands quietly to the sides, then draw the feet together and return to a calm, upright standing posture to complete the form.',
        sv: 'Vänd handflatorna nedåt och sänk händerna stilla längs sidorna, dra sedan ihop fötterna och återgå till en lugn, upprätt stående position för att avsluta formen.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
