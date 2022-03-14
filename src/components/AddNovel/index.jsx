import React from "react";
import { useState, useEffect } from "react";

const AddNovel = (props) => {
  const [novelName, setNovelName] = useState("Nombre de la novela");
  const [genre, setGenre] = useState("");

  const [sequencer, setSequencer] = useState(props.recommendationsLength + 1);

  useEffect(() => {
    setNovelName("");
    setGenre("");
  }, [sequencer]);

  const addNovel = () => {
    props.addNovel({ genre: genre, text: novelName, id: sequencer });
    setSequencer(sequencer + 1);
  };

  return (
    <div>
      <h1>Recomendaciones</h1>
      <p>
        Si te gustaría ver traducida alguna otra novela no dudes en decírnoslo y
        lo tendremos en cuenta para futuros proyectos.
      </p>
      <form action="javascript:void(0);">
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
          <option value="" disabled selected>
            Género
          </option>
          <option value="genre-wuxia">Wuxia</option>
          <option value="genre-xianxia">Xianxia</option>
          <option value="genre-xuanhuan">Xuanhuan</option>
        </select>
        <button id="agregar" onClick={addNovel}>
          ¡Recomendar!
        </button>
      </form>
    </div>
  );
};
export default AddNovel;
