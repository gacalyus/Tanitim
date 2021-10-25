export const initialState = {
  comments: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };

    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: [...state.comments].filter(
          (comment) => comment.id !== action.payload
        ),
      };

   

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
