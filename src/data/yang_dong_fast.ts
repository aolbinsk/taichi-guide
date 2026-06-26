import type { FormData } from '../types';

// Tung/Dong Family Fast Form (董氏快拳 / Tung's Taiji Fast Set) — a 31-movement
// Yang-lineage fast routine created by Dong Yingjie (董英杰, top disciple of Yang
// Chengfu), still taught by his grandson Tung Kai Ying. Characterised by alternating
// fast/slow tempo, frequent fa-jin (issuing force) and foot-stamping, resembling the
// Yang small frame. The fast companion to the standard Yang slow long form.
//
// Posture order from the authoritative 董氏快拳 catalogue (zh.wikipedia.org). Media is
// the form's demonstration video; per-posture content is best-effort (verified: false).

export const formData: FormData = {
  form: {
    id: 'yang_dong_fast',
    name: {
      en: 'Tung/Dong Family Fast Form',
      sv: 'Tung/Dong-familjens snabbform',
      zh_pinyin: 'Dǒngshì Kuàiquán',
      zh_hans: '董氏快拳',
    },
    parts: [
      { id: 'P1', label: { en: 'Part I: Opening', sv: 'Del I: Öppning', zh_pinyin: 'Dì Yī Duàn', zh_hans: '第一段' }, range: [1, 10] },
      { id: 'P2', label: { en: 'Part II: Fast Strikes & Leaps', sv: 'Del II: Snabba slag & hopp', zh_pinyin: 'Dì Èr Duàn', zh_hans: '第二段' }, range: [11, 21] },
      { id: 'P3', label: { en: 'Part III: Closing Sequence', sv: 'Del III: Avslutande sekvens', zh_pinyin: 'Dì Sān Duàn', zh_hans: '第三段' }, range: [22, 31] },
    ],
  },
  milestones: [
    { label: 'Start', seq: 1 },
    { label: "Grasp and", seq: 4 },
    { label: "Splitting Palm", seq: 9 },
    { label: "Great Roc", seq: 16 },
    { label: "Hero Stands", seq: 27 },
    { label: 'Closing', seq: 31 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: "Preparatory Form",
        sv: "Förberedelseställning",
        zh_pinyin: "Yùbèi shì",
        zh_hans: '预备式',
      },
      description: {
        en: "Stand upright and relaxed with feet together and arms hanging naturally, settling the mind and breath into calm stillness before the form begins.",
        sv: "Stå upprätt och avslappnad med fötterna ihop och armarna hängande naturligt, och låt sinne och andning sjunka in i lugn stillhet innan formen börjar.",
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Taiji Opening Posture",
        sv: "Taiji öppningsställning",
        zh_pinyin: "Tàijí qǐshì",
        zh_hans: '太极起势',
      },
      description: {
        en: "Slowly raise both arms forward to shoulder height and then sink them downward as the knees gently bend, opening and awakening the body's energy.",
        sv: "Lyft långsamt båda armarna framåt till axelhöjd och sänk dem sedan nedåt medan knäna mjukt böjs, vilket öppnar och väcker kroppens energi.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Grasp and Cut the Coat",
        sv: "Grip och skär rocken",
        zh_pinyin: "Lǎn qiè yī",
        zh_hans: '揽切衣',
      },
      description: {
        en: "Quickly grasp the opponent's arm and cut sharply across with the palms in a swift ward-off, roll-back and press sequence.",
        sv: "Grip snabbt motståndarens arm och skär skarpt tvärs över med handflatorna i en snabb avvärjning, tillbakarullning och tryckande följd.",
      },
      tags: ['hand-deflection', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: "Single Whip",
        sv: "Enkelpiska",
        zh_pinyin: "Dān biān",
        zh_hans: '单鞭',
      },
      description: {
        en: "Extend one arm sideways as a hooked whip while the other palm strikes outward, changing rapidly into a wide bow stance.",
        sv: "Sträck ut ena armen åt sidan som en krokad piska medan den andra handflatan slår utåt, och växla snabbt till en bred bågställning.",
      },
      tags: ['stance', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: "Uniting Energy",
        sv: "Förenande kraft",
        zh_pinyin: "Hé jìn",
        zh_hans: '合劲',
      },
      description: {
        en: "Draw both hands slowly together toward the centre, gathering and uniting the energy inward to close and store power.",
        sv: "Dra långsamt samman båda händerna mot mitten, och samla och förena energin inåt för att sluta och lagra kraft.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: "Immortal Crane Spreads Its Wings",
        sv: "Den odödliga tranan breder ut vingarna",
        zh_pinyin: "Xiānhè zhāng chì",
        zh_hans: '仙鹤张翅',
      },
      description: {
        en: "One hand lifts to the temple while the other settles by the hip as the body rises on the rear leg, holding a slight pause like a crane opening its wings.",
        sv: "Ena handen lyfts till tinningen medan den andra sänks vid höften när kroppen reser sig på det bakre benet, med en lätt paus som en trana som öppnar vingarna.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Hold the Pipa",
        sv: "Håll pipan",
        zh_pinyin: "Tuō pípá",
        zh_hans: '托琵琶',
      },
      description: {
        en: "Shift the weight back and slowly raise both hands as if cradling a lute, the front hand lifting to trap the opponent's elbow and wrist.",
        sv: "Flytta tyngden bakåt och lyft långsamt båda händerna som om du vaggar en luta, medan främre handen lyfts för att fånga motståndarens armbåge och handled.",
      },
      tags: ['hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "Turn the Pipa",
        sv: "Vänd pipan",
        zh_pinyin: "Zhuǎn pípá",
        zh_hans: '转琵琶',
      },
      description: {
        en: "Rotate the waist to turn the cradled hands across to the other side, slowly redirecting the captured arm.",
        sv: "Vrid midjan för att vända de vaggande händerna över till andra sidan, och omdirigera långsamt den fångade armen.",
      },
      tags: ['hand-deflection', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: "Splitting Palm",
        sv: "Klyvande handflata",
        zh_pinyin: "Liè zhǎng",
        zh_hans: '裂掌',
      },
      description: {
        en: "The hands split apart sharply in opposite directions, tearing through the centre line with an explosive fast palm strike.",
        sv: "Händerna klyvs skarpt isär i motsatta riktningar och river genom mittlinjen med ett explosivt snabbt handflateslag.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: "Grinding Splitting Palm",
        sv: "Malande klyvande handflata",
        zh_pinyin: "Cuò liè zhǎng",
        zh_hans: '挫裂掌',
      },
      description: {
        en: "Repeat the splitting palms slowly with a grinding, twisting pressure as the front foot settles firmly into the stance.",
        sv: "Upprepa de klyvande handflatorna långsamt med ett malande, vridande tryck medan främre foten sätts stadigt i ställningen.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Jump Step Deflect, Parry and Punch",
        sv: "Hoppsteg avled, parera och slag",
        zh_pinyin: "Tiào bù bān lǎn chuí",
        zh_hans: '跳步搬揽捶',
      },
      description: {
        en: "Leap forward changing feet, deflect downward and parry across, then drive a fast fist forward in a sudden bow stance.",
        sv: "Hoppa framåt med fotbyte, avled nedåt och parera tvärs över, och driv sedan en snabb knytnäve framåt i en plötslig bågställning.",
      },
      tags: ['strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: "Continuous Circular Seal and Close",
        sv: "Sammanlänkad cirkulär förslutning",
        zh_pinyin: "Lián huán yuán fēng bì",
        zh_hans: '连环圆封闭',
      },
      description: {
        en: "Cross the wrists to seal the opponent's push, then circle both palms forward to close in one quick continuous motion.",
        sv: "Korsa handlederna för att täppa till motståndarens tryck, och cirkla sedan båda handflatorna framåt för att sluta i en snabb sammanhängande rörelse.",
      },
      tags: ['hand-deflection', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: "Leopard and Tiger Return to the Mountain Cave",
        sv: "Leopard och tiger återvänder till bergsgrottan",
        zh_pinyin: "Bào hǔ huí shān dòng",
        zh_hans: '豹虎回山洞',
      },
      description: {
        en: "Turn sharply and withdraw both clawed hands toward the body like a leopard and tiger retreating into their cave, then issue a fast double strike.",
        sv: "Vrid skarpt och dra tillbaka båda klohänderna mot kroppen som en leopard och tiger som drar sig in i sin grotta, och utför sedan ett snabbt dubbelslag.",
      },
      tags: ['strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: "Grinding Palm Winnowing-Basket Form",
        sv: "Malande handflata vannekorgställning",
        zh_pinyin: "Cuò zhǎng bòjī shì",
        zh_hans: '挫掌簸箕式',
      },
      description: {
        en: "Lower both palms and scoop them slowly outward in a winnowing-basket shape, grinding the energy down and forward.",
        sv: "Sänk båda handflatorna och ös dem långsamt utåt i form av en vannekorg, och mal energin nedåt och framåt.",
      },
      tags: ['hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: "Advance, Retreat, Dodge and Fight",
        sv: "Framryck, reträtt, undvik och strid",
        zh_pinyin: "Jìn tuì shǎn zhàn",
        zh_hans: '进退闪战',
      },
      description: {
        en: "Step in and out with a continuous round-turning of the waist, dodging and countering as the hands circle in defence and attack.",
        sv: "Stig in och ut med en kontinuerlig rund vridning av midjan, undvik och kontra medan händerna cirklar i försvar och anfall.",
      },
      tags: ['transition', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: "Great Roc Leaps into the Sky",
        sv: "Den stora rocken lyfter mot skyn",
        zh_pinyin: "Dà péng téng kōng",
        zh_hans: '大鹏腾空',
      },
      description: {
        en: "Spring upward off both feet into the air like the great roc bird taking flight, the arms sweeping wide before a rooted landing.",
        sv: "Fjädra uppåt från båda fötterna ut i luften som den stora rocken som lyfter, med armarna svepande brett innan en rotad landning.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: "Punch to the Ribs",
        sv: "Slag mot revbenen",
        zh_pinyin: "Zhuàng lèi chuí",
        zh_hans: '撞肋捶',
      },
      description: {
        en: "Slowly drive a fist into the opponent's ribs while settling the weight forward into a stable bow stance.",
        sv: "Driv långsamt en knytnäve in i motståndarens revben medan tyngden sänks framåt i en stabil bågställning.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: "White Ape Dodges the Body",
        sv: "Den vita apan väjer undan",
        zh_pinyin: "Bái yuán shǎn shēn",
        zh_hans: '白猿闪身',
      },
      description: {
        en: "Withdraw the body slowly to the rear like a white ape evading, the hands drawing back protectively as the weight shifts back.",
        sv: "Dra långsamt tillbaka kroppen bakåt som en vit apa som undviker, med händerna dragna tillbaka skyddande medan tyngden flyttas bakåt.",
      },
      tags: ['transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Phoenix Spreads Its Wings Obliquely",
        sv: "Fenixen breder ut vingarna snett",
        zh_pinyin: "Fènghuáng xié zhǎn chì",
        zh_hans: '凤凰斜展翅',
      },
      description: {
        en: "Open the arms diagonally, one rising and one sinking like a phoenix spreading its wings on a slant, holding a slight pause at full extension.",
        sv: "Öppna armarna diagonalt, den ena stigande och den andra sjunkande som en fenix som breder ut vingarna snett, med en lätt paus vid full utsträckning.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: "Deflect, Parry and Punch",
        sv: "Avled, parera och slag",
        zh_pinyin: "Bān lǎn chuí",
        zh_hans: '搬揽捶',
      },
      description: {
        en: "Deflect downward, parry across the body, and drive the fist swiftly forward into a fast bow stance.",
        sv: "Avled nedåt, parera tvärs över kroppen, och driv knytnäven snabbt framåt i en snabb bågställning.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: "Turn Body, Deflect, Press and Punch",
        sv: "Vänd kroppen, avled, tryck och slag",
        zh_pinyin: "Fǎn shēn bān àn chuí",
        zh_hans: '返身搬按捶',
      },
      description: {
        en: "Spin the body around, deflect and press the opponent's arm down, then punch forward with a slight pause to settle the stance.",
        sv: "Snurra runt kroppen, avled och tryck ner motståndarens arm, och slå sedan framåt med en lätt paus för att sätta ställningen.",
      },
      tags: ['strike', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: "Advance Step, Grasp and Grind the Coat",
        sv: "Framåtsteg, grip och mal rocken",
        zh_pinyin: "Jìn bù lǎn cuò yī",
        zh_hans: '进步揽挫衣',
      },
      description: {
        en: "Step forward to grasp the opponent and grind the forearms across in a quick grasp-sparrow's-tail action at fast tempo.",
        sv: "Stig framåt för att gripa motståndaren och mal underarmarna tvärs över i en snabb grip-sparvens-svans-rörelse i högt tempo.",
      },
      tags: ['hand-deflection', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: "Continuous Linked Form",
        sv: "Sammanlänkad form",
        zh_pinyin: "Lián huán shì",
        zh_hans: '连环式',
      },
      description: {
        en: "Link successive palm and fist actions in a rapid continuous chain, flowing from one strike to the next without pause.",
        sv: "Länka samman följande handflate- och knytnävsrörelser i en snabb kontinuerlig kedja, som flödar från ett slag till nästa utan paus.",
      },
      tags: ['strike', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: "Hooking Hand",
        sv: "Krokhand",
        zh_pinyin: "Diāo shǒu",
        zh_hans: '刁手',
      },
      description: {
        en: "Hook and trap the opponent's wrist quickly with a snapping clawed hand, drawing it off line to unbalance them.",
        sv: "Kroka och fånga motståndarens handled snabbt med en snärtande klohand, och dra den ur linje för att bringa den ur balans.",
      },
      tags: ['hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: "Dodge Left, Avoid Right",
        sv: "Väj åt vänster, undvik åt höger",
        zh_pinyin: "Zuǒ shǎn yòu bì",
        zh_hans: '左闪右避',
      },
      description: {
        en: "Shift slowly from side to side, evading first left then right while the hands ward off the incoming force.",
        sv: "Förflytta dig långsamt från sida till sida, undvik först åt vänster sedan åt höger medan händerna avvärjer den inkommande kraften.",
      },
      tags: ['transition', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: "High Pat on Horse",
        sv: "Klappa den höga hästen",
        zh_pinyin: "Tàn mǎ shì",
        zh_hans: '探马式',
      },
      description: {
        en: "Slowly extend the rear hand forward over the opponent's arm as if patting a tall horse, the weight resting on the rear leg.",
        sv: "Sträck långsamt fram den bakre handen över motståndarens arm som om du klappar en hög häst, med tyngden vilande på det bakre benet.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: "Hero Stands Alone",
        sv: "Hjälten står ensam",
        zh_pinyin: "Yīngxióng dúlì",
        zh_hans: '英雄独立',
      },
      description: {
        en: "Rise sharply onto one leg, lifting the opposite knee and hand high like a standing hero balanced firmly on a single foot.",
        sv: "Res dig skarpt upp på ett ben och lyft motsatt knä och hand högt som en stående hjälte balanserad stadigt på en enda fot.",
      },
      tags: ['stance', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: "Leaping Body Technique",
        sv: "Den lyftande kroppsteknik",
        zh_pinyin: "Téng shēn fǎ",
        zh_hans: '腾身法',
      },
      description: {
        en: "Leap and turn the whole body in the air, redirecting swiftly to face a new direction before springing down into the next stance.",
        sv: "Hoppa och vrid hela kroppen i luften, och omdirigera snabbt mot en ny riktning innan du fjädrar ner i nästa ställning.",
      },
      tags: ['transition', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: "Lifting Palm",
        sv: "Lyftande handflata",
        zh_pinyin: "Liāo zhǎng",
        zh_hans: '撩掌',
      },
      description: {
        en: "Sweep one palm slowly upward from below in an uprooting flick toward the opponent's groin or chin.",
        sv: "Svep långsamt en handflata uppåt nerifrån i en uppryckande snärt mot motståndarens ljumske eller haka.",
      },
      tags: ['strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: "Phoenix Returns to the Nest",
        sv: "Fenixen återvänder till boet",
        zh_pinyin: "Fèng huán cháo",
        zh_hans: '凤还巢',
      },
      description: {
        en: "Gather both arms quickly inward and fold them to the chest like a phoenix settling back into its nest, releasing a short fa-jin.",
        sv: "Samla snabbt båda armarna inåt och vik dem mot bröstet som en fenix som sätter sig tillbaka i sitt bo, och utlös en kort fa-jin.",
      },
      tags: ['strike', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: "Taiji Returns to the Origin",
        sv: "Taiji återvänder till ursprunget",
        zh_pinyin: "Tàijí huán yuán",
        zh_hans: '太极还元',
      },
      description: {
        en: "Slowly lower both hands and bring the feet together, returning to stillness and rooting firmly to close the form.",
        sv: "Sänk långsamt båda händerna och för fötterna samman, återvänd till stillhet och rota stadigt för att avsluta formen.",
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
