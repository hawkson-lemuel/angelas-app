import React from 'react'
const Card = (props) => {
    return (
        <div className="card">
            <div className="image"></div>
			<div className="name-price-wrapper">
				<p>Item Name</p>
				<p>Item Price</p>
			</div>
            <div className="description">
				<p>This is some descriptive text</p>
            </div>
        </div>
    )
}
export default Card
