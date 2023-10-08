import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Theme {
  status?: boolean;
  darkC1?: string;
  darkC2?: string;
  darkC3?: string;
  darkC4?: string;
  darkC5?: string;
  darkC6?: string;
  darkC7?: string;
}

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: {},
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    onDark: (state, action: PayloadAction<{ dark: boolean }>) => {
      if (action.payload.dark === false) {
        state.theme = {
          status: action.payload.dark,
          darkC1: "hsl(235, 21%, 11%)",
          darkC2: "hsl(235, 24%, 19%)",
          darkC3: "hsl(234, 39%, 85%)",
          darkC4: "hsl(236, 33%, 92%)",
          darkC5: "hsl(234, 11%, 52%)",
          darkC6: "hsl(233, 14%, 35%)",
          darkC7: "hsl(237, 14%, 26%)",
        };
      } else {
        state.theme = {};
      }
    },
  },
});

export const { onDark } = themeSlice.actions;
export default themeSlice.reducer;
