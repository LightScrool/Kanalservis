import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../store/reducers";


export const useTypeSelector: TypedUseSelectorHook<RootStateType> = useSelector;
