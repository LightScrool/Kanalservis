import React from 'react';
import "../styles/TableManager.scss";
import Index from "./UI/MySelect";
import MyInput from "./UI/MyInput";

const TableManager = () => {
    return (
        <div className="TableManager">
            <Index data={{"fdas": "fdsa", "fadshfd": "fdsafdsag"}} title="Поле"/>
            <Index data={{"fdas": "fdsa", "fadshfd": "fdsafdsag"}} title="Параметр"/>
            <MyInput/>
        </div>
    );
};

export default TableManager;