import React, {FC} from 'react';
import './style.scss';

interface MySelectProps {
    data: { [key: string]: string },
    title: string,
    value?: string
    className?: string
}

const MySelect: FC<MySelectProps> = (
    {
        data,
        title,
        value,
        className,
        ...props
    }
) => {
    return (
        <select
            className={"MySelect" + (className ? ` ${className}` : '')}
            value={value ?? title}
            {...props}
        >
            <option value={""} disabled>{title}</option>
            {Object.keys(data).map(key => {
                return (
                    <option key={key} className={"MySelect__item"} value={key}>{data[key]}</option>
                )
            })}
        </select>
    );
};

export default MySelect;