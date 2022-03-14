import "../../assets/novels.css";

const Novel = (props) => {
  const { link: _link, name, author, desc, genres, imgUrl, novelStyle } = props;
  const link = `http://localhost:3000/novels/${_link}`;
  const classes = `novel ${novelStyle ?? ""}`;

  return (
    <div className={classes} novelStyle>
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="Portada" />
        <div className="card-body">
          <h5 className="card-name">
            <a href={link}> {name}</a>
          </h5>
          <h5 className="card-author">Autor: {author}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <ul className="list-genre-list">
          <li className="genreTag">
            <u className="mx-1">Géneros:</u>
            {genres.map((_genre, i) => {
              const genre = i == 0 ? _genre : `- ${_genre}`;
              return <span className="list-genre-item">{genre} </span>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Novel;
