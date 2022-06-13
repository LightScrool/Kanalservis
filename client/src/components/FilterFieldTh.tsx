import React, {FC} from 'react';
import "../styles/FilterFieldTh.scss";
import {ItemKeys} from "../types";
import {useDispatch} from "react-redux";
import {setSortFieldActionCreator, setSortReverseActionCreator} from "../store/actionCreators/items";
import {useTypeSelector} from "../hooks/useTypeSelector";

interface FilterFieldThProps {
    text: string,
    value: ItemKeys
}

const FilterFieldTh: FC<FilterFieldThProps> = ({text, value}) => {
    const sortField = useTypeSelector(state => state.items.sortField);
    const sortReverse = useTypeSelector(state => state.items.sortReverse);
    const dispatch = useDispatch();

    const onClick = (): void => {
        if (sortField === value) {
            dispatch(setSortReverseActionCreator(!sortReverse));
        } else {
            dispatch(setSortFieldActionCreator(value));
            dispatch(setSortReverseActionCreator(false));
        }
    }

    // TODO: indication of chosen sort field
    return (
        <th className="FilterFieldTh" onClick={onClick}>{text}</th>
    );
};

export default FilterFieldTh;