import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://images-api.nasa.gov/";

const state = {
  data: [],
  requesting: false,
  error: false,
};

const actions = {
  loadPhotos({ commit }, payload) {
    commit("setPhotosRequesting");
    Vue.axios
      .get(`search?q=${payload}&page=1`)
      .then((result) => {
        commit("setPhotos", result.data.collection.items);
      })
      .catch((error) => {
        commit("setPhotosError");
        throw new Error(`API ${error}`);
      });
  },
};

const mutations = {
  setPhotos(state, photos) {
    state.data = photos;
    state.error = false;
    state.requesting = false;
  },
  setPhotosError(state) {
    state.error = true;
    state.requesting = false;
  },
  setPhotosRequesting(state) {
    state.error = false;
    state.requesting = true;
  },
};

export default {
  state,
  actions,
  mutations,
  namespaced: true,
};
