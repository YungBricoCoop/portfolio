// react

// css

// functions

// components
import Page from '../components/Page';
import Pointer from "../components/Pointer";
import SplineC from '../components/SplineC';
import PanoramaViewer from "../components/PanoramaViewer";


// images
import logo from '../assets/logo.png';

const Home: React.FC = () => {
    return (
        <Page>
			<Pointer latency={80} />
            <div className='flex gap-2 flex-wrap'>
                <div className='flex flex-col items-center justify-center gap-2 text-white'>
                    <img src={logo} alt='logo' className='w-64' />
                    <h1 className='font-bold text-4xl'>Elwan Mayencourt</h1>
                    <h2 className='font-medium text-xl italic'>
                        Welcome to my portfolio !
                    </h2>
                </div> 
                <SplineC />
            </div>
			<PanoramaViewer/>
        </Page>
    );
};

export default Home;
