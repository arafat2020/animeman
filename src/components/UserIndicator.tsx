"use client"

import { UserButton } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

function UserIndicator() {
    
    return (
        <div className='absolute z-20 right-2 top-2'>
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}

export default UserIndicator