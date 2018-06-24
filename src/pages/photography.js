import React from "react";
import Link from "gatsby-link";
import Img01 from "../images/01.jpg";


const IndexPage = () => (
  <div>
    <div className="flex flex-col md:flex-row items-center">
      <h2 className="md:w-1/3 font-thin p-8">
        ...Et les arts visuels.
      </h2>
      <div className="md:w-2/3 p-4">
        <p className="border-l-2 border-grey-darkest leading-loose pl-8 text-justify">
          Mes photographies sont publiées sur le <a href="http://www.vogue.it/en/photovogue/portfolio/?id=168705" className="text-black font-bold">PhotoVogue</a>, réputé pour sa sélectivité. Je dispose de notions sur After Effects pour, par exemple, créer des effets de parallaxe sur mes images.
        </p>
      </div>
    </div>
    <img src={Img01} alt="Image 01" className="rounded-lg block mx-auto mt-8" />

  </div>
);

export default IndexPage;
