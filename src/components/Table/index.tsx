import React, { useState } from "react";

function Table() {
  const [ countriesArray, setCountriesArray ] = useState([]);

  async function fetchArray(url: string) {
    const response: Response = await fetch(url);
    const jsonData: any = await response.json();
    setCountriesArray(jsonData);
  }

  fetchArray("https://restcountries.com/v3.1/all");

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Population</th>
      </tr>
      {
        countriesArray.map((country: any) => {
          return (
            <tr>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
            </tr>
          )
        })
      }
    </table>
  );
}

export default Table;