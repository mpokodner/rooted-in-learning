import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Field from "@/components/ui/Field";
import Notice from "@/components/ui/Notice";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Design kit",
  robots: { index: false, follow: false },
};

export default function KitPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="phase1">
      <Section>
        <Container>
          <h1>Phase 1 kit</h1>
          <p>Internal components. Not indexed. 404 in production.</p>
          <div className="ui-kit-grid ui-kit-grid--2" style={{ marginTop: "1.5rem" }}>
            <Card>
              <h2>Buttons</h2>
              <p style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </p>
            </Card>
            <Card>
              <Notice>AssessAlign is now AlignED — shown only when the naming flag is on.</Notice>
            </Card>
            <Card>
              <Field id="kit-email" label="Email" hint="Example field">
                <input id="kit-email" type="email" />
              </Field>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
