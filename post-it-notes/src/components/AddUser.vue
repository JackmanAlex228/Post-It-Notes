<template>
	<div>
		<button @click="addUser">Add Alex</button> <!-- IT WORKS! -->
		<!--TODO: Add a button to retrieve user information (getUser)-->
	</div>
</template>

<script>
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore'
// TODO: add getDocs to firebase/firestore imports

export default {
	name: 'AddUser',
	// TODO: add component data for user
	methods: {
		async addUser() {
			console.log("Adding user with username 'Alex'");
			try {
				const docRef = await addDoc(collection(db, 'users'), {
					username: 'Alex'
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
		// TODO: create method for getting the user data
			// Pseudocode:
				// const querySnapshot = await getDocs(collection(db, 'users'));
				// querySnapshot.forEach((doc) => {
				// 	console.log(`${doc.id} => ${doc.data()}`);
	}
}
</script>