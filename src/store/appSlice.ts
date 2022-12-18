import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейс начального состояния
interface InitialState {
  theme: boolean;
}

// Начальное состояние
const initialState: InitialState = {
  theme: false // Тема по умолччанию светлая
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    // Меняет состояние темы
    setTheme(state, action: PayloadAction<boolean>) {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
