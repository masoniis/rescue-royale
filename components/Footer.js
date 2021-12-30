import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-zinc-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 p-6">
            <div className="container flex justify-between items-center border-t-2 border-stone-400 px-5 mx-auto transition-all ease-linear duration-1000">

                {/* Flex Item 1 */}
                <div className="flex justify-items-start text-sm pt-3">

                    {/* Mini-flex Item 1 */}
                    <p className="pr-4 py-1 mt-0 mr-4 border-r border-stone-400">Copyright @ 2022 Mason Inc.</p>

                    {/* Mini-flex Item 2, underline from: https://tailwindcomponents.com/component/link-underline-animation */}
                    <Link href="https://google.com/search?q=Trademark+Policy">
                        <a className="py-1 mt-0 hover:text-gray-700">
                            <span className="link link-underline link-underline-black">
                                Trademark Policy
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Flex Item 2 */}
                <span className="inline-flex mt-0 pt-3">

                    {/* Start of new mini-flex: all the icons */}
                    <Link href="https://facebook.com/">
                        <a className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://twitter.com">
                        <a className="ml-3 text-gray-500 dark:text-gray-300 hover:text-gray-700">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://instagram.com">
                        <a className="ml-3 text-gray-500 dark:text-gray-300 hover:text-gray-700">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://linkedin.com">
                        <a className="ml-3 text-gray-500 dark:text-gray-300 hover:text-gray-700">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </Link>

                </span>
            </div>
        </footer>
    );
}

export default Footer;