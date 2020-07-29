import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Timer from '../timer/Clock'
// import { questions } from "./Question";

import { getAptiQues } from "../../actions/getQuesAction";

class McqTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            resp: [],
            RedirectTO: false,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.props.getAptiQues();
        console.log(this.props.questions)
    }

    nextQuestion() {
        let { questionNumber, RedirectTO } = this.state;
        if (this.props.questions.length - 1 === questionNumber) {
            this.setState({ RedirectTO: true });
        }
        else {
            this.setState({ questionNumber: questionNumber + 1 });
            // console.log("new State");
            // console.log(this.state.resp);

        }
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            resp: [...this.state.resp, e.target.value]
        })
    }
    render() {
        const options = <ul onChange={this.handleChange}>
            {this.props.questions[this.state.questionNumber].options.map(option => {
                return (<li key={option}>
                    <input type="radio" id={option} name={this.state.questionNumber} value={option} />
                    <label htmlFor={option} className="ml-3"> {option} </label>
                </li>)
            })}
        </ul>
        if (this.state.RedirectTO)
            return <Redirect to='/essay' />
        return (
            <div>
                <div className="bg-gray-200">
                    <div className="lg:mx-48 md:mx-24 sm:mx-16 py-4 text-gray-500 text-2xl">
                        <div className="flex items-center bg-gray-200">
                            <div className="flex"><b>APTITUDE| <span className="text-lg">Question  {this.state.questionNumber + 1} out of 10</span></b>
                            </div>
                            <div className="flex-1 text-right">
                                <b> <i className="fa fa-clock-o mx-2" aria-hidden="true"></i>
                                    <Timer redirectTo='/essay' min='30' />
                                </b>
                            </div>
                        </div>
                    </div>
                    <section className="text-gray-700 body-font overflow-hidden border lg:mx-48 md:mx-24 sm:mx-16 bg-white">
                        <div className="flex items-center px-2 py-4">
                            <div className="flex px-2">
                                <img src="assets/images/i-icon.png" height="30px" width="30px" />
                            </div>
                            <div className="flex text-blue-600">SELECT FROM BELOW</div>
                        </div>
                        <div className="container py-8 mx-auto">
                            <div className="-my-8">
                                <div className="pt-3">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Question </button>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <p className="py-4 mx-8">
                            {this.props.questions[this.state.questionNumber].question}
                        </p>
                        <div className="mx-8 py-2 mb-16">
                            {options}
                        </div>
                    </section>
                    <div className="text-center py-4">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded" onClick={this.nextQuestion}>
                            <i className="fa fa-check-circle" aria-hidden="true"></i> Confirm Answer
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                            <i className="fa fa-play-circle" aria-hidden="true"></i> Submit Answer
                        </button>
                    </div>
                </div >
            </div >
        );
    }
}
const mapStataToProps = state => ({
    questions: state.getQues.questions
})
export default connect(mapStataToProps, { getAptiQues })(McqTest);