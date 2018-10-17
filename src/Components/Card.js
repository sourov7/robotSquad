import React from 'react';

const Card = ({ name, email, id}) => {
    // const {name , email, id } = props;
    
    return (
        <div className = " bg-light-green dib br3 pa3 ma2 grow bd-2 shadow-5 cardStyle">
            <img src={` https://robohash.org/${id}`} alt="robot1" style = {{width:"200px", height:"200px"}} />
            <div className ="">
                <h2> {name }</h2>
                <p>{email} </p>
            </div>
        </div>

    );

}
export default Card;