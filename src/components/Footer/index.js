import React from "react";

const Footer = () => (
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-black">
        Forké depuis{" "}
        <a
          href="https://github.com/taylorbryant/gatsby-starter-tailwind"
          className="font-bold no-underline text-black"
        >
          ce repo
        </a> et reposant sur ReactJS et GatsbyJS.
      </p>
    </div>
);

export default Footer;
