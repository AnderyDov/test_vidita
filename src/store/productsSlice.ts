import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction
} from '@reduxjs/toolkit'; // хуки для асинхронных редюсеров
import { home, documents, headers } from '../patch'; // пути для запросов

type prod = {
  id: string;
  status: string; // {‘active’, ‘archive’}
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: string;
  currency: string;
};

type prodSate = {
  list: prod[];
  searchResult: [];
  loading: boolean;
  error: string | null;
};

// Создание асинхронного запроса, перевым пераметром принимает номер документа, отправляетзапрос на сервер, есди статус ответа "ок" возвращает пришедшие данные, если не возвращает ошибку
export const fetchProds = createAsyncThunk<
  prod[],
  undefined,
  { rejectValue: string }
>('prods/fetchProds', async function (page, { rejectWithValue }) {
  const response = await fetch(home + documents + '?page=' + page, {
    method: 'GET',
    headers
  });
  if (!response.ok) {
    return rejectWithValue('Server Error!');
  }
  const data = await response.json();
  return data;
});

const initialState: prodSate = {
  list: [], // Массив продуктов
  searchResult: [], // Массив с результатми поиска
  loading: false, // статус выполнения асинхронного запроса
  error: null //  ошибка
};

const docsSlice = createSlice({
  name: 'prods',
  initialState,
  reducers: {
    // Редюсер для сортировки массива пользователей, action возвращает массив параметров для сортировки, сортировка идёт по строке составленной и значений параметров для сортировки
    // sortUsers(state, action) {
    //   state.users = state.users.sort((a, b) => {
    //     let p1 = action.payload.paramsArray[0];
    //     let p2 = action.payload.paramsArray[1];
    //     let p3 = action.payload.paramsArray[2];
    //     let sort = action.payload.paramSortBoolean;
    //     if (a[p1] + a[p2] + a[p3] > b[p1] + b[p2] + b[p3]) {
    //       return sort ? 1 : -1;
    //     }
    //     if (a[p1] + a[p2] + a[p3] <= b[p1] + b[p2] + b[p3]) {
    //       return sort ? -1 : 1;
    //     } else {
    //       return false;
    //     }
    //   });
    // },
    // Редюсер для добавления пользователей в массив для показа Результатов сортировки, условие добавления присутствие в значении параметров значения строки поиска, которое приходит в action
    // showSearchResult(state, action) {
    //   let rex = new RegExp(action.payload.targetString, 'i');
    //   let result = [];
    //   state.users.forEach((el) => {
    //     if (
    //       rex.test(
    //         `${el['cn']} ${el['city']} ${el['company']} ${el['title']} ${el['department']} ${el['email']} ${el['telephone']} ${el['mobile']}`
    //       )
    //     ) {
    //       result.push(el);
    //     }
    //   });
    //   state.searchResult = result;
    // },
    // Редюсер для очистки массива с результатами поиска
    // clearSearchResult(state) {
    //   state.searchResult = [];
    // }
  },

  // Асинхронный редюсер
  extraReducers: (builder) => {
    builder
      .addCase(fetchProds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProds.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});
// export const {} = docsSlice.actions;

export default docsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
