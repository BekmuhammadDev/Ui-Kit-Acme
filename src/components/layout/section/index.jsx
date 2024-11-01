import React, { children } from 'react';

const index = ({children,height}) => {
    return (
        <section style={{minHeight: height+'vh' ? height+'vh' : 'auto'}}>
            <dir className='container mx-auto'>
            {children}
            </dir>
        </section>
    );
};

export default index;