import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import { PRODUCT_NAME } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import BotanicalPortrait from "@/components/aligned/BotanicalPortrait";
import RegroupDiagram from "@/components/aligned/RegroupDiagram";
import TrackPage from "@/components/TrackPage";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — grouping from what students can do`,
  description: copy.home.heroLead,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="phase1">
      <TrackPage event="home_view" />
      <Section labelledBy="home-hero">
        <Container>
          <div style={{ display: "grid", gap: "2rem", alignItems: "center" }} className="home-hero-grid">
            <div>
              <h1 id="home-hero">{copy.home.heroTitle}</h1>
              <p className="lead" style={{ marginTop: "1rem", maxWidth: "46ch" }}>
                {copy.home.heroLead}
              </p>
              <p style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Button href="/aligned" track="cta_aligned">
                  See {PRODUCT_NAME}
                </Button>
                <Button href="/contact" variant="secondary" track="cta_conversation">
                  Request a conversation
                </Button>
              </p>
            </div>
            <BotanicalPortrait />
          </div>
        </Container>
      </Section>

      <Section alt labelledBy="home-problem">
        <Container>
          <h2 id="home-problem">{copy.home.problemTitle}</h2>
          <p style={{ marginTop: "1rem", maxWidth: "60ch" }}>{copy.home.problemBody}</p>
          <div style={{ marginTop: "2rem" }}>
            <RegroupDiagram />
          </div>
        </Container>
      </Section>

      <Section labelledBy="home-how">
        <Container>
          <h2 id="home-how">{copy.home.howTitle}</h2>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }} className="home-steps">
            <Card>
              <h3>See the standard</h3>
              <p>Item-level evidence mapped to the Maryland College and Career Ready codes you already teach.</p>
            </Card>
            <Card>
              <h3>Form the group</h3>
              <p>Students with the same next instructional move sit together — not everyone with the same composite band.</p>
            </Card>
            <Card>
              <h3>Teach the next step</h3>
              <p>Teachers stay in charge of the lesson. The software does not score children or replace professional judgment.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section ink labelledBy="home-close">
        <Container narrow>
          <div style={{ textAlign: "center" }}>
            <h2 id="home-close">{copy.home.closeTitle}</h2>
            <p style={{ margin: "1rem auto 1.5rem", maxWidth: "46ch" }}>{copy.home.closeBody}</p>
            <Button href="/contact" track="cta_close">
              Request a conversation
            </Button>
          </div>
        </Container>
      </Section>
      <style>{`
        @media (min-width: 900px) {
          .home-hero-grid { grid-template-columns: 1.2fr 0.8fr; }
          .home-steps { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
}
