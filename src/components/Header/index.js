import React from "react";
import Link from "gatsby-link";

const Header = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-black">
          <span className="text-xl tracking-tight">
            Quentin Berthommier
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
