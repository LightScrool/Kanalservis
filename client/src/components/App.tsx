import React, {useEffect} from 'react';
import '../styles/App.scss';
import Container from "./Container";
import TableManager from "./TableManager";
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
                <TableManager/>
                <PagesList/>
                <MyTable/>
            </Container>
        </div>
    );
}

export default App;
