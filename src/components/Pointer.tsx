// react
import { useState, useEffect } from 'react';

// components
import { motion } from 'framer-motion';

// interfaces
interface PointerProps {
    latency?: number;
}

const Pointer: React.FC<PointerProps> = ({ latency = 100 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // offset of the top left corner of the pointer point
            const pointerOffset = -6;
            const newX = event.clientX + window.pageXOffset + pointerOffset;
            const newY = event.clientY + window.pageYOffset + pointerOffset;

            // set the position of the pointer point with a latency
            setTimeout(() => {
                setPosition({ x: newX, y: newY });
            }, latency);
        };

        // add event listeners
        document.addEventListener('mousemove', handleMouseMove);

        // remove event listeners
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [latency, position]);

    return (
        <motion.div
            className='w-4 h-4 rounded-full bg-white bg-opacity-0 z-50 backdrop-invert'
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
            }}
            transition={{ type: 'spring', stiffness: 100, duration: 1 }}
        />
    );
};

export default Pointer;
