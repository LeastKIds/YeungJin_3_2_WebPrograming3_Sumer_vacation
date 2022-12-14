import React from 'react'

const Footer = () => {
    return (
        <footer
            className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 sticky top-[100vh] m-5" >
    <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/"
                                                                                        className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </div>

        </footer>
    )
}

export default Footer;