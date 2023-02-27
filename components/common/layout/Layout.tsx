

import {FC, ReactElement} from 'react';

type LayoutProps = {
    children: ReactElement
};

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <main className='root'>

            {children}
        </main>
    )
}
export default Layout;

