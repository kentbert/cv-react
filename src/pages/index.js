import React from "react";
import Link from "gatsby-link";
import AngleRight from 'react-icons/lib/fa/angle-right';
import Profil from "../images/profil.jpg";


const IndexPage = () => (
  <div className="text-center">
    <img src={Profil} alt="Profil" className="block mx-auto w-64 mb-8 rounded-full" />

    <h2 className="font-thin inline-block mb-8 p-3">
      Je suis à la recherche d'un contrat de professionnalisation afin de pouvoir poursuivre
      mes études dans le digital.
    </h2>
    <p className="leading-loose">
      <Link
        to="/about"
        className="no-underline text-grey-darkest border border-black rounded-lg p-4"
      >
        Voir mes compétences <AngleRight />
      </Link>
    </p>
  </div>
);

export default IndexPage;
