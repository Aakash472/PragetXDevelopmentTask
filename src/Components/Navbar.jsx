import { ChevronDown } from "lucide-react";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10 py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

                <div className="flex items-center">
                    <span className="font-extrabold text-xl md:text-2xl text-gray-800 tracking-wide">PRAGETX</span>
                </div>

                <nav className="hidden lg:block rounded-full bg-gray-100 p-3">
                    <ul className="flex space-x-8 text-[15px] font-medium">

                        <li className="list-none">
                            <a href="#company" className="flex items-center transition duration-150 text-blue-600 hover:text-blue-700">
                                Company
                                <ChevronDown className="w-4 h-4 ml-1 text-blue-600" />
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#products" className="flex items-center transition duration-150 text-gray-600 hover:text-blue-600">
                                Products
                                <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-blue-600" />
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#services" className="flex items-center transition duration-150 text-gray-600 hover:text-blue-600">
                                Services
                                <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-blue-600" />
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#resources" className="flex items-center transition duration-150 text-gray-600 hover:text-blue-600">
                                Resources
                                <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-blue-600" />
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#industries" className="flex items-center transition duration-150 text-gray-600 hover:text-blue-600">
                                Industries
                                <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-blue-600" />
                            </a>
                        </li>

                    </ul>
                </nav>

                <div className="flex items-center space-x-6">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm md:text-base hover:bg-blue-700 transition duration-200 shadow-lg shadow-blue-500/50 whitespace-nowrap">
                        Get In Touch
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;