import React from "react";
import Link from "gatsby-link";
import AngleRight from 'react-icons/lib/fa/angle-right';

const AboutPage = () => (
  <div>
    <div className="flex flex-col md:flex-row items-center">
      <h2 className="md:w-1/3 font-thin p-8">
        Mes passions sont la réalisation de contenus à destination du Web...
      </h2>
      <div className="md:w-2/3 p-4">
        <p className="border-l-2 border-grey-darkest leading-loose pl-8 text-justify">
          D'une petite Progressive Web App comme cette page en est l'exemple à l'installation broadcast
          multi-caméra pour Facebook Live, je n'ai jamais mis de barrières à ma curiosité.
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row">

      <div className="md:w-1/3 p-6 bg-grey-lightest m-2 rounded-lg">
        <h3 className="font-normal pb-4">
          <a href="https://quentin.photo/wordpress/"
            className="text-black font-thin"
          >
            <AngleRight /> Projet : Office du Tourisme de Strasbourg
          </a>
        </h3>
        <p className="text-justify leading-loose">
        Projet dans le cadre de ma formation "Développeur Web Junior" OpenClassrooms. Thème wordpress développé from scratch avec compression du code et plugins d'optimisation.
        </p>
      </div>

      <div className="md:w-1/3 p-6 bg-grey-lightest m-2 rounded-lg">
        <h3 className="font-normal pb-4">
          <a href="https://quentin.photo/openclassrooms/velov/"
            className="text-black font-thin"
          >
            <AngleRight /> Projet : Carte de réservation Vélov
          </a>
        </h3>
        <p className="text-justify leading-loose">
        Toujours dans le cadre de ma formation, j'ai dû réaliser un prototype fonctionnel d'un site de réservation de Vélov à l'aide de Javascript et de l'API JCDecaux.
        </p>
      </div>

      <div className="md:w-1/3 p-6 bg-grey-lightest m-2 rounded-lg">
        <h3 className="font-thin text-grey-darker pb-4">
           <AngleRight /> Projet : Moteur de blog en PHP (en cours)
        </h3>
        <p className="text-justify leading-loose">
          Pour compléter ma formation, je dois réaliser un moteur de blog en PHP sans framework et en programmation orientée objet.
        </p>
      </div>
    </div>
    <p className="leading-loose text-center pt-8">
      <Link
        to="/photography"
        className="no-underline text-grey-darkest border border-black rounded-lg p-4"
      >
        Découvrir mon univers artistique <AngleRight />
      </Link>
    </p>
  </div>
);

export default AboutPage;
