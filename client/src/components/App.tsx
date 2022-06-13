import React, {useEffect, useMemo} from 'react';
import '../styles/App.scss';
import Container from "./Container";
import FilterManager from "./FilterManager";
import PagesList from "./PagesList";
import MyTable from "./MyTable";
import {useDispatch} from "react-redux";
import {fetchItems, setCurrentPageActionCreator} from "../store/actionCreators/items";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {ItemKeys, TItem} from "../types";
import {ITEMS_ON_PAGE} from "../store/constants";
import useFetching from "../hooks/useFetching";
import Loader from "./Loader";
import FetchingError from "./FetchingError";
import {checkDateFormat, dateCompareMore} from "../utils";

function App() {
    const allItems = useTypeSelector(state => state.items.allItems);
    const filterField = useTypeSelector(state => state.items.filterField);
    const filterCondition = useTypeSelector(state => state.items.filterCondition);
    const filterValue = useTypeSelector(state => state.items.filterValue);
    const sortField = useTypeSelector(state => state.items.sortField);
    const sortReverse = useTypeSelector(state => state.items.sortReverse);
    const currentPage = useTypeSelector(state => state.items.currentPage);
    const dispatch = useDispatch();

    const [itemsFetchingWithHook, isLoading, error] = useFetching(() => fetchItems()(dispatch));

    // Загрузка данных с сервера
    useEffect(() => {
        itemsFetchingWithHook();
    }, []);

    // Применения фильтра
    const filteredItems = useMemo<TItem[]>(() => {
        const value = filterValue.toLowerCase()
        let itemsToShow = allItems;

        if (value == "") {
            return itemsToShow;
        }

        switch (filterCondition) {
            case "equal":
                itemsToShow = allItems.filter((item) => String(item[filterField]).toLowerCase() === value)
                break;

            case "contains":
                itemsToShow = allItems.filter((item) => String(item[filterField]).toLowerCase().includes(value))
                break;

            case "more":
                if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
                    if (isNaN(Number(value))) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => item[filterField] > Number(value))
                    break;
                }

                if (filterField === ItemKeys.date) {
                    if (!checkDateFormat(value)) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => dateCompareMore(item.date, value))
                    break;
                }

                itemsToShow = allItems.filter((item) => item[filterField] > value);
                break;

            case "less":
                if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
                    if (isNaN(Number(value))) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => item[filterField] < Number(value))
                    break;
                }

                if (filterField === ItemKeys.date) {
                    if (!checkDateFormat(value)) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => (!dateCompareMore(item.date, value) && item.date !== value))
                    break;
                }

                itemsToShow = allItems.filter((item) => item[filterField] < value);
                break;
        }

        return itemsToShow;
    }, [allItems, filterField, filterCondition, filterValue]);

    // Сортировка
    const sortedFilteredItems = useMemo<TItem[]>(() => {
        if (sortField === null)
            return filteredItems;

        let result: TItem[] = filteredItems.filter(() => true); // Создание копии массива

        if (sortField === ItemKeys.distance || sortField === ItemKeys.quantity) {
            result.sort((a, b) => a[sortField] - b[sortField]);
        } else {
            result.sort((a, b) => {
                if (a[sortField] >= b[sortField]) return 1;
                return -1;
            });
        }

        if (sortReverse) result = result.reverse();

        return result;
    }, [filteredItems, sortField, sortReverse]);

    // Расчёт количество страниц
    const pagesQuantity = useMemo<number>(() => {
        return Math.ceil(sortedFilteredItems.length / ITEMS_ON_PAGE);
    }, [filteredItems, ITEMS_ON_PAGE])

    // Страница сбрасывается на 1, если количество страниц было изменено
    useEffect(() => {
        dispatch(setCurrentPageActionCreator(1))
    }, [pagesQuantity])

    // Полчение строк для отображения на текущей странице
    const itemsToShowOnPage = useMemo<TItem[]>(() => {
        return sortedFilteredItems.filter((item, index) => {
            return index >= ITEMS_ON_PAGE * (currentPage - 1) && index < ITEMS_ON_PAGE * currentPage;
        });
    }, [sortedFilteredItems, currentPage])

    return (
        <div className="App">
            <Container>
                <FilterManager/>
                {
                    isLoading
                        ?
                        <Loader/>
                        :
                        error === null
                            ?
                            <>
                                <PagesList pagesQuantity={pagesQuantity}/>
                                <MyTable data={itemsToShowOnPage}/>
                            </>
                            :
                            <FetchingError/>
                }
            </Container>
        </div>
    );
}

export default App;
