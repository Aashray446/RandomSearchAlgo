import { Accordion } from "./mini/accordion";
import Questions from "./mini/questions";
export default function QuizPanel(props) {

    return (

        <div className="p-5 bg-base-100 m-4" >
            <Accordion title="Question">
                <Questions />
                <Questions />
                <Questions />
            </Accordion>
        </div >

    );
}