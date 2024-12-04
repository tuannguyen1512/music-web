'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import AuthModal from '@/src/components/AuthModal'
import UploadModal from '@/src/components/UploadModal'

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <>
            <AuthModal/>
            <UploadModal/>
        </>
    )
}

export default ModalProvider