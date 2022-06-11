import React, {FC, ReactNode} from 'react';
import "./style.scss";

interface MyInputProps{
    className?: string
}

const MyInput: FC<MyInputProps> = (
    {
        className,
        ...props
    }
) => {

    return (
        <input
            type='text'
            className={"MyInput" + (className ? ` ${className}` : '')}
            {...props}
            onChange={() => {}}
        />
    );
};

export default MyInput;