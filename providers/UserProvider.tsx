'use client'

import { UserContextProvider } from '@/hooks/useUser'
import { BaseProps } from '@/typings'

export default function UserProvider({ children }: BaseProps) {
    return <UserContextProvider>{children}</UserContextProvider>
}
