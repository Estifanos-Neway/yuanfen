import React from 'react'

export default function RequiredFiled({ show = false, className="" }) {
    return (
        <div className={`text-red-800 text-sm pl-2 ${className}`} hidden={!show}>*This field is required!</div>
    )
}
