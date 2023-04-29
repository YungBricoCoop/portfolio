// animations
import { motion } from 'framer-motion';


// interfaces
interface FooterProps {
	message: string;
}

const Footer: React.FC<FooterProps> = ({ message }) => {
	const variants = {
		offscreen: {
			opacity: 0,
			scale: 0.8,
		},
		onscreen: {
			opacity: 1,
			scale: 1,
		},
	};

	return (
		<motion.div
			className='flex justify-center gap-2 py-4 mt-32 bg-gray-800 bg-opacity-10 w-full'
			initial='offscreen'
			whileInView='onscreen'
			variants={variants}
			viewport={{ once: false, amount: 0.8 }}
		>
			<span className='text-white text-sm'>
				{message}
			</span>
		</motion.div>
	);
};

export default Footer;