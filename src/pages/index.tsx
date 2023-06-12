import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          AI-powered audio and video transcription app. Unlimited free
          transcription time.
        </p>
        <p className="hero__subtitle">
          Everything is done locally. <strong>Protect your privacy.</strong>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://apps.apple.com/app/id6449008295"
          >
            Download on the App Store
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Media Podium aims to be an excellent personal audio and video management tool. Transcribe your audio and video files into text. There is no transcription time limit. Transcriptions can be exported as subtitles or as plain text."
      wrapperClassName={styles.wrapper}
    >
      <HomepageHeader />
      <section className={styles.section}>
        <div className={styles.screenShot}>
          <img
            className={clsx(styles.featureSvg, "shadow--md")}
            src={require("@site/static/img/main.png").default}
            role="img"
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.features}>
          <h2>Features</h2>
          <ul className={styles.featureList}>
            <li>Unlimited free transcription time.</li>
            <li>
              Everything is done locally. No risk of personal data leakage.
            </li>
            <li>Support almost all audio and video file formats.</li>
            <li>Support exporting as subtitles(SRT/VTT) or pure text.</li>
            <li>Supports nearly 100 languages.</li>
            <li>Translating any language into English.</li>
            <li>Allows modification of transcription results.</li>
            <li>Automatic language detection.</li>
            <li>Offline recognition, no reliance on the internet.</li>
            <li>No account and login required. </li>
            <li>Starting play from specific segment.</li>
            <li>
              Queue multiple files and automatically transcribe them one by one.
            </li>
            <li>
              Audio subtitles automatically scroll as the audio file progresses.
            </li>
            <li>Start transcription from any position.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
