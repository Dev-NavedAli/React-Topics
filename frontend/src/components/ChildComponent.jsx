import React from 'react'

const ChildComponent = ({ tittle, feature, price }) => {
    return (
        <div>
            <h1>{tittle}</h1>
            <h1>Product description</h1>
            <ul>
                {feature.map((feature) => (
                    <li>{feature}</li>

                ))}
            </ul>
            {
                price < 120 ? <p>kam</p> : <p>{price}</p>
            }

        </div>
    )
}

export default ChildComponent
