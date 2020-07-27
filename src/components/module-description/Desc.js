import React from 'react';
import ModuleDesc from "./ModuleDesc"
export const DescEnglish = () => {
    return (
        <div>
            <ModuleDesc name="English Comprehension" questions="10" time="10" to="/" />
        </div>
    );
};
export const DescLogical = () => {
    return (
        <div>
            <ModuleDesc name="Logical Ability" questions="9" time="10" to="/mcq" />
        </div>
    );
};
export const DescQuant = () => {
    return (
        <div>
            <ModuleDesc name="Quantitative Ability" questions="10" time="10" to="/" />
        </div>
    );
};
export const DescEssay = () => {
    return (
        <div>
            <ModuleDesc name="Essay Writing" questions="1" time="30" to="/" />
        </div>
    );
};
export const DescAuto = () => {
    return (
        <div>
            <ModuleDesc name="Automata" questions="2" time="60" to="/" />
        </div>
    );
};

