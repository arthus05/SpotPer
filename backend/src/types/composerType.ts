import { musicalPeriodType } from './musicalPeriodType'

export interface composerType {
    id: number
    name: string
    cityBirth: string
    countryBirth: string
    dateBirth: Date
    dateDeath: Date
    musicalPeriod: musicalPeriodType
}