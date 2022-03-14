import Expense from "./Components/Exp/Expense";
import NewExp from "./Components/NewExp/NewExp";
import React, {useState} from 'react';

let Dummy_Exp = [
    {
        id : 'e1',
        title : 'University fees',
        amount : 1000,
        date : new Date(2022, 1 ,20),
    },
    {
    
        id : 'e2',
        title : 'Tution fees',
        amount : 500,
        date : new Date(2022, 1 ,23),
    },
    {
    
        id : 'e3',
        title : 'House rent',
        amount : 700,
        date : new Date(2022, 2 ,3),
    },
    {
    
        id : 'e4',
        title : 'Food',
        amount : 300,
        date : new Date(2022, 2 ,10),
    }  
];

const App = () => {

    const [expenses, setExpenses] = useState(Dummy_Exp);
    const addExpHandler = (expense) =>{
        const updatedExp = [expense, ...expenses];
        setExpenses(updatedExp)
    }

    return (
        <div>
            <NewExp onAddExp={addExpHandler} />
            <Expense item = { expenses } />
        </div>          
    );
}

export default App;
