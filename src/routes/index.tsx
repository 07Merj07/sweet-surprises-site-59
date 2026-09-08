import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Scene } from "@/components/Scene";
import { useReveal } from "@/hooks/use-reveal";

import childhood from "@/assets/p-7c7172c5-0f4f-4274-a837-b9f8873ed3bd.jpg.asset.json";
import boat from "@/assets/p-6e37b7f0-e734-4d07-8851-392fa832e39e.jpg.asset.json";
import storeKiss from "@/assets/p-2ad62f47-871b-46ea-a9e8-412681273eea.jpg.asset.json";
import mirrorHug from "@/assets/p-0ef425c9-c13f-48da-815f-dd6564efb7b3.jpg.asset.json";
import violetLight from "@/assets/p-20c11f0c-6ffb-447d-8f23-24ac0caad44b.jpg.asset.json";
import nightBlur from "@/assets/p-0e68050f-4d87-4900-807e-76b5d4c306a6.jpg.asset.json";
import flowers from "@/assets/p-7e0a1c15-e8f7-47d2-aff3-57edd97a7c5b.jpg.asset.json";
import summerHat from "@/assets/p-19a047e3-bd65-4a49-9aeb-82fb96004524.jpg.asset.json";
import prints from "@/assets/p-4a5deca6-e3c4-4c01-9a2a-107a788bf165.jpg.asset.json";
import mallFriends from "@/assets/10ff65be-e744-4520-a146-415b98d5f4f0.jpg.asset.json";
import storyStation from "@/assets/1fc33d22-389b-4c73-82fe-3d99e202a5f5.jpg.asset.json";
import lakeKiss from "@/assets/12dfb09c-7e22-4339-a316-f61eeee38ac3.jpg.asset.json";
import mirrorCheek from "@/assets/31cbe89f-543e-423c-a3fc-019aa984da65.jpg.asset.json";
import nightRoses from "@/assets/101a2865-7221-4380-a1a6-95798be0960e.jpg.asset.json";
import lakeHug from "@/assets/164e9d25-190a-4de9-ada8-f94de138ce87.jpg.asset.json";
import windowLight from "@/assets/360a1881-99c4-4717-94d1-e05ed2993808.jpg.asset.json";
import jerseys from "@/assets/429a1603-c0ee-4773-ae2b-af87450d5154.jpg.asset.json";
import headsTogether from "@/assets/640b7279-0e85-44d9-812e-117a5491aa4b.jpg.asset.json";
import mirrorKiss from "@/assets/0791fca9-533a-4f38-bb66-2275ee1756b0.jpg.asset.json";
import shopSmile from "@/assets/5390c67f-5336-4dbd-ab31-719d326e3e17.jpg.asset.json";
import jerseyKiss from "@/assets/b39192fe-b78b-45ca-8cac-2fb15f35efe2.jpg.asset.json";
import snowKiss from "@/assets/ed433e26-8d52-49aa-b618-086463546303.jpg.asset.json";
import nightSelfie from "@/assets/f3c81b4b-4df4-4c88-be12-d029dd925ec8.jpg.asset.json";
import windowGirl from "@/assets/d9a6cc21-7a00-4bc3-8610-fd3019d294f6.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: LoveFilm,
});

const scenes = [
  {
    image: violetLight.url,
    alt: "Tao Jingchu smiling in violet light while I cover my eyes",
    slate: "Reel 01 — Opening",
    title: "You are the scene I never want to cut.",
    body: "Some people arrive quietly and then suddenly they are the whole frame. That is you, Baobao. Every colour in my life got warmer the moment you walked into it.",
    align: "left" as const,
    focus: "50% 38%",
  },
  {
    image: childhood.url,
    alt: "Tao Jingchu as a little girl",
    slate: "Reel 02 — Before",
    title: "Somewhere, a little girl was already my favourite person.",
    body: "Years before I knew your name, this face already existed. I look at it and I feel something unbearably tender: that the universe had been keeping you for me all along.",
    align: "left" as const,
    focus: "50% 35%",
  },
  {
    image: mirrorHug.url,
    alt: "Tao Jingchu and me hugging in front of a mirror",
    slate: "Reel 03 — The First of March",
    title: "March 1st. The day my life split into before and after.",
    body: "I do not remember what the weather was. I remember that after that day, nothing was ever ordinary again. Every March 1st from now on belongs to us.",
    align: "right" as const,
    focus: "50% 22%",
  },
  {
    image: storeKiss.url,
    alt: "Tao Jingchu kissing my cheek",
    slate: "Reel 04 — Ordinary Magic",
    title: "You turn every random afternoon into a memory.",
    body: "A shop. A bad-lit aisle. Nothing special was supposed to happen there. Then you kissed my cheek and the whole day became something I would replay for years.",
    align: "left" as const,
    focus: "50% 35%",
  },
  {
    image: windowGirl.url,
    alt: "Tao Jingchu looking back at me by an open window",
    slate: "Reel 05 — The Look",
    title: "You look back at me and the whole room goes quiet.",
    body: "Open window, cars below, an ordinary afternoon. Then you turned your head like that, and I understood I was never going to be free of you.",
    align: "left" as const,
    focus: "62% 45%",
  },
  {
    image: boat.url,
    alt: "Tao Jingchu and me on a boat by the sea",
    slate: "Reel 06 — Sea Level",
    title: "With you even the water slows down.",
    body: "Salt in the air, your shoulder against mine, that face you make when you know I am about to take a photo. This is my definition of peace.",
    align: "right" as const,
    focus: "50% 38%",
  },
  {
    image: summerHat.url,
    alt: "Tao Jingchu in a straw hat on a summer street",
    slate: "Reel 07 — Golden Hour",
    title: "Summer looks like you, so summer will always be my favourite.",
    body: "You laughing under a hat that is far too big for you. If I could keep one hour of my life on a loop, I think I would choose that one.",
    align: "left" as const,
    focus: "50% 35%",
  },
  {
    image: nightBlur.url,
    alt: "Tao Jingchu and me lying close together at night",
    slate: "Reel 08 — 2 A.M.",
    title: "The blurry ones are the truest ones.",
    body: "No pose, no light, no plan. Just your face this close to mine in the dark. This is the photo I would save if the house was burning.",
    align: "right" as const,
    focus: "50% 45%",
  },
  {
    image: nightSelfie.url,
    alt: "Tao Jingchu resting her head on my shoulder at night",
    slate: "Reel 09 — Late",
    title: "You fall asleep on my shoulder and I stop checking the time.",
    body: "Almost no light, your head against me, my arm around you. Nobody took this photo for anyone else. It is just ours.",
    align: "left" as const,
    focus: "50% 55%",
  },
  {
    image: flowers.url,
    alt: "Tao Jingchu walking home at night with a bouquet of roses",
    slate: "Reel 10 — Walking You Home",
    title: "I would carry flowers across any city just to see your face.",
    body: "Streetlights, cold air, you holding roses and walking a little ahead of me. I stayed behind on purpose, only to look at you a second longer.",
    align: "left" as const,
    focus: "50% 40%",
  },
  {
    image: nightRoses.url,
    alt: "Tao Jingchu kissing my cheek at night while holding roses",
    slate: "Reel 11 — Black And White",
    title: "Some nights deserve to look like old cinema.",
    body: "Roses in your arms, your lips on my cheek, grain everywhere. If they ever make a film about us, this is the poster.",
    align: "right" as const,
    focus: "50% 50%",
  },
  {
    image: windowLight.url,
    alt: "Tao Jingchu and me cheek to cheek in front of a bright window",
    slate: "Reel 12 — Morning Light",
    title: "Your face is the first good thing about every day.",
    body: "Light behind us, nothing planned, your smile half hidden in my shoulder. I would trade a hundred beautiful places for this exact five minutes.",
    align: "left" as const,
    focus: "50% 60%",
  },
  {
    image: mirrorCheek.url,
    alt: "Tao Jingchu lifting her face towards mine in the mirror, a second before the kiss",
    slate: "Reel 13 — One Second Before",
    title: "This is the second right before I kissed you.",
    body: "Your eyes already closed, my lips almost there, a suitcase waiting by the door. I love this half-second more than most whole days.",
    align: "right" as const,
    focus: "50% 20%",
  },
  {
    image: mirrorKiss.url,
    alt: "Tao Jingchu and me kissing in the mirror",
    slate: "Reel 14 — And Then",
    title: "And then. Same mirror, same hat, one second later.",
    body: "Everything I wanted to say before you left, I said like this instead. Distance never scared me, because you always come back to me.",
    align: "left" as const,
    focus: "50% 20%",
  },
  {
    image: snowKiss.url,
    alt: "Tao Jingchu and me kissing on a snowy hill in black and white",
    slate: "Reel 15 — Snow",
    title: "Cold everywhere, except between us.",
    body: "Your hands on my face, a beanie, a grey sky, the whole valley behind you. Motion blur and all, this is exactly how it felt.",
    align: "right" as const,
    focus: "50% 55%",
  },
  {
    image: lakeHug.url,
    alt: "Tao Jingchu and me hugging in the middle of a lake",
    slate: "Reel 16 — Cold Water, Warm Hands",
    title: "You screamed, I held you, and the lake laughed at us.",
    body: "Freezing water up to our waists and you refusing to let go of my arms. I have never felt more alive than in that ridiculous, perfect afternoon.",
    align: "right" as const,
    focus: "50% 45%",
  },
  {
    image: lakeKiss.url,
    alt: "Tao Jingchu and me kissing in a lake while our friends cheer behind us",
    slate: "Reel 17 — Witnesses",
    title: "Our friends made hearts with their hands while I kissed you.",
    body: "You cannot see it in the photo, but everyone was shouting. Let them. I wanted the whole lake to know who you belong to.",
    align: "left" as const,
    focus: "32% 62%",
  },
  {
    image: jerseys.url,
    alt: "Tao Jingchu and me wearing matching football jerseys",
    slate: "Reel 18 — My Team",
    title: "You wore my colours and I nearly lost my mind.",
    body: "You did not care about the match at all. You wore it because it was mine. That is the kind of love nobody teaches you to expect.",
    align: "right" as const,
    focus: "50% 40%",
  },
  {
    image: jerseyKiss.url,
    alt: "Me kissing Tao Jingchu on the cheek while we both wear football jerseys",
    slate: "Reel 19 — Same Shirt, Same Heart",
    title: "You laughed so hard I could barely finish the kiss.",
    body: "Two jerseys, one bad camera angle, your smile taking over the entire frame. Baobao, happiness looks exactly like this photo.",
    align: "left" as const,
    focus: "50% 32%",
  },
  {
    image: headsTogether.url,
    alt: "Tao Jingchu resting her head next to mine indoors",
    slate: "Reel 20 — Doing Nothing",
    title: "My favourite hobby is simply being next to you.",
    body: "No plans, no place to be, your head against mine and time going soft. People search their whole lives for a quiet like this.",
    align: "left" as const,
    focus: "50% 62%",
  },
  {
    image: shopSmile.url,
    alt: "Tao Jingchu smiling with me in a brightly lit shop",
    slate: "Reel 21 — That Smile",
    title: "You smile like that and I would buy the entire store.",
    body: "Neon lights, a silly aisle, and the best smile in the world pointed straight at the camera. Baobao, you make cheap places look expensive.",
    align: "right" as const,
    focus: "50% 45%",
  },
  {
    image: mallFriends.url,
    alt: "Tao Jingchu with our group of friends",
    slate: "Reel 22 — Our People",
    title: "Even in a crowd, my eyes only do one thing.",
    body: "Everyone laughing, everyone talking, and I am looking for you in the frame. I always find you first. I always will.",
    align: "right" as const,
    focus: "82% 26%",
    zoom: 1.5,
  },
  {
    image: storyStation.url,
    alt: "A saved story of us and our friends at the station",
    slate: "Reel 23 — Saved",
    title: "I keep everything. Even the screenshots.",
    body: "A story that would have disappeared in a day, saved because you were in it. That is how it works with you: nothing about you is temporary to me.",
    align: "left" as const,
    focus: "50% 30%",
  },
  {
    image: prints.url,
    alt: "Printed photographs of us on a wooden desk",
    slate: "Reel 24 — Evidence",
    title: "I printed us out, because a screen was not enough.",
    body: "Coins, cables, an ordinary desk, and then us, printed on paper. Proof that this was not a dream I made up. It happened. It is still happening.",
    align: "right" as const,
    focus: "50% 50%",
  },
];

function LoveFilm() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <main className="relative w-full bg-background">
      <MusicPlayer
        active={opened}
        playing={playing}
        onToggle={() => setPlaying((value) => !value)}
      />

      {!opened ? (
        <Curtain onOpen={() => setOpened(true)} />
      ) : (
        <>
          <TitleCard />
          {scenes.map((scene) => (
            <Scene key={scene.slate} {...scene} />
          ))}
          <LetterScene />
        </>
      )}
    </main>
  );
}

function Curtain({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="film-grain fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-ink px-7 text-center">
      <span className="text-[0.6rem] tracking-[0.45em] text-gold/70 uppercase">
        A film in twenty-four reels
      </span>
      <h1 className="font-display text-5xl leading-[1.02] font-light text-foreground italic sm:text-7xl">
        For Tao Jingchu
      </h1>
      <p className="max-w-sm text-[0.9rem] leading-relaxed font-light text-foreground/60">
        Put the sound on, Baobao. This one was made only for you.
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="group relative mt-2 flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 hover:scale-105 hover:border-gold"
      >
        <span className="absolute inset-0 animate-ping rounded-full border border-gold/20" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 h-7 w-7"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l11-6.5-11-6.5Z" />
        </svg>
        <span className="sr-only">Play the film</span>
      </button>
      <span className="text-[0.58rem] tracking-[0.3em] text-foreground/40 uppercase">
        Press play
      </span>
    </section>
  );
}

function TitleCard() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section
      ref={ref}
      className="film-grain relative flex min-h-screen flex-col items-center justify-center gap-8 bg-ink px-7 text-center"
    >
      <span
        className="reveal text-[0.6rem] tracking-[0.45em] text-gold/70 uppercase"
        data-visible={visible}
      >
        Directed by the one who loves you
      </span>
      <h1
        className="reveal font-display text-6xl leading-[0.95] font-light text-foreground italic sm:text-8xl"
        data-visible={visible}
        style={{ animationDelay: "200ms" }}
      >
        Tao&nbsp;Jingchu
      </h1>
      <p
        className="reveal max-w-md text-[0.95rem] leading-relaxed font-light text-foreground/65"
        data-visible={visible}
        style={{ animationDelay: "400ms" }}
      >
        Twenty-four reels of us, one song, and a first of March that quietly became the
        most important date I know.
      </p>
      <span
        className="reveal mt-6 text-[0.58rem] tracking-[0.32em] text-foreground/40 uppercase"
        data-visible={visible}
        style={{ animationDelay: "620ms" }}
      >
        Scroll
      </span>
    </section>
  );
}

function LetterScene() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      ref={ref}
      className="film-grain relative flex min-h-screen items-center justify-center bg-ink px-7 py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span
          className="reveal text-[0.6rem] tracking-[0.42em] text-gold/80 uppercase"
          data-visible={visible}
        >
          Final reel
        </span>
        <h2
          className="reveal mt-7 font-display text-4xl leading-[1.05] font-light text-foreground italic sm:text-5xl"
          data-visible={visible}
          style={{ animationDelay: "160ms" }}
        >
          Baobao,
        </h2>
        <div
          className="reveal mt-8 space-y-6 text-[1rem] leading-relaxed font-light text-foreground/75"
          data-visible={visible}
          style={{ animationDelay: "320ms" }}
        >
          <p>
            I built this because words in a message disappear too quickly, and I
            wanted something that stays. Something you can open on any bad day
            and remember exactly how loved you are.
          </p>
          <p>
            You are my favourite person in every room, my calm in every mess,
            and the one face I look for before I look at anything else. Loving
            you never felt like a decision. It felt like recognition.
          </p>
          <p>
            Thank you for the first of March. Thank you for every ordinary day
            after it. I would watch this film a thousand times, as long as you
            are in it.
          </p>
        </div>
        <p
          className="reveal mt-12 font-display text-2xl text-gold italic"
          data-visible={visible}
          style={{ animationDelay: "520ms" }}
        >
          I love you, 宝宝.
        </p>
        <span
          className="reveal mt-14 block text-[0.58rem] tracking-[0.4em] text-foreground/35 uppercase"
          data-visible={visible}
          style={{ animationDelay: "700ms" }}
        >
          The end — and also the beginning
        </span>
      </div>
    </section>
  );
}
