import React, { Component } from 'react';

class TestFrom extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
                <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
                    <div class="flex flex-wrap items-center">
                        <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                            <a href="#">
                                <span class="text-xl pl-2"><i class="em em-grinning"></i></span>
                            </a>
                        </div>

                        <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                            <span class="relative w-full">
                                <input type="search" placeholder="Search"
                                    class="w-full bg-gray-800 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal" />
                                <div class="absolute search-icon" style="top: .5rem; left: .8rem;">
                                    <svg class="fill-current pointer-events-none text-white w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                        </path>
                                    </svg>
                                </div>
                            </span>
                        </div>

                        <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                                <li class="flex-1 md:flex-none md:mr-3">
                                    <a class="inline-block py-2 px-4 text-white no-underline" href="#">Link</a>
                                </li>
                                <li class="flex-1 md:flex-none md:mr-3">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                                        href="#">link</a>
                                </li>
                                <li class="flex-1 md:flex-none md:mr-3">
                                    <div class="relative inline-block">
                                        <button onclick="toggleDD('myDropdown')" class="drop-button text-white focus:outline-none">
                                            <span class="pr-2"><i class="em em-robot_face"></i></span> Hi, Admin <svg
                                                class="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg></button>
                                        <div id="myDropdown"
                                            class="dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                            <input type="text" class="drop-search p-2 text-gray-600" placeholder="Search.."
                                                id="myInput" onkeyup="filterDD('myDropdown','myInput')" />
                                            <a href="#"
                                                class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                                    class="fa fa-user fa-fw"></i> Profile</a>
                                            <a href="#"
                                                class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                                    class="fa fa-cog fa-fw"></i> Settings</a>
                                            <div class="border border-gray-800"></div>
                                            <a href="#"
                                                class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                                    class="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>


                <div class="flex flex-col md:flex-row">

                    <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

                        <div
                            class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                            <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                                <li class="mr-3 flex-1">
                                    <a onClick="admin()"
                                        class="cursor-pointer block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 hover:border-blue-600">
                                        <i class="fas fa-chart-area pr-0 md:pr-3 "></i><span
                                            class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Dashboard</span>
                                    </a>
                                </li>
                                <li class="mr-3 flex-1">
                                    <a href="/add-questions"
                                        class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 border-purple-500">
                                        <i class="fa fa-plus pr-0 md:pr-3 text-purple-600"></i><span
                                            class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add
                                Questions</span>
                                    </a>
                                </li>
                                <li class="mr-3 flex-1">
                                    <a href="#"
                                        class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                        <i class="fa fa-sign-out-alt pr-0 md:pr-3"></i><span
                                            class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Log
                                Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

                        <div class="bg-blue-800 p-2 shadow text-xl text-white">
                            <h3 class="font-bold pl-2">Add Test Questions Here</h3>
                        </div>

                        <div class="flex flex-wrap">

                            <div class="flex flex-row flex-wrap flex-grow mt-2">

                                <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                                    <div class="bg-white border-transparent rounded-lg shadow-lg">
                                        <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                                            <h5 class="font-bold uppercase text-gray-600">English Comprehension Form</h5>
                                        </div>
                                        <div class="p-5">
                                            <form class="w-full max-w-lg">
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="question">
                                                            Question
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Enter you Question here" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option1">
                                                            Option 1
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            type="text" placeholder="Option 1" />
                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option2">
                                                            Option 2
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 2" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-2">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option3">
                                                            Option 3
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 3" />
                                                    </div>

                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option4">
                                                            Option 4
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 4" />
                                                    </div>
                                                </div>
                                                <div class="text-right mt-6">
                                                    <button
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                        <span>Add Question</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                                    <div class="bg-white border-transparent rounded-lg shadow-lg">
                                        <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                                            <h5 class="font-bold uppercase text-gray-600">Logical Ability Form</h5>
                                        </div>
                                        <div class="p-5">
                                            <form class="w-full max-w-lg">
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="question">
                                                            Question
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Enter you Question here" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option1">
                                                            Option 1
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            type="text" placeholder="Option 1" />
                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option2">
                                                            Option 2
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 2" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-2">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option3">
                                                            Option 3
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 3" />
                                                    </div>

                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option4">
                                                            Option 4
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 4" />
                                                    </div>
                                                </div>
                                                <div class="text-right mt-6">
                                                    <button
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                        <span>Add Question</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                                    <div class="bg-white border-transparent rounded-lg shadow-lg">
                                        <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                                            <h5 class="font-bold uppercase text-gray-600">Quantitive Ability Form</h5>
                                        </div>
                                        <div class="p-5">
                                            <form class="w-full max-w-lg">
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="question">
                                                            Question
                                                        </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Enter you Question here" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option1">
                                                            Option 1
                                                        </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            type="text" placeholder="Option 1" />
                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option2">
                                                            Option 2
                                                        </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 2" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-2">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option3">
                                                            Option 3
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 3" />
                                                    </div>

                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="grid-option4">
                                                            Option 4
                                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Option 4" />
                                                    </div>
                                                </div>
                                                <div class="text-right mt-6">
                                                    <button
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                        <span>Add Question</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                                    <div class="bg-white border-transparent rounded-lg shadow-lg">
                                        <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                                            <h5 class="font-bold uppercase text-gray-600">Essay Writing Form</h5>
                                        </div>
                                        <div class="p-5">
                                            <form class="w-full max-w-lg">
                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="question">
                                                            Question
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Enter Essay Topic here" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 mb-24 pb-6">
                                                    <div class="w-full px-3">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="question">
                                                            Word Limit
                                            </label>
                                                        <input
                                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text" placeholder="Enter Word Limit here" />
                                                    </div>
                                                </div>
                                                <div class="text-right mt-6">
                                                    <button
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                        <span>Add Question</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestFrom;