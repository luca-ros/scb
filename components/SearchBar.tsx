import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {}

function SeacrhBar({ }: Props) {
    return (

        <section className='flex items-center justify-center space-x-2 pt-3'>
            <div className='flex items-center space-x-2 px-2 md:px-5 py-1 flex-1 max-w-lg min-w-min bg-[#edebfc] border rounded-full'>
                <input
                    className='flex-1 max-w-lg outline-none py-1 px-4 text-[#45278b] bg-[#edebfc]'
                    placeholder="Search Hire" type="text" />
                <MagnifyingGlassIcon className='w-5 text-gray-400' />
            </div>
        </section>
    )
}

export default SeacrhBar