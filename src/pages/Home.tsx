// react

// css

// functions

// components
import Page from '../components/Page';
import Pointer from '../components/Pointer';
import SplineC from '../components/SplineC';
import Hero from '../components/Hero';
import PanoramaViewer from '../components/PanoramaViewer';
import InfiniteBanner from '../components/InfiniteBanner';

// images
import logo from '../assets/logo.png';

const Home: React.FC = () => {
    const images = [
        { src: 'html.svg' },
        { src: 'js.svg' },
        { src: 'react.svg' },
        { src: 'nodejs.svg' },
        { src: 'redis.svg' },
    ];
    return (
        <Page>
            <Pointer latency={80} />
            <div className='flex gap-2 flex-wrap min-h-screen'>
                <Hero
                    fullname='Elwan Mayencourt'
                    welcomeMessage='Welcome to my portfolio !'
                    logo={logo}
                    links={[
                        {
                            name: 'Github',
                            icon: 'github',
                            link: 'https://github.com/YungBricoCoop',
                        },
                        {
                            name: 'LinkedIn',
                            icon: 'linkedin',
                            link: 'https://www.linkedin.com/in/elwan-mayencourt-694291228/',
                        },
                    ]}
                />
                <SplineC />
            </div>
            <PanoramaViewer />
            <InfiniteBanner images={images} />
            <div className='w-full h-96 bg-transparent'></div>
        </Page>
    );
};

export default Home;
