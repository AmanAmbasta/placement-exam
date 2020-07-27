import React from 'react';
import { Link } from 'react-router-dom';
function TestDirection() {
    const test_id = localStorage.getItem('test_id')
    return (
        <div className="bg-gray-200 py-8">
            <section className="lg:mx-48 md:mx-24 sm:mx-16 text-gray-700 body-font overflow-hidden border bg-white">
                <div className="container py-8 mx-auto">
                    <div className="-my-8">
                        <div className=" pt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Test Directions
                                </button>
                            <hr />
                        </div>
                        <div className="pt-2 px-5 pt-8 mb-24 flex flex-wrap md:flex-no-wrap">
                            <div className="md:flex-grow">
                                <b className="">Please read the instructions carefully.</b>
                                <p className="text-red-400 py-6">Your Exam ID for the test is <b>{test_id}</b>. Copy this id for
                                future use.</p>
                                <ul className="list-disc px-4">
                                    <li>Please follow the directions for each questions and provide and appropriate response.                                    </li>
                                    <li>Do not open any browser/tab other than this testing window. Don not minimize the testing
                                        window. If you attempt either of this actions, the test will automatically log you out.</li>
                                    <li>Use of any electronic device mobile,calculator,etc during the test is strictly
                                    prohibited.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center pt-3">
                <Link to='/modules'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
                    <i className="fa fa-play-circle" aria-hidden="true"></i> Next
                     </button></Link>
            </div>
        </div>
    );

}

export default TestDirection;