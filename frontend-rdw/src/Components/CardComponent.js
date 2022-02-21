import React, { Component } from "react";

import { Link } from "react-router-dom";

class CardComponent extends Component {
    render = () => {
        return (
            <Link to={`/view/${this.props.id}`} >
                <div className="w-full p-3 pl-4 hover:bg-gray-300 rounded-lg cursor-pointer">
                    <div className="font-bold text-lg ">Plate: {this.props.plate_number}</div>
                    <div className="text-xs text-gray-500">
                        <span className="mr-2">Brand: {this.props.brand}</span>
                        <span className="mr-2">Model: {this.props.model}</span>
                        <span className="mr-2">Body type: {this.props.body_type}</span>
                    </div>
                </div >
            </Link >
        );
    }
}

export default CardComponent;