import { composerType } from '../types/composerType'
import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (composer: Omit<composerType, 'id'>) => {
    const sqlQuery = 
    `INSERT INTO compositor (nome, cidade_nascimento, pais_nascimento, data_nascimento, data_morte, 
        periodo_musical_id)
    VALUES(?, ?, ?, ?, ?, ?);
    `

    connection.query(
        sqlQuery,
        [
            composer.name,
            composer.cityBirth,
            composer.countryBirth,
            composer.dateBirth,
            composer.dateDeath,
            composer.musicalPeriod, 
        ],
        
    )
}

export const deletecomposer = () => {


    const query = `DELETE FROM compositor WHERE name = ?`;

    connection.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log('Number of rows deleted = ' + rows);
    });
}
export const updatecomposer = (composer: Omit<composerType, 'id'>) => {
    const sqlQuery = 
    `
    UPDATE composer
        SET nome = ?, cidade_nascimento = ?, pais_nascimento = ?, pais_nascimento = ?, data_nascimento =? 
        data_morte =? periodo_musical_id = ? WHERE id = ?;
    `

    connection.query(
        sqlQuery,
        [
            composer.name,
            composer.cityBirth,
            composer.countryBirth,
            composer.dateBirth,
            composer.dateDeath,
            composer.musicalPeriod, 
        ],
        
    )
}

const newcomposer_cadu: Omit<composerType, 'id'> = {
   name:"Jared",
   cityBirth:"flórida",
   countryBirth:"Estados Unidos",
   dateBirth: new Date('2022-03-07'),
   dateDeath: new Date('2022-03-07'),
   musicalPeriod:"moderno",
}

create(newcomposer_cadu)