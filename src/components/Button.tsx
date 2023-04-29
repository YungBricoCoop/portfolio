// animation
import { motion } from 'framer-motion';

// interfaces
interface ButtonProps {
    onClick: () => void;
    label?: string;
    icon?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    icon,
    className = '',
}) => {
    return (
        <motion.button
            className={`flex items-center justify-center border-2 border-white p-3 rounded-lg ${className}`}
            onClick={onClick}
            whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                color: 'rgba(0, 0, 0, 1)',
                rotate: 2,
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            initial={{
                scale: 0,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                color: 'rgba(255, 255, 255, 1)',
                rotate: 0,
            }}
            animate={{ scale: 1 }}
        >
            {Boolean(label) && <span className='mr-2'>{label}</span>}
            {Boolean(icon) && <i className={`fa-brands fa-${icon} fa-xl`}></i>}
        </motion.button>
    );
};

export default Button;
