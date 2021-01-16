const initialState = { favFilmID: [] }

function favFilm(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SAVE_FILM':
      nextState = {
        ...state,
        favFilmID: [...state.favFilmID, action.value]
      };
      return nextState || state
    case 'UNSAVE_FILM':
      nextState = {
        ...state,
        favFilmID: state.favFilmID.filter(id => id !== action.value)
      };
      return nextState || state
    default:
      return state
  };
}

export default favFilm;