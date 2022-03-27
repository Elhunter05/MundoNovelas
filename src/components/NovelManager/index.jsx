import React from "react";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import AddNovel from "../AddNovel";
import NovelList from "../NovelList";
import "../../assets/recommendations.css";

function NovelManager() {
  const [novelList, setNovelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAnError, setHasError] = useState(false);

  function addNovel(novel) {
    setLoading(true);
    fetch("http://localhost:3000/recommendations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novel),
    })
      .then((data) => data.json())
      .then((data) => {
        setNovelList(novelList.concat(data));
      })
      .catch((e) => {
        console.log("Ocurrió un error.");
        setHasError(true);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetch("http://localhost:3000/recommendations")
      .then((data) => data.json())
      .then((data) => {
        setNovelList(data);
      })
      .catch((e) => {
        console.log("Hubo un error.");
        setHasError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Recomendaciones</h1>
      <p>
        Si te gustaría ver traducida alguna otra novela no dudes en decirnos
        cuáles son tus n y lo tendremos en cuenta para futuros proyectos.
      </p>

      <AddNovel addNovel={addNovel} novelListLength={novelList.lenght} />
      <BeatLoader loading={loading} />
      <NovelList novelList={novelList} />
      {hasAnError && "Ha ocurrido un error."}
    </>
  );
}
export default NovelManager;
