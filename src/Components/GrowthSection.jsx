const GrowthSection = () => {
    const benefits = [
        { id: 1, text: "Reduce repetitive admin tasks by up to 80%.", isActive: true },
        { id: 2, text: "Average 22% reduction in operating costs.", isActive: false },
        { id: 3, text: "Teams scale without adding headcount.", isActive: false },
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-block py-1 px-4 mb-4 rounded-full border border-purple-200 text-sm font-semibold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent shadow-sm">
                    ✨ Faster Growth
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-16">
                    Less Busywork. More <span className="text-blue-600">Growth.</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left items-center">
                    <div className="space-y-6">
                        {benefits.map((item) => (
                            <div key={item.id} className={`flex items-start p-4 rounded-full border-blue-500 border-2 transition duration-300 ${item.isActive ? 'bg-linear-to-r from-blue-50 to-purple-50 shadow-md border-blue-400 ' : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 '}`}>
                                <div className={`flex items-center justify-center w-8 h-8 mr-4 rounded-full font-bold text-sm shrink-0 ${item.isActive ? 'bg-linear-to-r from-purple-500 to-blue-500 text-white' : 'bg-white text-gray-500 border border-gray-300'}`}>{item.id}</div>
                                <p className={`text-lg ${item.isActive ? 'bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent font-semibold' : 'text-gray-600'}`}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full h-[350px] md:h-[450px]">
                        <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl flex items-center justify-center text-white text-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default GrowthSection;