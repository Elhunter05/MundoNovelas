import { useParams } from "react-router-dom";

import Chapters from "../../components/Chapters";

import Novel from "../../components/Novel";
import novels from "../../services/novels.json";

const NovelPage = () => {
  const { novel_link } = useParams();
  const novel = novels.filter((_novel) => _novel.link === novel_link)[0];

  return (
    <div>
      <section className="novel-chapters">
        <Novel {...novel} />
        <h3>Lista de capítulos:</h3>
        <Chapters
          chapterStyle="col-6"
          link={novel.link}
          chapters={novel.chapters}
        />
      </section>
    </div>
  );
};
export default NovelPage;
