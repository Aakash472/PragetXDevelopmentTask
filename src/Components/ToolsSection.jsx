import { Cloud, Mail, MessageSquare, Zap } from "lucide-react";

const ToolsSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-20">Here are the
                    <span className="relative inline-block mx-1">Tools
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-purple-200 transform translate-y-1"></span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500/50 transform translate-y-1"></span>
                    </span>& Software We Use
                </h2>
                <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto">
                    <div className="flex items-center space-x-4 md:space-x-10">
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <MessageSquare className="w-8 h-8" style={{ color: '#ec4899' }} />
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-10 -mt-2">
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <Mail className="w-8 h-8" style={{ color: '#dc2626' }} />
                        </div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <Zap className="w-8 h-8" style={{ color: '#ff7e33' }} />
                        </div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <Mail className="w-8 h-8" style={{ color: '#6366f1' }} />
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-10 -mt-2">
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <Cloud className="w-8 h-8" style={{ color: '#3b82f6' }} />
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-10 -mt-2">
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                            <Cloud className="w-8 h-8" style={{ color: '#6366f1' }} />
                        </div>
                    </div>
                    <div className="flex space-x-10 mt-8">
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                        <div className="w-16 h-16 rounded-xl bg-gray-100/50 shadow-inner"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ToolsSection;