import React from 'react';
import { Link } from 'react-router-dom';
const ModuleDesc = (props) => {
    return (
        <div>
            <div className="bg-gray-200">
                <div className="lg:mx-48 md:mx-24 sm:mx-16 py-4 text-gray-500 text-2xl">
                    <div className="flex items-center bg-gray-200">
                        <div className="flex-1"><b>{props.name}</b></div>
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
                        <thead className="border">
                            <tr className="bg-gray-200">
                                <th className="w-1/2 px-4 py-2 border">Module Names</th>
                                <th className="w-1/4 px-4 py-2 border">No of Questions</th>
                                <th className="w-1/4 px-4 py-2 border">Time (in Minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">{props.name}</td>
                                <td className="border px-4 py-2">{props.questions}</td>
                                <td className="border px-4 py-2">{props.time} Minutes</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="py-4 mx-8 mb-16">This test will assess your English Vocabulary, Grammar and Comprehension skills.</p>
                </section>
                <div className="text-center py-6">
                    <Link to={props.to}>    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
                        <i className="fa fa-play-circle" aria-hidden="true"></i> Next
        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ModuleDesc;