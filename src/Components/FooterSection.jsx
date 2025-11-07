import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';

const FooterSection = () => {
    return (
        <footer className="relative bg-gray-900 text-white pt-10 pb-32">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-6">
                <p className="text-2xl font-black text-white">PRAGETX</p>
                <div className="flex space-x-3 text-gray-400">
                    <a href="#" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition"><Instagram className="w-5 h-5" /></a>
                </div>
            </div>
            <div className="relative border-t border-gray-700 pt-10 pb-16">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay"style={{
                        backgroundImage: 'url("https://via.placeholder.com/1400x500/1f2937/4b5563?text=World+Map+Visual")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%)'
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-between text-left">
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-6">
                            <h3 className="flex items-center text-lg font-semibold mb-3">
                                <span className="text-2xl mr-2">🇮🇳</span> India (HQ)
                            </h3>
                            <p className="text-sm text-gray-400">D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road, Thaltej, Ahmedabad - 380054</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-6">
                            <h3 className="flex items-center text-lg font-semibold mb-3">
                                <span className="text-2xl mr-2">🇺🇸</span> US Office
                            </h3>
                            <p className="text-sm text-gray-400">PO Box 531, Centerville, Atlanta GA 31028</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-8 md:mb-0">
                            <h3 className="flex items-center text-lg font-semibold mb-3">
                                <span className="text-2xl mr-2">🇧🇷</span> Brazil Office
                            </h3>
                            <p className="text-sm text-gray-400">Rua Castelo 239 Foz do Iguaçu Paraná. Mr. Marco Antonio <br /> +55 45 8802-8573</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-4 mt-12">
                        <a href="#" className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-full text-sm hover:bg-gray-700/70 transition border border-gray-700">
                            <Mail className="w-4 h-4 mr-2 text-blue-400" />hello@pragetx.com
                        </a>
                        <a href="#" className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-full text-sm hover:bg-gray-700/70 transition border border-gray-700"><Phone className="w-4 h-4 mr-2 text-blue-400" />+91-8487990773</a>
                        <a href="#" className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-full text-sm hover:bg-gray-700/70 transition border border-gray-700">
                            <span className="mr-2">PragetX</span>
                            <ArrowRight className="w-4 h-4 text-blue-400" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pt-8">
                <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm font-medium border-b border-gray-700 pb-8 mb-8">
                    <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Portfolio</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">How We Work</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Referral Programs</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Become a Partner</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Blogs</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
                </nav>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex space-x-4 order-2 md:order-1 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white transition">Cookies</a>
                        <a href="#" className="hover:text-white transition">Privacy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                    </div>
                    <p className="order-1 md:order-2">&copy; 2025 PragetX. All rights reserved.</p>
                </div>
                <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-center w-full opacity-5 pointer-events-none">
                    <p className="text-[120px] lg:text-[180px] font-black tracking-widest leading-none">PRAGETX</p>
                </div>
            </div>
        </footer>
    );
};
export default FooterSection;