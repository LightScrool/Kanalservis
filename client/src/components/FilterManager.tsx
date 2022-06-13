import React from 'react';
import "../styles/TableManager.scss";
import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";
import {FILTER_CONDITIONS, FILTER_FIELDS} from "../store/constants";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {
    setFilterConditionActionCreator,
    setFilterFieldActionCreator,
    setFilterValueActionCreator
} from "../store/actionCreators/items";

const FilterManager = () => {
    const filterField = useTypeSelector(state => state.items.filterField);
    const filterCondition = useTypeSelector(state => state.items.filterCondition);
    const filterValue = useTypeSelector(state => state.items.filterValue);
    const dispatch = useDispatch();

    const setFilterField = (_filterField: string): void => {
        // @ts-ignore
        dispatch(setFilterFieldActionCreator(_filterField));
    };
    const setFilterCondition = (_filterCondition: string): void => {
        dispatch(setFilterConditionActionCreator(_filterCondition));
    };
    const setFilterValue = (_filterValue: string): void => {
        dispatch(setFilterValueActionCreator(_filterValue));
    };

    return (
        <div className="TableManager">
            <MySelect
                title="Столбец"
                data={FILTER_FIELDS}
                value={filterField}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFilterField(event.target.value)}
            />
            <MySelect
                title="Условие"
                data={FILTER_CONDITIONS}
                value={filterCondition}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFilterCondition(event.target.value)}
            />
            <MyInput
                title="Значение"
                value={filterValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilterValue(event.target.value)}
            />
        </div>
    );
};

export default FilterManager;