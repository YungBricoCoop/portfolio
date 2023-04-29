// react

// css

// functions

// components
import Page from '../components/Page';
import Pointer from '../components/Pointer';
import SplineC from '../components/SplineC';
import Hero from '../components/Hero';
import Title from '../components/Title';
import PanoramaViewer from '../components/PanoramaViewer';
import InfiniteBanner from '../components/InfiniteBanner';
import Projects from '../components/Projects';
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// images
import logo from '../assets/logo.png';

// data
import { techno, tools, projects } from '../data/data';

const Home: React.FC = () => {
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

            <Title title='Technologies & Tools' icon='code' />
            <InfiniteBanner images={techno} speed={1} />
            <InfiniteBanner images={tools} reverse speed={0.8} />

            <Title title='Projects' icon='cubes' />
            <Projects projects={projects} />

			<Title title='Contact' icon='envelope' />
			<Contact email="mayencourt@elwan.ch" />
			<Footer message='Made with ❤️ by Elwan' />
        </Page>
    );
};

export default Home;
