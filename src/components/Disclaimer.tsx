// react
import { useState } from 'react';

// animations
import { motion, AnimatePresence } from 'framer-motion';

const Disclaimer = () => {
    // states
    const [isOpen, setIsOpen] = useState(window.innerWidth < 768);

    // handlers
    const closeModal = () => setIsOpen(false);

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 text-white p-2'
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <div
                        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm pointer-events-none select-none'
                        onClick={closeModal}
                    />
                    <motion.div
                        className='flex flex-col justify-center bg-background p-8 rounded-lg shadow-md w-full max-w-lg z-50'
                        variants={modalVariants}
                    >
                        <div className='flex items-center justify-center space-x-4 animate-pulse'>
                            <i className='fas fa-desktop text-2xl text-white' />
                            <h2 className='text-xl font-semibold'>
                                Important Notice
                            </h2>
                        </div>
                        <p className='mt-4 text-white text-opacity-70 text-center'>
                            View this website on a desktop computer for the best
                            experience.
                        </p>
                        <button
                            className='mt-6 px-4 py-2 text-white rounded-md  '
							style={{  backgroundImage: 'url(gradients/gradient1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={closeModal}
                        >
                            I understand
							<i className='fas fa-check ml-2' />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Disclaimer;
