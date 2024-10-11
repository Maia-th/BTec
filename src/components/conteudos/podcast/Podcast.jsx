import React from "react";
import "./Podcast.css";

export default function Podcast() {
  return (
    <section className="sectionPodcast">
      <h2>Podcast Talk BTec</h2>
      <article className="spotify">
        <iframe
          title="spotifyLink"
          src="https://open.spotify.com/embed/show/6Iho5tmsuRTSgtrsxklpWo?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    </section>
  );
}
