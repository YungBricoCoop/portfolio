//react
import { useState } from 'react';

// components
import Spline from '@splinetool/react-spline';

const SplineC = () => {
    // states
    const [loading, setLoading] = useState(true);

    return (
        <div className='flex-1'>
            <Spline
                className='spline-container'
                scene='https://prod.spline.design/1DYnFsiKosxp3rXB/scene.splinecode'
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default SplineC;
