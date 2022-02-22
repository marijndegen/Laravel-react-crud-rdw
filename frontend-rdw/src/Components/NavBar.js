import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {

    link = (text, adres) => {
        return (<Link
            to={adres}
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        > {text} </Link >);
    }

    render = () => {
        return (
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">RDW</span>
                    </Link>
                    <div className="w-full md:block md:w-auto">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {this.link("List cars", "/list")}
                            {this.link("New car", "/new")}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;