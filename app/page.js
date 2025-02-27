import HeroSection from "./hero";
import Team from "./team";
import Testimonial from "./testimonial";
import Incentives from "./incentives";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Incentives />
      <Team />
      <Testimonial />
    </>
  );
}
