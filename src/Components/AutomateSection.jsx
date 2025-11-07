const AutomateSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                <div className="relative text-center p-12 md:p-20 rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #6366f1)' }}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                    <span className="absolute top-8 right-8 text-white text-2xl animate-pulse">*</span>
                    <span className="absolute bottom-8 left-8 text-white text-2xl animate-pulse">*</span>
                    <div className="relative z-10">
                        <p className="text-white text-base font-medium mb-3 opacity-90">Our workflows, powered by AI simple, fast, reliable</p>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">Ready to Automate Your <br className="hidden sm:inline" /> Business with AI?</h3>
                        <a href="#" className="inline-block text-lg font-semibold text-blue-600 px-10 py-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow-xl">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomateSection;