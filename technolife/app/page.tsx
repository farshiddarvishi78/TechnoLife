import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import Slider from "./components/Slider/page";
import Circleslide from "./components/Circleslide/page";

export default function Home() {
  return (
   
    <div>
      <Navbar />
      <Slider />
      <Circleslide />
      <Footer />
    </div>
  );
}
