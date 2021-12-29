import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-zinc-200 text-gray-500 p-6">
            <div className="container flex justify-between items-center border-t-2 border-stone-400 px-5 mx-auto transition-all duration-500">

                {/* Flex Item 1 */}
                <div className="flex justify-items-start text-sm pt-3">

                    {/* Mini-flex Item 1 */}
                    <p className="pr-4 py-1 mt-0 mr-4 border-r border-stone-400">Copyright @ 2022 Mason Inc.</p>

                    {/* Mini-flex Item 2 */}
                    <a className="py-1 mt-0 hover:text-gray-700" href="https://www.google.com/search?q=Trademark+Policy&rlz=1C1ONGR_enUS950US950&sxsrf=AOaemvIAUL3lYdFypXJLMFm66tupIedEjw%3A1640803781407&ei=xa3MYbKfGMv7-Qb5qJSwBA&ved=0ahUKEwjylaW01on1AhXLfd4KHXkUBUYQ4dUDCA4&uact=5&oq=Trademark+Policy&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BwgjEOoCECc6BwgAEMkDEEM6BQgAEJIDOgoIABCxAxDJAxBDOgcIABCxAxBDOggIABCABBCxAzoICAAQgAQQyQM6CwguEIAEEMcBEK8BOgQIABANOgYIABANEB46CAgAEA0QBRAeSgQIQRgASgQIRhgAUABY7xtgkR1oA3ACeACAAYUBiAG_C5IBBDEzLjSYAQCgAQGwAQrAAQE&sclient=gws-wiz">
                        Trademark Policy
                    </a>
                </div>

                {/* Flex Item 2 */}
                <span className="inline-flex mt-0 pt-3">

                    {/* Start of new mini-flex: all the icons */}
                    <Link href="https://www.facebook.com/">
                    <a className="text-gray-600">
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
                    <a className="ml-3 text-gray-600">
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

                    {/* <a className="ml-3 text-gray-600" href="https://www.instagram.com/">
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

                    <a className="ml-3 text-gray-600" href="https://www.linkedin.com/">
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
                    </a> */}

                </span>
                        
            </div>
        </footer>
    );
}

export default Footer;