import {auth} from '../../../firebaseAuth'
import {collection, getDoc, doc, getDocs, getFirestore} from 'firebase/firestore'

const getCategories2 = async () => {
    
    const db = getFirestore()
    const docRef = collection(db,  "categories")

    const snapshot = await getDocs(docRef)

    if(snapshot) {
       return snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() })) 
    }
    return null
    
}

const getCategory = async (id) =>  {
    const db = getFirestore()
    const docRef = doc(db,  "categories", id)

    const snapshot = await getDoc(docRef)

    if(snapshot) {
       return { id: snapshot.id, ...snapshot.data() }
    }
    return null
}

const getCategories = async () => {
    const response = await fetch('../../categories.json')
    const data = await response.json()
    return data

}

export {getCategories, getCategories2, getCategory} 
