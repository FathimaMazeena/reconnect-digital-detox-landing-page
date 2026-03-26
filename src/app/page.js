import Button from "./components/Button";
import About from "./sections/About";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
import Mentors from "./sections/Mentors";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <About/>
      
      <FinalCTA/>
      {/* <Button/> */}
      <Mentors/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
