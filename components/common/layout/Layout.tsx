

import {FC, ReactElement} from 'react';

type LayoutProps = {
    children: ReactElement
};

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className='layout'>

            {children}
        </div>
    )
}
export default Layout;

