import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUs from "../../components/Home_Main/AboutUs";
import Genres from "../../components/Home_Main/Genres";

const HomePage = () => {
  return (
    <div>
      <section className="header">
        <Header />
      </section>
      <section className="home_main">
        <AboutUs />
        <Genres />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
export default HomePage;
