import type { FormData } from '../types';

// Chen Style 18-Posture Short Form (陈式太极拳十八式), Grandmaster Chen Zhenglei's
// introductory routine. A condensed teaching form distilled from the traditional
// Chen Old Frame First Routine (Laojia Yi Lu), keeping the signature spiral
// (chan si jin) movements and explosive fa-jin while shortening the sequence for
// beginners. Posture order is well documented and consistent across Chen Zhenglei
// lineage schools.
//
// Media is left null until assets exist; the UI renders stable placeholders.
// Content (esp. Swedish) still pending human verification — see PLAN.md.

export const formData: FormData = {
  form: {
    id: 'chen18',
    name: {
      en: 'Chen Style 18 — Short Form',
      sv: 'Chen-stil 18 — kort form',
      zh_pinyin: 'Chénshì Tàijíquán Shíbā Shì',
      zh_hans: '陈式太极拳十八式',
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
        range: [1, 6],
      },
      {
        id: 'P2',
        label: {
          en: 'Part II: Steps, Coiling & Fa-jin',
          sv: 'Del II: Steg, spiralkraft & fa-jin',
          zh_pinyin: 'Dì Èr Duàn',
          zh_hans: '第二段',
        },
        range: [7, 12],
      },
      {
        id: 'P3',
        label: {
          en: 'Part III: Kicks, Cannon & Closing',
          sv: 'Del III: Sparkar, kanon & avslutning',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [13, 18],
      },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: 'Single Whip', seq: 5 },
    { label: 'Cover & Strike', seq: 10 },
    { label: 'Cloud Hands', seq: 14 },
    { label: 'Cannon', seq: 16 },
    { label: 'Closing', seq: 18 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: 'Beginning Posture of Taiji',
        sv: 'Taijis inledande ställning',
        zh_pinyin: 'Tàijí Qǐshì',
        zh_hans: '太极起势',
      },
      description: {
        en: 'Stand quietly with the feet shoulder-width and the weight rooted, then raise both arms forward to shoulder height and sink them back down as the body settles and the breath calms.',
        sv: 'Stå stilla med fötterna axelbrett och tyngden rotad, lyft sedan båda armarna framåt till axelhöjd och sänk dem ned igen medan kroppen sjunker och andningen lugnar sig.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Buddha's Warrior Pounds the Mortar",
        sv: 'Buddhas krigare stöter mortelstöten',
        zh_pinyin: 'Jīngāng Dǎo Duì',
        zh_hans: '金刚捣碓',
      },
      description: {
        en: 'A signature Chen opening: circle the arms and step, then raise the right knee and fist and stamp the foot while dropping the fist into the open left palm with an audible thud.',
        sv: 'En karakteristisk Chen-öppning: cirkla armarna och kliv, lyft sedan höger knä och näve och stampa foten medan näven faller ned i den öppna vänstra handflatan med ett hörbart dån.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: 'Lazily Tying the Coat',
        sv: 'Knyt rocken makligt',
        zh_pinyin: 'Lǎn Zhā Yī',
        zh_hans: '懒扎衣',
      },
      description: {
        en: 'Open into a wide side bow stance, the right hand spiralling out to the side at shoulder height while the left hand rests at the waist, expanding the frame with coiling energy.',
        sv: 'Öppna till en bred sidobågställning, höger hand spiralar ut åt sidan i axelhöjd medan vänster hand vilar vid midjan, och ramen vidgas med spiralkraft.',
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
        en: 'Gather both hands and roll back to neutralize, then press and push down-and-out to the right side as the weight shifts, sealing off the opponent in every direction.',
        sv: 'Samla båda händerna och rulla tillbaka för att neutralisera, pressa och tryck sedan nedåt-utåt mot höger sida medan tyngden skiftar, och försegla motståndaren åt alla håll.',
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
        zh_pinyin: 'Dānbiān',
        zh_hans: '单鞭',
      },
      description: {
        en: 'The right hand forms a hooked beak pulling to the rear while the left palm spirals out to the side in a wide bow stance, the arms stretched open like a whip.',
        sv: 'Höger hand formar en krok som drar bakåt medan vänster handflata spiralar ut åt sidan i en bred bågställning, armarna utsträckta som en piska.',
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
        en: 'Shift back and draw into an empty stance, the right hand opening up to the temple and the left settling by the hip, spreading the arms like a crane unfolding its wings.',
        sv: 'Skifta tillbaka och dra ihop till tom ställning, höger hand öppnas upp till tinningen och vänster sänks vid höften, och armarna breds ut som en trana som vecklar ut vingarna.',
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: 'Walk Diagonally',
        sv: 'Gå diagonalt',
        zh_pinyin: 'Xiéxíng',
        zh_hans: '斜行',
      },
      description: {
        en: 'Step out on a diagonal into a low bow stance, the left hand hooking down past the knee while the right palm pushes out to the side, the torso coiling open across the body.',
        sv: 'Kliv ut diagonalt till en låg bågställning, vänster hand krokar nedåt förbi knäet medan höger handflata trycker ut åt sidan, och bålen vrids öppen tvärs över kroppen.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: 'Brush Knee',
        sv: 'Borsta knä',
        zh_pinyin: 'Lōuxī',
        zh_hans: '搂膝',
      },
      description: {
        en: 'Gather the weight forward over a bent front leg, both hands scooping up and in past the knee to clear and lift, drawing the energy back toward the center.',
        sv: 'Samla tyngden framåt över ett böjt främre ben, båda händerna skopar upp och in förbi knäet för att avvärja och lyfta, och drar kraften tillbaka mot centrum.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: 'Wading Forward (Three Steps)',
        sv: 'Vada framåt (tre steg)',
        zh_pinyin: 'Qián Tàng Ǎobù',
        zh_hans: '前趟拗步',
      },
      description: {
        en: 'Advance with successive coiling steps, the hands opening and crossing alternately as the body spirals forward through the stepping like wading against a current.',
        sv: 'Avancera med på varandra följande spiralsteg, händerna öppnas och korsas omväxlande medan kroppen spiralar framåt genom stegen som att vada mot en ström.',
      },
      tags: ['transition', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: 'Cover Hand and Strike with Fist',
        sv: 'Täck hand och slå med näve',
        zh_pinyin: 'Yǎnshǒu Gōngquán',
        zh_hans: '掩手肱拳',
      },
      description: {
        en: 'Store energy by coiling back, then release explosive fa-jin as the right fist shoots straight forward and the left elbow draws sharply back, snapping the waist.',
        sv: 'Lagra kraft genom att spiralera bakåt, släpp sedan explosiv fa-jin när höger näve skjuter rakt framåt och vänster armbåge dras skarpt bakåt, med ett knyck i midjan.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: 'High Pat on Horse',
        sv: 'Klappa hästen högt',
        zh_pinyin: 'Gāo Tàn Mǎ',
        zh_hans: '高探马',
      },
      description: {
        en: 'Turn and draw upright as the right palm reaches forward over the withdrawing left hand at head height, as if reaching out to pat a tall horse.',
        sv: 'Vänd och res dig upprätt medan höger handflata sträcks framåt över den tillbakadragande vänstra handen i huvudhöjd, som att sträcka sig för att klappa en hög häst.',
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: 'Kick with Left Heel',
        sv: 'Spark med vänster häl',
        zh_pinyin: 'Zuǒ Dēng Yī Gēn',
        zh_hans: '左蹬一根',
      },
      description: {
        en: 'Cross the fists at the chest, then open the arms and drive the left heel out to the side with a burst of power, balancing on the right leg.',
        sv: 'Korsa nävarna vid bröstet, öppna sedan armarna och driv ut vänster häl åt sidan med ett utbrott av kraft, balanserande på höger ben.',
      },
      tags: ['kick', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: 'Jade Maiden Works the Shuttles',
        sv: 'Jadejungfrun sköter skyttlarna',
        zh_pinyin: 'Yùnǚ Chuānsuō',
        zh_hans: '玉女穿梭',
      },
      description: {
        en: 'Spring forward with a light leaping step, the hands passing and pushing across the body as the form darts ahead like a weaver flinging the shuttle through the loom.',
        sv: 'Studsa framåt med ett lätt hoppande steg, händerna passerar och trycker tvärs över kroppen medan formen skjuter framåt som en vävare som kastar skytteln genom väven.',
      },
      tags: ['transition', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: 'Cloud Hands',
        sv: 'Molnhänder',
        zh_pinyin: 'Yúnshǒu',
        zh_hans: '云手',
      },
      description: {
        en: 'Moving sideways with crossing steps, the hands trace continuous overlapping circles in front of the body while the waist turns and the weight shifts from foot to foot.',
        sv: 'Med sidledes förflyttning och korsande steg ritar händerna kontinuerliga överlappande cirklar framför kroppen medan midjan vrids och tyngden skiftar från fot till fot.',
      },
      tags: ['cloud-hands', 'hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: 'Turn Body, Double Lotus Kick',
        sv: 'Vänd kroppen, dubbel lotusspark',
        zh_pinyin: 'Zhuǎnshēn Shuāng Bǎilián',
        zh_hans: '转身双摆莲',
      },
      description: {
        en: 'Swing the body around in a turn and sweep the right leg across in a wide outward arc, both hands slapping the top of the foot as it crosses.',
        sv: 'Sväng kroppen runt i en vändning och svep höger ben tvärs över i en vid utåtgående båge, medan båda händerna slår mot ovansidan av foten när den passerar.',
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: 'Cannon Over the Head',
        sv: 'Kanon över huvudet',
        zh_pinyin: 'Dāngtóu Pào',
        zh_hans: '当头炮',
      },
      description: {
        en: 'Sit back to gather and coil, then surge into a bow stance firing both fists forward and upward together with explosive power, like a cannon blast to the head.',
        sv: 'Sätt dig tillbaka för att samla och spiralera, rusa sedan in i bågställning och avfyra båda nävarna framåt och uppåt tillsammans med explosiv kraft, som en kanonsalva mot huvudet.',
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: "Buddha's Warrior Pounds the Mortar",
        sv: 'Buddhas krigare stöter mortelstöten',
        zh_pinyin: 'Jīngāng Dǎo Duì',
        zh_hans: '金刚捣碓',
      },
      description: {
        en: 'The pounding-mortar movement returns to close the body of the form: raise the right knee and fist, then stamp down and drop the fist into the open left palm.',
        sv: 'Mortelstöt-rörelsen återkommer för att avsluta formens huvuddel: lyft höger knä och näve, stampa sedan ned och låt näven falla i den öppna vänstra handflatan.',
      },
      tags: ['strike', 'stance', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: 2,
    },
    {
      seq: 18,
      names: {
        en: 'Closing Posture of Taiji',
        sv: 'Taijis avslutande ställning',
        zh_pinyin: 'Tàijí Shōushì',
        zh_hans: '太极收势',
      },
      description: {
        en: 'Raise and lower the palms to gather the energy back to the center, then draw the feet together and return to a calm, upright standing posture to complete the form.',
        sv: 'Lyft och sänk handflatorna för att samla kraften tillbaka till centrum, dra sedan ihop fötterna och återgå till en lugn, upprätt stående ställning för att avsluta formen.',
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
