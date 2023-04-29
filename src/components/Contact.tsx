// interfaces
interface ContactProps {
    email: string;
}

// animations
import { motion } from 'framer-motion';

const Contact: React.FC<ContactProps> = ({ email }) => {
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
            className='flex flex-col items-center justify-center gap-2'
            initial='offscreen'
            whileInView='onscreen'
            variants={variants}
            viewport={{ once: true, amount: 0.8 }}
        >
            <span className='text-white text-lg'>
                You can contact me at{' '}
                <a
                    href={`mailto:${email}?subject=Portfolio%20Contact`}
                    className='text-pink-200 underline underline-offset-2'
                >
                    {email}
                </a>
            </span>
            <span className='text-white text-sm italic'>
                {' '}
                I'll be happy to answer you !
            </span>
        </motion.div>
    );
};

export default Contact;
