import { FC, ReactNode } from 'react'

const Grid: FC<ReactNode> = ({ children }) => {
    return (
        <div className='root'>
            {children}
        </div>
    )
}

export default Grid;