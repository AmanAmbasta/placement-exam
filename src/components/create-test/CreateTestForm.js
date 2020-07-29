import React, { Component } from 'react';
import { newUser } from '../../model/user'
import { Redirect } from 'react-router-dom';
class CreateTestForm extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            email: "",
            mobile: "",
            securityQuestion: "",
            answer: "",
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, answer, email, mobile, securityQuestion } = this.state
        const data = { fullName, answer, email, mobile, securityQuestion };
        console.log(data);
        this.setState({ redirect: true });
        newUser(data)
            .then(test => {
                localStorage.setItem("test_id", test.test_id);
            })
    }
    handleClear(e) {
        e.preventDefault();
        this.setState({
            fullName: "",
            email: "",
            mobile: "",
            securityQuestion: "",
            answer: "",
        })
    }
    render() {
        if (this.state.redirect)
            return <Redirect to="/direction" />
        return (
            <div>
                <div className="bg-gray-200 ">
                    <div className="py-4 text-gray-500 text-2xl lg:mx-48 md:mx-24 sm:mx-16">
                        <b>Create New Test</b>
                    </div>
                    <form className="w-auto mx-auto" onSubmit={this.handleSubmit}>
                        <section className="text-gray-700 body-font overflow-hidden border bg-white lg:mx-48 md:mx-24 sm:mx-16">
                            <div className="text-red-500 pt-2 mx-4">* indicates mandatory field</div>

                            <div className="container py-8 mx-auto">
                                <div className="-my-8">
                                    <div className="pt-4">
                                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled>
                                            Personal Information</button>
                                        <hr />
                                    </div>

                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/2">
                                            <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                        </div>
                                        <div className="md:w-1/2">
                                            <input
                                                className="appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                                name="fullName"
                                                type="text"
                                                placeholder="Jane Doe"
                                                value={this.state.fullName}
                                                onChange={this.handleChange}
                                            />
                                            {/* <div *ngIf="submitted && testForm.controls.name.errors" className="text-sm">
                                <div className="text-red-500" *ngIf="testForm.controls.name.errors.required">
                                    Full Name is required
                                </div> */}
                                            {/* <div className="text-red-500" *ngIf="testForm.controls.name.errors.pattern">
                                    Name must start with Capital Letter
                                </div> */}
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/2">
                                        <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
                                            Email Id <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2">
                                        <input
                                            className="appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            name="email"
                                            type="email"
                                            placeholder="abc@domain.com"
                                            value={this.state.email}
                                            onChange={this.handleChange} />

                                        {/* <div *ngIf="submitted && testForm.controls.email.errors" className="text-sm">
                                <div className="text-red-500" *ngIf="testForm.controls.email.errors.required">
                                    Email Id is required
                                </div>
                                <div className="text-red-500" *ngIf="testForm.controls.email.errors.email">
                                    Invalid Email Address
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/2">
                                    <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-1/2">
                                    <input
                                        className="appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                        name="mobile"
                                        type='text'
                                        placeholder="9439XXXXXX"
                                        value={this.state.mobile}
                                        onChange={this.handleChange}
                                    />

                                    {/* <div *ngIf="submitted && testForm.controls.mobile.errors" className="text-sm">
                                <div className="text-red-500" *ngIf="testForm.controls.mobile.errors.required">
                                    Mobile Number is required
                                </div>
                                <div className="text-red-500" *ngIf="testForm.controls.mobile.errors.pattern">
                                    Invalid Mobile Number
                                </div>
                            </div> */}
                                </div>
                            </div>

                            <div className="pt-4">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled>
                                    Security Question </button>
                                <hr />
                            </div>

                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/2">
                                    <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                        Select a Security Question <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            name="securityQuestion"
                                            value={this.state.securityQuestion}
                                            onChange={this.handleChange}
                                        >

                                            <option defaultValue>Select</option>
                                            <option value="0">What is you zodiac name?</option>
                                            <option value="1">What is you last name?</option>
                                            <option value="2">What is you pet name?</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                        {/* <div *ngIf="submitted && testForm.controls.securityQuestion.errors" className="text-sm">
                                <div className="text-red-500" *ngIf="testForm.controls.securityQuestion.errors.required">
                                    Please choose a Security Question
                                </div>
                            </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/2">
                                    <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
                                        Answer <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-1/2">
                                    <input
                                        className="appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                        name="answer"
                                        type="text"
                                        placeholder="Your Answer"
                                        value={this.state.answer}
                                        onChange={this.handleChange} />

                                    {/* <div *ngIf="submitted && testForm.controls.answer.errors" className="text-sm">
                                <div className="text-red-500" *ngIf="testForm.controls.answer.errors.required">
                                    Security Answer is required
                                </div>
                            </div> */}
                                </div>
                            </div>

                        </section>
                        <div className="text-center py-4">
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
                                <i className="fa fa-check-circle" aria-hidden="true"></i> Continue </button>
                            <button type="reset" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
                                onClick={this.handleClear}>
                                <i className="fa fa-times-circle-o" aria-hidden="true"></i> Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateTestForm;