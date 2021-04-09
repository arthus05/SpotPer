import { recordCompanyType } from './recordCompanyType'

export interface albumType {
    id: number
    description: string
    datePurchase: Date
    typePurchase: string
    dateRecording: Date
    pricePurchase: number
    recordCompany: recordCompanyType
}