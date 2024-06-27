import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <HomeScreen />
      <HomeContent />
      <Footer />
    </div>
  );
}
