import { createStore } from 'vuex'

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
        signup(context, payload) {
            console.log('Sigup Action ')
                // Asyncronus Code Using Actions
            setTimeout(() => {
                context.commit('setUser', {
                    email: payload.email,
                    password: payload.password
                })
            }, 2000);
        }
    }
})
export default store;