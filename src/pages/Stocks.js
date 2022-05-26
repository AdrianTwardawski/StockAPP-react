import React from 'react'
import { useState, useEffect } from 'react';

function Stocks() {
    const API_URL = 'http://localhost:5001/api/market/allmarkets';

    const [stocksList, setStocksList] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not receive expected data');
                const stocksList = await response.json();
                console.log(stocksList)
                setStocksList(stocksList);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        (async () => await fetchItems())();
    }, [])

    let tb_data = stocksList.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.change}</td>
            <td>{item.tradesValue}</td>
        </tr>
    ))

    return (
        <>
            {isLoading && <h2>Loading Items...</h2>}
            {fetchError && <h2 style={{ color: "red" }}>{`Error: ${fetchError}`}</h2>}
            {!fetchError && !isLoading && <div>
                <h1>Strona Stocks</h1>
                <div className="container">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Change</th>
                                <th>Trades Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}

export default Stocks