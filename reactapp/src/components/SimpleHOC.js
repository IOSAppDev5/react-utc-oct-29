import React from 'react';

// const simpleHOC = (props) => {
//     return (
//         <div style={{border: "2px solid yellow", minHeight: "100px"}}>
//                 {props.children}
//         </div>
//     )
// }

const simpleHOC = (WrappedComponent) => {

    //returns a component
    return (props) => {
        return (
            <div style={{border: "2px solid yellow", minHeight: "100px"}}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}
export default simpleHOC;