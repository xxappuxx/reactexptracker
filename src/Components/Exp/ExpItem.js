import './ExpItem.css';
import ExpDate from '../Exp/ExpDate';
import Card  from '../UI/Card';
import React from 'react';

const ExpItem = (props) => {   // here props is object which has properies Like date,title,amount in (App.js)

    // const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    // const month = props.date.toLocaleString('en-US',{month : 'long'});;
    // const year = props.date.getFullYear();

    // const [newTitle, setNewTitle] = useState("");
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }

    // const cahngeHandler = (event) => {
    //     setNewTitle(event.target.value)
    // }

    return(
        <Card className="expense-item">
            <ExpDate date = {props.date} /> 
            <div className="expense-item__description">
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={cahngeHandler}></input>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpItem;