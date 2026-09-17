# Plan: Update romantic reel copy in the cinematic film

## What will change
Edit `src/routes/index.tsx` to update the title and/or body text for six existing reels. The scene order, images, focus/zoom values, animations, and music player stay exactly the same.

## Reel-by-reel changes

### Reel 02 — Before
- **Title:** keep "Somewhere, a little girl was already my favourite person."
- **Body:** replace with  
  `I love everything about you, but your eyes are something else. How have they been glowing with the exact same beauty since childhood !! ?`

### Reel 03 — The First of March
- **Title:** keep "March 1st. The day my life split into before and after."
- **Body:** replace with  
  `I won't make this too long, but we're definitely on the same page about how special this day is for both of us, aren't we? hhh`

### Reel 05 — The Look
- **Title:** change to "You Look Beautiful in the Middle of Everything"
- **Body:** replace with  
  `You remember this day, don't you hhh? The day your boy stepped right out of the sky!`

### Reel 07 — Golden Hour
- **Title:** keep "Summer looks like you, so summer will always be my favourite."
- **Body:** append the new sentence so it becomes  
  `You laughing under a hat that is far too big for you. If I could keep one hour of my life on a loop, I think I would choose that one. Maybe it just looks like a regular photo to you, but to me, it's absolutely priceless. I love you, baobao.`

### Reel 14 — And Then
- **Title:** keep "And then. Same mirror, same hat, one second later."
- **Body:** replace with  
  `You look like an angel in that mirror, and I still cannot believe you are mine.`

### Reel 21 — That Smile
- **Title:** change to "That Smile in the Neon Light"
- **Body:** keep "You smile like that and I would buy the entire store."

## How to verify
1. Run `bunx tsgo --noEmit` to confirm no type errors.
2. Preview the film and scroll through the affected reels to confirm the new copy renders correctly.
