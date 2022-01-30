import { createStore } from 'vuex'
import { auth } from '../firbase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const store = createStore({
    state: {
        user: null,
        authenticated: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed ...', state.user)
        },
        setAuthentiated(state, payload) {
            state.authenticated = payload
        }
    },
    actions: {
        async signup(context, payload) {
            const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
            if (res)
                context.commit('setUser', res)
            else
                throw new Error('Couldnt Complete Signup')
        },
        async login(context, payload) {
            const res = await signInWithEmailAndPassword(auth, payload.email, payload.password)
            if (res)
                context.commit('setUser', res)
            else
                throw new Error('Couldnt Complete Signin')
        },
        async signout(context) {
            context.commit('setUser', null)
        }
    }
})

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthentiated', true)
    store.commit('setUser', user)
    unsub()
});

export default store;