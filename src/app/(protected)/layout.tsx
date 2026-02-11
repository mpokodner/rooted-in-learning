import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Protected Layout
 * Routes inside this group require authentication.
 * The actual auth guard is handled by middleware.ts at the edge.
 * This layout provides the shared Header + Footer wrapper.
 */
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
