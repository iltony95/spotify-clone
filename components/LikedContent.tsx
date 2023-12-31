'use client'

import { useRouter } from 'next/navigation'

import { Song } from '@/typings'
import { useUser } from '@/hooks/useUser'
import { useEffect } from 'react'
import MediaItem from './MediaItem'
import LikeButton from './LikeButton'
import useOnPlay from '@/hooks/useOnPlay'

interface Props {
    songs: Song[]
}

export default function LikedContent({ songs }: Props) {
    const router = useRouter()
    const { isLoading, user } = useUser()
    const onPlay = useOnPlay(songs)

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        }
    }, [isLoading, user, router])

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6">
                <p className="text-neutral-400">No liked songs.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full p-6">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem
                            onClick={(id: string) => onPlay(id)}
                            data={song}
                        />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    )
}
