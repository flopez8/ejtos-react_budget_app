import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "../App.css"
const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [ newCurrency, setNewCurrency ] = useState(currency)
    
    useEffect(() => {  
        
    function selectValue () {
        
        var element = document.getElementById('currencyDropdown')
        element.value = newCurrency
        element.text = `Currency (${element.value} ${element.name})`

    }    
        
        selectValue()
    }, [newCurrency])       
       
    function onDropdownChange(event) {
        setNewCurrency(event.target.value)
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value})
    }

    return (
        <select className="alert custom-select currency-dropdown" id="currencyDropdown" onChange={(event) => onDropdownChange(event)}>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="£" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    );
};
export default CurrencySelect;