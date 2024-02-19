import VideoPlayer from "../components/video-player/VideoPlayer";
import "./section.css";

//images
import family from "../assets/family.jpg";
import futbol from "../assets/futbol.jpg";

export const Section = () => {
  return (
    <div className="container">
      <div class="custom-shape-divider-top-1708374553">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h1>¿QUE ES PITZ APP?</h1>
      <p>
        En los años 90, los padres no tenían la facilidad de grabar videos con
        sus teléfonos como hoy en día. Obtener videos de los niños practicando
        deportes era difícil y editarlos era casi imposible. Buscando capturar
        imágenes de calidad de sus hijos jugando al fútbol, invirtieron en
        cámaras portátiles, pero aún así no estaban satisfechos. Querían videos
        de calidad que reflejaran el espíritu del juego de sus hijos. Así nació{" "}
        <span
          style={{ color: "#FF025F", fontWeight: "bold", fontSize: "1.7rem" }}
        >
          PITZ
        </span>{" "}
        (Parents in the Zone), una empresa que ofrece un supergenerador de
        momentos destacados para el deporte juvenil, permitiendo a los padres
        disfrutar de los juegos de sus hijos y compartir momentos de calidad en
        redes sociales.
      </p>
      <VideoPlayer />
      <section className="pictures-section">
        <div>
          <img src={family} alt="family picture"></img>
        </div>
        <div>
          <h2>Mision</h2>
          <p>
            Nuestra misión es proporcionar el contenido digital más increíble
            sobre deportes juveniles. Nos esforzamos por ser una fuente
            confiable y apasionante de información, entretenimiento y motivación
            para jóvenes atletas, entrenadores, padres y aficionados, fomentando
            el amor por el deporte y el desarrollo personal tanto dentro como
            fuera del campo.
          </p>
        </div>
      </section>
      <section className="pictures-section-reverse">
        <div>
          <img src={futbol} alt="child playing soccer"></img>
        </div>
        <div>
          <h2>Vision</h2>
          <p>
            Impulsados por una fuerte convicción en el impacto de los deportes
            juveniles, imaginamos un futuro en el que las experiencias de
            contenido innovadoras transformen nuestra interacción con el juego.
            Nuestro compromiso es ofrecer constantemente la experiencia de
            contenido más excepcional para nuestros padres PITZ.
          </p>
        </div>
      </section>
    </div>
  );
};
