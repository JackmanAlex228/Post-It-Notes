<template>
  <div>
    <button @click="whois">Who is the current user?</button>
    <button @click="createNote">New note</button>
  </div>
</template>

<script>
import { db} from '@/firebase'
import { addDoc, collection } from '@firebase/firestore'
import { mapGetters } from 'vuex'

export default {
  name: 'CreateNote',
  methods: {
    ...mapGetters(["getUser"]),

    // TODO: figure out how to create data for the notes
    // collection tied only to the current user that's logged in
    // https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=1
    async createNote() {
      console.log("Creating new note")
      try {
        const docRef = await addDoc(collection(db, 'notes'), {
          title: 'Note Title'
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    },
    whois() {
      console.log(this.getUser)
    }
  }
}
</script>