import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";
// import Timer from 'react-compound-timer'
import Clock from '../timer/Clock'
class EssayTest extends Component {
    constructor() {
        super();
        this.state = {
            essay: "",
            count: 0,
            marks: 30,
            wordLength: 0,
            redirect: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.calMarks = this.calMarks.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({ count: this.state.count + 1 })
    }
    calMarks() {
        this.setState({ redirect: true })
    }

    render() {
        let length = this.state.essay.length;
        let keyStroke = this.state.count;
        let backSpace = (keyStroke - length) / 2;
        // if (this.state.redirect)
        //     return <Redirect to='/' />
        return (
            <div className="bg-gray-200">
                <div className="py-4 text-gray-500 text-2xl lg:mx-48 md:mx-24 sm:mx-8">
                    <div className="flex items-center bg-gray-200">
                        <div className="flex"><b>Essay Writing | <span className="text-lg">Question 1 out of 1</span></b></div>
                        <div className="flex-1 text-right">
                            <b>
                                <i className="fa fa-clock-o mx-2" aria-hidden="true"></i>
                                {/* {{counter | formatTime}} */}<Clock min="1" redirectTo='/auto' />
                            </b>
                        </div>
                    </div>
                </div>
                <section className="text-gray-700 body-font overflow-hidden border bg-white lg:mx-48 md:mx-24 sm:mx-8">
                    <div className="flex items-center px-2 py-4">
                        <div className="flex px-2"><img src="assets/images/i-icon.png" height="30px" width="30px" /></div>
                        <div className="flex text-blue-600">
                            Please discuss on the topic given below. Please compose your response in paragraph form. The length of
                            essay should be between 100 and 300.
                    </div>
                    </div>
                    <div className="container py-8 mx-auto">
                        <div className="-my-8">
                            <div className="pt-3">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Question
                            </button>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <b className="py-4 mx-8">Technology is boon or bane.</b>
                    <div className="mx-8 py-4 mb-8">
                        <textarea
                            className="resize-none border rounded focus:outline-none focus:shadow-outline w-full h-48"
                            name="essay"
                            value={this.state.essay}
                            onChange={this.handleChange}
                        >

                        </textarea>
                        <p>Words Left : {301 - this.state.essay.split(" ").length} out of 300</p>
                        <p>length:{length}</p>
                        <p>keyStoke:{keyStroke}</p>
                        <p>backSpace:{backSpace}</p>
                    </div>

                </section>
                <div className="text-center py-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
                        <i className="fa fa-check-circle" aria-hidden="true"></i> Confirm Answer
                </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                        <i className="fa fa-play-circle" aria-hidden="true"></i> Submit Answer
                </button>
                </div>
            </div >
        );
    }
}

export default EssayTest;