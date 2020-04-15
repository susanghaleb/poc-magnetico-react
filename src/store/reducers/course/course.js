import { ADD_COURSE } from "../../contants";

const initialState = {
  courses: {
    loading: false,
    success: false,
    fail: false,
    data: [],
  },
};

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.courses],
      };
    default: {
      return state;
    }
  }
}

export default courseReducer;
