import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Instructions extends Component {
    constructor() {
        super();
        this.state = {
            Agree: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        // console.log(this.state.Agree);
        const { name, value } = e.target;
        this.setState({ [name]: value });
        // console.log(this.state.Agree);
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        let buttons = this.state.Agree === 'agree' ?
            (<Link to='/create'><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                <i className="fa fa-file-text"></i> &nbsp;Start New Test </button></Link>) :
            (<button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
                <i className="fa fa-file-text"></i> &nbsp;Start New Test
            </button>)

        return (
            <div className="bg-gray-200 py-8">
                <section className="text-gray-700 body-font overflow-hidden border bg-white lg:mx-48 md:mx-24 sm:mx-16">
                    <div className="container py-8 mx-auto">
                        <div className="-my-8">
                            <div className="pt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Terms and Conditions
                    </button>
                                <hr />
                            </div>
                            <div className="pt-4 px-5 flex flex-wrap md:flex-no-wrap">
                                <div className="md:flex-grow">
                                    <p className="leading-relaxed">The content of this page is confidential. We owns intelectual rights
                                    as defined
                                    by
                                    law. To ensure the confidentiality, you must agree to the following terms and conditions
                                    before taking the
                            test : </p>
                                    <ul className="list-disc mb-10 ml-5">
                                        <li>
                                            <p className="text-gray-600 hover:text-gray-800">You will not record, copy, publish or share
                                            any part of the
                                            test questions or answers in any form ( verbal, written) or by any means (manual,
                                            electronic) for any
                                    purpose.</p>
                                        </li>
                                        <li>
                                            <p className="text-gray-600 hover:text-gray-800">You acknowledge that the test will be taken
                                            solely by you,
                                            and that you will not consult any third person or use any other online or offline
                                    resource</p>
                                        </li>
                                        <li>
                                            <p className="text-gray-600 hover:text-gray-800">You will receive warnings if prohibited
                                            behaviour is
                                            detected. Multiple instances of prohibited behavior will result in automatic
                                            shut-down of the test and
                                    rejection of your application.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mx-4 -py-4" >
                                    <input type="radio" id="male"
                                        name="Agree"
                                        value="agree"
                                        checked={this.state.Agree === 'agree'}
                                        onChange={this.handleChange}
                                    />
                                    <label for="male" className="ml-3">I have read and agree to the terms and conditions</label><br />
                                    <input type="radio" id="female"
                                        name="Agree"
                                        value="diagree"
                                        checked={this.state.Agree === 'disagree'}
                                        onChange={this.handleChange}
                                    />
                                    <label for="female" className="ml-3">I do not agreed to the terms and conditions. I understand that I
                        will not be able to take the test.</label><br />
                                </div>
                                <div className="text-center py-8">
                                    {buttons}

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

export default Instructions;