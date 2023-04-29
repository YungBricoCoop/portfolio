// interface
interface TitleProps {
    title: string;
    icon?: string;
}

const Title: React.FC<TitleProps> = ({ title, icon }) => {
    return (
        <div className='flex w-full gap-2 justify-center items-center text-3xl font-bold text-center mt-8 mb-4 text-white'>
            {icon && <i className={`fas fa-${icon}`}></i>}
            {title}
        </div>
    );
};

export default Title;