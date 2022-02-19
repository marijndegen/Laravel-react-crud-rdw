import React, { Component } from "react";

import CardComponent from '../Components/CardComponent';

class ListCars extends Component {
    render = () => {
        return (
            <div class="w-4/6 z-50 relative mx-auto mt-36">
                <div class="bg-white w-full rounded-xl shadow-xl overflow-hidden p-1">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </div>
        );
    }
}

export default ListCars;