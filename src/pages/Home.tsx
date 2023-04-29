// react

// css

// functions

// components
import Page from '../components/Page';
import Pointer from '../components/Pointer';
import SplineC from '../components/SplineC';
import PanoramaViewer from '../components/PanoramaViewer';
import InfiniteBanner from "../components/InfiniteBanner";

// images
import logo from '../assets/logo.png';

const Home: React.FC = () => {
    const images = [
        { src: 'html.svg' },
		{ src: 'js.svg'},
		{ src: 'react.svg'},
		{ src: 'nodejs.svg'},
		{ src: 'redis.svg'},
    ];
    return (
        <Page>
            <Pointer latency={80} />
            <div className='flex gap-2 flex-wrap min-h-screen'>
                <div className='flex flex-col items-center justify-center gap-2 text-white basis basis-full md:basis-1/3'>
                    <img src={logo} alt='logo' className='w-64' />
                    <h1 className='font-bold text-4xl'>Elwan Mayencourt</h1>
                    <h2 className='font-medium text-xl italic'>
                        Welcome to my portfolio !
                    </h2>
                </div>
                <SplineC />
            </div>
            <PanoramaViewer />
			<InfiniteBanner images={images} />
            <div className='w-full h-96 bg-transparent'></div>
        </Page>
    );
};

export default Home;
