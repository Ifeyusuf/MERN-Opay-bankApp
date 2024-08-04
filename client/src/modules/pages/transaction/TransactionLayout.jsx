import React from 'react'
import { ApplicationHeader } from '../components'
import ApplicationFooter from '../components/footer/ApplicationFooter'

const TransactionLayout = ({children}) => {
return (
<article className='grid grid-cols-[auto_1fr-auto]'>
    <ApplicationHeader/>

    <div>
        {children}
    </div>

    <ApplicationFooter/>

</article>
)
}

export default TransactionLayout
