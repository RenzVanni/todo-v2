export interface Todo {
  _id?: string;
  text: string;
  status: string;
}

interface TodoState {
  todo: Todo[];
  isLoading: boolean;
}

export const initialState: TodoState = {
  todo: [],
  isLoading: true,
};
