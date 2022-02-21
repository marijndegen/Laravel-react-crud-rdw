const listCars = async () => {
    return await fetch('http://127.0.0.1:8000/api/v1/cars')
        .then(response => response.json());
}

const getCar = async (carId) => {
    return await fetch(`http://127.0.0.1:8000/api/v1/cars/${carId}`)
        .then(response => response.json());
}

export { listCars, getCar };