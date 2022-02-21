import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCar } from '../Fetch';

const tableRow = (property, content) => {
    return (
        <tr key={property} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {property}
            </td>
            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                {content}
            </td>
        </tr>
    );
}

const View = () => {
    let { carId } = useParams();

    const [car, setCar] = useState(() => ({
        brand: '',
        model: '',
        body_type: '',
        plate_number: '',
        ascription_date: '',
        fuel: '',
        number_of_cylinders: '',
    }));

    const setCorrectCarProperties = (car) => {
        setCar({
            brand: car.brand,
            model: car.model,
            body_type: car.body_type,
            plate_number: car.plate_number,
            ascription_date: car.ascription_date,
            fuel: car.fuel,
            number_of_cylinders: car.number_of_cylinders,
        });
    }

    useEffect(async () => {
        getCar(carId)
            .then(setCorrectCarProperties);
    }, []);

    return <div className="grid place-items-center">
        <div className="inline-block py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Property
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Content
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(car).map(entry => tableRow(entry[0], entry[1]))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
}

export default View;