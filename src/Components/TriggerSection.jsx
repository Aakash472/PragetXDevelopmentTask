const TriggerSection = () => {
    return (
        <>
            <section className="py-20 md:py-32 bg-linear-to-b from-purple-50/50 to-indigo-100/70">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block py-1 px-4 mb-4 rounded-full border border-purple-200 text-sm font-semibold text-purple-600 bg-white shadow-sm">
                        ✨ Trigger Actions
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
                        Trigger. <span className="text-blue-600">Automate.</span> Done.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        <div className="text-left border-2 border-gray-400 rounded-2xl p-4 bg-white">
                            <h3 className="text-xl font-bold text-purple-500 mb-3">Choose your trigger</h3>
                            <p className="text-gray-600 mb-4 text-sm">Select the event that starts your workflow: email, form, or call.</p>
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl bg-linear-to-br from-pink-400 via-purple-500 to-blue-400 opacity-80">
                                <div className="absolute inset-0 "></div>
                                <div className="absolute bottom-0 w-full p-3  ">
                                    <div className="flex space-x-2 bg-white rounded-full">
                                        <button className=" text-purple-500 w-2xs p-2 rounded-md text-xs font-semibold flex items-center shadow-md">
                                            <span className="text-lg mr-1 cursor-pointer">👆</span> Start Automate
                                        </button>
                                        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-medium">Form info</div>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-500">
                                        <div className="font-semibold text-gray-800">Delivery address</div>
                                        <input type="text" placeholder="Address..." className="w-full mt-1 border border-gray-300 text-white rounded p-1 text-xs" readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-left border-2 border-gray-400 rounded-2xl p-4 bg-white">
                            <h3 className="text-xl font-bold text-purple-500 mb-3">Build the workflow</h3>
                            <p className="text-gray-600 mb-4 text-sm">Drag-and-drop steps, set conditions, and let AI plan the path.</p>
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-linear-to-br from-indigo-400 via-purple-500 to-teal-400 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-1/4 left-[10%] w-8 h-8 rounded-full bg-white/70 border-2 border-white flex items-center justify-center"></div>
                                        <div className="absolute top-1/4 left-[18%] w-1/4 h-0 border-t border-dashed border-white/70"></div>
                                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-xl bg-white/90 border-2 border-white flex items-center justify-center shadow-lg"></div>
                                        <div className="absolute top-1/4 right-[18%] w-1/4 h-0 border-t border-dashed border-white/70"></div>
                                        <div className="absolute top-1/4 right-[5%] flex space-x-1">
                                            <div className="w-6 h-6 rounded-full bg-white/70 border-2 border-white flex items-center justify-center text-xs text-gray-800">+</div>
                                            <div className="w-6 h-6 rounded-full bg-white/70 border-2 border-white flex items-center justify-center"></div>
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2/3 h-0 border-b border-dashed border-white/70 rotate-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-left border-2 border-gray-400 rounded-2xl p-4 bg-white">
                            <h3 className="text-xl font-bold text-purple-500 mb-3">Let AI handle the rest</h3>
                            <p className="text-gray-600 mb-4 text-sm">Tasks executed automatically, data updated, and notifications sent.</p>
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-linear-to-br from-purple-400 via-pink-500 to-red-400 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-[10%] left-[5%] w-12 bg-white/70 text-xs text-gray-800 rounded px-1 py-0.5 shadow">AI Analytics</div>
                                        <div className="absolute top-[30%] left-[5%] w-16 bg-white/70 text-xs text-gray-800 rounded px-1 py-0.5 shadow">Text Generated</div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl flex items-center justify-center text-3xl font-bold text-blue-600 shadow-2xl">AI</div>
                                        <div className="absolute top-[10%] right-[5%] w-16 bg-white/70 text-xs text-gray-800 rounded px-1 py-0.5 shadow">Notifications</div>
                                        <div className="absolute top-[30%] right-[5%] w-16 bg-white/70 text-xs text-gray-800 rounded px-1 py-0.5 shadow">Automation</div>
                                        <div className="absolute inset-0 border border-dashed border-white/70 opacity-50 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default TriggerSection;