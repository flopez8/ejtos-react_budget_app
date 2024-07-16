import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {
    const { currency } = useContext(AppContext);
    const [ newCurrency, setNewCurrency ] = useState(currency)
    
    useEffect(() => selectValue(), [])       
    var element = document.getElementById('currencyDropdown')
    function selectValue () {
        
        var element = document.getElementById('currencyDropdown')
        element.value = newCurrency
        element.text = `Currency (${element.value} ${element.name})`

    }   

    return (
        <select className="custom-select" id="currencyDropdown" onChange={(event) => setNewCurrency(event.target.value)}>
            <option value="$" name="Dollar">{element[0].value} Dollar</option>
            <option value="£" name="Pound">{element[1].value} Pound</option>
            <option value="€" name="Euro">{element[2].value} Euro</option>
            <option value="₹" name="Ruppee">{element[3].value} Ruppee</option>
        </select>
    );
};
export default CurrencySelect;