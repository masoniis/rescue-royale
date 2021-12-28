import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-brown text-zinc-200">
      <div className="mx-auto flex flex-wrap p-5 items-center">
        I am the headers epic logo spot

        <nav className="md:ml-auto flex items-center justify-between">
          <a href className="mr-5 hover:text-white">
            First Link
          </a>
          <a href className="mr-5 hover:text-white">
            Second Link
          </a>
          <a href className="mr-5 hover:text-white">
            Third Link
          </a>
          <a href className="mr-5 hover:text-white">
            Fourth Link
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;