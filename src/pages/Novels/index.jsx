import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Novel from "../../components/Novel";
import novels from "../../services/novels.json";

const NovelsPage = () => {
  return (
    <div className="novels-container">
      <section className="header">
        <Header />
      </section>
      <section className="novels-main">
        {novels.map((novel) => {
          return <Novel novelStyle="col-6" key={novel.id} {...novel} />;
        })}
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
export default NovelsPage;
