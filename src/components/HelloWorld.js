import React, {useState} from 'react';

const HelloWorld = (props) => {

    const [text, setText] = useState('')

    return (
        <div>
            <h1>Hello {props.texto} {text}!</h1>
            <button onClick={() => setText(('(from changed state)'))}>Click me</button>
        </div>
    );
};

export default HelloWorld;