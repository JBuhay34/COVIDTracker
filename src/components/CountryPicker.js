import React, { useEffect, useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import './CountryPicker.css'

import { fetchCountries } from "../API";
import NativeSelect from '@material-ui/core/NativeSelect';
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  //console.log(fetchedCountries);

  return (
        <div className="FormControl">  
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;
