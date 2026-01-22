import { Header } from "../components/Header";
import { BusinessSection } from "../components/BusinessSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Centered Content Container */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Top Text Section */}
        <section className="flex-shrink-0 my-[20px] py-[0px] px-[32px] mx-[0px] mt-[80px] mr-[0px] mb-[20px] ml-[0px]">
          <div className="mx-[10%] text-center">
            <p className="md:text-3xl lg:text-4xl text-gray-900 leading-relaxed uppercase text-[16px] font-bold tracking-wider">
              BUILDING LEGACIES. EMPOWERING FUTURES.
            </p>
          </div>
        </section>

        {/* Business Divisions Section */}
        <BusinessSection />

        {/* Bottom Quote Section */}
        <section className="flex-shrink-0 px-[32px] py-[0px] p-[0px]">
          <div className="max-w-[750px] mx-auto text-center">
            <p className="md:text-xl text-gray-800 leading-relaxed text-[16px] pt-[20px] pr-[0px] pb-[0px] pl-[0px]">
              Pioneering sustainable growth and transformative solutions across global markets.
            </p>
          </div>
        </section>
      </div>

      {/* Footer - Always at bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}