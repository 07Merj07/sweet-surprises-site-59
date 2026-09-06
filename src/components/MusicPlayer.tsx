import { useEffect, useRef } from "react";

const VIDEO_ID = "5F9Sb7YFeJo";

type MusicPlayerProps = {
  /** Only mounted once the film has been opened by a real user gesture. */
  active: boolean;
  playing: boolean;
  onToggle: () => void;
};

export function MusicPlayer({ active, playing, onToggle }: MusicPlayerProps) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const frame = frameRef.current;
    if (!frame?.contentWindow) return;

    frame.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: playing ? "playVideo" : "pauseVideo",
        args: [],
      }),
      "*",
    );
  }, [active, playing]);

  if (!active) return null;

  return (
    <>
      <iframe
        ref={frameRef}
        title="Our song"
        aria-hidden="true"
        tabIndex={-1}
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&playsinline=1`}
        allow="autoplay; encrypted-media"
        className="pointer-events-none fixed -left-[9999px] h-px w-px opacity-0"
      />

      <button
        type="button"
        onClick={onToggle}
        className="fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-gold/30 bg-ink/70 px-4 py-2.5 text-[0.62rem] tracking-[0.28em] text-gold uppercase backdrop-blur-md transition-colors hover:border-gold/70 hover:bg-ink/90"
        aria-pressed={playing}
      >
        <span className="flex h-3 items-end gap-[3px]">
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className="w-[2px] bg-gold"
              style={{
                height: playing ? `${6 + bar * 3}px` : "3px",
                animation: playing
                  ? `soft-pulse ${1 + bar * 0.35}s ease-in-out infinite`
                  : undefined,
                transition: "height 300ms ease",
              }}
            />
          ))}
        </span>
        {playing ? "Our song" : "Muted"}
      </button>
    </>
  );
}
