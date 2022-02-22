import React, { useState } from "react";

import { Link } from "react-router-dom";

import { deleteCar } from '../Fetch';

const CardComponent = (props) => {
    const [renderComponent, setRenderComponent] = useState(true);

    return renderComponent ? (
        <div className="grid grid-cols-8">
            <div className="col-span-5 p-3 pl-4 hover:bg-gray-300 rounded-lg inline">
                <div className="font-bold text-lg ">Plate: {props.plate_number}</div>
                <div className="text-xs text-gray-500">
                    <span className="mr-2">Brand: {props.brand}</span>
                    <span className="mr-2">Model: {props.model}</span>
                    <span className="mr-2">Body type: {props.body_type}</span>
                </div>
            </div>
            <Link to={`/view/${props.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3">View</Link>
            <Link to={`/edit/${props.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">Edit</Link>
            <button onClick={async () => { if (window.confirm(`Are you sure you want to delete the car with the id ${props.id}?`)) { await deleteCar(props.id); setRenderComponent(false); } }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-3">Delete</button>
        </div >
    ) : <div></div>;
}

export default CardComponent;