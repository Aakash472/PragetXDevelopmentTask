import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStoriesSection = () => {
    return (
        <section className="py-20 md:py-32 bg-linear-to-b from-white to-indigo-50/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div className="text-left max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">Success Stories That Matter</h2>
                        <p className="text-lg text-gray-600">See how companies are cutting costs and boosting efficiency with our AI-powered solutions.</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-lg font-medium text-blue-600 px-6 py-2 rounded-full bg-white border border-blue-600 hover:bg-blue-50 transition duration-200 shadow-md">Read All Case Study <ArrowRight className="w-5 h-5 ml-2" /></a>
                </div>
                <div className="relative p-8 md:p-10 pb-16 bg-white rounded-3xl shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="text-left">
                            <div className="mb-6">
                                <div className="text-sm font-semibold text-purple-600 p-1 rounded-md bg-purple-50 inline-block">
                                    <span className="text-lg mr-1">←</span> Logistics & Supply Chain
                                </div>
                            </div>
                            <h3 className="flex items-center text-3xl font-extrabold text-gray-800 mb-4 leading-snug">
                                <span className="w-8 h-8 mr-3 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700 shrink-0">L</span>SwiftLogix Smart <br className="lg:hidden" /> Logistics Automation
                            </h3>
                            <p className="text-gray-600 text-base mb-6">SwiftLogix partnered with us to automate shipment tracking and customer support. By deploying AI agents, they reduced manual data entry by 75%, cut response times from hours to seconds, and improved overall delivery efficiency.</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">AI Agents</span>
                                <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Predictive Analytics</span>
                                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">NLP Chatbot</span>
                            </div>
                            <a href="#" className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200">Read Case Study <ArrowRight className="w-5 h-5 ml-2" /></a>
                        </div>
                        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center" style={{ backgroundImage: "url('https://via.placeholder.com/600x400/1e293b/ffffff?text=SwiftLogix+Automation')", backgroundSize: 'cover' }}>
                                <div className="absolute top-4 right-4 text-3xl">🇮🇳</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button className="w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition duration-200">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition duration-200">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SuccessStoriesSection;