import Card from '../UI/Card';
import './Expense.css';
import ExpItem from './ExpItem';
import React from 'react';

const Expense = (props) => {
    return(
        <Card className="expenses">
        {
            props.item.map(
                expense => 
                <ExpItem 
                    date= {expense.date} 
                    title = {expense.title} 
                    amount = {expense.amount} />
            )
        }
            {/* <ExpItem 
            date= {props.item[0].date} 
            title = {props.item[0].title} 
            amount = {props.item[0].amount} />   
               

            <ExpItem 
            date= {props.item[1].date} 
            title = {props.item[1].title} 
            amount = {props.item[1].amount} />   
            

            <ExpItem 
            date= {props.item[2].date} 
            title = {props.item[2].title} 
            amount = {props.item[2].amount} />   
             

            <ExpItem 
            date= {props.item[3].date} 
            title = {props.item[3].title} 
            amount = {props.item[3].amount} />    */}
            
        </Card>
    );
}

export default Expense;