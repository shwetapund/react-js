import './Card.css';
import { useState, useEffect } from 'react';

export const Heading = () => { //arrow function

    
    useEffect(() =>{
        console.log("it is very beutifull ....");
    });
    
    return(
        <>
            <div className='title-container'>
                <h1 className='title'>Mehenidi Card</h1>
            </div>
        </>
    )
}
export default function Card({image, heading, text}) {

    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log(`counter is : ${counter}`);
    
    }, [counter]);

    function increment() {
        setCount(counter + 1);
        
    }
    function decrement() {
        setCount(counter - 1);
        
    }

    return (
        
            <div className='card'>
                <img src={image} className='image' />
                <h2 className='heading'>{heading}</h2>
                <p className='heading'>{text}</p>
                <p className='heading'>Rs.1000/-</p>

                <button className='button' onClick={increment}>+</button> <span>{counter}</span>
                <button className='button' onClick={decrement}>-</button>
            </div>
        
    );


}

//  export const Card2 = () =>{
//     return(
//     <h1 >hhhhhh</h1>
//     )
// }
