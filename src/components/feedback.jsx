import { useEffect } from "react";
import useFeedback from "../hooks/useFeedback";
import { Accordion } from "./mini/accordion";

export default function FeedbackComponent() {

    const feedbackDetails = useFeedback();

    useEffect(() => {

    }, [feedbackDetails]);

    return (
        <div className="p-5 bg-base-100 m-4" >
            <Accordion title="Feedback">
                {feedbackDetails.map((feedback, index) => {
                    return (
                        <div key={index}>
                            <p>{feedback}</p>
                        </div>
                    )
                }
                )}
            </Accordion>
        </div >
    );
}