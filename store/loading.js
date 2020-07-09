export const initialState = () => ({
  isLoading: false,
});

export const mutations = {
  start(state) {
    state.isLoading = true;
  },
  stop(state) {
    state.isLoading = false;
  },
};
