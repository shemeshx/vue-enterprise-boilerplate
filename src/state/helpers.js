import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const playgroundComputed = {
  ...mapGetters('playground', ['getData']),
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])
export const playgroundMethods = mapActions('playground', ['loadData'])
