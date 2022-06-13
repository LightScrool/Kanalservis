import React, {FC} from 'react';
import "../styles/MyTable.scss";
import {ItemKeys, TItem} from "../types";
import FilterFieldTh from "./FilterFieldTh";

interface MyTableProps {
    data: TItem[]
}

const MyTable: FC<MyTableProps> = ({data}) => {

    return (
        <table className="MyTable">
            <thead>
            <tr>
                <th>Дата</th>
                <FilterFieldTh text="Название" value={ItemKeys.title}/>
                <FilterFieldTh text="Количество" value={ItemKeys.quantity}/>
                <FilterFieldTh text="Расстояние" value={ItemKeys.distance}/>
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