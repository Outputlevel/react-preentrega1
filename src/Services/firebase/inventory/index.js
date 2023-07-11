import cars from '../../../data.json'
import {auth} from '../../../firebaseAuth'
import {collection, getDoc, doc, getDocs, getFirestore} from 'firebase/firestore'


const getCars2 = async () => {
    
    const db = getFirestore()
    const docRef = collection(db,  "vehicles")

    const snapshot = await getDocs(docRef)

    if(snapshot) {
       return snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() })) 
    }
    return null
    
}

const getCar = async (id) =>  {
    const db = getFirestore()
    const docRef = doc(db,  "vehicles", id)

    const snapshot = await getDoc(docRef)

    if(snapshot) {
       return { id: snapshot.id, ...snapshot.data() }
    }
    return null
}

const getCars = async () => {
    const response = await fetch('../../data.json')
    const data = await response.json()
    return data

}

export {getCars, getCar, getCars2} 
