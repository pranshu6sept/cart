import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="bg-white border-b-2 shadow-lg p-4 flex items-center h-15">
      <Link className="text-blue-500 text-xl font-medium hover:text-blue-900 transition duration-200 ease-in-out" href="/">
        Home
      </Link>
      <Link className="ml-auto mr-4 flex items-center text-lg text-blue-700 hover:text-blue-900 transition duration-200 ease-in-out" href="/cart">
        <CartBtn />
      </Link>
    </header>

  );
};

export default Header;