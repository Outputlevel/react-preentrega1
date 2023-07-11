import cars from '../../../data.json'

const getCars2 = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(id ? cars.filter((car) => car.id === id) : cars)
    })
}

const getCar = async (id) =>  {
    return new Promise((resolve, reject) => {
        resolve(cars.find((car) => car.id === id))
    })
}

const getCars = async () => {
    const response = await fetch('../../data.json')
    const data = await response.json()
    return data

}

export {getCars, getCar, getCars2} 
