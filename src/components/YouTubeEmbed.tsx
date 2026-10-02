"use client";

import { useEffect, useState } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

/**
 * Mount the iframe after hydration. YouTube (and some extensions) rewrite
 * iframe attributes; rendering it on first paint mismatches server HTML.
 */
export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "0.75rem",
        backgroundColor: "var(--beige-bg)",
      }}
    >
      {mounted ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      ) : null}
    </div>
  );
}
