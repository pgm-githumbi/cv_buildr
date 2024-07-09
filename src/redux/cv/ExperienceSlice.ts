import {
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Experience {
  id: number;
  role: string;
  org: string;
  startDate: string;
  endDate?: string;
  text: string;
}

const experienceAdapter = createEntityAdapter<Experience>();
const initialState = experienceAdapter.getInitialState({
  defaultDisplayExperience: {
    role: "Role",
    org: "Organisation",
    startDate: "startDate",
    endDate: "endDate",
    text: "Did this and that. Yada yada yada",
  },
  defaultEditExperience: {
    role: "",
    org: "",
    startDate: "",
    endDate: "",
    text: "",
  },
});

const ExperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    upsertDefaultEditExperience(state, action: PayloadAction<number>) {
      const id = action.payload;
      experienceAdapter.upsertOne(state, {
        ...state.defaultEditExperience,
        id,
      });
    },
    upsertDefaultDisplayExperience(state, action: PayloadAction<number>) {
      const id = action.payload;
      experienceAdapter.upsertOne(state, {
        ...state.defaultDisplayExperience,
        id,
      });
    },
    upsertExperience: experienceAdapter.upsertOne,
    updateExperience: experienceAdapter.updateOne,
    removeExperience: experienceAdapter.removeOne,
  },
});

export default ExperienceSlice.reducer;
export const {
  upsertDefaultDisplayExperience,
  upsertDefaultEditExperience,
  upsertExperience,
  updateExperience,
  removeExperience,
} = ExperienceSlice.actions;

export const {
  selectById: selectExperienceById,
  selectAll: selectAllExperiences,
  selectIds: selectExperienceIds,
  selectTotal: selectTotalExperiences,
  selectEntities: selectExperience,
} = experienceAdapter.getSelectors((state: RootState) => state.experience);

export const selectExperienceByIdOrDefault = createSelector(
  [
    (state: RootState) => state,
    (state: RootState, id: number) => id,
    (state: RootState) => state.experience.defaultEditExperience,
  ],
  (state, id, defaultExp) => {
    return selectExperienceById(state, id) || { ...defaultExp, id };
  }
);

export const selectDefaultDisplayExperience =
  (id = 0) =>
  (state: RootState) => {
    return { ...state.experience.defaultDisplayExperience, id };
  };
