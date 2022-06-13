import React, {FC, useMemo} from 'react';
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

    const arrowDirection = useMemo<string>(() => {
        if (sortField !== value) return "";
        return sortReverse ? "_up" : "_down"
    }, [sortField, sortReverse])

    return (
        <th
            className="FilterFieldTh"
            onClick={onClick}
        >
            {text} <span className={`FilterFieldTh__arrow ${arrowDirection}`}>◀</span>
        </th>
    );
};

export default FilterFieldTh;