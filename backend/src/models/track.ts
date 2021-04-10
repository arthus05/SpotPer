import { trackType } from '../types/trackType'
import { composerType } from '../types/composerType'

import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (track: Omit<trackType, 'id'>) => {
    const sqlQuery = 
    `
    INSERT INTO faixa (tempo_execucao, tipo_gravacao, 
    num_faixa, descricao, tipo_composicao_id, album_id)
    VALUES(?, ?, ?, ?, ?, ?);
    `

    connection.query(
        sqlQuery,
        [
            track.timeExecution,
            track.typeRecording,
            track.trackNumber,
            track.description,
            track.composition,
            track.album,
        ],
        
    )
}
export const deletetrack = () => {


    const query = `DELETE FROM faixa WHERE name = ?`;

    connection.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log('Number of rows deleted = ' + rows);
    });
}
export const updatetrack = (track: Omit<trackType, 'id'>) => {
    const sqlQuery = 
    `
    UPDATE track
        SET tempo_execucao = ?, tipo_gravacao = ?, num_faixa = ?, descricao = ?, tipo_composicao_id =?
        album_id = ?, WHERE id = ?;
    `

    connection.query(
        sqlQuery,
        [
            track.timeExecution,
            track.typeRecording,
            track.trackNumber,
            track.description,
            track.composition,
            track.album,
        ],
        
    )
}


const newTrack: Omit<trackType, 'id'> = {
    timeExecution: 20,
    typeRecording: "ADD",
    trackNumber: 1,
    description: "nao sei",
    composition: ,
    album: ,
    
}

create(newTrack)