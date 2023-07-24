'use client'

import useGetSongsById from '@/hooks/useGetSongsById'
import useLoadSongUrl from '@/hooks/useLoadSongUrl'
import usePlayer from '@/hooks/usePlayer'
import PlayerContent from './PlayerContent'

export default function Player() {
    const player = usePlayer()
    const { song } = useGetSongsById(player.activeId)

    const songUrl = useLoadSongUrl(song!)

    if (!song || !songUrl || !player.activeId) {
        return null
    }

    return (
        <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
            <PlayerContent key={songUrl} song={song} songUrl={songUrl} />{' '}
            {/* The key here allow the inner hooks to update the info about the new element, key => delete the object when the songUrl change (the behaviour we want) */}
        </div>
    )
}
