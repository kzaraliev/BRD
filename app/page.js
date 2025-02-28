import HeroSection from "./hero";
import Team from "./team";
import Testimonial from "./testimonial";
import Incentives from "./incentives";
import Clients from "./clients";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Incentives />
      <Team />
      <Clients/>
      <Testimonial />
    </>
  );
}
