import Novel from "../../components/Novel";
import novels from "../../services/novels.json";

const NovelsPage = () => {
  return (
    <div className="novels-container">
      <section className="novels-main">
        {novels.map((novel) => {
          return <Novel novelStyle="col-6" key={novel.id} {...novel} />;
        })}
      </section>
    </div>
  );
};
export default NovelsPage;
