import { interpreterType } from '../types/interpreterType'

import { recordCompanyType } from '../types/recordCompanyType'
import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (interpreter: Omit<interpreterType, 'id'>) => {
    const sqlQuery = 
    `
    INSERT INTO interprete (nome, tipo)
    VALUES (?, ?);
    `
    connection.query(
        sqlQuery,
        [
            interpreter.name, 
            interpreter.type,
        ],
        
    )
}
export const deleteiterpreter = () => {


    const query = `DELETE FROM interprete WHERE name = ?`;

    connection.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log('Number of rows deleted = ' + rows);
    });
}
export const updateinterpreter = (interpreter: Omit<interpreterType, 'id'>) => {
    const sqlQuery = 
    `
    UPDATE interpreter
        SET nome = ?, tipo = ?,WHERE id = ?;
    `

    connection.query(
        sqlQuery,
        [
            interpreter.name, 
            interpreter.type, 
        ],
        
    )
}
const newInterpreter: Omit<interpreterType, 'id'> = {
    name: "Arthus", 
    type: "orquestra",
}

create(newInterpreter)