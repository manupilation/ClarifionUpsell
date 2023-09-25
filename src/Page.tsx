import BodySection from "./components/BodySection/BodySection";
import BrandBoxes from "./components/BrandBoxes/BrandBoxes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StepList from "./components/StepList/StepList";
import TitleSection from "./components/TitleSection/TitleSection";
import MobileContext from "./context/mobileContext";

function App() {
  return (
    <MobileContext>
      <Header />
      <BrandBoxes />
      <TitleSection />
      <StepList />
      <BodySection />
      <Footer />
    </MobileContext>
  );
}

export default App;
