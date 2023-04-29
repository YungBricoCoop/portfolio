// react
import { useState } from 'react';

// animations
import { motion } from 'framer-motion';

// interfaces
interface Project {
    name: string;
    description: string;
    type: string;
    image: string;
    link?: string;
    github?: string;
    technologies?: string[];
}
interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    // states
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        projects[0]
    );

    // constants
    const btnClass =
        'w-10 h-10  bg-white bg-opacity-0 rounded-xl  cursor-pointer hover:scale-125 hover:rotate-3 hover:bg-opacity-20 transition-transform duration-500';

    // handlers
    const handleOpenLink = () => {
        if (selectedProject?.link) {
            window.open(selectedProject.link, '_blank', 'noopener noreferrer');
        }
    };

    const handleOpenGithub = () => {
        if (selectedProject?.github) {
            window.open(
                selectedProject.github,
                '_blank',
                'noopener noreferrer'
            );
        }
    };

    return (
        <div className='flex gap-16 h-full w-full md:w-8/12 mx-auto'>
            <div className='w-3/5 h-full'>
                {selectedProject && (
                    <motion.div
                        transition={{ duration: 0.8 }}
                        className='relative top-0 left-0 w-full h-full text-white'
                        key={selectedProject.name}
                    >
                        <motion.img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className='absolute top-0 w-full h-48 object-cover rounded-md blur-[200px] pointer-events-none'
                            initial={{ opacity: 0.5, scale: 0.4,  scaleX: 0 }}
                            animate={{ opacity: 1, scale: 1 , scaleX: 4}}
                            transition={{ duration: 0.5 }}
                        />
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className=' w-full h-72 object-cover rounded-md opacity-90'
                        />
                        <div className='absolute -top-3 -left-3 bg-white bg-opacity-20 p-4 px-6  rounded-md'>
                            <h2 className='text-2xl font-mono'>
                                {selectedProject.name}
                            </h2>
                        </div>
                        <div className='flex gap-2 absolute bottom-2 right-2'>
                            {selectedProject.link && (
                                <button
                                    className={btnClass}
                                    onClick={handleOpenLink}
                                >
                                    <i className='fas fa-link'></i>
                                </button>
                            )}
                            {selectedProject.github && (
                                <button
                                    className={btnClass}
                                    onClick={handleOpenGithub}
                                >
                                    <i className='fab fa-github'></i>
                                </button>
                            )}
                        </div>
                        <div className='absolute top-8 left-0 p-8'>
                            <p className='opacity-90 mt-2 text-lg'>
                                {selectedProject.description}
                            </p>
                        </div>
                        <div className='absolute bottom-4 left-0 pl-8'>
                            {selectedProject.technologies && (
                                <div className='flex flex-wrap gap-2 text-sm'>
                                    {selectedProject.technologies.map(
                                        (tech, i) => (
                                            <div
                                                key={`tech-${i}`}
                                                className='px-1 py-1 underline underline-offset-2'
                                            >
                                                {tech}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
            <div className='flex flex-col  w-2/5 h-full text-white text-2xl font-mono'>
                {projects.map((project, i) => (
                    <div
                        key={`project-${i}`}
                        onMouseEnter={() => setSelectedProject(project)}
                        onClick={() => setSelectedProject(project)}
                        className='flex justify-between items-baseline py-4 border-t-2 border-white hover:pl-6  hover:font-bold transition-all duration-500'
                    >
                        {project.name}
                        <span className='text-sm text-right font-normal text-gray-400 ml-2'>
                            {project.type}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
