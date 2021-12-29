import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-brown text-zinc-200">
      <div className="mx-auto flex flex-wrap p-5 items-center">
        {/* <svg width="100" height="50">
          <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
        </svg> */}
        <p>Rescue Royale</p>

        <nav className="md:ml-auto flex items-center justify-between">
          <Link href="/">
            <div className="mr-5 hover:text-white hover:cursor-pointer">Home Page</div>
          </Link>
          <Link href="/page2">
            <div className="mr-5 hover:text-white hover:cursor-pointer">Second Page</div>
          </Link>
          <Link href="/page3">
            <div className="mr-5 hover:text-white hover:cursor-pointer">Third Page</div>
          </Link>
          <Link href="/contact-us">
            <div className="mr-5 hover:text-white hover:cursor-pointer">Contact Us</div>
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;