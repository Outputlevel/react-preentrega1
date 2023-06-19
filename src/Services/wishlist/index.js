import wishlist from '../../wishlist.json'

const getWishlist = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(false ? wishlist.filter((liked) => liked.id === id) : wishlist)
    })
}

const onClickWishlist = () => {
    alert("Car Added to Whishlist")
}

export { getWishlist, onClickWishlist }