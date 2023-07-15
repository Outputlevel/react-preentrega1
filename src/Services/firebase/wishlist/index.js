import {auth} from '../../../firebaseAuth'
import {collection, setDoc, getDoc, doc, getDocs, getFirestore, addDoc} from 'firebase/firestore'
import { Firestore } from 'firebase/firestore'

const getWishlist = async () => {
    
    const db = getFirestore()
    const docRef = collection(db,  "wishlist")

    const snapshot = await getDocs(docRef)

    if(snapshot) {
       return snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() })) 
    }
    return null
    
}



const onClickWishlist = async() => {
    const db = getFirestore()
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "wishlist"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      
  });
  console.log("Document written with ID: ", docRef.id);
}
   

const addWishlist = () => {
    
}

export { getWishlist, onClickWishlist }