import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes'

const Header = () => {

  const {theme, setTheme} = useTheme()

  return (
    <header className="bg-zinc-200 text-gray-500 p-6">
      <div className="container flex mx-auto flex-wrap items-center">

        {/* Flex Item 1 */}
        <p>SVG logo goes here</p>

        {/* Flex Item 2 */}
        <nav className="md:ml-auto flex items-center justify-between">
          <Link href="/">
            <div className="mr-5 hover:text-gray-700 hover:cursor-pointer">Home Page</div>
          </Link>
          <Link href="/page2">
            <div className="mr-5 hover:text-gray-700 hover:cursor-pointer">Second Page</div>
          </Link>
          <Link href="/page3">
            <div className="mr-5 hover:text-gray-700 hover:cursor-pointer">Third Page</div>
          </Link>
          <Link href="/contact-us">
            <div className="mr-5 hover:text-gray-700 hover:cursor-pointer">Contact Us</div>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 h-12 w-12 order-2 md:order-3 bg-white dark:bg-black"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              Dark Mode
          </button>

        </nav>

      </div>
    </header>
  );
};

export default Header;