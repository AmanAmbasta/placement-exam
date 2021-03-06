import React from 'react';

const moduleCompleted = () => {
    return (
        <div>
            <div class="bg-gray-200 pb-8">
                <div class="lg:mx-48 md:mx-24 sm:mx-16 py-4 text-gray-500 text-2xl text-right">
                    <b>
                        <i class="fa fa-clock-o mx-2" aria-hidden="true"></i>
                        {/* {{counter | formatTime}} */}
                    </b>
                </div>
                <section class="text-gray-700 body-font overflow-hidden border bg-white lg:mx-48 md:mx-24 sm:mx-16">
                    <div class="container py-8 mx-auto">
                        <div class="-my-8">
                            <div class="pt-4">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Module Completed
                    </button>
                                <hr />
                            </div>
                            <div class="pt-4 px-5 flex flex-wrap md:flex-no-wrap">
                                <div class="md:flex-grow">
                                    <p class="leading-relaxed">Congratulations ! You have completed the this module. The next test
                                    will begin in 60 seconds. You may wait for the time to expire or you may click "Proceed" to
                            continue immediately to the next screen.</p>
                                </div>
                            </div>
                            <div class="text-center py-8 pt-48">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    <i class="fa fa-play-circle"></i> &nbsp;Proceed
                    </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default moduleCompleted;