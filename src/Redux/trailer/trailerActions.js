export const SET_TRAILER = SET_TRAILER;

export const trailerUrl = (trailerUrl) => {
  return {
    type: SET_TRAILER,
    payload: trailerUrl,
  };
};
