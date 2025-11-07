import { Clock, Zap, Target, Users } from 'lucide-react';

const TimingSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-block py-1 px-4 mb-4 rounded-full border border-purple-200 text-sm font-semibold shadow-sm bg-linear-to-r from-purple-500 to-blue-500  bg-clip-text text-transparent">
                    <Clock className="w-4 h-4 inline mr-1 text-purple-500" /> Always On
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
                    The Right <span className="text-blue-600">Time</span> is Now
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
                    <div className="border border-gray-100 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold  mb-1 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Drowning in Repetition</h3>
                        <p className="text-gray-500 text-sm mb-4">Let automation handle routine tasks for you.</p>
                        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-linear-to-br from-purple-200 via-pink-200 to-blue-200 opacity-60"></div>
                            <div className="absolute inset-0 p-4 text-xs font-semibold text-gray-800">
                                <div className="absolute top-10 left-10 bg-white rounded-md px-2 py-1 shadow-md">Send Email</div>
                                <div className="absolute top-24 left-32 bg-white rounded-md px-2 py-1 shadow-md">Automate</div>
                                <div className="absolute top-10 right-10 bg-white rounded-md px-2 py-1 shadow-md">Update Spreadsheet</div>
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 20 25 L 35 45 L 60 45 L 75 25" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                                    <path d="M 35 45 Q 50 60, 60 75" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-100 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold mb-1 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">When Accuracy Matters</h3>
                        <p className="text-gray-500 text-sm mb-4">AI ensures error-free, instant execution.</p>
                        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-linear-to-br from-teal-200 via-green-200 to-lime-200 opacity-60"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="relative w-full h-full">
                                    <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-yellow-400 drop-shadow-lg" fill="#facc15" />
                                    <div className="absolute top-10 left-10 bg-white rounded-md px-2 py-1 shadow-md flex items-center text-xs text-green-600 font-semibold">
                                        <Target className="w-3 h-3 mr-1" /> Task Completed
                                    </div>
                                    <div className="absolute bottom-10 left-10 bg-white rounded-md px-2 py-1 shadow-md text-xs text-gray-600">message sent</div>
                                    <div className="absolute top-10 right-10 bg-white rounded-md px-2 py-1 shadow-md text-xs text-blue-600">Automate</div>
                                    <div className="absolute bottom-10 right-10 bg-white rounded-md px-2 py-1 shadow-md text-xs text-red-600">No Error</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-100 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold mb-1 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Scaling Too Fast</h3>
                        <p className="text-gray-500 text-sm mb-4">Grow without overwhelming your team.</p>
                        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-60"></div>
                            <div className="absolute inset-0 flex items-end justify-center p-4">
                                <Users className="absolute bottom-10 left-10 w-12 h-12 text-gray-400" />
                                <div className="absolute bottom-4 left-0 w-full">
                                    <svg viewBox="0 0 100 50" className="w-full h-full">
                                        <path d="M 10 45 L 20 35 L 30 40 L 40 25 L 50 30 L 60 15 L 70 20 L 80 5" stroke="#6366f1" strokeWidth="2" fill="url(#gradient-scale)" />
                                        <defs>
                                            <linearGradient id="gradient-scale" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.5 }} />
                                                <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-100 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold mb-1 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Always On</h3>
                        <p className="text-gray-500 text-sm mb-4">Automation never sleeps, unlike humans.</p>
                        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 opacity-60"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-xs font-semibold text-gray-800">
                                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-blue-600">AI</div>
                                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 space-y-2">
                                    <div className="bg-white rounded-md px-2 py-1 shadow-md">Faster Execution</div>
                                    <div className="bg-white rounded-md px-2 py-1 shadow-md">Scales Effortlessly</div>
                                    <div className="bg-white rounded-md px-2 py-1 shadow-md">Works 24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TimingSection;