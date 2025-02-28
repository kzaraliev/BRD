import HeroSection from "./hero";
import Team from "./team";
import Testimonial from "./testimonial";
import Incentives from "./incentives";
import Clients from "./clients";
import CTA from "./cta";

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
