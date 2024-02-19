import VideoPlayer from "../components/video-player/VideoPlayer";
import "./section.css";
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
      <h1>PITZ APP</h1>
      <p>
        En los años 90, los padres no tenían la facilidad de grabar videos con
        sus teléfonos como hoy en día. Obtener videos de los niños practicando
        deportes era difícil y editarlos era casi imposible. Buscando capturar
        imágenes de calidad de sus hijos jugando al fútbol, invirtieron en
        cámaras portátiles, pero aún así no estaban satisfechos. Querían videos
        de calidad que reflejaran el espíritu del juego de sus hijos. Así nació{" "}
        <span style={{ color: "#FF025F", fontWeight: "bold" }}>PITZ</span>{" "}
        (Parents in the Zone), una empresa que ofrece un supergenerador de
        momentos destacados para el deporte juvenil, permitiendo a los padres
        disfrutar de los juegos de sus hijos y compartir momentos de calidad en
        redes sociales.
      </p>
      <VideoPlayer />
      <div class="custom-shape-divider-bottom-1708376835">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
