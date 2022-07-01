import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signOut } from "firebase/auth"
import { auth } from "@/firebase"

const actions = {
  signUpAction({ commit }, payload) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user)
      })
      .catch(error => {
        commit("Failed!", error.message)
      })
  },
  signInAction({ commit }, payload) {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(response => {
        commit("setUser", response.user)
      })
      .catch(error => {
        commit("setError", error.message)
      })
  },
  signOutAction({ commit }) {
    signOut(auth)
      .then(() => {
        commit("setUser", null)
      })
      .catch(error => {
        commit("setError", error.message)
      })
  }
}

export default actions