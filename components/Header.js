import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-brown text-zinc-200">
      <div className="mx-auto flex flex-wrap p-5 items-center">
        {/* <svg width="100" height="50">
          <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
        </svg> */}

        <nav className="md:ml-auto flex items-center justify-between">
          <Link href="/">
            <div className="mr-5 hover:text-white">Home Page</div>
          </Link>
          <Link href="/page2" className="mr-5 hover:text-white">
            <div className="mr-5 hover:text-white">Second Page</div>
          </Link>
          <Link href="/page3">
            <div className="mr-5 hover:text-white">Third Page</div>
          </Link>
          <Link href="/page4">
            <div className="mr-5 hover:text-white">Fourth Page</div>
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;