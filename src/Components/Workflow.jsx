import { Zap, Mail, Cloud } from 'lucide-react';

const Workflow = () => {

    const AutomationGraphic = () => {
        const center = { x: 500, y: 175 };
        const graphicEndpoints = [
            { x: 300, y: 100, Icon: Zap, color: '#f36f32', title: "Slack" },
            { x: 250, y: 250, Icon: Cloud, color: '#3b82f6', title: "Salesforce" },
            { x: 750, y: 100, Icon: Mail, color: '#dc2626', title: "Gmail" },
            { x: 700, y: 270, Icon: Zap, color: '#ff7e33', title: "Orange Dot" },
        ];

        return (
            <div className="relative w-full h-[350px] flex items-center justify-center bg-dots-pattern">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-4xl"></div>
                <svg viewBox="0 0 1000 350" className="absolute top-0 left-0 w-full h-full">
                    {graphicEndpoints.map((point, index) => (
                        <line key={`line-${index}`} x1={point.x} y1={point.y} x2={center.x} y2={center.y} stroke="#a0a0a0" strokeWidth="1" strokeDasharray="4 4" className="opacity-60" />
                    ))}
                    <rect x="425" y="100" width="150" height="150" rx="20" fill="#fff" stroke="#e0e0e0" className="shadow-2xl" />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow-xl border border-gray-100 flex items-center justify-center text-blue-600 text-4xl font-extrabold z-30">
                    <span className="opacity-80">X</span>
                </div>
                {graphicEndpoints.map((point, index) => (
                    <div key={index} style={{
                        top: `calc(${(point.y / 350) * 100}% - 20px)`,
                        left: `calc(${(point.x / 1000) * 100}% - 20px)`,
                        backgroundColor: '#fff',
                    }} className="absolute w-12 h-12 rounded-xl shadow-md border border-gray-100 flex items-center justify-center z-30">
                        <point.Icon className={`w-6 h-6`} style={{ color: point.color }} />
                    </div>
                ))}
                <div className="absolute -bottom-5 right-[100px] flex items-center p-3 rounded-full bg-linear-to-r from-purple-100 to-blue-100 shadow-lg text-purple-700 font-medium whitespace-nowrap z-40">
                    Save up to 80% of admin time
                    <span className="ml-2 text-xl">
                        <svg className="w-6 h-6 transform rotate-[-30deg]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.2,21.8l-1.4-1.4l7.9-7.9l-7.9-7.9l1.4-1.4l9.3,9.3L12.2,21.8z" /></svg>
                    </span>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 md:py-32 bg-linear-to-b from-white via-indigo-50/50 to-purple-50/50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    <span className='text-blue-600'>Workflows</span> that work for you
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
                    Automate repetitive tasks, empower AI-driven decision-making, and build a secure, scalable digital backbone so your business runs faster, smarter, and more reliably than ever.
                </p>
                <div className="flex justify-center mb-20">
                    <div className="flex bg-gray-100 rounded-full p-4 text-gray-600 font-medium shadow-inner">
                        <button className="px-6 py-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-md transition duration-200 whitespace-nowrap">Workflow Automation</button>
                        <button className="px-6 py-2 rounded-full hover:bg-white transition duration-200 whitespace-nowrap">AI Agents</button>
                        <button className="px-6 py-2 rounded-full hover:bg-white transition duration-200 whitespace-nowrap">Data & Sytem Architech</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left items-center">
                    <div>
                        <div className="text-sm font-semibold text-purple-600 mb-2">
                            ← Smart Automation
                        </div>
                        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
                            <span className='text-blue-600'>Workflows</span> That Run <br className="hidden md:inline" /> Themselves
                        </h3>
                        <p className="text-gray-600 text-lg">Automation replaces manual, repetitive work with smart, AI-driven workflows that run effortlessly.</p>
                    </div>
                    <div>
                        <AutomationGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;