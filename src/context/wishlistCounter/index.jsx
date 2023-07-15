import { createContext, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const WishlistCounterContext = createContext()

const WishlistCounterProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])
  
    const getWishlist = async () => {
    
        const db = getFirestore()
        const docRef = collection(db,  "wishlist")
    
        const snapshot = await getDocs(docRef)
    
        if(snapshot) {
           return snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() })) 
        }
        return null
        
    }
    const wishlistArr = getWishlist()

    const addWishlist = (vehicle) => {
        if ( wishlist.find( (v) => v.id === vehicle.id )) {
            return console.log("vehiculo ya esta en lista ")
        }

        setWishlist([ ...wishlist, vehicle]) 
    }



    return (
        <WishlistCounterContext.Provider value={{ wishlistArr, addWishlist }} >
        {children}
        </WishlistCounterContext.Provider>
)}

export {WishlistCounterContext, WishlistCounterProvider}