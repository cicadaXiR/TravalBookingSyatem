import React, { useState } from 'react';

function Stack() {
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const pushToStack = () => {
        if (inputValue) {
            setStack([...stack, inputValue]);
            setInputValue('');
        }
    };

    const popFromStack = () => {
        if (stack.length > 0) {
            const updatedStack = [...stack];
            updatedStack.pop();
            setStack(updatedStack);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-sm-center my-5">
                    <h2>Stack Implimentation</h2>
                    <div>
                        <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter an item"/>
                        <button className='btn btn-primary' onClick={pushToStack}>Push</button>
                        <button className='btn btn-danger' onClick={popFromStack}>Pop</button>
                    </div>
                    <div>
                        <br/>
                        <h2>Stack Data</h2>
                        <br/>
                        <ul>
                            {stack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;
