const user = {
  state: {
    id: null,
    name: null,
  },
  mutations: {
    SET_USER: (state, newUser) => {
      state.id = newUser.id;
      state.name = newUser.name;
    },
    RESET_USER: (state) => {
      state.id = null;
      state.name = null;
    },
  },
  actions: {
    LOGIN({ commit }, newUser) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_USER', newUser);
          resolve();
        }, 1000);
      });
    },
    GET_CURRENT_USER_INFO({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_USER', {
            id: 'testid',
            name: 'testname',
          });
          resolve();
        })
      });
    },
  },
};

export default user;
