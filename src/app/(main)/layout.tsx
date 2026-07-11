import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteAnimations from "@/components/SiteAnimations";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <main>{children}</main>
      <Footer />
      <SiteAnimations />
    </>
  );
}
