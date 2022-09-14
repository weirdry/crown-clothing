import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
	if (!userAuth) return

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
				...additionalInfo,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback)
