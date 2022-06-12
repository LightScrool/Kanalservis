import React, {FC} from 'react';
import "../styles/MyTable.scss";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {getDate} from "../utils";

const MyTable: FC = () => {
    const items = useTypeSelector(state => state.items.allItems);

    return (
        <table className="MyTable">
            <thead>
            <tr>
                <th>Дата</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Расстояние</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{getDate(item.date)}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.distance}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default MyTable;