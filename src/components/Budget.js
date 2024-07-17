
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert('Budget cannot exceed 20,000.00 in any currency!')
            return;
        }

        const totalSpent = expenses.reduce((total, item) => {return total += item.cost}, 0)
        if (event.target.value < totalSpent){
            alert('Budget cannot be lower than spending')
            return;
        }
        
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={event => handleBudgetChange(event)}></input>
</div>
    );
};
export default Budget;