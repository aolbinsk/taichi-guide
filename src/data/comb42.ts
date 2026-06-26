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
        range: [11, 21],
      },
      {
        id: 'P3',
        label: {
          en: 'Section 3',
          sv: 'Sektion 3',
          zh_pinyin: 'Dì Sān Duàn',
          zh_hans: '第三段',
        },
        range: [22, 31],
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
    { label: "Start", seq: 1 },
    { label: "Open and", seq: 11 },
    { label: "Strike Ears", seq: 22 },
    { label: "Horse Stance", seq: 32 },
    { label: 'Closing', seq: 42 },
  ],
  postures: [
    {
      seq: 1,
      names: {
        en: "Commencing Form",
        sv: "Inledande form",
        zh_pinyin: "qǐ shì",
        zh_hans: '起势',
      },
      description: {
        en: "From a natural upright stance, step the left foot out to shoulder width, raise both arms forward to shoulder height, then sink the elbows and press the palms down as the knees soften.",
        sv: "Från naturligt upprätt ställning, kliv ut med vänster fot till axelbredd, lyft båda armarna framåt till axelhöjd, sänk sedan armbågarna och tryck handflatorna nedåt medan knäna mjuknar.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 2,
      names: {
        en: "Grasp the Sparrow's Tail — Right",
        sv: "Grip sparvens stjärt — höger",
        zh_pinyin: "yòu lǎn què wěi",
        zh_hans: '右揽雀尾',
      },
      description: {
        en: "Perform the four-energy sequence to the right — ward-off (peng), roll-back (lü), press (ji) and push (an) — flowing into a right bow stance with the forearms rolling and extending.",
        sv: "Utför fyrenergisekvensen åt höger — avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an) — in i en höger bågställning medan underarmarna rullar och sträcks ut.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 3,
      names: {
        en: "Single Whip — Left",
        sv: "Enkelt piskslag — vänster",
        zh_pinyin: "zuǒ dān biān",
        zh_hans: '左单鞭',
      },
      description: {
        en: "Form a hook hand to the rear with the right while the left palm pushes outward to the side, opening the arms into a wide left bow stance like a stretched whip.",
        sv: "Forma en krokhand bakåt med höger medan vänster handflata trycker ut åt sidan, och öppnar armarna till en bred vänster bågställning som en spänd piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 4,
      names: {
        en: "Raise Hands",
        sv: "Lyft händerna",
        zh_pinyin: "tí shǒu",
        zh_hans: '提手',
      },
      description: {
        en: "Draw into an empty stance with the right heel touching down, both hands closing inward in front of the body as if pressing an opponent's arm between the palms.",
        sv: "Dra ihop till tom ställning med höger häl i marken, båda händerna sluts inåt framför kroppen som om de pressar en motståndares arm mellan handflatorna.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 5,
      names: {
        en: "White Crane Spreads Its Wings",
        sv: "Vit trana breder ut vingarna",
        zh_pinyin: "bái hè liàng chì",
        zh_hans: '白鹤亮翅',
      },
      description: {
        en: "Shift back into an empty stance, the right hand rising to the temple and the left settling by the hip, opening the arms like a crane spreading its wings.",
        sv: "Skifta tillbaka till tom ställning, höger hand stiger till tinningen och vänster sänks vid höften, och armarna öppnas som en trana som breder ut vingarna.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 6,
      names: {
        en: "Brush Knee and Twist Step",
        sv: "Borsta knä och vrid steg",
        zh_pinyin: "lōu xī ǎo bù",
        zh_hans: '搂膝拗步',
      },
      description: {
        en: "In a bow stance one hand brushes across the knee to clear a low attack while the opposite palm pushes forward at shoulder height, the step crossed against the leading leg.",
        sv: "I bågställning sveper en hand över knäet för att avvärja ett lågt angrepp medan den motsatta handflatan trycker framåt i axelhöjd, med steget korsat mot det främre benet.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 7,
      names: {
        en: "Deflect-Body Fist",
        sv: "Avled kroppen och slå",
        zh_pinyin: "piē shēn chuí",
        zh_hans: '撇身捶',
      },
      description: {
        en: "Turn the body and flick the right fist back-handed out over the brow, then parry with the left hand and drive the fist forward into a bow stance.",
        sv: "Vrid kroppen och slå höger näve med ovansidan ut över ögonbrynet, parera sedan med vänster hand och driv näven framåt till bågställning.",
      },
      tags: ['hand-deflection', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 8,
      names: {
        en: "Roll Back and Press",
        sv: "Rulla tillbaka och pressa",
        zh_pinyin: "lǚ jǐ shì",
        zh_hans: '捋挤式',
      },
      description: {
        en: "Roll back diagonally to neutralise an incoming arm, then turn and press the rear palm against the front wrist, squeezing forward into a bow stance.",
        sv: "Rulla tillbaka diagonalt för att neutralisera en inkommande arm, vänd sedan och pressa den bakre handflatan mot den främre handleden, och pressa framåt till bågställning.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 9,
      names: {
        en: "Step Forward, Deflect, Parry and Punch",
        sv: "Kliv fram, avled, parera och slå",
        zh_pinyin: "jìn bù bān lán chuí",
        zh_hans: '进步搬拦捶',
      },
      description: {
        en: "Step forward while deflecting with the right fist, parry across with the left palm, then punch the right fist straight forward at chest height into a bow stance.",
        sv: "Kliv fram medan höger näve avleder, parera tvärs över med vänster handflata, slå sedan höger näve rakt framåt i brösthöjd till bågställning.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 10,
      names: {
        en: "Apparent Close Up",
        sv: "Skenbar stängning",
        zh_pinyin: "rú fēng sì bì",
        zh_hans: '如封似闭',
      },
      description: {
        en: "Cross the hands to unwind the punching arm, withdraw and separate the palms while sitting back, then press both palms forward together into a bow stance.",
        sv: "Korsa händerna för att lösgöra den slående armen, dra tillbaka och separera handflatorna medan du sätter dig bakåt, och tryck sedan båda handflatorna framåt tillsammans till bågställning.",
      },
      tags: ['hand-deflection', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 11,
      names: {
        en: "Open and Close Hands",
        sv: "Öppna och sluta händerna",
        zh_pinyin: "kāi hé shǒu",
        zh_hans: '开合手',
      },
      description: {
        en: "A Sun-style transition: turn to face square, open both palms apart to shoulder width facing each other, then close them back together as the weight settles in a high empty stance.",
        sv: "En Sun-stilsövergång: vänd rakt fram, öppna båda handflatorna isär till axelbredd vända mot varandra, och slut dem sedan tillbaka medan tyngden sjunker i en hög tom ställning.",
      },
      tags: ['opening-closing', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 12,
      names: {
        en: "Single Whip — Right",
        sv: "Enkelt piskslag — höger",
        zh_pinyin: "yòu dān biān",
        zh_hans: '右单鞭',
      },
      description: {
        en: "Form a hook hand to the rear with the left while the right palm pushes outward to the side, opening the arms into a wide right bow stance like a stretched whip.",
        sv: "Forma en krokhand bakåt med vänster medan höger handflata trycker ut åt sidan, och öppnar armarna till en bred höger bågställning som en spänd piska.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 13,
      names: {
        en: "Fist Under Elbow",
        sv: "Näve under armbåge",
        zh_pinyin: "zhǒu dǐ chuí",
        zh_hans: '肘底捶',
      },
      description: {
        en: "Gather into an empty stance with the left palm raised on edge in front, while the right fist tucks underneath the left elbow ready to strike.",
        sv: "Samla ihop till tom ställning med vänster handflata rest på kant framför, medan höger näve göms under vänster armbåge redo att slå.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 14,
      names: {
        en: "Turn Body and Push Palm",
        sv: "Vänd kroppen och tryck handflata",
        zh_pinyin: "zhuǎn shēn tuī zhǎng",
        zh_hans: '转身推掌',
      },
      description: {
        en: "Pivot the body around on the heel, brush the knee with one hand and push the other palm forward into a drop stance, repeated as the direction turns.",
        sv: "Pivotera kroppen runt på hälen, borsta knäet med ena handen och tryck den andra handflatan framåt till en sänkt ställning, upprepat medan riktningen vänder.",
      },
      tags: ['transition', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 15,
      names: {
        en: "Fair Lady Works the Shuttles",
        sv: "Jungfrun arbetar vid väven",
        zh_pinyin: "yù nǚ chuān suō",
        zh_hans: '玉女穿梭',
      },
      description: {
        en: "Ward off upward with one forearm to the temple while the other palm thrusts forward, working diagonally to alternating corners in successive bow stances.",
        sv: "Avvärja uppåt med ena underarmen till tinningen medan den andra handflatan stöter framåt, arbetande diagonalt mot omväxlande hörn i på varandra följande bågställningar.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 16,
      names: {
        en: "Heel Kick — Right and Left",
        sv: "Hälspark — höger och vänster",
        zh_pinyin: "yòu zuǒ dēng jiǎo",
        zh_hans: '右左蹬脚',
      },
      description: {
        en: "Cross the wrists and open them apart while balancing on one leg, then thrust the heel out to the side, performed first with the right foot and then the left.",
        sv: "Korsa handlederna och öppna dem isär medan du balanserar på ett ben, stöt sedan ut hälen åt sidan, först med höger fot och sedan vänster.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 17,
      names: {
        en: "Hidden Hand Forearm Punch",
        sv: "Dold hand och underarmsslag",
        zh_pinyin: "yǎn shǒu gōng chuí",
        zh_hans: '掩手肱捶',
      },
      description: {
        en: "A Chen-style fa-jin: coil and store energy with the fist hidden at the waist, then release an explosive spiralling punch forward as the rear hand snaps back.",
        sv: "Ett Chen-stils fa-jin: spiralisera och lagra energi med näven gömd vid midjan, släpp sedan ett explosivt spiralslag framåt medan den bakre handen rycks tillbaka.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 18,
      names: {
        en: "Part the Wild Horse's Mane",
        sv: "Dela vildhästens man",
        zh_pinyin: "yě mǎ fēn zōng",
        zh_hans: '野马分鬃',
      },
      description: {
        en: "Diagonally split the arms apart, the lower hand sweeping up under the opponent's arm while stepping into a bow stance, repeated alternately to each side.",
        sv: "Dela armarna diagonalt isär, den nedre handen sveper upp under motståndarens arm medan du kliver in i bågställning, omväxlande åt varje sida.",
      },
      tags: ['hand-deflection', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 19,
      names: {
        en: "Wave Hands Like Clouds",
        sv: "Vifta händerna som moln",
        zh_pinyin: "yún shǒu",
        zh_hans: '云手',
      },
      description: {
        en: "Shifting weight side to side in a horse stance, the hands circle continuously in front of the body, one rising past the face as the other sinks past the waist.",
        sv: "Med tyngden skiftande från sida till sida i hästställning cirklar händerna oavbrutet framför kroppen, en stiger förbi ansiktet medan den andra sjunker förbi midjan.",
      },
      tags: ['cloud-hands', 'repetitive'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 20,
      names: {
        en: "Stand on One Leg and Strike Tiger",
        sv: "Stå på ett ben och slå tigern",
        zh_pinyin: "dú lì dǎ hǔ",
        zh_hans: '独立打虎',
      },
      description: {
        en: "Balance on one leg with the opposite knee lifted, both hands forming fists that strike in a stacked vertical line as if cornering a tiger.",
        sv: "Balansera på ett ben med motsatt knä lyft, båda händerna formar nävar som slår i en staplad lodrät linje som om de tränger in en tiger.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 21,
      names: {
        en: "Separate Right Foot",
        sv: "Skilj höger fot",
        zh_pinyin: "yòu fēn jiǎo",
        zh_hans: '右分脚',
      },
      description: {
        en: "Cross and open the wrists while standing on the left leg, then snap the right toes outward and upward to the front-right corner with the palms spreading apart.",
        sv: "Korsa och öppna handlederna medan du står på vänster ben, snärta sedan höger tår utåt och uppåt mot främre högra hörnet medan handflatorna sprids isär.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 22,
      names: {
        en: "Strike Ears with Both Fists",
        sv: "Slå öronen med båda nävarna",
        zh_pinyin: "shuāng fēng guàn ěr",
        zh_hans: '双峰贯耳',
      },
      description: {
        en: "Lower the lifted knee into a bow stance while both hands swing down and around into fists, arcing inward to strike toward the opponent's ears.",
        sv: "Sänk det lyfta knäet till bågställning medan båda händerna svingar ned och runt till nävar, som bågnar inåt för att slå mot motståndarens öron.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 23,
      names: {
        en: "Separate Left Foot",
        sv: "Skilj vänster fot",
        zh_pinyin: "zuǒ fēn jiǎo",
        zh_hans: '左分脚',
      },
      description: {
        en: "Cross and open the wrists while standing on the right leg, then snap the left toes outward and upward to the front-left corner with the palms spreading apart.",
        sv: "Korsa och öppna handlederna medan du står på höger ben, snärta sedan vänster tår utåt och uppåt mot främre vänstra hörnet medan handflatorna sprids isär.",
      },
      tags: ['kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 24,
      names: {
        en: "Turn Body and Slap Foot",
        sv: "Vänd kroppen och slå foten",
        zh_pinyin: "zhuǎn shēn pāi jiǎo",
        zh_hans: '转身拍脚',
      },
      description: {
        en: "Spin around on the supporting heel to face the opposite direction, then kick the foot up and slap it audibly with the same-side palm.",
        sv: "Snurra runt på den stödjande hälen för att vända åt motsatt håll, sparka sedan upp foten och slå den hörbart med handflatan på samma sida.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 25,
      names: {
        en: "Step Forward and Plant Punch",
        sv: "Kliv fram och slå nedåt",
        zh_pinyin: "jìn bù zāi chuí",
        zh_hans: '进步栽捶',
      },
      description: {
        en: "Step forward into a bow stance, brush the knee with the left hand and drive the right fist diagonally downward to plant a punch toward a low target.",
        sv: "Kliv fram till bågställning, borsta knäet med vänster hand och driv höger näve diagonalt nedåt för att plantera ett slag mot ett lågt mål.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 26,
      names: {
        en: "Slant Flying",
        sv: "Snett flygande",
        zh_pinyin: "xié fēi shì",
        zh_hans: '斜飞式',
      },
      description: {
        en: "Cross the arms low, then split them apart on a steep diagonal as the body opens into a side bow stance, the upper hand flying out like a wing.",
        sv: "Korsa armarna lågt, dela dem sedan isär på en brant diagonal medan kroppen öppnas till en sidobågställning, den övre handen flyger ut som en vinge.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 27,
      names: {
        en: "Single Whip — Low Posture",
        sv: "Enkelt piskslag — låg ställning",
        zh_pinyin: "dān biān xià shì",
        zh_hans: '单鞭下势',
      },
      description: {
        en: "From a single whip, sink the weight back onto a deeply bent leg in a low crouch, the front palm threading down along the extended leg toward the foot.",
        sv: "Från ett enkelt piskslag, sjunk tyngden tillbaka på ett djupt böjt ben i en låg huksittande ställning, den främre handflatan trär nedåt längs det utsträckta benet mot foten.",
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 28,
      names: {
        en: "Golden Rooster Stands on One Leg",
        sv: "Gyllene tuppen står på ett ben",
        zh_pinyin: "jīn jī dú lì",
        zh_hans: '金鸡独立',
      },
      description: {
        en: "Rise up from the low stance to balance on one leg, lifting the opposite knee high while the same-side palm thrusts upward and the other presses down.",
        sv: "Res dig upp från den låga ställningen för att balansera på ett ben, lyft motsatt knä högt medan handflatan på samma sida stöter uppåt och den andra trycker nedåt.",
      },
      tags: ['stance', 'kick'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 29,
      names: {
        en: "Step Back and Thrust Palm",
        sv: "Kliv bakåt och stöt handflatan",
        zh_pinyin: "tuì bù chuān zhǎng",
        zh_hans: '退步穿掌',
      },
      description: {
        en: "Step backward while sinking into a bow stance and thread the palm forward low under the other arm, fingers leading as the body extends.",
        sv: "Kliv bakåt medan du sjunker till bågställning och trär handflatan framåt lågt under den andra armen, med fingrarna ledande medan kroppen sträcks ut.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 30,
      names: {
        en: "Empty Step Press Palm Down",
        sv: "Tom ställning och tryck handflatan nedåt",
        zh_pinyin: "xū bù yā zhǎng",
        zh_hans: '虚步压掌',
      },
      description: {
        en: "Turn the body and draw into an empty stance, pressing the front palm down across the body while the other hand rests above the head.",
        sv: "Vrid kroppen och dra ihop till tom ställning, tryck den främre handflatan nedåt tvärs över kroppen medan den andra handen vilar ovanför huvudet.",
      },
      tags: ['stance', 'hand-deflection'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 31,
      names: {
        en: "Stand on One Leg and Support Palm",
        sv: "Stå på ett ben och stötta handflatan",
        zh_pinyin: "dú lì tuō zhǎng",
        zh_hans: '独立托掌',
      },
      description: {
        en: "Rise onto one leg with the opposite knee lifted, one palm supporting upward as if holding a tray while the other settles beside the hip.",
        sv: "Res dig på ett ben med motsatt knä lyft, en handflata stöttar uppåt som om den håller en bricka medan den andra sänks vid höften.",
      },
      tags: ['stance', 'strike'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 32,
      names: {
        en: "Horse Stance Shoulder Strike",
        sv: "Hästställning med axelstöt",
        zh_pinyin: "mǎ bù kào",
        zh_hans: '马步靠',
      },
      description: {
        en: "Step across and settle into a horse stance, driving the shoulder and forearm outward to deliver a leaning bump strike with the body's structure.",
        sv: "Kliv tvärs över och sjunk till hästställning, driv axeln och underarmen utåt för att leverera en lutande stötattack med kroppens struktur.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 33,
      names: {
        en: "Turn Body and Large Roll Back",
        sv: "Vänd kroppen och stor tillbakarullning",
        zh_pinyin: "zhuǎn shēn dà lǚ",
        zh_hans: '转身大捋',
      },
      description: {
        en: "Turn the body and step around while both hands roll back in a large sweeping arc, leading the opponent's force off line into a shifting stance.",
        sv: "Vrid kroppen och kliv runt medan båda händerna rullar tillbaka i en stor svepande båge, och leder motståndarens kraft ur linje till en skiftande ställning.",
      },
      tags: ['hand-deflection', 'transition', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 34,
      names: {
        en: "Rest Stance, Seize and Strike",
        sv: "Vilställning, grip och slå",
        zh_pinyin: "xiē bù qín dǎ",
        zh_hans: '歇步擒打',
      },
      description: {
        en: "Cross the legs and sit down into a rest stance, one hand seizing and pulling down while the other fist strikes forward over it.",
        sv: "Korsa benen och sätt dig ned i en vilställning, en hand griper och drar nedåt medan den andra näven slår framåt över den.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 35,
      names: {
        en: "Thrust Palm — Low Posture",
        sv: "Stöt handflatan — låg ställning",
        zh_pinyin: "chuān zhǎng xià shì",
        zh_hans: '穿掌下势',
      },
      description: {
        en: "Sink back into a low crouch stance and thread the palm forward and down along the extended leg, fingers skimming toward the foot.",
        sv: "Sjunk tillbaka i en låg huksittande ställning och trä handflatan framåt och nedåt längs det utsträckta benet, med fingrarna skummande mot foten.",
      },
      tags: ['stance', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 36,
      names: {
        en: "Step Up to Seven Stars",
        sv: "Kliv fram till sju stjärnor",
        zh_pinyin: "shàng bù qī xīng",
        zh_hans: '上步七星',
      },
      description: {
        en: "Step forward into an empty stance and cross both fists in front of the chest at wrist height, forming the bracing seven-star guard.",
        sv: "Kliv fram till tom ställning och korsa båda nävarna framför bröstet i handledshöjd, och bilda det stöttande sjustjärniga gardet.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 37,
      names: {
        en: "Step Back and Ride the Tiger",
        sv: "Kliv bakåt och rid tigern",
        zh_pinyin: "tuì bù kuà hǔ",
        zh_hans: '退步跨虎',
      },
      description: {
        en: "Step back into an empty stance, separating the hands so one rises beside the head and the other sweeps down to the hip, opening the body wide.",
        sv: "Kliv bakåt till tom ställning och separera händerna så att en stiger vid huvudet och den andra sveper ned till höften, och öppnar kroppen vidöppet.",
      },
      tags: ['stance', 'opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 38,
      names: {
        en: "Turn Body and Lotus Kick",
        sv: "Vänd kroppen och lotusspark",
        zh_pinyin: "zhuǎn shēn bǎi lián",
        zh_hans: '转身摆莲',
      },
      description: {
        en: "Spin the body around and swing the leg in a crescent fan across the front, slapping the foot with both palms in succession as it sweeps past.",
        sv: "Snurra kroppen runt och sving benet i en halvmånsformad solfjäder tvärs över framsidan, och slå foten med båda handflatorna i följd medan den sveper förbi.",
      },
      tags: ['kick', 'transition'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 39,
      names: {
        en: "Bend the Bow and Shoot the Tiger",
        sv: "Spänn bågen och skjut tigern",
        zh_pinyin: "wān gōng shè hǔ",
        zh_hans: '弯弓射虎',
      },
      description: {
        en: "Settle into a bow stance and swing both hands into fists to one side, one drawing back by the temple and the other punching out as if loosing an arrow.",
        sv: "Sjunk till bågställning och sving båda händerna till nävar åt ena sidan, en dras tillbaka vid tinningen och den andra slår ut som om den avfyrar en pil.",
      },
      tags: ['strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 40,
      names: {
        en: "Grasp the Sparrow's Tail — Left",
        sv: "Grip sparvens stjärt — vänster",
        zh_pinyin: "zuǒ lǎn què wěi",
        zh_hans: '左揽雀尾',
      },
      description: {
        en: "Perform the four-energy sequence to the left — ward-off (peng), roll-back (lü), press (ji) and push (an) — flowing into a left bow stance with the forearms rolling and extending.",
        sv: "Utför fyrenergisekvensen åt vänster — avvärja (peng), rulla tillbaka (lü), pressa (ji) och trycka (an) — in i en vänster bågställning medan underarmarna rullar och sträcks ut.",
      },
      tags: ['hand-deflection', 'strike', 'stance'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 41,
      names: {
        en: "Cross Hands",
        sv: "Korshänder",
        zh_pinyin: "shí zì shǒu",
        zh_hans: '十字手',
      },
      description: {
        en: "Turn square to the front and sweep both arms down and up to cross at the wrists in front of the chest, drawing the feet parallel into a shoulder-width stance.",
        sv: "Vänd rakt fram och svep båda armarna ned och upp för att korsas vid handlederna framför bröstet, och dra fötterna parallellt till en axelbred ställning.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
    {
      seq: 42,
      names: {
        en: "Closing Form",
        sv: "Avslutande form",
        zh_pinyin: "shōu shì",
        zh_hans: '收势',
      },
      description: {
        en: "Turn the crossed palms over and lower both hands slowly to the sides, then draw the left foot back to bring the feet together and return to a natural standing posture.",
        sv: "Vänd de korsade handflatorna och sänk båda händerna långsamt till sidorna, dra sedan tillbaka vänster fot för att föra ihop fötterna och återgå till naturligt stående.",
      },
      tags: ['opening-closing'],
      media: { image: null, audio: null, video: null, rig: null },
      repeatOf: null,
    },
  ],
};
