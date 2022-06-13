import React, {useEffect, useMemo} from 'react';
import '../styles/App.scss';
import Container from "./Container";
import FilterManager from "./FilterManager";
import PagesList from "./PagesList";
import MyTable from "./MyTable";
import {useDispatch} from "react-redux";
import {fetchItems} from "../store/actionCreators/items";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {ItemKeys, TItem} from "../types";

function App() {
    const allItems = useTypeSelector(state => state.items.allItems);
    const filterField = useTypeSelector(state => state.items.filterField);
    const filterCondition = useTypeSelector(state => state.items.filterCondition);
    const filterValue = useTypeSelector(state => state.items.filterValue);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchItems()(dispatch);
    }, [])

    const filteredItems = useMemo<TItem[]>(() => {
        let itemsToShow = allItems;

        if (filterValue == "") {
            return itemsToShow;
        }

        switch (filterCondition) {
            case "equal":
                itemsToShow = allItems.filter((item) => String(item[filterField]) === filterValue)
                break;

            case "contains":
                itemsToShow = allItems.filter((item) => String(item[filterField]).includes(filterValue))
                break;

            case "more":
                if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
                    if (isNaN(Number(filterValue))) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => item[filterField] > Number(filterValue))
                    break;
                }

                itemsToShow = allItems.filter((item) => item[filterField] > filterValue);
                break;

            case "less":
                if (filterField === ItemKeys.distance || filterField === ItemKeys.quantity) {
                    if (isNaN(Number(filterValue))) {
                        itemsToShow = [];
                        break;
                    }

                    itemsToShow = allItems.filter((item) => item[filterField] < Number(filterValue))
                    break;
                }

                itemsToShow = allItems.filter((item) => item[filterField] < filterValue);
                break;
        }

        return itemsToShow;
    }, [allItems, filterField, filterCondition, filterValue])

    return (
        <div className="App">
            <Container>
                <FilterManager/>
                <PagesList/>
                <MyTable data={filteredItems}/>
            </Container>
        </div>
    );
}

export default App;
