# Media Resources & Attribution

This catalogue records every external image/video resource referenced by the app
and who it belongs to. It exists so that anyone looking at this repository can see
the provenance of each asset.

## Status & licensing

- **Use:** private study reference. Videos are **linked** (embedded via YouTube's
  privacy-enhanced player or opened on YouTube), not re-hosted or redistributed.
  Rights remain with each original creator/channel.
- **Reference pages** (per-posture articles) are linked out to their authors; their
  text and photos remain © the respective sites.
- **Wikimedia Commons** items are public-domain or Creative-Commons; confirm the
  exact licence on each file page before any redistribution.
- If you publish this app publicly, review each entry below and replace anything
  whose licence does not permit your use with a properly-licensed or self-produced
  asset.

## How it's wired

`src/data/mediaLibrary.ts` is the single source of truth (this file mirrors it for
humans). At load time `attachMedia(formId, data)` merges:

1. **Per-posture resources** — keyed by hanzi, so one entry is reused across every
   form that contains the posture (White Crane appears in all 14 forms, Single Whip
   in 13, …). Directional variants (`左/右/左右/转身/进步…`) normalize onto the base
   posture, so `左右野马分鬃` reuses `野马分鬃`.
2. **Whole-form routine videos** — keyed by form id, attached to every posture of
   that form (front / mirror / step-by-step angles).

The expanded posture card renders these as an attributed gallery (`MediaGallery`):
video thumbnails play inline on tap; reference pages render as link chips.

### Coverage

- **14/14 forms** have routine videos (multiple camera angles for all but Wu/Hao).
- **125 / 191 unique postures** (~65%) now have dedicated per-posture media (a
  reference page and/or a self-hosted image); the rest fall back to their form's
  routine videos. (Up from 64 after the Phase E research pass — see
  `MEDIA_DOWNLOAD_PLAN.md`.)
- **Localized for offline use:** a download-capable session has since pulled the
  52 routine-video poster thumbnails (`public/media/thumbs/`) and 6 free-licensed
  posture stills (`public/media/postures/`) into the repo, so posters and those
  images render without a connection. The reference *pages* and *video playback*
  still need the network (links, not re-hosted). See **Self-hosted images** below
  and **Offline localization** for how this was done.

---

## Whole-form routine videos (YouTube)

All links are © their respective channels.

### Yang family
| Form | View | Title / Channel | URL |
|---|---|---|---|
| Yang 24 | Front | Front View Demo with Subtitles | https://www.youtube.com/watch?v=msPD0LcbSTM |
| Yang 24 | Mirror | Amin Wu 吳阿敏 — back-view | https://www.youtube.com/watch?v=e4VIw41R-PU |
| Yang 24 | Mirror | Full Set Back View with Verbal Cues | https://www.youtube.com/watch?v=FUpeJ3Bkr9o |
| Yang 24 | Step-by-step | Full Beginner Instruction (Master Pei) | https://www.youtube.com/watch?v=R8NbQecDygQ |
| Yang 40 | Front | Amin Wu 吳阿敏 — front-view demonstration | https://www.youtube.com/watch?v=FowwENJg1xU |
| Yang 40 | Demo | Yi Peng 易鵬 — competition routine | https://www.youtube.com/watch?v=inPP1EF8okk |
| Yang 40 | Mirror | Back view with spoken count | https://www.youtube.com/watch?v=QMwZfFVVnCI |
| Yang 40 | Step-by-step | Peter Chen — slow motion with instructions | https://www.youtube.com/watch?v=w67MYzzl8xk |
| Yang 85 | Front | Amin Wu 吳阿敏 — Traditional Long Form | https://www.youtube.com/watch?v=CpyWUq6eMyI |
| Yang 85 | Mirror | Amin Wu 吳阿敏 — back view | https://www.youtube.com/watch?v=X9HGPGDdiig |
| Yang 85 | Demo | Fu Zhongwen 傅鍾文 (Part 1) | https://www.youtube.com/watch?v=GYmYgCTpwKI |
| Yang 85 | Step-by-step | Breakdown, Eng CC | https://www.youtube.com/watch?v=T6thmaIbLjc |
| Yang 103 | Step-by-step | Yang Family (Yang Jun) walkthrough | https://www.youtube.com/watch?v=LiGdYlPC7Ko |
| Yang 103 | Mirror | Back view | https://www.youtube.com/watch?v=rl2gDGgOOXM |
| Yang 103 | Demo | Yang Jun — Part 1 | https://www.youtube.com/watch?v=keWLHacjNWI |
| Yang 103 | Step-by-step | Yang Family — close-up practice | https://www.youtube.com/watch?v=d1rTZCX6Xzg |
| Yang 108 | Demo | Traditional 108 Form | https://www.youtube.com/watch?v=a6pJf2otwv8 |
| Yang 108 | Mirror | Long Form (Back View) | https://www.youtube.com/watch?v=V9h7zU7cr6E |
| Yang 108 | Demo | with 8 Technique Analysis (Dr. Todd Martin) | https://www.youtube.com/watch?v=MJHqVSzURLE |
| Yang 108 | Step-by-step | 93-part breakdown (1/93) | https://www.youtube.com/watch?v=LmHZE5oklag |

### Chen family
| Form | View | Title / Channel | URL |
|---|---|---|---|
| Chen 18 | Front | Chen Zhenglei 陳正雷 — Essential 18 | https://www.youtube.com/watch?v=1EEALpy2JOM |
| Chen 18 | Front | Beginner front view | https://www.youtube.com/watch?v=YtUqaedweSQ |
| Chen 18 | Mirror | Back View | https://www.youtube.com/watch?v=66T-uY8cW-U |
| Chen 18 | Step-by-step | Tutorial, back view & slow-mo (Marco Insalata) | https://www.youtube.com/watch?v=otF4DxyJN2c |
| Chen Laojia Yilu | Front | Chen Xiaowang 陳小旺 — complete | https://www.youtube.com/watch?v=Xqhj3NqQ9Zk |
| Chen Laojia Yilu | Demo | Chen Zhenglei 陳正雷 (subtitled, postures marked) | https://www.youtube.com/watch?v=ZTyIQm-_Bj4 |
| Chen Laojia Yilu | Demo | Chen Xiaowang 陳小旺 (2013) | https://www.youtube.com/watch?v=SuZgYRS2Xok |
| Chen Laojia Yilu | Step-by-step | Chen Zhenglei tutorial 1/5 | https://www.youtube.com/watch?v=CqX_riDPLz8 |
| Chen 56 | Front | Kan Gui Xiang 阚桂香 (the routine's author) | https://www.youtube.com/watch?v=7aS8JLJcBvU |
| Chen 56 | Demo | Wong Yong Wushu Academy | https://www.youtube.com/watch?v=u7hy2jqwu-0 |
| Chen 56 | Step-by-step | Kan Gui Xiang 阚桂香 — tutorial | https://www.youtube.com/watch?v=UvzkkwY141U |
| Chen 56 | Step-by-step | Competition routine tutorial 1~11 | https://www.youtube.com/watch?v=FUqUCDcOsSk |

### Wu family
| Form | View | Title / Channel | URL |
|---|---|---|---|
| Wu 108 | Front | GM Eddie Wu Kwong Yu 吳光宇 — standard hand form | https://www.youtube.com/watch?v=v6zbcMUYJ5g |
| Wu 108 | Step-by-step | GM Eddie Wu — joint form + explanations | https://www.youtube.com/watch?v=5EY2i9m5XKg |
| Wu 108 | Demo | Li Koon-kuan 李冠群 — square form | https://www.youtube.com/watch?v=41XGr7WQ3Ok |
| Wu 108 | Step-by-step | Complete tutorial demonstration | https://www.youtube.com/watch?v=7GXUgz7P278 |

### Wu/Hao family
| Form | View | Title / Channel | URL |
|---|---|---|---|
| Wu/Hao 46 | Front | Amin Wu 吳阿敏 — Hao-style 46 Form | https://www.youtube.com/watch?v=8EJqwLScVR4 |

> Wu/Hao is the least-documented style online; only a single clean full-routine
> video surfaced. Additional angles likely exist behind Amin Wu's site / Vimeo.

### Sun family
| Form | View | Title / Channel | URL |
|---|---|---|---|
| Sun 73 | Front | Gao Jiamin 高佳敏 — front | https://www.youtube.com/watch?v=Ex0BTGpkq0E |
| Sun 73 | Mirror | Gao Jiamin 高佳敏 — back | https://www.youtube.com/watch?v=NtXbaqPH7ek |
| Sun 73 | Mirror | Back view with spoken count | https://www.youtube.com/watch?v=EYNe5qxd2y4 |
| Sun 73 | Demo | Susan Thompson — English demo | https://www.youtube.com/watch?v=SoQ7Mwze_ko |
| Sun 97 | Step-by-step | Sun Jianyun 孙剑云 — lecture (1/2) | https://www.youtube.com/watch?v=Sli40SubueI |
| Sun 97 | Step-by-step | Sun Jianyun 孙剑云 — teaching | https://www.youtube.com/watch?v=UjunL9tlut0 |
| Sun 97 | Demo | Feng Yue — slow version | https://www.youtube.com/watch?v=VOIu2iTKVMk |

### Combined / competition
| Form | View | Title / Channel | URL |
|---|---|---|---|
| 42 Combined | Front | Gao Jiamin 高佳敏 — front | https://www.youtube.com/watch?v=rj19U_UR6zI |
| 42 Combined | Mirror | Back view | https://www.youtube.com/watch?v=VBhy59de37Q |
| 42 Combined | Demo | International competition routine | https://www.youtube.com/watch?v=eiSPJ4gn4zM |
| 42 Combined | Demo | Amin Wu 吴阿敏 | https://www.youtube.com/watch?v=A-T7FO_dfRw |
| 48 Combined | Front | Amin Wu 吴阿敏 — front | https://www.youtube.com/watch?v=AK5XDZN-t74 |
| 48 Combined | Mirror | Back view | https://www.youtube.com/watch?v=skI-_GcpP6g |
| 48 Combined | Step-by-step | Amin Wu 吴阿敏 — front+back combined | https://www.youtube.com/watch?v=vMPyFG5E888 |
| 48 Combined | Step-by-step | Qiu Huifang 邱慧芳 / Li Deyin 李德印 | https://www.youtube.com/watch?v=VTgfWeCIQfE |

---

## Per-posture reference pages

Keyed by hanzi; reused across every form containing the posture. © respective sites.

| Hanzi | Posture | Source | URL |
|---|---|---|---|
| 白鹤亮翅 | White Crane Spreads Its Wings | everydaytaichi.org | https://www.everydaytaichi.org/white-crane-spreads-its-wings1.html |
| 单鞭 | Single Whip | everydaytaichi.org | https://www.everydaytaichi.org/single-whip.html |
| 单鞭 | Single Whip (Yang Chengfu application) — **now self-hosted**, see [Self-hosted images](#self-hosted-images-public-domain--cc) | commons.wikimedia.org | https://commons.wikimedia.org/wiki/File:Yang_cheng_fu_single_whip_application_2_75.jpg |
| 高探马 | High Pat on Horse | everydaytaichi.org | http://www.everydaytaichi.org/high-pat-on-the-horse-kick-out-right.html |
| 高探马 | High Pat on Horse (front & back) | everydaytaichi.org | http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html |
| 云手 | Cloud Hands | everydaytaichi.org | https://www.everydaytaichi.org/cloud-hands.html |
| 云手 | Cloud Hands (back view sequence) | everydaytaichi.org | http://www.everydaytaichi.org/grasping-the-birds-tail-thru-cloud-hands-single-whip-back-view.html |
| 上步七星 | Step Up to Seven Stars | everydaytaichi.org | https://www.everydaytaichi.org/yang-style-16-form.html |
| 如封似闭 | Apparent Closing | everydaytaichi.org | https://www.everydaytaichi.org/apparent-closing.html |
| 如封似闭 | Apparent Closing (lesson) | everydaytaichi.org | https://www.everydaytaichi.org/lesson-10-turn-deflect-parry-punch-apparent-closing.html |
| 双峰贯耳 | Strike Ears with Both Fists | everydaytaichi.org | http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html |
| 手挥琵琶 | Playing the Lute | everydaytaichi.org | http://www.everydaytaichi.org/playing-the-lute1.html |
| 起势 | Commencing / Opening Form | egreenway.com | https://www.egreenway.com/taichichuan/TY1.htm |
| 起势 | Commencing Form | everydaytaichi.org | https://www.everydaytaichi.org/commencing-form-part-horses-mane.html |
| 金鸡独立 | Golden Rooster Stands on One Leg | classicaltaichi.blogspot.com | https://classicaltaichi.blogspot.com/2013/07/form-and-martial-intent-golden-rooster.html |
| 摆莲 | Sweep / Lotus Kick | taichimastermoy.org | https://taichimastermoy.org/sweep-lotus-the-move-unlike-any-other-part-1-first-impressions/ |
| 收势 | Closing Form | everydaytaichi.org | http://www.everydaytaichi.org/closing-form.html |
| 搂膝拗步 | Brush Knee and Twist Step | everydaytaichi.org | https://www.everydaytaichi.org/brush-knee2.html |
| 海底针 | Needle at Sea Bottom | everydaytaichi.org | https://www.everydaytaichi.org/needle-at-the-bottom-of-the-sea2.html |
| 提手上势 | Raise Hands and Step Up | egreenway.com | https://www.egreenway.com/taichichuan/TY1.htm |
| 搬拦捶 | Deflect, Parry and Punch | everydaytaichi.org | http://www.everydaytaichi.org/turn-deflect-parry-and-punch.html |
| 十字手 | Cross Hands | everydaytaichi.org | http://www.everydaytaichi.org/cross-hands.html |
| 肘底捶 | Fist Under Elbow | thetaichinotebook.com | https://thetaichinotebook.com/2017/03/02/fist-under-elbow-and-natural-posture/ |
| 野马分鬃 | Part the Wild Horse's Mane | everydaytaichi.org | https://www.everydaytaichi.org/commencing-form-part-horses-mane.html |
| 揽雀尾 | Grasp the Bird's/Sparrow's Tail | everydaytaichi.org | https://www.everydaytaichi.org/grasping-the-birds-tail1.html |
| 揽雀尾 | Grasping the Sparrow's Tail (Peng/Lü/Ji/An photos) | egreenway.com | https://www.egreenway.com/taichichuan/gtst.htm |
| 抱虎归山 | Embrace Tiger, Return to Mountain | balancedlifetaichi.com | https://balancedlifetaichi.com/blog/what-is-embrace-tiger-return-to-mountain-yang-all-about |
| 扇通背 | Fan Through the Back | egreenway.com | https://www.egreenway.com/taichichuan/longyang.htm |
| 斜飞势 | Diagonal Flying | egreenway.com | https://www.egreenway.com/taichichuan/yangn1.htm |
| 六封四闭 | Six Sealing and Four Closing (Chen) | tcmwindow.com | http://www.tcmwindow.com/taiji/Illustrations/movements/Six-Sealing-and-Four-Closing-in-form-of-Chen-Style-Taiji.shtml |
| 金刚捣碓 | Buddha's Warrior Pounds the Mortar (Chen) | tcmwindow.com | http://www.tcmwindow.com/taiji/Illustrations/movements/Buddha's-Warrior-Attendant-Pounds-Mortar-in-Chen-Style-Taiji.shtml |
| 掩手肱拳 | Cover Hand Fist (Chen Zhonghua) | practicalmethod.com | https://practicalmethod.com/2017/05/the-fist-of-covering-hand-yan-shou-gong-chui-toronto-north-york-taiji-class/ |
| 倒撵猴 / 倒卷肱 | Repulse the Monkey | everydaytaichi.org | https://www.everydaytaichi.org/repulsing-the-monkey2.html |
| 下势 | Snake Creeps Down | taijiworld.com | https://www.taijiworld.com/tai-chi-posture.html |
| 下势 | Snake Creeps Down | chandao.co.uk | https://www.chandao.co.uk/taijiquan-snake-creeps-down.html |
| 掤捋挤按 | Four energies (Peng Lü Ji An) | thetaichinotebook.com | https://thetaichinotebook.com/2015/09/10/peng-lu-ji-an-grasping-the-birds-tail/ |
| 掤捋挤按 | Thirteen Postures / Eight Gates | egreenway.com | https://www.egreenway.com/taichichuan/powers13.htm |

### Phase E additions (expanded coverage — researched, then link-verified)

Keyed by hanzi; one verified reference page per posture (liveness-checked). Two of
these postures also gained a free self-hosted image (see the table above). © each site.

| Hanzi | Posture | Source | URL |
|---|---|---|---|
| 开手 | Open Hands | balancedlifetaichi.com | https://balancedlifetaichi.com/blog/what-is-character-is-the-he-in-the-concept-of-kai-he-open-close |
| 合手 | Close Hands | balancedlifetaichi.com | https://balancedlifetaichi.com/blog/what-is-character-is-the-he-in-the-concept-of-kai-he-open-close |
| 撇身捶 | Punch of Draping Over the Body | practicalmethod.com | https://practicalmethod.com/2017/07/fist-draping-over-body-pi-shen-chui-and-lean-with-back-bei-zhe-kao-toronto-north-york-taiji-class-on-july-13-2017/ |
| 弯弓射虎 | Draw the Bow to Shoot the Tiger | taiji-forum.com | https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/ |
| 退步跨虎 | Step Back to Ride the Tiger | thetaichinotebook.com | https://thetaichinotebook.com/2024/04/04/retreat-to-ride-tiger/ |
| 懒扎衣 | Lazily Tying the Coat | tcmwindow.com | http://www.tcmwindow.com/taiji/Illustrations/movements/Lazy-About-Tying-Coat-in-form-of-Chen-Style-Taiji.shtml |
| 玉女穿梭 | Jade Maiden Works the Shuttles | tcmwindow.com | http://www.tcmwindow.com/taiji/Illustrations/movements/Jade-Girl-Works-at-Shuttles-in-form-of-Chen-Style-Taiji.shtml |
| 右蹬脚 | Heel Kick — Right | nwfighting.com | https://nwfighting.com/yang-24-form-tai-chi-movement-kick-right-heel/ |
| 右分脚 | Right Pat the Foot | sanctuaryoftao.org | https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/ |
| 单鞭下势 | Single Whip — Low Posture | nwfighting.com | https://nwfighting.com/yang-24-form-tai-chi-movement-dragon-waves-tail/ |
| 左分脚 | Left Pat the Foot | sanctuaryoftao.org | https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/ |
| 转身白蛇吐信 | Turn Body, White Snake Spits Out Tongue | thetaichinotebook.com | https://thetaichinotebook.com/2024/01/20/tai-chi-applications-needle-at-sea-bottom-fan-through-back-white-snake-spits-out-tongue-torso-flung-punch/ |
| 左蹬脚 | Left Heel Kick | everydaytaichi.org | http://www.everydaytaichi.org/single-whip-high-pat-on-horse-kick-outs-double-punch-front-back-view.html |
| 闪通臂 | Flashing Arms (Open the Fan) | kitrain.com | https://kitrain.com/courses/tai-chi-yang-24/lessons/16-fan-through-the-back/ |
| 青龙出水 | Green Dragon Comes Out of Water | bigbangtaiji.wordpress.com | https://bigbangtaiji.wordpress.com/2015/04/02/green-dragon-emerges-from-water/ |
| 斜行拗步 | Walk Obliquely & Twist Step | thetaichinotebook.com | https://thetaichinotebook.com/2019/03/25/brush-knee-twist-step-tai-chi-application-and-style-comparison/ |
| 预备势 | Preparing Form | yorkshiretaichi.uk | https://yorkshiretaichi.uk/fastform1-preparation-form/ |
| 搂膝 | Brush Knee | practicalmethod.com | https://practicalmethod.com/2017/03/brush-the-knee-in-oblique-stance-lou-xi-ao-bu-toronto-north-york-taiji-class-on-march-24-2017/ |
| 双推手 | Push With Both Hands | practicalmethod.com | https://practicalmethod.com/2007/03/yilu-18-step-forward-and-double-handed-push/ |
| 翻身二起脚 | Turn Over and Double Kick | practicalmethod.com | https://practicalmethod.com/2007/03/yilu-36-turn-over-body-and-double-kick-er-qi-jiao/ |
| 捋挤式 | Drawing the Bow to Shoot the Tiger | taiji-forum.com | https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/ |
| 抱虎推山 | Embrace Tiger, Return to Mountain | balancedlifetaichi.com | https://balancedlifetaichi.com/blog/what-is-embrace-tiger-return-to-mountain-yang-all-about |
| 肘底看捶 | Fist Under Elbow | thetaichinotebook.com | https://thetaichinotebook.com/2017/03/02/fist-under-elbow-and-natural-posture/ |
| 左打虎势 | Strike Tiger — Left | discuss.yangfamilytaichi.com | http://discuss.yangfamilytaichi.com/viewtopic.php?t=840 |
| 右打虎势 | Strike Tiger — Right | discuss.yangfamilytaichi.com | http://discuss.yangfamilytaichi.com/viewtopic.php?t=840 |
| 左右穿梭 | Fair Lady Works the Shuttles (Left & Right) | blackwatertaichi.com | https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners |
| 转身摆莲脚 | Turn and Sweep Lotus Kick | egreenway.com | https://www.egreenway.com/taichichuan/sun73.htm |
| 云手（向右） | Wave Hands Like Clouds (to the Right) | earthbalance-taichi.com | https://earthbalance-taichi.com/2013/10/chen-taiji-cloud-hands/ |
| 云手（快步） | Wave Hands Like Clouds (with Quick Steps) | earthbalance-taichi.com | https://earthbalance-taichi.com/2013/10/chen-taiji-cloud-hands/ |
| 金刚捣碓、收势 | Buddha’s Warrior Attendant Pounds the Mortar & Closing Form | chenscotland.wordpress.com | https://chenscotland.wordpress.com/2010/09/22/what-is-a-jin-gang/ |
| 铺地锦 | Earth Dragon (Snake Creeps Down) | taijiworld.com | https://www.taijiworld.com/tai-chi-posture.html |
| 下步跨虎 | Step Back to Ride the Tiger | thetaichinotebook.com | https://thetaichinotebook.com/2024/04/04/retreat-to-ride-tiger/ |
| 提手 | Pat the Horse and Thrust the Palm | classicaltaichi.blogspot.com | https://classicaltaichi.blogspot.com/2011/05/ti-shou-shang-shi-2-raise-hands.html |
| 左右玉女穿梭 | Fair Lady Works the Shuttles (Left & Right) | everydaytaichi.org | https://www.everydaytaichi.org/maiden-working-the-shuttles.html |
| 斜飞式 | Double Pushing Hands | sam-ma.com | https://www.sam-ma.com/blog/tai-chi-long-form-diagonal-flying |
| 如封似闭·收势 | Apparent Close Up & Closing Form | everydaytaichi.org | https://www.everydaytaichi.org/apparent-closing.html |
| 右起脚 | Right Separation Kick | egreenway.com | https://www.egreenway.com/taichichuan/sun73.htm |
| 左起脚 | Left Separation Kick | egreenway.com | https://www.egreenway.com/taichichuan/sun73.htm |
| 翻身二起 | Turn Over Body and Strike | egreenway.com | https://www.egreenway.com/taichichuan/sun73.htm |
| 玉女穿梭（一） | Jade Lady Works the Shuttles (Part 1) | blackwatertaichi.com | https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners |
| 玉女穿梭（二） | Jade Lady Works the Shuttles (Part 2) | blackwatertaichi.com | https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners |
| 玉女穿梭（三） | Jade Lady Works the Shuttles (Part 3) | blackwatertaichi.com | https://www.blackwatertaichi.com/blog/fair-lady-weaves-at-shuttles-four-corners |
| 玉女穿梭（四） | Jade Lady Works the Shuttles (Part 4) | balancedlifetaichi.com | https://balancedlifetaichi.com/blog/fair-lady-works-shuttles-yang-style-tai-chi |
| 横单鞭 | Horizontal Single Whip | thetaichinotebook.com | https://thetaichinotebook.com/2011/06/03/single-whip-dan-bian/ |
| 左右揽扎衣 | Lazily Tying the Coat (Left & Right) | tcmwindow.com | http://www.tcmwindow.com/taiji/Illustrations/movements/Lazy-About-Tying-Coat-in-form-of-Chen-Style-Taiji.shtml |
| 左右分脚 | Separate Feet (Left & Right) | portal.sanctuaryoftao.org | https://portal.sanctuaryoftao.org/2019/03/separate-foot-left-and-right/ |
| 预备起势 | Preparation and Beginning | egreenway.com | https://www.egreenway.com/taichichuan/TY1.htm |
| 左下势独立 | Snake Creeps Down & Golden Rooster — Left | everydaytaichi.org | https://www.everydaytaichi.org/serpent-in-the-grass-golden-cockerel.html |
| 十字手收势 | Cross Hands & Closing Form | everydaytaichi.org | http://www.everydaytaichi.org/cross-hands.html |
| 预备势 / 起势 | Preparation / Beginning | egreenway.com | https://www.egreenway.com/taichichuan/TY1.htm |
| 回身右蹬脚 | Kick with Right Heel | nwfighting.com | https://nwfighting.com/yang-24-form-tai-chi-movement-kick-right-heel/ |
| 弯弓射虎 / 收势 | Draw the Bow to Shoot the Tiger / Closing | taiji-forum.com | https://taiji-forum.com/martialmonday-4-bend-the-bow-to-shoot-the-tiger/ |

---

## Self-hosted images (public-domain / CC)

Downloaded from Wikimedia Commons, resized to ≤800 px WebP, and committed under
`public/media/postures/`. These render **inline and offline** (`kind:'image'` in
`mediaLibrary.ts`). Only public-domain or Creative-Commons files are self-hosted;
each is captioned in-app with its author + license. Verify each licence on its
Commons file page before any redistribution beyond private study.

| Hanzi | Posture | Local file | License | Author / credit | Commons file page |
|---|---|---|---|---|---|
| 单鞭 | Single Whip (Yang Chengfu application) | `single-whip.webp` | Public domain | Yang Chengfu, via chipellis.com | https://commons.wikimedia.org/wiki/File:Yang_cheng_fu_single_whip_application_2_75.jpg |
| 起势 | Commencement of Taiji | `commencing.webp` | Public domain | Dong Yingjie 董英杰, via chipellis.com | https://commons.wikimedia.org/wiki/File:DYJ_Commencement_of_Taiji.jpg |
| 揽雀尾 | Grasp Bird's Tail (Eddie Wu, 1998) | `grasp-birds-tail.webp` | Public domain | Bradeos Graphon (uploader) | https://commons.wikimedia.org/wiki/File:Eddie_Wu_Grasp_Bird%27s_Tail_1998.jpg |
| 斜飞势 | Cross Step Slant / Diagonal Flying (Gary Wragg) | `diagonal-flying.webp` | CC BY-SA 4.0 | Ronnie Robinson | https://commons.wikimedia.org/wiki/File:Gary_Wragg_performs_Cross_Step_Slant_Flying.jpg |
| 单鞭下势 | Single Whip — Low Posture | `single-whip-low.webp` | CC BY-SA 4.0 | Yanira Masich | https://commons.wikimedia.org/wiki/File:Serpiente_se_arrastra.jpg |
| 铺地锦 | Earth Dragon (Snake Creeps Down) | `spread-brocade-ground.webp` | Public domain | Clftruthseeking | https://commons.wikimedia.org/wiki/File:Dfw_snake_creaps.jpg |

> Commons has surprisingly few free **posture-demonstration** stills: most of
> `Category:Tai Chi Chuan Masters` is historical portraits and most of
> `Category:TaiChi Single Whip` is photos of the Ju Ming *sculpture*. The four
> above are the clean, clearly-licensed, genuinely-illustrative ones found.
> GFDL-only images (e.g. Master Yang Jun's Golden Rooster / Bend Bow) were
> deliberately **not** inlined — GFDL requires shipping the full licence text.

### Yang Chengfu form-chart clips (CC BY 3.0 — positions APPROXIMATE)

Cropped from a single Wikimedia montage of Yang Chengfu's form photos
(`File:Yang_Chengfu_Form.jpg`, **CC BY 3.0, © Matthias Wagner**, 850×1831, an 8×14
grid). The montage is **uncaptioned**, so each clip was mapped to a posture by
**form-order sequence**, not verified identity — captions read "position approx."
and some may show an adjacent movement. Files are `public/media/postures/yc-*.webp`
(~180–230 px). Re-derive with `scripts/` montage tooling if a captioned/higher-res
source appears. Postures with an already-verified image (Single Whip, Grasp Bird's
Tail, Diagonal Flying, Snake Creeps Down, Commencing) were **not** overwritten.

| Hanzi | Posture | Local file | License | Author | Commons file page |
|---|---|---|---|---|---|
| 预备势 | Preparation / Beginning | `yc-preparation-beginning.webp` (cell 0) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 提手上势 | Raise Hands and Step Up | `yc-raise-hands-and-step-up.webp` (cell 7) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 白鹤亮翅 | White Crane Spreads Its Wings | `yc-white-crane-spreads-its-wings.webp` (cell 8) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 左搂膝拗步 | Brush Knee and Twist Step (Left) | `yc-brush-knee-and-twist-step-left.webp` (cell 10) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 手挥琵琶 | Hands Strum the Lute | `yc-hands-strum-the-lute.webp` (cell 11) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 搂膝拗步 | Brush Knee and Twist Step | `yc-brush-knee-and-twist-step.webp` (cell 13) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 进步搬拦捶 | Step Forward, Deflect, Parry and Punch | `yc-step-forward-deflect-parry-and-p.webp` (cell 14) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 如封似闭 | Apparent Close-Up / Withdraw and Push | `yc-apparent-close-up-withdraw-and-p.webp` (cell 15) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 十字手 | Cross Hands | `yc-cross-hands.webp` (cell 17) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 抱虎归山 | Embrace Tiger, Return to Mountain | `yc-embrace-tiger-return-to-mountain.webp` (cell 18) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 肘底捶 | Fist Under Elbow | `yc-fist-under-elbow.webp` (cell 19) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 倒撵猴 | Step Back and Repulse the Monkey | `yc-step-back-and-repulse-the-monkey.webp` (cell 21) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 海底针 | Needle at Sea Bottom | `yc-needle-at-sea-bottom.webp` (cell 28) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 扇通背 | Fan Through the Back | `yc-fan-through-the-back.webp` (cell 29) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 撇身捶 | Turn Body, Chop and Punch | `yc-turn-body-chop-and-punch.webp` (cell 30) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 云手 | Cloud Hands | `yc-cloud-hands.webp` (cell 36) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 高探马 | High Pat on Horse | `yc-high-pat-on-horse.webp` (cell 39) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 右分脚 | Separate Right Foot | `yc-separate-right-foot.webp` (cell 40) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 左分脚 | Separate Left Foot | `yc-separate-left-foot.webp` (cell 41) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 转身左蹬脚 | Turn and Kick with Left Heel | `yc-turn-and-kick-with-left-heel.webp` (cell 42) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 左右搂膝拗步 | Brush Knee and Twist Step (Left and Right) | `yc-brush-knee-and-twist-step-left-a.webp` (cell 43) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 进步栽捶 | Step Forward and Punch Down | `yc-step-forward-and-punch-down.webp` (cell 44) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 右蹬脚 | Kick with Right Heel | `yc-kick-with-right-heel.webp` (cell 45) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 双峰贯耳 | Strike Opponent’s Ears with Both Fists | `yc-strike-opponent-s-ears-with-both.webp` (cell 46) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 转身右蹬脚 | Turn Body and Kick with Right Heel | `yc-turn-body-and-kick-with-right-he.webp` (cell 47) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 野马分鬃 | Partition of the Wild Horse’s Mane | `yc-partition-of-the-wild-horse-s-ma.webp` (cell 50) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 玉女穿梭 | Fair Lady Works the Shuttles | `yc-fair-lady-works-the-shuttles.webp` (cell 52) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 右金鸡独立 | Golden Rooster Stands on One Leg (Right) | `yc-golden-rooster-stands-on-one-leg.webp` (cell 56) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 左金鸡独立 | Golden Rooster Stands on One Leg (Left) | `yc-golden-rooster-stands-on-one-leg.webp` (cell 57) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 转身白蛇吐信 | Turn Body, White Snake Spits Out Tongue | `yc-turn-body-white-snake-spits-out-.webp` (cell 66) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 穿掌 | Palm Thrust / Cross Hands and Thrust Palm | `yc-palm-thrust-cross-hands-and-thru.webp` (cell 73) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 搂膝指裆捶 | Brush Knee and Punch Opponent’s Groin | `yc-brush-knee-and-punch-opponent-s-.webp` (cell 76) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 上步七星 | Step Forward to Seven Stars | `yc-step-forward-to-seven-stars.webp` (cell 80) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 退步跨虎 | Step Back to Ride the Tiger | `yc-step-back-to-ride-the-tiger.webp` (cell 81) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 转身摆莲 | Turn Body and Sweep Lotus | `yc-turn-body-and-sweep-lotus.webp` (cell 82) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 弯弓射虎 | Bend the Bow and Shoot the Tiger | `yc-bend-the-bow-and-shoot-the-tiger.webp` (cell 83) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| 收势 | Closing of Tai Chi / Return to Origin | `yc-closing-of-tai-chi-return-to-ori.webp` (cell 111) | CC BY 3.0 | Matthias Wagner | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |

---

## Broad galleries & posture indexes

Cover many postures at once — good places to source more per-posture assets.

| Source | What it covers | URL |
|---|---|---|
| tcmwindow.com | Chen-style illustrated per-movement pages (each "with image") | http://www.tcmwindow.com/taiji/ |
| Wikimedia Commons | CC / public-domain tai chi images incl. Yang Chengfu | https://commons.wikimedia.org/wiki/Category:Tai_Chi_Chuan |
| Wikimedia Commons | Yang Chengfu form plate (verify licence) | https://commons.wikimedia.org/wiki/File:Yang_Chengfu_Form.jpg |
| ornasonova.com | Yang Chengfu 85-section long form — original movement photographs | https://www.ornasonova.com/TaiChi.php |
| yangstyle.com | Official Yang Family long form, section-coloured, with photos | https://yangstyle.com/movements.html |
| shorelinetaichi.com | Yang-style posture list/index | https://shorelinetaichi.com/yang-style-taijiquan-postures-list/ |
| eugenetaichicenter.org | Yang Chengfu lineage 103-movement hand form | https://eugenetaichicenter.org/teachings-of-tai-chi/beginner-103-movements/ |
| vancouverdojo.com | Yang 108-posture list & names | https://vancouverdojo.com/tai-chi-list-of-postures/ |
| egreenway.com | Green Way Research — per-form indexes linking many posture pages | https://egreenway.com/taichichuan/short.htm |

---

## Offline localization

The app links to YouTube and external pages, which need a connection. To make the
gallery posters work offline, run this on a machine with open internet:

```bash
node scripts/localize-media.mjs
```

It downloads each routine video's YouTube poster thumbnail into
`public/media/thumbs/<id>.jpg`. To use them, point `MediaGallery`'s thumbnail
`src` at `/media/thumbs/${id}.jpg` instead of `img.youtube.com`. True offline
*video* playback would require downloading the clips themselves (rights
permitting) — out of scope here.

## Adding or correcting resources

Edit `src/data/mediaLibrary.ts`:
- `FORM_MEDIA[formId]` — routine videos (use the `yt(id, title, view, author)` helper).
- `POSTURE_MEDIA[hanzi]` — per-posture resources (use the `ref(url, title, source, license)` helper for pages; set `kind: 'image'` with a direct image URL to render an inline `<img>`).

Then mirror the change here so attribution stays in sync.
