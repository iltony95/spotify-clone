'use client'

import { useEffect, useState } from 'react'

import AuthModal from '@/components/AuthModal'
import UploadModal from '@/components/UploadModal'
import SubscribeModal from '@/components/SubscribeModal'
import { ProductWithPrice } from '@/typings'

interface ModalProviderProps {
    products: ProductWithPrice[]
}

export default function ModalProvider({ products }: ModalProviderProps) {
    /* Prevent Hidration issues in server side rendering
       ##### [
    */
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    /* ] ##### */

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    )
}
