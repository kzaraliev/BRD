import HeroSection from "../components/hero";
import Incentives from "../components/incentives";
import Team from "../components/team";
import CTA from "../components/cta";
import Clients from "../components/clients";
import Newsletter from "../components/newsletter";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Incentives />
      <Team />
      <CTA />
      <Clients />
      <Newsletter />
      <Testimonial />
    </>
  );
}
