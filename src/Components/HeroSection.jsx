import { Zap, Mail, Cloud, Users, CheckSquare, Search, Feather } from 'lucide-react';

const HeroSection = () => {
    const center = { x: 500, y: 190 };
    const endpoints = [
        { x: 100, y: 120, Icon: Zap, color: '#ef4444', bgColor: '#fef2f2', curveControlY: 20 },
        { x: 50, y: 300, Icon: Cloud, color: '#3b82f6', bgColor: '#eff6ff', curveControlY: 350 },
        { x: 200, y: 350, Icon: Users, color: '#f97316', bgColor: '#fff7ed', curveControlY: 380 },
        { x: 250, y: 150, Icon: Mail, color: '#dc2626', bgColor: '#fef2f2', curveControlY: 100 },
        { x: 900, y: 120, Icon: Search, color: '#4b5563', bgColor: '#f9fafb', curveControlY: 20 },
        { x: 800, y: 150, Icon: CheckSquare, color: '#10b981', bgColor: '#ecfdf5', curveControlY: 100 },
        { x: 850, y: 300, Icon: Feather, color: '#db2777', bgColor: '#fdf2f8', curveControlY: 350 },
    ];
    const renderIcons = () => (
        endpoints.map((point, index) => (
            <div key={index} style={{
                top: `calc(${(point.y / 380) * 100}% - 20px)`,
                left: `calc(${(point.x / 1000) * 100}% - 20px)`,
                backgroundColor: point.bgColor,
                borderColor: point.color,
            }}
                className="absolute w-10 h-10 rounded-full border flex items-center justify-center shadow-md z-20">
                <point.Icon className={`w-5 h-5`} style={{ color: point.color }} />
            </div>
        ))
    );

    return (
        <>
            <style jsx="true">{`
              .bg-dots-pattern {
                background-image: radial-gradient(#d3d3d3 1px, transparent 1px);
                background-size: 20px 20px;
              }
            `}</style>

            <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-linear-to-b from-white via-indigo-50 to-purple-50 bg-dots-pattern overflow-hidden">
                <div className="container mx-auto px-4 text-center max-w-7xl relative z-2">
                    <div className="inline-block py-2 px-6 mb-6 rounded-full border border-purple-200 bg-white shadow-md">
                        <p className="text-sm font-medium text-purple-600">✨ Trusted by businesses in finance, healthcare, logistics, retail, and beyond.</p>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight mb-4">
                        <span className="bg-clip-text text-transparent bg-linear-to-r text-6xl from-blue-600 to-indigo-700">Automate, Accelerate & Scale</span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto">Unlock the future of work with AI Agents, Workflow Automation, and Smart Data Architecture. From startups to enterprises, we help businesses cut costs, save time, and grow faster without the tech headaches.</p>
                    <div className="flex justify-center space-x-4 mb-16">
                        <button className="bg-blue-600 text-white px-7 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-200 shadow-xl shadow-blue-500/30">Get Started</button>
                        <button className="text-gray-700 px-7 py-3 rounded-lg font-medium text-lg border border-gray-300 hover:bg-gray-100 transition duration-200">See How It Works</button>
                    </div>
                    <div className="relative w-full max-w-6xl mx-auto h-[280px] md:h-[380px]">
                        <svg viewBox="0 0 1000 380" className="absolute top-0 left-0 w-full h-full overflow-visible">
                            {endpoints.map((point, index) => (
                                <path key={`path-${index}`}
                                    d={`M ${point.x} ${point.y} C 
                                        ${point.x + (center.x - point.x) / 3} ${point.curveControlY}, 
                                        ${center.x - (center.x - point.x) / 3} ${point.curveControlY}, 
                                        ${center.x} ${center.y}`}
                                    stroke="#a0a0a0"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                    fill="none"
                                    className="opacity-60"
                                />
                            ))}
                            <rect x="450" y="140" width="100" height="100" rx="10" fill="#fff" stroke="#e0e0e0" className="shadow-xl" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-xl border border-gray-100 flex items-center justify-center text-blue-600 text-3xl font-extrabold z-30">
                            <span className="opacity-70">X</span>
                        </div>
                        {renderIcons()}
                    </div>
                </div>
            </section>
        </>
    );
};
export default HeroSection;