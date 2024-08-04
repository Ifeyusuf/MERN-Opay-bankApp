import React from 'react'
import {ApplicationHeader, ApplicationSidebar} from '../components'


function ApplicationLayout({children}) {
return (
    <section className=''>
        <article>
            <ApplicationHeader/>
        </article>

        <div className=' max-w-6xl mx-auto py-6 grid grid-cols-custom-layout gap-24' >
        <article>
            <ApplicationSidebar/>
        </article>

        <article>
            {children}
        </article>
        </div>
    </section>
)
}

export default ApplicationLayout
