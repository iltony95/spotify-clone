'use client'

import Box from '@/components/Box'

export default function error() {
    return (
        <Box className="h-full flex items-center justify-center">
            <div className="text-neutral-400">
                <p className="text-xl">Something went wrong.</p>
            </div>
        </Box>
    )
}
