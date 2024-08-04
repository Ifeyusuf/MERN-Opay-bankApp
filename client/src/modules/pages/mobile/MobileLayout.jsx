import React from 'react'
import { ApplicationHeader } from '../components'
import ApplicationFooter from '../components/footer/ApplicationFooter'

const MobileLayout = ({children}) => {
return (
<article className='grid grid-cols-[auto_1fr-auto] bg-darkGrey'>
    <div className="mb-14">
        <ApplicationHeader/>
    </div>

    <div>
        {children}
    </div>

    <div className="mt-14">
        <ApplicationFooter/>
    </div>

</article>
)
}

export default MobileLayout
