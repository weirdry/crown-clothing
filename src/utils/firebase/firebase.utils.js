import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyB1ZRRmhMv0RQhdqYFmkTIklQwLeKrcYZE',
	authDomain: 'crown-clothing-9281d.firebaseapp.com',
	projectId: 'crown-clothing-9281d',
	storageBucket: 'crown-clothing-9281d.appspot.com',
	messagingSenderId: '859239697648',
	appId: '1:859239697648:web:fd1a109b11ca15abdb0635',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}
