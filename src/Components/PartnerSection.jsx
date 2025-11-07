const PartnerSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-left">
                        <div className="inline-flex items-center py-1 px-4 mb-4 rounded-full border border-purple-200 text-sm font-semibold bg-linear-to-r from-purple-500 to-blue-500  bg-clip-text text-transparent shadow-sm">✨ Why Pragetx.ai</div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">An AI innovation partner trusted by organizations worldwide!</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">Join hands with our skilled team to turn bold ideas into practical, scalable AI solutions.</p>
                        <a href="#" className="inline-flex items-center text-lg font-medium text-white px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition duration-200 shadow-lg shadow-blue-500/40">Let's build the future together with AI →</a>
                    </div>
                    <div className="relative w-full p-6 md:p-10 rounded-4xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-pink-400 via-purple-500 to-blue-500 opacity-90"></div>
                        <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full opacity-70 blur-sm"></div>
                        <div className="absolute bottom-4 left-4 w-3 h-3 bg-white rounded-full opacity-70 blur-sm"></div>
                        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full opacity-70 blur-sm"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full opacity-70 blur-sm"></div>
                        <div className="relative grid grid-cols-2 gap-4 z-10 p-4">
                            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-center text-white">
                                <p className="text-3xl font-extrabold mb-1">80%</p>
                                <p className="text-sm opacity-80">Tasks Automated</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-center text-white">
                                <p className="text-3xl font-extrabold mb-1">22%</p>
                                <p className="text-sm opacity-80">Cost Savings</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-center text-white">
                                <p className="text-3xl font-extrabold mb-1">3x</p>
                                <p className="text-sm opacity-80">Faster Scaling</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-center text-white">
                                <p className="text-3xl font-extrabold mb-1">500+</p>
                                <p className="text-sm opacity-80">Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PartnerSection;