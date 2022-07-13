<template>
  <div>
    <button @click="createNote">New note</button>
  </div>
</template>

<script>
import { db} from '@/firebase'
import { addDoc, collection } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'CreateNote',
  methods: {
    ...mapGetters(["getUser"]),

    // TODO: figure out how to create data for the notes
    // collection tied only to the current user that's logged in
    // https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=1
    async createNote() {
      const auth = getAuth()
      const user = auth.currentUser
      try {
        await addDoc(collection(db, 'notes'), {
          title: 'New note',
          createdBy: user.uid
        })
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }
  }
}
</script>