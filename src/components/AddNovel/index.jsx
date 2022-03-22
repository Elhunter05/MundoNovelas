import React from "react";
import { useState, useEffect } from "react";

const AddNovel = (props) => {
  const [novelName, setNovelName] = useState("Nombre de la novela");
  const [genre, setGenre] = useState("");

  const [sequencer, setSequencer] = useState(props.recommendationsLength + 1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setNovelName("");
    setGenre("");
  }, [favorites]);

  const addNovel = (e) => {
    e.preventDefault();
    setFavorites([
      ...favorites,
      {
        genre: genre,
        name: novelName,
        id: sequencer,
      },
    ]);
    setSequencer(sequencer + 1);
  };

  return (
    <div>
      <h1>Recomendaciones</h1>
      <p>
        Si te gustaría ver traducida alguna otra novela no dudes en decirnos
        cuáles son tus novelas favoritas y lo tendremos en cuenta para futuros
        proyectos.
      </p>
      <form>
        <input
          id="tarea"
          type="text"
          value={novelName}
          name="tarea"
          onChange={(event) => setNovelName(event.target.value)}
          placeholder="Nombre de la novela"
        />

        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" disabled>
            Género
          </option>
          <option value="Género: Wuxia">Wuxia</option>
          <option value="Género: Xianxia">Xianxia</option>
          <option value="Género: Xuanhuan">Xuanhuan</option>
        </select>
        <button id="agregar" onClick={addNovel}>
          ¡Recomendar!
        </button>
      </form>

      <ul className="fav-list">
        {favorites.map((favorite, i) => {
          return (
            <li key={i}>
              {favorite.name} - {favorite.genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AddNovel;
