import { createStore } from 'vuex'
import { auth } from '../firbase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed ...', state.user)
        }
    },
    actions: {
        async signup(context, payload) {
            const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
            if (res)
                context.commit('setUser', res)
            else
                throw new Error('Couldnt Complete Signup')
        }
    }
})
export default store;