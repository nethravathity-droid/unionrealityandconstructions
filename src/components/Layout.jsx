import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import BackToTop from "./BackToTop";

export default function Layout({ children }) {
  return (
    <main className="w-full min-h-screen bg-[#03142b] overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      {children}

      {/* FOOTER */}
      <Footer />

      {/* FLOATING BUTTONS */}
      <FloatingContact />

      <BackToTop />

    </main>
  );
}