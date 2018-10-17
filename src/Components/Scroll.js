import React from 'react'
const Scroll = (props) => {
    return (
        // <div style= {{overflowY:"scroll", borderTop: "1px solid #0CCAC4", height:"500px"}}>
        <div className = "scrollbar">
            {props.children}

        </div>
    )


};
export default Scroll;