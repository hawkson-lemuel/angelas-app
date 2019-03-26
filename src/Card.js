import React from 'react'
const Card = (props) => {
    return (
        <div className="card">
            <div className="image"></div>
            <div className="description">
                <h4>{props.course.name}</h4>
                <p>Nii Apa</p>
            </div>
        </div>
    )
}
export default Card
