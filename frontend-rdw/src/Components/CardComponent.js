import React, { Component } from "react";

class CardComponent extends Component {
    render = () => {
        return (<div class="w-full flex p-3 pl-4 items-center hover:bg-gray-300 rounded-lg cursor-pointer">
            <div>
                <div class="font-bold text-lg">Name: Tom</div>
                <div class="text-xs text-gray-500">
                    <span class="mr-2">No: 007886</span>
                    <span class="mr-2">gender: man</span>
                    <span class="mr-2">hobby: skiing</span>
                </div>
            </div>
        </div>);
    }
}

export default CardComponent;