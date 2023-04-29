// react
import { useEffect } from 'react';

// animations
import { motion, useAnimation } from 'framer-motion';

// interfaces
interface InfiniteBannerProps {
    images: { src: string; label?: string; link?: string }[];
    speed?: number;
}

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({
    images,
    speed = 1,
}) => {
    const animationControls = useAnimation();
    const containerClass =
        'w-64 h-24 flex items-center justify-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-500';

    useEffect(() => {
        //FIXME: animation is not working properly and doesn't seem to be infinite
        const animate = async () => {
            await animationControls.start({ x: 0 });
            await animationControls.start({
                x: -(250 * (images.length - 1)),
                transition: {
                    duration: 10 / speed,
                    ease: 'linear',
                    repeat: Infinity,
                },
            });
        };

        animate();
    }, [animationControls, images]);

    return (
        <div className='relative mx-auto overflow-x-hidden py-4'>
            <motion.div
                animate={animationControls}
                className='flex items-center justify-center gap-2'
                style={{ width: 250 * images.length * 2 }}
            >
                {images.map((image, index) => (
                    <div key={index} className={containerClass}>
                        <img
                            className='h-10'
                            src={image.src}
                            alt={image.label || ''}
                        />
                    </div>
                ))}
                {images.map((image, index) => (
                    <div key={index + images.length} className={containerClass}>
                        <img
                            className='h-10'
                            src={image.src}
                            alt={image.label || ''}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteBanner;
