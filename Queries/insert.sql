INSERT INTO gravadora (nome, telefone, rua, numero_rua, home_page)
	VALUES ("Menos Records", "12981537463", "Rua dos Impossiveis", "3", "arthusentertainment.com.rs"); 
    
INSERT INTO album (descricao, data_compra, tipo_compra, data_gravacao, preco_compra, gravadora_id)
	VALUES ("Dark Side of the Moon", "2021-04-01", "Download", "2021-03-31", 2.00, 1);

INSERT INTO interprete (nome, tipo)
	VALUES ("Zé Ramalho", "solo");
    
INSERT INTO playlist (nome, data_criacao, tempo_execucao, numero_execucoes, data_ultima_execucao)
	VALUES ("Só as boas", "2021-04-01", 0, 0, null);

INSERT INTO tipo_composicao (descricao)
	VALUES ("opera");
    
INSERT INTO faixa (tempo_execucao, tipo_gravacao, num_faixa, descricao, tipo_composicao_id, album_id)
	VALUES(21600, "ADD", 1, "Sinônimos", 1, 1);

INSERT INTO periodo_musical (tempo_inicio, tempo_fim)
	VALUES("1300-01-01", "1600-01-01");

INSERT INTO compositor (nome, cidade_nascimento, pais_nascimento, data_nascimento, data_morte, periodo_musical_id)
	VALUES("Xitaozinho e Xororou", "Várzea Alegre", "Brasil", "1978-04-03", null, 1);
    
INSERT INTO faixas_da_playlist(faixa_id, playlist_id)
	VALUES(2, 2);
    
INSERT INTO faixas_do_compositor(faixa_id, compositor_id)
	VALUES(2, 1);

INSERT INTO faixas_do_interprete(faixa_id, interprete_id)
	VALUES(2, 1);


-- SELECTS    
SELECT * FROM record__company;
SELECT * FROM composer;
SELECT * FROM album;
SELECT * FROM interpreter;
SELECT * FROM playlist;
SELECT * FROM type_composition;
SELECT * FROM track;

-- DELETES
DELETE FROM playlist WHERE id = 2;


INSERT INTO `spotper`.`album`
(`id`,
`description`,
`date_recording`,
`date_purchase`,
`type_purchase`,
`cost_purchase`,
`record_company_id`)
VALUES
(<{id: }>,
<{description: }>,
<{date_recording: }>,
<{date_purchase: }>,
<{type_purchase: }>,
<{cost_purchase: }>,
<{record_company_id: }>);
