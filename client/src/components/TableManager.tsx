import React, {useState} from 'react';
import "../styles/TableManager.scss";
import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";
import {FILTER_CONDITIONS, FILTER_FIELDS} from "../store/constants";

const TableManager = () => {

    const [filterField, setFilterField] = useState<string>(Object.keys(FILTER_FIELDS)[0]);
    const [filterCondition, setFilterCondition] = useState<string>(Object.keys(FILTER_CONDITIONS)[0]);
    const [filterValue, setFilterValue] = useState<string>("");

    return (
        <div className="TableManager">
            <MySelect
                title="Поле"
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
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setFilterValue(event.target.value)}
            />
        </div>
    );
};

export default TableManager;