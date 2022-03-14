import "../../assets/novels.css";

const Chapter = (props) => {
  const { title, text } = props;
  return (
    <div className="chapter">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Chapter;
