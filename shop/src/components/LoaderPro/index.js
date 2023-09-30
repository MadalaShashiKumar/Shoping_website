import { SpinnerCircular } from 'spinners-react';
import './index.css'

function LoaderPro() {
    return (
        <div className='loader-container'>
            <SpinnerCircular className='spinner-spinner' color='black' speed={300} size={40} thickness={200} />
        </div>
    )
}

export default LoaderPro;   