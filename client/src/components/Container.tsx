import React, {FC, ReactNode} from 'react';
import "../styles/Container.scss";

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container: FC<ContainerProps> = (
    {
        className,
        children,
        ...props
    }) => {
    return (
        <div
            className={"Container" + (className ? ` ${className}` : '')}
            {...props}
        >
            {children ?? <></>}
        </div>
    );
};

export default Container;