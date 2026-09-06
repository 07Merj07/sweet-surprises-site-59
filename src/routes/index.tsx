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
  },
  {
    image: childhood.url,
    alt: "Tao Jingchu as a little girl",
    slate: "Reel 02 — Before",
    title: "Somewhere, a little girl was already my favourite person.",
    body: "Years before I knew your name, this face already existed. I look at it and I feel something unbearably tender: that the universe had been keeping you for me all along.",
    align: "left" as const,
    focus: "50% 40%",
  },
  {
    image: mirrorHug.url,
    alt: "Tao Jingchu and me hugging in front of a mirror",
    slate: "Reel 03 — The First of March",
    title: "March 1st. The day my life split into before and after.",
    body: "I do not remember what the weather was. I remember that after that day, nothing was ever ordinary again. Every March 1st from now on belongs to us.",
    align: "right" as const,
  },
  {
    image: storeKiss.url,
    alt: "Tao Jingchu kissing my cheek",
    slate: "Reel 04 — Ordinary Magic",
    title: "You turn every random afternoon into a memory.",
    body: "A shop. A bad-lit aisle. Nothing special was supposed to happen there. Then you kissed my cheek and the whole day became something I would replay for years.",
    align: "left" as const,
  },
  {
    image: boat.url,
    alt: "Tao Jingchu and me on a boat by the sea",
    slate: "Reel 05 — Sea Level",
    title: "With you even the water slows down.",
    body: "Salt in the air, your shoulder against mine, that face you make when you know I am about to take a photo. This is my definition of peace.",
    align: "right" as const,
  },
  {
    image: summerHat.url,
    alt: "Tao Jingchu in a straw hat on a summer street",
    slate: "Reel 06 — Golden Hour",
    title: "Summer looks like you, so summer will always be my favourite.",
    body: "You laughing under a hat that is far too big for you. If I could keep one hour of my life on a loop, I think I would choose that one.",
    align: "left" as const,
  },
  {
    image: nightBlur.url,
    alt: "Tao Jingchu and me lying close together at night",
    slate: "Reel 07 — 2 A.M.",
    title: "The blurry ones are the truest ones.",
    body: "No pose, no light, no plan. Just your face this close to mine in the dark. This is the photo I would save if the house was burning.",
    align: "right" as const,
  },
  {
    image: flowers.url,
    alt: "Tao Jingchu walking home at night with a bouquet of roses",
    slate: "Reel 08 — Walking You Home",
    title: "I would carry flowers across any city just to see your face.",
    body: "Streetlights, cold air, you holding roses and walking a little ahead of me. I stayed behind on purpose, only to look at you a second longer.",
    align: "left" as const,
  },
  {
    image: prints.url,
    alt: "Printed photographs of us on a wooden desk",
    slate: "Reel 09 — Evidence",
    title: "I printed us out, because a screen was not enough.",
    body: "Coins, cables, an ordinary desk, and then us, printed on paper. Proof that this was not a dream I made up. It happened. It is still happening.",
    align: "right" as const,
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
        A film in nine reels
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
        Nine reels of us, one song, and a first of March that quietly became the
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
