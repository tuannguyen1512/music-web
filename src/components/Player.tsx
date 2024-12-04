'use client'

import useGetSongById from '@/src/hooks/useGetSongById'
import usePlayer from '@/src/hooks/usePlayer'
import useLoadSongUrl from '@/src/hooks/useLoadSongUrl'
import PlayerContent from './PlayerContent'

export const Player = () => {
    const player = usePlayer()
    const {song} = useGetSongById(player.activeId)

    const songUrl = useLoadSongUrl(song!) //get the url of the song

    if(!song || !songUrl || !player.activeId){
        return null
    }

    return (
        <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
            <PlayerContent song={song} key={songUrl} songUrl={songUrl}/>
        </div>
    )
}
