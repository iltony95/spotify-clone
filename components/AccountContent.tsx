'use client'

import useSubscribeModal from '@/hooks/useSubscribeModal'
import { useUser } from '@/hooks/useUser'
import { postData } from '@/libs/helpers'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from './Button'

export default function AccountContent() {
    const router = useRouter()
    const subscribeModal = useSubscribeModal()
    const { isLoading, subscription, user } = useUser()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        }
    }, [isLoading, user, router])

    const redirectToCustomerPortal = async () => {
        setLoading(true)
        try {
            const { url, error } = await postData({
                url: '/api/create-portal-link',
            })
            window.location.assign(url)
        } catch (err) {
            if (err) {
                toast.error((err as Error)?.message)
            }
        }
        setLoading(false)
    }

    return (
        <div className="mb-7 px-6">
            {!subscription && (
                <div className="flex flex-col gap-y-4">
                    <p>No active plan</p>
                    <Button
                        onClick={subscribeModal.onOpen}
                        className="w-[300px]"
                    >
                        Subscribe
                    </Button>
                </div>
            )}
            {subscription && (
                <div className="flex flex-col gap-y-4">
                    <p>
                        You are currently on the{' '}
                        <b>{subscription?.prices?.products?.name}</b> plan.
                        <Button
                            onClick={redirectToCustomerPortal}
                            disabled={loading || isLoading}
                            className="w-[300px] mt-3"
                        >
                            Open customer portal
                        </Button>
                    </p>
                </div>
            )}
        </div>
    )
}
