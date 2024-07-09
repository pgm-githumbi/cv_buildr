import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type summaryState = {
  summaryText: string;
  defaultSummaryText: string;
};

const initialState: summaryState = {
  summaryText: "",
  defaultSummaryText:
    "Fullstack engineer with a proven understanding of state management with redux, routing with react-router, data fetching with react-query and redux. Also possess proven understanding of laravel db migration, authorisation and deployment. Had deployed projects to railway.app and github pages. Uses github actions to automate development workflows. Understands tailwind core concepts like flex and grid layouts.",
};

const SummarySlice = createSlice({
  name: "cvSummary",
  initialState,
  reducers: {
    setSummaryText(state, action: PayloadAction<string>) {
      state.summaryText = action.payload;
    },
  },
});

export default SummarySlice.reducer;
export const { setSummaryText } = SummarySlice.actions;

export const selectSummaryText = (state: RootState) =>
  state.summary.summaryText.length === 0
    ? state.summary.defaultSummaryText
    : state.summary.summaryText;

export const selectDefaultSummaryText = (state: RootState) =>
  state.summary.defaultSummaryText;

export const selectEnteredSummaryText = createSelector(
  selectSummaryText,
  selectDefaultSummaryText,
  (summary, defaultSummaryText) => {
    return summary === defaultSummaryText ? "" : summary;
  }
);
