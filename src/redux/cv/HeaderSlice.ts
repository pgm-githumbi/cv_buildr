import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface headerState {
  defaultName: string;
  name: string;
  defaultJobTitle: string;
  jobTitle: string;
  defaultEmail: string;
  email: string;
  links: { [linkName: string]: string };
  phone: string;
  defaultPhone: string;
}

const initialState: headerState = {
  name: "",
  jobTitle: "",
  email: "",
  phone: "",
  links: { github: "", linkedIn: "" },
  defaultName: "Perez Githumbi",
  defaultEmail: "email@example.com",
  defaultJobTitle: "Fullstack Engineer",
  defaultPhone: "0712345678",
};

const HeaderSlice = createSlice({
  name: "cvheader",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setJobTitle(state, action: PayloadAction<string>) {
      state.jobTitle = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    addLinks(state, action: PayloadAction<{ [str: string]: string }>) {
      Object.entries(action.payload).forEach(
        ([key, value]) => (state.links[key] = value)
      );
    },
  },
});

export default HeaderSlice.reducer;
export const { setEmail, setJobTitle, setName, setPhone } = HeaderSlice.actions;

export const selectName = (state: RootState) => {
  const { name, defaultName } = state.cvHeader;
  return name === "" ? defaultName : name;
};

export const selectJobTitle = (state: RootState) => {
  const { jobTitle, defaultJobTitle } = state.cvHeader;
  return jobTitle === "" ? defaultJobTitle : jobTitle;
};

export const selectEnteredJobTitle = (state: RootState) => {
  return state.cvHeader.jobTitle;
};

export const selectEmail = (state: RootState) => {
  const { email, defaultEmail } = state.cvHeader;
  return email === "" ? defaultEmail : email;
};

export const selectEnteredEmail = (state: RootState) => {
  return state.cvHeader.email;
};

export const selectPhone = (state: RootState) => {
  const { phone, defaultPhone } = state.cvHeader;
  return phone === "" ? defaultPhone : phone;
};

export const selectEnteredPhone = (state: RootState) => {
  return state.cvHeader.phone;
};

export const selectLinks = (state: RootState) => {
  return state.cvHeader.links;
};

export const selectEnteredName = (state: RootState) => {
  return state.cvHeader.name;
};
