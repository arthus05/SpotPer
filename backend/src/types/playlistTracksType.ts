import { trackType } from './trackType'
import { playlistType } from './playlistType'

export interface playlistTracksType {
    id: number
    track: trackType
    playlist: playlistType
}