import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type SceneProps = {
  image: string;
  alt: string;
  slate: string;
  title: string;
  body: string;
  align?: "left" | "center" | "right";
  focus?: string;
  children?: ReactNode;
};

const alignment: Record<NonNullable<SceneProps["align"]>, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export function Scene({
  image,
  alt,
  slate,
  title,
  body,
  align = "center",
  focus = "center",
  children,
}: SceneProps) {
  const { ref, visible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      className="film-grain vignette relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: focus }}
      />
      <div className="scene-veil absolute inset-0" />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-6 px-7 py-24 ${alignment[align]}`}
      >
        <span
          className="reveal text-[0.6rem] tracking-[0.42em] text-gold/80 uppercase"
          data-visible={visible}
        >
          {slate}
        </span>
        <h2
          className="reveal font-display text-4xl leading-[1.05] font-light text-foreground italic sm:text-6xl"
          data-visible={visible}
          style={{ animationDelay: "160ms" }}
        >
          {title}
        </h2>
        <p
          className="reveal max-w-xl text-[0.95rem] leading-relaxed font-light text-foreground/75"
          data-visible={visible}
          style={{ animationDelay: "320ms" }}
        >
          {body}
        </p>
        {children ? (
          <div
            className="reveal"
            data-visible={visible}
            style={{ animationDelay: "460ms" }}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
