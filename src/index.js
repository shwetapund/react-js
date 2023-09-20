import './index.css';
import ReactDOM from 'react-dom/client';
import Card, {Heading} from './component/Cards/Card';

import bridal from './component/Cards/image/bridal.jpg';
import simple from './component/Cards/image/simple.jpg';
import aerebic from './component/Cards/image/aerebic.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Heading/>
        <div className='main-container'>




            <Card image={bridal} heading={"Bridal Mehendi"} text={"Bridal mehendi is very beautiful."} />

            <Card image={simple} heading={"Simple Mehendi"} text={"Simple mehendi is very beautiful."} />
            <Card image={aerebic} heading={"Simple Mehendi"} text={"Simple mehendi is very beautiful."} />

        </div>


    </>

);


