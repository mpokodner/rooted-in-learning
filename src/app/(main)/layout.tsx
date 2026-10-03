import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteAnimations from "@/components/SiteAnimations";
import SkipLink from "@/components/ui/SkipLink";
import TrackPage from "@/components/TrackPage";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <TrackPage event="page_click" />
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <SiteAnimations />
    </>
  );
}
