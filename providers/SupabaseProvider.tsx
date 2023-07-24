'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { Database } from '@/types_db'
import { BaseProps } from '@/typings'

export default function SupabaseProvider({ children }: BaseProps) {
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    )
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}
