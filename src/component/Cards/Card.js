import './Card.css';
import { useState } from 'react';

export default function Card({ image, heading, text }) {

    const [counter, setCount] = useState(0);

    function increment() {
        setCount(counter + 1);
    }
    function decrement() {
        setCount(counter - 1);
    }

    return (
        <>
            <div className='card'>
                <img src={image} className='image' />
                <h2 className='heading'>{heading}</h2>
                <p className='heading'>{text}</p>
                <p className='heading'>Rs.1000/-</p>

                <button className='button' onClick={increment}>+</button> <span>{counter}</span>
                <button className='button' onClick={decrement}>-</button>
            </div>
        </>
    )


}