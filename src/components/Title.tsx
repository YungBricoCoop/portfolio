// animation
import { motion } from 'framer-motion';

// interface
interface TitleProps {
    title: string;
    icon?: string;
}

const Title: React.FC<TitleProps> = ({ title, icon }) => {
    const variants = {
        offscreen: {
            opacity: 0,
            y: 20,
        },
        onscreen: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            className='flex w-full gap-2 justify-center items-center text-3xl font-bold text-center mt-12 mb-8 text-white'
            initial='offscreen'
            whileInView='onscreen'
            variants={variants}
            viewport={{ once: true, amount: 0.8 }}
        >
            {icon && <i className={`fas fa-${icon}`}></i>}
            {title}
        </motion.div>
    );
};

export default Title;
