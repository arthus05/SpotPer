import { albumType } from '../types/albumType'
import { connection } from '../services/mysqldb'
import { OkPacket, RowDataPacket } from 'mysql2'

export const create = (album: Omit<albumType, 'id'>) => {
    const sqlQuery = 
    `INSERT INTO album (descricao, data_compra, tipo_compra, data_gravacao, preco_compra, gravadora_id)
    VALUES ("Dark Side of the Moon", "2021-04-01", "Download", "2021-03-31", 2.00, 1);
    `

    connection.query(
        sqlQuery,
        [
            album.description,
            album.datePurchase,
            album.typePurchase,
            album.dateRecording,
            album.pricePurchase,
            album.recordCompany,
        ],
        
    )
}


export const deleteAlbum = () => {


    const query = `DELETE FROM album WHERE name = ?`;

    connection.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log('Number of rows deleted = ' + rows);
    });
}

const newalbum: Omit<albumType, 'id'> = {
    description: "pop folk",
    datePurchase: new Date('2022-03-07'),
    typePurchase: "Digital",
    dateRecording: new Date('07/11/2021'),
    pricePurchase: 100000,
    recordCompany: "cadu_records",
}


create(newalbum)