import React, {FC} from 'react';
import './style.scss';

interface MySelectProps {
    title?: string,
    data: { [key: string]: string }, // key - значение, value - текст для отображения
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    className?: string
}

const MySelect: FC<MySelectProps> = (
    {
        data,
        value,
        onChange,
        title,
        className,
        ...props
    }
) => {
    return (
        <div className={"MySelect" + (className ? ` ${className}` : '')}>
            {title && <div className="MySelect__title">{title}</div>}
            <select
                className="MySelect__select"
                value={value}
                onChange={onChange}
                {...props}
            >
                {Object.keys(data).map(key => {
                    return (
                        <option key={key} className={"MySelect__item"} value={key}>{data[key]}</option>
                    )
                })}
            </select>
        </div>
    );
};

export default MySelect;