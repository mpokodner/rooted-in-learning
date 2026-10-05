import { getResend, FROM_EMAIL } from "@/lib/resend";
import { links } from "@/config/site";
import { getUnsubscribeUrl } from "@/lib/unsubscribe";

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";
}

function emailShell(email: string, body: string): string {
  const unsubscribe = getUnsubscribeUrl(email);
  return `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
      ${body}
      <p style="margin-top: 24px;">— Michelle</p>
      <hr style="border: none; border-top: 1px solid #e8ded0; margin: 24px 0;" />
      <p style="font-size: 12px; color: #8a8a8a;">
        You're receiving this because you asked for the Claude guide at therootedlearner.com.
        <a href="${unsubscribe}" style="color: #5C6B4A;">Unsubscribe</a>
      </p>
    </div>
  `;
}

function button(href: string, label: string): string {
  return `<p style="margin: 24px 0;"><a href="${href}" style="display: inline-block; background-color: #5C6B4A; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">${label}</a></p>`;
}

export async function sendGuideWelcome(email: string): Promise<void> {
  const origin = siteUrl();
  try {
    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your Claude AI guide for educators",
      html: emailShell(
        email,
        `
          <h1 style="color: #1a1a1a; font-size: 24px;">Your Claude AI guide is here</h1>
          <p>Thanks for asking. This is the downloadable guide for planning with Claude and Cowork — prompt templates and classroom workflows from inside a 1–8 classroom.</p>
          ${button(`${origin}/freebies/claude-ai-guide.pdf`, "Download the Claude AI guide")}
          <p>Two short notes follow this one. The next is a way to use AI beside the lesson you already planned. The one after that is about putting high-quality instructional materials to work without rewriting them.</p>
          <p>Until then, the <a href="${origin}/blog" style="color: #5C6B4A;">blog</a> has field notes, and the <a href="${links.tpt}" style="color: #5C6B4A;">Teachers Pay Teachers shop</a> has resources you can use this week.</p>
        `,
      ),
    });
    if (error) {
      throw new Error(error.message);
    }
    console.info("guide_delivery_sent", { toDomain: email.split("@")[1] || "unknown" });
  } catch (error) {
    console.error("sendGuideWelcome", { email, error });
    throw error;
  }
}

export async function sendGuideAiNote(email: string): Promise<void> {
  const origin = siteUrl();
  try {
    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Use AI on the lesson you already have",
      html: emailShell(
        email,
        `
          <h1 style="color: #1a1a1a; font-size: 24px;">Keep the lesson. Add the access.</h1>
          <p>When a grade-level text is already in front of you, don't ask Claude to write a new one. Ask it for the layer your students need to enter that text: a vocabulary preview, sentence frames for the standard, or a check that the task still matches the lesson you planned.</p>
          <p>You still decide what gets used. The model does not know your class.</p>
          <p>The <a href="${origin}/blog" style="color: #5C6B4A;">blog</a> is where I write up what held up after I tried it with students.</p>
          ${button(`${origin}/blog`, "Read the blog")}
          <p>Next note: what to do when the adopted curriculum is strong and teachers are still quietly rewriting it.</p>
        `,
      ),
    });
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("sendGuideAiNote", { email, error });
    throw error;
  }
}

export async function sendGuideHqimNote(email: string): Promise<void> {
  const origin = siteUrl();
  try {
    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your curriculum does not need a rewrite",
      html: emailShell(
        email,
        `
          <h1 style="color: #1a1a1a; font-size: 24px;">Implementation is the missing layer</h1>
          <p>A strong curriculum still fails the student who cannot get into the text on day one. The usual fix is a quieter one: the teacher rewrites the passage into something easier. That lowers the ceiling.</p>
          <p>The work I trust is an overlay. Same text. A way in for multilingual learners. One next step you can teach this week, mapped to the materials the school already adopted.</p>
          <p>The shop is where those classroom pieces live right now. The blog is where I write about trying them.</p>
          ${button(links.tpt, "Visit the TPT shop")}
          <p><a href="${origin}/blog" style="color: #5C6B4A;">Read the blog</a></p>
        `,
      ),
    });
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("sendGuideHqimNote", { email, error });
    throw error;
  }
}
