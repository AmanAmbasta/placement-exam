import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/xml/xml'

class AutomataTest extends Component {
    render() {
        // const editor = 
        return (
            <div>
                <div className="bg-gray-200">
                    <div className="py-4 text-gray-500 lg:mx-8 md:mx-4 sm:mx-2">
                        <div className="flex items-center text-2xl bg-gray-200">
                            <div className="flex"><b>Automata | <span className="text-lg">Question 1 out of 2</span></b></div>
                            <div className="flex-1 text-right">
                                <b>
                                    <i className="fa fa-clock-o mx-2" aria-hidden="true"></i>
                                    {/* {{counter | formatTime}} */}
                                </b>
                            </div>
                        </div>
                        <div className="flex bg-white text-black my-4 ">
                            <div className="w-2/5 border">
                                <div className="flex-inline my-2">
                                    <button className="bg-red-500 text-white hover:bg-red-600 font-bold py-2 px-4 mx-2 rounded">
                                        Problems
                    </button>

                                    <button className="hover:bg-red-600 hover:text-white font-bold py-2 px-4 mx-2 rounded">
                                        Test Cases
                    </button>

                                    <button className="hover:bg-red-600 hover:text-white font-bold py-2 px-4 mx-2 rounded">
                                        Output
                    </button>
                                </div>
                                <hr />
                                <div className="flex px-2 items-center py-4">
                                    <div className="flex top-0 px-2"><img src="assets/images/i-icon.png" height="50px" width="50px" /></div>
                                    <div className="flex text-blue-600 text-sm">
                                        The current selected Programming Language is C. We emphasize the submisiion of fully working
                                        code over practically correct but efficient code. Once submitted, you cannot review the problem
                                        again. The version of GCC being used is 5.2.0.
                    </div>
                                </div>
                                <div className="flex px-4 question" >
                                    {/* Question goes here */}
                                </div>
                            </div>
                            <div className="w-3/5 border">
                                <div className="flex-inline my-2 mx-2">
                                    <div className="inline-block relative w-24 ">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>C</option>
                                            <option>C++</option>
                                            <option>Java</option>
                                        </select>
                                        <div
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 mx-2 rounded">
                                        Save
                    </button>
                                    <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 mx-2 rounded">
                                        Compile & Run
                    </button>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-4 mx-2 rounded">
                                        Submit This Test
                    </button>
                                    <div className="inline-block relative w-36 mx-2">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Navigate to Question</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <div
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="editior">
                                    <CodeMirror
                                        value='<h1>I ♥ react-codemirror2</h1>'
                                        options={{
                                            mode: 'xml',
                                            theme: 'material',
                                            lineNumbers: true
                                        }}
                                        onChange={(editor, data, value) => {
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutomataTest;