import React, {FC, ReactNode} from 'react';
import './style.scss';

interface PageButtonProps {
    children: ReactNode,
    className?: string,
    onClickCallback?: () => void
}

const PageButton: FC<PageButtonProps> = (
    {
        children,
        onClickCallback,
        className,
        ...props
    }) => {

    return (
        <button
            className={"PageButton" + (className ? ` ${className}` : '')}
            {...props}
        >
            {children}
        </button>
    );
};

export default PageButton;