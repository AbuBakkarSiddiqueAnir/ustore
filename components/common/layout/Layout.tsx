

import {FC, ReactElement} from 'react';
import style from './Layout.module.css'
type LayoutProps = {
    children: ReactElement
};

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className={style.root}>


        <main className='fit'>

            {children}
        </main>
        </div>
    )
}
export default Layout;

