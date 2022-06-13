import React, {FC, ReactNode, useMemo} from 'react';
import '../styles/PageButton.scss';
import {useTypeSelector} from "../hooks/useTypeSelector";

interface PageButtonProps {
    page: number;
    onClick?: () => void
}

const PageButton: FC<PageButtonProps> = (
    {
        page,
        onClick,
        ...props
    }) => {

    const currentPage = useTypeSelector(state => state.items.currentPage);

    const isActive = useMemo<boolean>(() => currentPage === page, [currentPage, page]);

    return (
        <button
            className={"PageButton" + (isActive ? " _active" : "")}
            onClick={onClick}
            {...props}
        >
            {page}
        </button>
    );
};

export default PageButton;