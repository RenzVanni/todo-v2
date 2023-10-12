import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  darkMode: boolean;
}

interface ThemeState {
  theme: Theme;
}

const defaultTheme: Theme = {
  darkMode: true,
};

const initialState: ThemeState = {
  theme: defaultTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    onDark: (state) => {
      if (state.theme.darkMode === false) {
        state.theme.darkMode = true;
      } else {
        state.theme.darkMode = false;
      }
    },
  },
});

export const { onDark } = themeSlice.actions;
export default themeSlice.reducer;
