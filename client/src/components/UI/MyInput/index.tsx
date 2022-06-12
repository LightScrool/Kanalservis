import React, {FC, ReactNode} from 'react';
import "./style.scss";

interface MyInputProps{
    title?: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}

const MyInput: FC<MyInputProps> = (
    {
        value,
        onChange,
        title,
        className,
        ...props
    }
) => {

    return (
        <input
            type='text'
            value={value}
            onChange={onChange}
            placeholder={title ?? ""}
            className={"MyInput" + (className ? ` ${className}` : '')}
            {...props}
        />
    );
};

export default MyInput;