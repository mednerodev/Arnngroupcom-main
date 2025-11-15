import { Header } from "../components/Header";
import { BusinessSection } from "../components/BusinessSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Header />
      
      {/* Top Text Section */}
      <section className="flex-shrink-0 px-8 py-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Despite the diversity of our businesses across sectors, we are united by our extraordinary legacy and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Business Divisions Section */}
      <BusinessSection />

      {/* Bottom Quote Section */}
      <section className="flex-shrink-0 px-8 py-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            "Each of our entities is dedicated to serving you better by identifying your needs and delivering solutions that exceed expectations."
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
