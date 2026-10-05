"use client";

import NewsletterForm from "./NewsletterForm";
import { copy } from "@/content/site-copy";

export default function BentoNewsletter() {
  return (
    <section className="bento-newsletter" id="download">
      <div className="container bento-newsletter-inner">
        <div className="bento-newsletter-text">
          <h2>Claude AI and Cowork</h2>
          <p>{copy.educators.guideBody}</p>
        </div>
        <NewsletterForm
          source="homepage-bento-bottom"
          buttonText="Get the Claude AI and Cowork guide"
          sendFreebie={true}
          tag="newsletter"
          formClassName="bento-newsletter-form"
          inputClassName="bento-newsletter-input"
          buttonClassName="btn btn-terra"
          trackStart="guide_cta_click"
          trackSubmit="guide_signup"
          trackLocation="homepage_guide"
        />
        <p className="bento-newsletter-note">{copy.forms.studentNotice}</p>
      </div>
    </section>
  );
}
