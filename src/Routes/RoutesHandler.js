import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Instructions from "../components/instructions/Instructions";
import CreateTestForm from '../components/create-test/CreateTestForm'
import TestDirection from "../components/TestDirection/TestDirection";
import Modules from '../components/modules/Modules'

import { DescAuto, DescEnglish, DescEssay, DescQuant, DescLogical } from '../components/module-description/Desc';

import McqTest from "../components/mcqTest/McqTest";
import EssayTest from "../components/essayTest/EssayTest";
// import AutomataTest from "../components/automataTest/AutomataTest";
// import AutomataTest from "../components/automataTest/AutomataTest";
import AutomataTest from "../components/automataTest/AutomataTest";
function RouterHandle() {
    return (
        <Switch>
            <Route exact path='/' component={Instructions} />
            <Route exact path='/create' component={CreateTestForm} />
            <Route exact path='/direction' component={TestDirection} />

            <Route exact path='/modules' component={Modules} />
            <Route exact path='/module/quant' component={DescQuant} />
            <Route exact path='/module/logical' component={DescLogical} />
            <Route exact path='/module/essay' component={DescEssay} />
            <Route exact path='/module/english' component={DescEnglish} />
            <Route exact path='/module/auto' component={DescAuto} />

            <Route exact path='/mcq' component={McqTest} />
            <Route exact path='/auto' component={AutomataTest} />
            <Route exact path='/essay' component={EssayTest} />
            <Route path='**' component={Instructions} />
            {/* <Route exact path='' component=''/> */}
        </Switch>
    )
}

export default RouterHandle;