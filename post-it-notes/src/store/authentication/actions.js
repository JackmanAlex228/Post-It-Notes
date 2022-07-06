import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signOut } from "firebase/auth"
import { auth } from "@/firebase"

const actions = {

  // TODO: Create addNote action for testing

  /**
   * If the user is logged in, set the user to the user object, otherwise set the user to null.
   */
   authAction({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        commit("setUser", user)
      } else {
        commit("setUser", null)
      }
    })
  },

  /**
   * The signUpAction function takes in a commit and a payload. It then calls the
   * createUserWithEmailAndPassword function from the auth object, passing in the payload's email and
   * password. If the user is successfully created, the setUser mutation is called. If the user is not
   * successfully created, the Failed! mutation is called
   * @param payload - This is the data that is passed to the action.
   */
  signUpAction({ commit }, payload) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user)
      })
      .catch(error => {
        commit("Failed!", error.message)
      })
  },

  /**
   * The signInAction function takes in a commit object and a payload object. It then calls the
   * signInWithEmailAndPassword function from the auth object, passing in the email and password from
   * the payload object. If the sign in is successful, it commits the setUser mutation, passing in the
   * user object from the response. If the sign in is unsuccessful, it commits the setError mutation,
   * passing in the error message from the error object
   * @param payload - This is the data that is passed to the action.
   */
  signInAction({ commit }, payload) {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(response => {
        commit("setUser", response.user)
      })
      .catch(error => {
        commit("setError", error.message)
      })
  },

  /**
   * The signOutAction function is a function that takes a commit function as a parameter. It calls the
   * signOut function, which returns a promise. If the promise is resolved, the commit function is
   * called with the setUser mutation and a null value. If the promise is rejected, the commit function
   * is called with the setError mutation and the error message
   */
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