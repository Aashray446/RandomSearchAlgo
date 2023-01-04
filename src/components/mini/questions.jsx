import React from 'react';

export default function Questions() {

    const [checked, setChecked] = React.useState({
        value: ""
    });

    return (
        <div className="form-control mb-4 ">
            <label className="block mb-5">Q1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus ea nostrum necessitatibus similique explicabo molestias sapiente rem neque! Ea.</label>
            <div className="flex flex-row flex-wrap gap-5 justify-self-stretch">
                <div className='flex flex-row'>
                    <input type="radio" name="radio-2" className="radio label-text radio-primary inline-block" />
                    <span> Lorem ipsum dolor sit amet.</span>
                </div>
                <div className='flex flex-row'>
                    <input type="radio" name="radio-2" className="radio label-text radio-primary inline-block" />
                    <span> Lorem, ipsum do</span>
                </div>
                <div className='flex flex-row'>
                    <input type="radio" name="radio-2" className="radio label-text radio-primary inline-block" />
                    <span> sit amet.</span>
                </div>
            </div>
            <hr className='m-4' />
        </div>
    );
}