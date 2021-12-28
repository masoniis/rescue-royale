import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-brown text-zinc-200">
      <div className="mx-auto flex flex-wrap p-5 items-center">
        <svg width="100" height="50">
          <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
        </svg>

        <nav className="md:ml-auto flex items-center justify-between">
          <a href="/" className="mr-5 hover:text-white">
            Home Page
          </a>
          <a href="/page2" className="mr-5 hover:text-white">
            Second Page
          </a>
          <a href="/page3" className="mr-5 hover:text-white">
            Third Page
          </a>
          <a href="/page4" className="mr-5 hover:text-white">
            Fourth Page
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;