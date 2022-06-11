import React, {FC} from 'react';
import "../styles/MyTable.scss";

const MyTable: FC = () => {
    return (
        <table className="MyTable">
            <tr>
                <th>Дата</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Расстояние</th>
            </tr>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a)=>(
                <tr key={a}>
                    <td>11.11.2011</td>
                    <td>Название вот тут</td>
                    <td>123</td>
                    <td>43214</td>
                </tr>
            ))}
        </table>
    );
};

export default MyTable;