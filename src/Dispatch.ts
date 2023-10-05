import { useDispatch } from "react-redux";
import { store } from "./Store";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
