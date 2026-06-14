import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteAnimations from "@/components/SiteAnimations";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SiteAnimations />
    </>
  );
}
