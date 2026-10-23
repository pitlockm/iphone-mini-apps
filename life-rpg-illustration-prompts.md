# Life RPG — Illustration Prompts

For ChatGPT / Midjourney / other image generators. Paste the Style Bible at the
top of every prompt, then the prompt itself. Send the results back as PNG files
(transparent background where the prompt says so) and tell Muse which file is
which — it will wire them into `life-rpg/assets/` and build a preview first.

## Style Bible (paste into every prompt)

Vintage fantasy arcade game art meets cozy comic book illustration: bold ink
outlines, halftone dot shading, warm muted palette of amber, forest green,
deep teal and cream, soft golden light, hand-drawn paper texture, cozy and
adventurous, not photorealistic, not modern flat minimal design. No text, no
letters, no watermark, no logo, no extra characters.

## How the pieces fit together (so the prompts make sense)

- **Character:** one base wizard, drawn once. Unlockable items are separate
  transparent layers stacked on top of him in the app (hat over head, cloak
  over tunic, staff in hand), in exactly the same canvas and pose, so an item
  lands in the right place when you unlock it. The app currently shows the
  wizard at 64×96 px, but generate at high resolution and the app scales it
  down — detail survives that way.
- **Cut scenes:** full-screen portrait pictures shown as overlays — one when a
  focus session starts, one when you hit a big achievement (record, milestone,
  level up, major quest finished). They need empty space at the top for the
  app's title and button, so keep the top of the scene simple and dark.
- **UI assets (later):** transparent frames, panels and icons in the same
  style, to replace the plain cards and buttons.

## 1. Base wizard (generate this first — everything else references it)

```
[Style Bible]

Full-body portrait of a kind elderly wizard standing facing forward, feet
together at the bottom centre of the canvas, arms relaxed at his sides, in a
neutral standing pose. Long grey beard, kind eyes, plain undyed linen tunic
and simple brown boots. NO hat, NO staff, NO cloak, NO belt pouches, NO
glasses — a bare base character that items can be layered onto later.
Entire body visible, head to feet, nothing cropped. Transparent background.
Portrait canvas, character centred, feet touching the bottom edge.
```

## 2. Unlockable item layers (one generation per item, using the base as reference)

Use the image-edit / reference mode of your generator, upload the base
wizard, and use this template, swapping in the item:

```
[Style Bible]

Using the uploaded base wizard as an exact reference, keep his pose,
proportions, face, beard and feet position EXACTLY the same. Draw ONLY the
[ITEM — e.g. a tall pointed wizard hat in deep teal with gold stars] in the
position it would sit on him, on a fully transparent background. Do NOT redraw
the wizard, do NOT change his pose or size, do NOT add a background. Same
canvas size as the reference. The rest of the canvas must be transparent.
```

Item ideas to run through that template, one at a time:
- Tall pointed wizard hat, deep teal with gold stars
- Forest-green cloak with gold trim, flowing behind him
- Oak staff topped with a glowing amber crystal, held in his right hand
- Leather belt with pouches and a brass buckle
- Round brass spectacles
- Red leather boots with gold buckles
- A small leather satchel slung across his chest
- A golden amulet on a chain

Note: item-only layers are the hardest thing to get out of an image
generator. If it keeps redrawing the whole wizard, generate the full wizard
wearing the item instead and say so when you send it — Muse can still use it
as a variant, and can nudge layers into place in code.

## 3. Idle animation frames (2 frames, for the character card)

```
[Style Bible]

Using the uploaded base wizard as an exact reference, same pose, same canvas,
same transparent background. Frame 1: the wizard standing still, eyes open.
Frame 2: identical except his chest is very slightly raised as if breathing
in and his eyes are closed in a blink. Nothing else changes.
```

Generate the two frames as separate images. The app alternates them about
once a second for a gentle idle animation.

## 4. Study / reading pose (for focus sessions)

```
[Style Bible]

The same wizard from the reference, now seated at a small wooden desk with
an open book, head tilted down reading, one hand turning a page, a warm
candle beside him. Same art style, same beard and tunic, full body visible
where possible, transparent background. Cozy, quiet, focused mood.
```

## 5. Cut scene — focus in the library

```
[Style Bible]

Full-screen portrait scene, 9:16, for a phone screen. A cozy wizard's library
at night: the wizard reading at a large wooden desk piled with books, tall
bookshelves curving around him, a sleeping cat on a rug, a small fireplace
glowing, warm lamplight, dust motes in the air. Keep the top fifth of the
image simple and dark, with no important detail there, so a title can sit
over it. No text anywhere in the image.
```

## 6. Cut scene — focus by the river

```
[Style Bible]

Full-screen portrait scene, 9:16, for a phone screen. The wizard sitting on
a grassy riverbank reading a book, a willow tree overhead, a slow river with
soft reflections, distant mountains, golden late-afternoon light, birds in
the sky. Peaceful, adventurous, cozy. Keep the top fifth of the image simple
and dark, with no important detail there, so a title can sit over it. No
text anywhere in the image.
```

## 7. Cut scene — triumphant achievement

```
[Style Bible]

Full-screen portrait scene, 9:16, for a phone screen. The wizard standing on
a hilltop at sunrise, cloak flowing, raising his glowing staff high, golden
light bursting around him, stars and banners of light in the sky, a sense of
a quest completed. Triumphant and warm, not dark or menacing. Keep the top
fifth of the image simple and dark, with no important detail there, so a
title can sit over it. No text anywhere in the image.
```

## 8. UI assets (later, when the character and scenes are settled)

One generation each, transparent background, same style:
- An ornate gold corner frame for a card, thin enough to sit around text
- A warm parchment panel, slightly worn at the edges, for quest cards
- A single gold coin icon with a star stamped on it
- A small star badge for achievements
- A wooden sign-style button, blank, with no text on it

## What to send back to Muse

- PNG files, one per item / scene / frame, named clearly
  (e.g. `wizard-base.png`, `hat-teal.png`, `cloak-green.png`,
  `scene-library.png`, `scene-river.png`, `scene-triumph.png`)
- Which file is the base, which are layers, and which are scenes
- If a layer came back as a full character instead of item-only, say so —
  that changes how it gets wired in, it doesn't ruin it
