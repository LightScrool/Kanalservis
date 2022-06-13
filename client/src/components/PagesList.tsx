import React, {FC} from 'react';
import "../styles/PagesList.scss";
import PageButton from "./UI/PageButton";
import {getRange} from "../utils";
import {setCurrentPageActionCreator} from "../store/actionCreators/items";
import {useDispatch} from "react-redux";

interface PagesListProps {
    pagesQuantity: number;
}

const PagesList: FC<PagesListProps> = ({pagesQuantity}) => {
    const dispatch = useDispatch();
    const setCurrentPage = (page: number): void => {dispatch(setCurrentPageActionCreator(page))}

    const pagesList = getRange(pagesQuantity + 1, 1);

    return (
        pagesList.length <= 1
        ?
        <></>
        :
        <div className="PagesList">
            {
                pagesList.map(page => (
                    <PageButton
                        key={page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </PageButton>
                ))
            }
        </div>
    );
};

export default PagesList;