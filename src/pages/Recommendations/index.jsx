import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Recommendations from "../../components/AddNovel";
import "../../assets/recommendations.css";

const RecommendationsPage = () => {
  return (
    <div>
      <section className="header">
        <Header />
      </section>
      <section className="recommendations">
        <Recommendations />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
export default RecommendationsPage;
