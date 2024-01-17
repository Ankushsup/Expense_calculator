import React, {useState} from 'react'
import ExpenseItem from '../Expenses/ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

export default function Expenses(props) {

    const[selectYear , setSeletYear] = useState('2020');

    const FilterChangeHandler = (selectedFilter) => {
        setSeletYear(selectedFilter);
    };

    const FilteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectYear;
    });

  return (
    <div className='expenses'>
        <ExpensesFilter onFilterChange={FilterChangeHandler} selectYearState={selectYear}/>

        <ExpensesChart expenses={FilteredExpenses}/>

        {FilteredExpenses.length === 0 ? <p>No Expenses Found</p> : FilteredExpenses.map((item) => (
            <ExpenseItem 
                key={item.id}
                title={item.title} 
                amount={item.amount} 
                date = {item.date}
            />
        ))}
    </div>
  )
}
