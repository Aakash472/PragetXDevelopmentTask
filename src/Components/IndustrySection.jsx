const IndustrySection = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex justify-center flex-wrap space-x-6 mb-12 border-b border-gray-200">
                    <button className="pb-3 px-3 text-lg font-medium transition duration-200 whitespace-nowrap text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-300">Manufacturing & Innovation</button>
                    <button className="pb-3 px-3 text-lg font-medium transition duration-200 whitespace-nowrap text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-300">Government & Public Sector</button>
                    <button className="pb-3 px-3 text-lg font-medium transition duration-200 whitespace-nowrap text-blue-600 border-b-2 border-blue-600">Artificial Intelligence</button>
                    <button className="pb-3 px-3 text-lg font-medium transition duration-200 whitespace-nowrap text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-300">Education</button>
                    <button className="pb-3 px-3 text-lg font-medium transition duration-200 whitespace-nowrap text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-300">Media & Entertainment</button>
                </div>
                <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl group" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600/1e293b/ffffff?text=AI+Robots+in+Warehouse')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                    <div className="absolute top-10 left-10 w-4/5 text-left">
                        <div className="flex items-center justify-between space-x-8">
                            <p className="text-xl md:text-2xl text-white font-medium grow">AI that learns, adapts, and powers innovation across industries.</p>
                            <a href="#" className="inline-flex items-center text-base font-medium text-white px-6 py-2 rounded-full shrink-0 bg-linear-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition duration-200 shadow-xl shadow-blue-500/40">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default IndustrySection;