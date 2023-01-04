import React from "react";
import ControllerPanel from "../components/controllerPanel";
import QuizPanel from "../components/quizPanel";
import SolutionPanel from "../components/solutionPanel";
export default function ControlPanel() {

    return (
        <div className="w-1/3 hidden-scroll">

            <ControllerPanel></ControllerPanel>
            <QuizPanel></QuizPanel>
            <SolutionPanel></SolutionPanel>
        </div>
    );
}