import React, {FC, ReactNode} from 'react';
import './style.scss';

interface PageButtonProps {
    children: ReactNode,
    className?: string,
    onClick?: () => void
}

const PageButton: FC<PageButtonProps> = (
    {
        children,
        onClick,
        className,
        ...props
    }) => {

    // TODO: active and hover styles
    return (
        <button
            className={"PageButton" + (className ? ` ${className}` : '')}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default PageButton;