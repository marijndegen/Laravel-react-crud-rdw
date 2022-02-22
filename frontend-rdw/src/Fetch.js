const listCars = async () => {
    return await fetch('http://127.0.0.1:8000/api/v1/cars')
        .then(response => response.json());
}

const getCar = async (carId) => {
    return await fetch(`http://127.0.0.1:8000/api/v1/cars/${carId}`)
        .then(response => response.json());
}

const newCar = async (car) => {
    return await fetch('http://127.0.0.1:8000/api/v1/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(car)
    }).then(response => response.json())
        .catch(err => alert(err));
}

const editCar = async (carId, car) => {
    return await fetch(`http://127.0.0.1:8000/api/v1/cars/${carId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(car)
    }).then(response => response.json())
        .catch(err => alert(err));
}

const deleteCar = async (carId) => {
    return await fetch(`http://127.0.0.1:8000/api/v1/cars/${carId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => response.json());
}

export { listCars, getCar, newCar, editCar, deleteCar };