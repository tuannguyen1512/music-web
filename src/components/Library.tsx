'use client'

import {TbPlaylist} from 'react-icons/tb' 
import {AiOutlinePlus} from 'react-icons/ai'
import useAuthModal from '@/src/hooks/useAuthModal'
import { useUser } from '@/src/hooks/useUser'
import useUploadModal from '@/src/hooks/useUploadModal'
import { Song } from '@/types'
import { isTemplateExpression } from 'typescript'
import MediaItem from './MediaItem'
import useOnPlay from '@/src/hooks/useOnPlay'

interface Props{
    songs:Song[]
}

const Library = ({songs}:Props) => {

    const authModal = useAuthModal()
    const { user } = useUser()
    const uploadModal = useUploadModal()
    const onPlay = useOnPlay(songs)

    const onClick = () => {
        //if not logged in send to auth 
        if(!user){
            return authModal.onOpen()
        }
        return uploadModal.onOpen()

    }
  
    return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-2">
                {/*all the weird 'components' are just icons we got from react-icons*/}
                <TbPlaylist size={26} className='text-neutral-400'/>
                <p className='text-neutral-400 font-medium text-md'>Your Library</p>
            </div>
            <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 cursor-pointer hover:text-white transition'/> {/*to create the color change once hover effect do hover:text-somecolor and transition, also set the default color too*/}
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            {songs.map((song)=>(
                <MediaItem onClick={(id:string)=>onPlay(id)} key={song.id} data={song}/>
            ))}
        </div>
    </div>
  )
}

export default Library