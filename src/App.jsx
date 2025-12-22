import { Routes, Route } from 'react-router-dom';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Projects } from "@/components/sections/Projects";
// import { Stats } from "@/components/sections/Stats";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import ToolContainer from "@/components/ToolContainer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* <Stats /> */}
              <Features />
              <Projects />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/tool/*" element={<ToolContainer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
