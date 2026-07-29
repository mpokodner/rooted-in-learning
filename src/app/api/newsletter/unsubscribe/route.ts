import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    return new NextResponse(renderPage("Invalid Link", "This unsubscribe link is missing required information."), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  if (!verifyUnsubscribeToken(email, token)) {
    return new NextResponse(renderPage("Invalid Link", "This unsubscribe link is invalid or has been tampered with."), {
      status: 403,
      headers: { "Content-Type": "text/html" },
    });
  }

  const supabase = createServerSupabaseClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .update({ subscribed: false })
    .eq("email", email.toLowerCase());

  if (error) {
    console.error("Unsubscribe error:", error);
    return new NextResponse(renderPage("Something Went Wrong", "We couldn't process your request. Please try again or email admin@therootedlearner.com."), {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }

  return new NextResponse(renderPage("You've Been Unsubscribed", "You will no longer receive emails from The Rooted Learner. If this was a mistake, you can re-subscribe at therootedlearner.com."), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

function renderPage(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | The Rooted Learner</title>
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #faf8f5; color: #2d2d2d; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
    .card { background: #fff; border-radius: 12px; padding: 40px; max-width: 480px; text-align: center; border: 1px solid #e8ded0; }
    h1 { font-size: 22px; margin: 0 0 12px; color: #1a1a1a; }
    p { font-size: 15px; color: #555; line-height: 1.6; margin: 0; }
    a { color: #5C6B4A; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`;
}
