'use client'

import { BounceLoader } from 'react-spinners'

import Box from '@/components/Box'

export default function loading() {
    return (
        <Box className="h-full flex items-center justify-center">
            <BounceLoader color="#22c55e" speedMultiplier={1.5} />
        </Box>
    )
}
