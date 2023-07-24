'use client'

import { Song } from '@/typings'
import SongItem from './SongItem'
import useOnPlay from '@/hooks/useOnPlay'

export default function PageContent({ songs }: { songs: Song[] }) {
    const onPlay = useOnPlay(songs)

    if (songs.length === 0)
        return (
            <div className="mt-4 text-neutral-400">
                <p>No songs available.</p>
            </div>
        )

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {songs.map((song) => (
                <SongItem
                    key={song.id}
                    data={song}
                    onClick={(id: string) => onPlay(id)}
                />
            ))}
        </div>
    )
}
