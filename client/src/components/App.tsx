import React from 'react';
import '../styles/App.scss';
import Container from "./Container";
import TableManager from "./TableManager";
import PagesList from "./PagesList";
import MyTable from "./MyTable";

function App() {
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
