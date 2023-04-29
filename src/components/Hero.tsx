// components
import Button from './Button';

// animation
import { motion } from 'framer-motion';

// interfaces
interface HeroProps {
    fullname: string;
    welcomeMessage: string;
    logo: string;
    links: { name: string; icon?: string; link: string }[];
}

const Hero: React.FC<HeroProps> = ({
    fullname,
    welcomeMessage = 'Welcome to my portfolio !',
    logo,
    links,
}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 text-white basis basis-full md:basis-1/3'>
            <motion.img
                src={logo}
                alt='logo'
                className='w-64'
                initial={{
                    scale: 0,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            />
            <motion.h1
                className='font-bold text-4xl'
                initial={{
                    scale: 0.8,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                {fullname}
            </motion.h1>
            <motion.h2
                className='font-medium text-xl italic'
                initial={{
                    y: -20,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                {welcomeMessage}
            </motion.h2>
            <motion.div
                className='flex gap-4 my-4'
                initial={{
                    y: 20,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                {links.map((link, index) => (
                    <Button
                        key={index}
                        label={link.name}
                        icon={link.icon}
                        onClick={() =>
                            window.open(
                                link.link,
                                '_blank',
                                'noopener noreferrer'
                            )
                        }
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Hero;
