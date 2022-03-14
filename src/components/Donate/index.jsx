import "../../assets/donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <div>
        <h1>¡Considera donar si te gustó lo que leíste!</h1>
      </div>

      <h3>¡Nos mantenemos gracias a tus donaciones!</h3>
      <p>
        Si disfrutas lo que hacemos, por favor considera donar para poder
        ayudarnos y mantener la página en línea.<br></br>
      </p>
      <ol>
        <h3>Las donaciones se usan para:</h3>
        <li>✅Mantener el sitio online.</li>
        <br></br>
        <li>
          ✅Ayudar económicamente a los traductores, para que les sea posible
          hacer su trabajo.
        </li>
      </ol>
      <br></br>
      <p>Para donar, usa el botón de donaciones aquí abajo 👇🏻</p>
      <button type="button">Donaciones</button>
    </div>
  );
};

export default Donate;
