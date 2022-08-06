import React from 'react'
import { Link } from 'react-router-dom'
import { companyName } from '../commons/strings'

export default function Header({ rightInfo = <></> }) {
    return (
        <div className='flex justify-center w-full px-2 '>
            <div className='flex justify-between items-center px-5 py-3 w-full max-w-2xl border border-gray-300 rounded-lg shadow primaryGradientBg'>
                <p className='font-logo text-lg font-bold text-gray-200'>
                    <Link to="/">
                        {companyName.toUpperCase()}
                    </Link>
                </p>
                <div className='text-gray-100'>
                    {rightInfo}
                </div>
            </div>
        </div>
    )
}
