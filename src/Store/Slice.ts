import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, ITreeFile } from "../interface/Index";

interface Details {
  filename: string;
  filecontent: string;
  setActive: string;
}

const initialState: IInitialState = {
  addFileToArr: [],

  fileRemove: "",

  getDetails: {
    filename: "",
    filecontent: "",
    setActive: "",
  },
};

const TreeFileSlice = createSlice({
  name: "TreeFileSlice",
  initialState,
  reducers: {
    // ! Action Creation
    addFileToTab: (state, action: PayloadAction<ITreeFile[]>) => {
      state.addFileToArr = action.payload;
    },
    getAllDetails: (state, action: PayloadAction<Details>) => {
      state.getDetails.filename = action.payload.filename;
      state.getDetails.filecontent = action.payload.filecontent;
      state.getDetails.setActive = action.payload.setActive;
    },
    removeFileWithClicked: (state, action: PayloadAction<string>) => {
      state.fileRemove = action.payload;
    },
  },
});

export const { addFileToTab, getAllDetails, removeFileWithClicked } = TreeFileSlice.actions;

export default TreeFileSlice.reducer;
