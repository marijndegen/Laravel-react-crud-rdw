import React, { useEffect, useState } from "react";

import { listCars } from '../Fetch';

import CardComponent from '../Components/CardComponent';

const ListCars = () => {
    const [cars, setCars] = useState(() => [])

    useEffect(() => {
        listCars()
            .then((cars) => setCars(cars));
    }, []);

    return (
        <div className="w-4/6 z-50 relative mx-auto mt-5">
            <div className="bg-white w-full rounded-xl shadow-xl overflow-hidden p-1">
                {cars.map(car => <CardComponent key={"ListCars" + car.id} {...car} />)}
            </div>
        </div>
    );
}

export default ListCars;