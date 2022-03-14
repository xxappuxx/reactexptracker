import React from 'react';
import "./NewExp.css";
import ExpForm from './ExpForm';

const NewExp = (props) => {

    const saveExpDataHandler = (enterdExpData) =>{
        const ExpData = {
            ...enterdExpData, 
            id: Math.random.toString()
        }
        props.onAddExp(ExpData);
        console.log(ExpData);
    }
    return(
        <div className='new-expense'>
            <ExpForm onSaveExpData ={saveExpDataHandler} />
        </div>
    );
}

export default NewExp;