import React from 'react';
import { Link } from 'react-router-dom';

const ModuleDesc = () => {
    return (
        <div>
            <div className="bg-gray-200">
                <div className="lg:mx-48 md:mx-24 sm:mx-16 py-4 text-gray-500 text-2xl">
                    <div className="flex items-center bg-gray-200">
                        <div className="flex-1"><b>  Modules</b></div>
                        <div className="flex-1 text-right">
                            <i className="fa fa-clock-o mx-2" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <section className="text-gray-700 body-font overflow-hidden border lg:mx-48 md:mx-24 sm:mx-16 bg-white">

                    <div className="container py-8 mx-auto">
                        <div className="-my-8">
                            <div className="pt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Module Description
                    </button>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <table className="table-fixed my-8 mx-8 border-2">
                        <thead className="bg-gray-200 border">
                            <tr>
                                <th className="w-1/2 px-4 py-2 border">Module Names</th>
                                <th className="w-1/4 px-4 py-2 border">No of Questions</th>
                                <th className="w-1/4 px-4 py-2 border">Time (in Minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">English Comprehension</td>
                                <td className="border px-4 py-2">10</td>
                                <td className="border px-4 py-2">10</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">Logical Ability</td>
                                <td className="border px-4 py-2">9</td>
                                <td className="border px-4 py-2">10</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Quantitative Ability</td>
                                <td className="border px-4 py-2">10</td>
                                <td className="border px-4 py-2">10</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">Essay Writing</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">30</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Automata</td>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2">60</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="py-4 mx-8 mb-16">This test will assess your English Vocabulary, Grammar and Comprehension skills.</p>
                </section>
                <div className="text-center py-6">
                    <Link to="/module/quant">    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
                        <i className="fa fa-play-circle" aria-hidden="true"></i> Next
        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ModuleDesc;