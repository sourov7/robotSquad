import React from 'react'
const Searchbox = ({ searchfield, SearchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green black "
                type="seacrh" placeholder="Search For Robot"
                onChange= {SearchChange} />
        </div>
    )
}
export default Searchbox;