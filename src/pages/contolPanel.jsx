import React from "react";
import ControllerPanel from "../components/controllerPanel";
import QuizPanel from "../components/quizPanel";
import SolutionPanel from "../components/solutionPanel";
export default function ControlPanel({ changeGraph }) {

    // props.controllers()

    return (
        <div className="w-1/3 hidden-scroll hidden sm:block">

            <ControllerPanel changeGraph={changeGraph}></ControllerPanel>
            <QuizPanel></QuizPanel>
            <SolutionPanel></SolutionPanel>
        </div>
    );
}