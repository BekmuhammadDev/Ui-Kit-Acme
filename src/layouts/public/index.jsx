import { Outlet } from 'react-router';
import {Footer, Header, Section} from '../../components/layout'
const index = () => {
    return (
        <>
        <Header/>
         <Section height='100'>
                <Outlet/>
         </Section>
         <Footer/>
        
        </>
    );
};

export default index;