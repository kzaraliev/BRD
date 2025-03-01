import HeroSection from "./components/hero";
import Team from "./components/team";
import Testimonial from "./components/testimonial";
import Incentives from "./components/incentives";
import Clients from "./components/clients";
import CTA from "./components/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Incentives />
      <CTA/>
      <Team />
      <Clients/>
      <Testimonial />
    </>
  );
}
