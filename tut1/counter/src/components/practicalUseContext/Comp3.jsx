import { useContext } from 'react';
import './style.css'
import { PDescription, pTitle } from '../../App';

const Comp3 = ()=>{
    const pSlogan = useContext(pTitle)
   const prodDescription = useContext(PDescription)
    return(
        <div>
            <h3 className='descriptionTitle'>
            product descripsions-- {pSlogan} </h3>
           <p>
           {prodDescription}

            </p>
        </div>
    )
}
export default Comp3;