import Footer from "./components/Footer/Footer";
import HeaderBottom from "./components/Header/HeaderBottom/HeaderBottom";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";
import EighthMain from "./components/Main/EighthMain/EighthMain";
import FifthMain from "./components/Main/FifthMain/FifthMain";
import FirstMain from "./components/Main/FirstMain/FirstMain";
import FourthMain from "./components/Main/FourthMain/FourthMain";
import SecondMain from "./components/Main/SecondMain/SecondMain";
import SeventhMain from "./components/Main/SeventhMain/SeventhMain";
import SixthMain from "./components/Main/SixthMain/SixthMain";
import ThirdMain from "./components/Main/ThirdMain/ThirdMain";

const App = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <main>
        <FirstMain />
        <SecondMain />
        <ThirdMain />
        <FourthMain />
        <FifthMain />
        <SixthMain />
        <SeventhMain />
        <EighthMain />
      </main>
      <footer className="mt-16">
        <Footer />
      </footer>
    </>
  );
};

export default App;
