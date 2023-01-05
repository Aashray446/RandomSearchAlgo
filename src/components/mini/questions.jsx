import React from 'react';

export default function Questions(props) {

    const Questions = props.question

    return (
        <div className="form-control mb-4 ">
            <label className="block font-medium font-sans mb-5">{Questions.question}</label>
            <div className="flex flex-row flex-wrap gap-5 justify-self-stretch">
                {
                    Questions.options.map((option, index) => {
                        return (
                            <div className='flex flex-row' key={index}>
                                <input type="radio" name={props.id + 'r'} value={option.value} className="radio radio-primary inline-block" />
                                <span className='font-light'> {option.option} </span>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <hr className='m-4' />
        </div>
    );
}