import React from 'react';


const hello = (props)=>{

    return (
        <div>
            <h3>Hello Component</h3>
            <p>This is a functional component</p>
            <p>Message: {props.message}</p>
            <p>Generated @ { new Date().toTimeString()}</p>
            <p>Content: {props.children}</p>
        </div>
        
    );
}
export default hello;