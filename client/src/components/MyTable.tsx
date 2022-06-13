import React, {FC} from 'react';
import "../styles/MyTable.scss";
import {TItem} from "../types";

interface MyTableProps {
    data: TItem[]
}

const MyTable: FC<MyTableProps> = ({data}) => {

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
            {
                data.map(item => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.distance}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default MyTable;