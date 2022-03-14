import "../../assets/novels.css";

const Chapters = (props) => {
  const { link: _link, chapters } = props;

  return (
    <div className="chapters">
      {chapters.map((chapter, i) => {
        const link = `${_link}/${chapter.link}`;
        return (
          <div className="chapters-chapter">
            <a href={link}>{chapter.title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Chapters;
