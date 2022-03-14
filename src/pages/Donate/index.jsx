import Donate from "../../components/Donate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const DonatePage = () => {
  return (
    <div>
      <section className="header">
        <Header />
      </section>
      <section className="donate">
        <Donate />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default DonatePage;
