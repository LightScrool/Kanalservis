import React, {useEffect} from 'react';
import '../styles/App.scss';
import Container from "./Container";
import FilterManager from "./FilterManager";
import PagesList from "./PagesList";
import MyTable from "./MyTable";
import {useDispatch} from "react-redux";
import {fetchItems} from "../store/actionCreators/items";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchItems()(dispatch);
    }, [])

    return (
        <div className="App">
            <Container>
                <FilterManager/>
                <PagesList/>
                <MyTable/>
            </Container>
        </div>
    );
}

export default App;
