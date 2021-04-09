import { albumType } from './albumType'
import { compositionType } from './compositionType'

export interface trackType {
    id: number
    timeExecution: number
    typeRecording: string
    trackNumber: number
    description: string
    composition: compositionType
    album: albumType
}