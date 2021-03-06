import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCar, newCar, editCar } from '../Fetch';

const emptyCar = {
    brand: '',
    model: '',
    body_type: '',
    plate_number: '',
    ascription_date: '',
    fuel: '',
    number_of_cylinders: '',
}

const NewEditCar = () => {
    let { carId } = useParams();

    const [car, setCar] = useState(() => emptyCar);
    const [error, setError] = useState(() => []);

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

    useEffect(() => {
        if (carId) {
            getCar(carId)
                .then(setCorrectCarProperties);
        } else {
            setCar(emptyCar);
        }
    }, [carId]);

    const carHandler = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const carResponse = (response) => {
        if (response.message) {
            setError([response.message, ...Object.values(response.errors)]);
            return;
        }
        setError([]);

        if (!carId)
            setCar(emptyCar);

        alert("Car succesfully saved!");
    };

    const newCarButton = () => {
        newCar(car)
            .then(carResponse);
    }

    const editCarButton = () => {
        editCar(carId, car)
            .then(carResponse);
    }

    const formField = (name, value, readableName) => {
        return (
            <div key={name} className="flex flex-row items-center mb-6">
                <div className="w-2/3">
                    <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={name}>
                        {readableName}
                    </label>
                </div>
                <div className="w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white border-gray-300 focus:border-purple-500"
                        id={name}
                        name={name}
                        type="text"
                        onChange={carHandler}
                        disabled={(carId && name === 'plate_number')}
                        placeholder={(name === 'ascription_date') ? '2000-12-25 14:00' : ''}
                        value={car[name]}
                        defaultValue={value} />
                </div>
            </div>
        );
    }

    const selectField = (name, value, readableName) => {
        const bodyTypes = ['SEDAN', 'COUPE', 'SPORTS CAR', 'STATION WAGON', 'HATCHBACK', 'CONVERTIBLE', 'SPORT-UTILITY VEHICLE (SUV)', 'MINIVAN', 'PICKUP TRUCK'];
        const fuels = ['FULL ELECTRIC', 'HYDROGEN', 'GASOLINE', 'DIESEL', 'LPG'];

        return (
            <div key={name} className="flex flex-row items-center mb-6">
                <div className="w-2/3">
                    <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor={name}>
                        {readableName}
                    </label>
                </div>
                <div className="w-2/3">
                    <select name={name} onChange={carHandler}>
                        {
                            !carId ? <option>Select {readableName}</option> : ''
                        }
                        {
                            name === 'body_type' ? bodyTypes.map(carType => <option selected={value == carType} value={carType}>{carType}</option>) : ''
                        }
                        {
                            name === 'fuel' ? fuels.map(fuel => <option selected={value == fuel} value={fuel}>{fuel}</option>) : ''
                        }
                    </select>
                </div>
            </div>
        )
    }

    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center">
                <div className="md:w-full ml-20">
                    {
                        error.map(err => <p key={err}>{err}</p>)
                    }
                </div>
            </div>
            {Object.entries(car).map(entry => {
                if (entry[0] === 'body_type' || entry[0] === 'fuel') {
                    return selectField(entry[0], entry[1], entry[0].charAt(0).toUpperCase() + entry[0].replace(/_/g, ' ').slice(1))
                }
                return formField(entry[0], entry[1])
            })
            }
            <div className="md:flex md:items-center">
                <div className="md:w-2/3"></div>
                <div className="md:w-2/3">
                    <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={carId ? editCarButton : newCarButton}
                    >
                        {carId ? "Edit car" : "Create new car"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default NewEditCar;