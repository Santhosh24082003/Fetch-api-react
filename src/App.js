import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [example, setExample] = useState([]);

  useEffect(() => {
    url();
  }, []);

  const url = async () => {
    try {
      const r = await fetch("https://api.coinbase.com/v2/currencies");
      const data = await r.json();
      
      if (Array.isArray(data.data)) {
        setExample(data.data);
      } else {
        console.error("API response does not contain an array of data:", data);
      }
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  }

  return (
    <div className="App">
      <div className="center-table"> {/* Apply a CSS class for centering */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">min_size</th>
            </tr>
          </thead>
          <tbody>
            {example.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.min_size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
