import "../../../assets/genres.css";

const Genres = () => {
  return (
    <div className="genres">
      <h2>Los tres géneros principales de webnovels chinas:</h2>
      <p>
        Las webnovels chinas suelen caer dentro de uno, o más, de los géneros
        descritos más abajo. Todos estos géneros usan elementos del folclore y
        mitología chinos, así como aspectos del taoísmo y parte del budismo. Los
        tres tienen muchas características en común, pero con ligeras
        diferencias.
      </p>
      <div className="wuxia">
        <p>
          <b>Wuxia</b>, que literalmente significa
          <em> «caballeros de las artes marciales»</em> o
          <em>«héroes de las artes marciales»</em>, es un género distintivo de
          la literatura, televisión y el cine chino.
        </p>
        <p>
          El género wuxia es específico de la cultura china; una mezcla única de
          la filosofía de las artes marciales, llamada <b>xia (俠)</b>,
          desarrollada a lo largo de los siglos y la larga historia del país en
          wushu.
        </p>
        <p>
          En Japón, la tradición del bushidō entre los samurái comparte ciertos
          aspectos con la filosofía marcial china del xia. Aunque el concepto
          xia suele traducirse como <em>«caballería»</em>, los aspectos del xia
        </p>
        <p>
          están tan arraigados en el entorno social y cultural de la antigua
          China que es imposible encontrar una traducción exacta en el mundo
          occidental.
        </p>
      </div>

      <div className="xianxia">
        <p>
          <strong>Xianxia</strong> es un género de fantasía china influenciado
          por la mitología china, el taoísmo, el budismo, las artes marciales
          chinas, la medicina tradicional china, la religión popular china, la
          alquimia china
        </p>
        <p>y otros elementos tradicionales chinos.</p>
      </div>

      <div className="xuanhuan">
        <strong>Xuanhuan, </strong>literalmente <em>"fantasía misteriosa"</em>,
        es un género que se define como una combinación de mitología china con
        elementos occidentales.
        <p>
          Se pueden encontrar niveles de cultivo con obvia influencia
          occidental, como sistemas de poder basados en magia y mana, así como
          una avariedad de razas diferentes y un universo lleno de
          posibilidades.
        </p>
      </div>
      <div className="findUs">
        <h2>¡Pueden encontrarnos en nuestras redes sociales!</h2>
      </div>
    </div>
  );
};
export default Genres;
