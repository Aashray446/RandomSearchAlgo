import React from "react";
import ControllerPanel from "../components/controllerPanel";
import QuizPanel from "../components/quizPanel";
import SolutionPanel from "../components/solutionPanel";
export default function ControlPanel({ changeGraph, nodesAndLinks, changeGraphType }) {

    // props.controllers()

    return (
        <div className="w-1/3 hidden-scroll hidden sm:block">
            <ControllerPanel changeGraphType={changeGraphType} changeGraph={changeGraph} nodesAndLinks={nodesAndLinks}></ControllerPanel>
            <QuizPanel></QuizPanel>
            <SolutionPanel></SolutionPanel>
        </div>
    );
}