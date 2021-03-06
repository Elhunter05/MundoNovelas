import { useParams } from "react-router-dom";
import Chapter from "../../components/Chapter";
import chapters from "../../services/chapters.json";

const ChapterPage = () => {
  const { novel_link, chapter_link } = useParams();

  const novel = chapters.filter(
    (_novels) => _novels.novel_link === novel_link
  )[0];
  const chapter = novel.chapters.filter(
    (_chapter) => _chapter.link === chapter_link
  )[0];

  return (
    <div>
      <section className="chapters">
        <Chapter {...chapter} />
      </section>
    </div>
  );
};
export default ChapterPage;
