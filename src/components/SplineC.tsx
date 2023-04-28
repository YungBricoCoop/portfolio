//react
import { useState } from 'react';

// components
import Spline from '@splinetool/react-spline';

const SplineC = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className='w-96 h-full'>
            <Spline
                scene='https://prod.spline.design/1DYnFsiKosxp3rXB/scene.splinecode'
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default SplineC;
