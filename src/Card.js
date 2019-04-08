import React from 'react'
const Card = (props) => {
    return (
        <div className="card">
            <div className="image"></div>
            <div className="description">
                <h4>{props.course.title}</h4>
                <p>{props.course.body}</p>
            </div>
        </div>
    )
}
export default Card
