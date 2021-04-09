import { playlistType } from '../types/playlistType'

import { recordCompanyType } from '../types/recordCompanyType'
import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (playlist: Omit<playlistType, 'id'>) => {
    const sqlQuery = 
    `
    INSERT INTO playlist (nome, data_criacao, tempo_execucao, numero_execucoes, data_ultima_execucao)
    VALUES (?, ?, ?, ?, ?)
    `

    connection.query(
        sqlQuery,
        [
            playlist.name, 
            playlist.creationDate,
            playlist.executionTime,
            playlist.numberPlays,
            playlist.lastPlayDate, 
        ],
        
    )
}

const playlistMayara: Omit<playlistType, 'id'> = {
    creationDate: new Date('1997-04-22'),
    name: 'Mayara Pias',
    executionTime: 2,
    numberPlays: 9195126,
    lastPlayDate: new Date('2020-04-21')
}

create(playlistMayara)