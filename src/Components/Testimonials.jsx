const Testimonials = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">
                    Trusted by <span className="text-blue-600">Industry Leaders</span>
                </h2>
                <p className="text-lg text-gray-600 mb-20">See what our clients say about scaling smarter with AI agents.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 p-4">
                        <div className="w-full h-auto rounded-lg overflow-hidden mb-3">
                            <img src="https://via.placeholder.com/300x300?text=Priyanka" alt="Priyanka Sharma" className="w-full h-auto object-cover rounded-lg"/>
                        </div>
                        <div className="flex items-center justify-center space-x-2 pt-2">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-5 h-5 rounded-full" />
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800 leading-none">Priyanka Sharma</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 p-4">
                        <div className="w-full h-auto rounded-lg overflow-hidden mb-3">
                            <img src="https://via.placeholder.com/300x300?text=Alex" alt="Alex Sharma" className="w-full h-auto object-cover rounded-lg"/>
                        </div>
                        <div className="flex items-center justify-center space-x-2 pt-2">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-5 h-5 rounded-full" />
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800 leading-none">Alex Sharma</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 p-4">
                        <div className="w-full h-auto rounded-lg overflow-hidden mb-3">
                            <img src="https://via.placeholder.com/300x300?text=Michalo" alt="Michalo Sharma" className="w-full h-auto object-cover rounded-lg"/>
                        </div>
                        <div className="flex items-center justify-center space-x-2 pt-2">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-5 h-5 rounded-full" />
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800 leading-none">Michalo Sharma</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left relative">
                        <span className="text-6xl text-blue-500 font-extrabold absolute top-2.5 left-[-5px] opacity-20">"</span>
                        <p className="text-gray-700 mt-4 leading-relaxed">**"PragetX.ai** made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."</p>
                        <div className="flex items-center space-x-3 mt-8 pt-4 border-t border-gray-100">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800 leading-none">Clay Johnson</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left relative">
                        <span className="text-6xl text-blue-500 font-extrabold absolute top-2.5 left-[-5px] opacity-20">"</span>
                        <p className="text-gray-700 mt-4 leading-relaxed">**"PragetX.ai** made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."</p>
                        <div className="flex items-center space-x-3 mt-8 pt-4 border-t border-gray-100">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800 leading-none">Alex</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left relative">
                        <span className="text-6xl text-blue-500 font-extrabold absolute top-2.5 left-[-5px] opacity-20">"</span>
                        <p className="text-gray-700 mt-4 leading-relaxed">**"PragetX.ai** made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."</p>
                        <div className="flex items-center space-x-3 mt-8 pt-4 border-t border-gray-100">
                            <img src="https://via.placeholder.com/20x20" alt="Icon" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800 leading-none">Priyanka Sharma</p>
                                <p className="text-xs text-gray-500 leading-none">CTO, ShopFlow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;