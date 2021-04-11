import { recordCompanyType } from '../types/recordCompanyType'
import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (recordCompany: Omit<recordCompanyType, 'id'>) => {
    const sqlQuery = 
    `INSERT INTO gravadora (nome, telefone, rua, numero_rua, home_page)
    VALUES ("Menos Records", "12981537463", "Rua dos Impossiveis", "3", "arthusentertainment.com.rs");
    `

    connection.query(
        sqlQuery,
        [
            recordCompany.name,
            recordCompany.phone,
            recordCompany.street,
            recordCompany.number,
            recordCompany.homepage, 
           
        ],
        
    )
}
export const deleterecordCompany = () => {


    const query = `DELETE FROM gravadora WHERE name = ?`;

    connection.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log('Number of rows deleted = ' + rows);
    });
}
export const updaterecordCompany = (recordCompany: Omit<recordCompanyType, 'id'>) => {
    const sqlQuery = 
    `
    UPDATE recordCompany
        SET nome = ?, telefone = ?, rua,rua = ?, numero_rua = ?, home_page = ?, data_ultima_execucao =?
        WHERE id = ?;
    `

    connection.query(
        sqlQuery,
        [
            recordCompany.name,
            recordCompany.phone,
            recordCompany.street,
            recordCompany.number,
            recordCompany.homepage, 
        ],
        
    )
}

const newrecordCompany: Omit<recordCompanyType, 'id'> = {
    name: "cadu_records",
    phone: "40028922",
    street: "alameda dos anjos",
    number: 7,
    homepage: "spotper",
}

create(newrecordCompany)