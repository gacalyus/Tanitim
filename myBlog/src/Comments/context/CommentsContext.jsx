import React, { createContext, useContext, useReducer } from "react";

export const CommentLayerContext = createContext();

export const CommentLayer = ({ initialState, reducer, children }) => (
  <CommentLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CommentLayerContext.Provider>
);

export const useCommentLayerValue = () => useContext(CommentLayerContext);
