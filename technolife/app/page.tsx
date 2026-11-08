import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import ProductCard from "./components/Product/productcard/page";
import Slider from "./components/Slider/page";

export default function Home() {
  return (
   
    <div>
      <Navbar />
      <Slider />
      <main className="mt-10 w-[90%] mx-auto">
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
}
