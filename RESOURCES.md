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
- **64 / 191 unique postures** (~52% of all posture instances) have a dedicated
  per-posture reference page; the rest fall back to their form's routine videos.
- These numbers are intentionally honest — the sandbox that gathered them has no
  open internet egress, so assets are *referenced and attributed*, not downloaded.
  See **Offline localization** to pull copies down on a connected machine.

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
| Yang 40 | Front | Chen Sitan 陈思坦 — front + back | https://www.youtube.com/watch?v=WqBI7Rm549I |
| Yang 40 | Demo | Yi Peng 易鵬 — competition routine | https://www.youtube.com/watch?v=inPP1EF8okk |
| Yang 40 | Mirror | Back view with spoken count | https://www.youtube.com/watch?v=QMwZfFVVnCI |
| Yang 40 | Step-by-step | Tutorial Part 1 | https://www.youtube.com/watch?v=Z5mzw_kS9Vk |
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
| 单鞭 | Single Whip (Yang Chengfu application) | commons.wikimedia.org | https://commons.wikimedia.org/wiki/File:Yang_cheng_fu_single_whip_application_2_75.jpg |
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
| 掩手肱拳 | Hidden Hand Punch (Chen) | internalarts.typepad.com | https://internalarts.typepad.com/ken_gullettes_internal_ma/2013/11/when-is-a-punch-not-a-punch-hidden-hand-punch-in-chen-tai-chi.html |
| 掩手肱拳 | Cover Hand Fist (Chen Zhonghua) | practicalmethod.com | https://practicalmethod.com/2017/05/the-fist-of-covering-hand-yan-shou-gong-chui-toronto-north-york-taiji-class/ |
| 倒撵猴 / 倒卷肱 | Repulse the Monkey | everydaytaichi.org | https://www.everydaytaichi.org/repulsing-the-monkey2.html |
| 下势 | Snake Creeps Down | taijiworld.com | https://www.taijiworld.com/tai-chi-posture.html |
| 下势 | Snake Creeps Down | chandao.co.uk | https://www.chandao.co.uk/taijiquan-snake-creeps-down.html |
| 掤捋挤按 | Four energies (Peng Lü Ji An) | thetaichinotebook.com | https://thetaichinotebook.com/2015/09/10/peng-lu-ji-an-grasping-the-birds-tail/ |
| 掤捋挤按 | Thirteen Postures / Eight Gates | egreenway.com | https://www.egreenway.com/taichichuan/powers13.htm |

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
