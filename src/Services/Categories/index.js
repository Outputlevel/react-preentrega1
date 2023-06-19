import categories from '../../categories.json'

const getCategories2 = async () =>  {
    return new Promise((resolve, reject) => {
        resolve(categories)
    })
}

const getCategory = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(categories.find((category) => category.id === id))
    })
}

const getCategories = async () => {
    const response = await fetch('../../categories.json')
    const data = await response.json()
    return data

}

export {getCategories, getCategories2, getCategory} 
