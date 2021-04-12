CREATE TABLE record_company(
	id INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(80),
    phone VARCHAR(11),
    address VARCHAR(80),
    address_number INT,
    homepage VARCHAR(80),
    PRIMARY KEY (id) 
);

CREATE TABLE playlist(
	id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80),
    date_creation DATE,
    time_execution INT,
    number_executions INT,
    date_last_execution DATE,
    PRIMARY KEY (id)
);

CREATE TABLE interpreter(
	id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80),
    `type` VARCHAR(80),
    PRIMARY KEY (id)
);

CREATE TABLE musical_period(
	id INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(80),
    time_start DATE,
    time_end DATE,
    PRIMARY KEY (id)
);

CREATE TABLE type_composition(
	id INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(80),
    PRIMARY KEY (id)
);

CREATE TABLE album(
	id INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(80),
    date_recording DATE,
    date_purchase DATE,
    type_purchase VARCHAR(80),
    cost_purchase FLOAT,
    record_company_id INT,
    FOREIGN KEY (record_company_id) REFERENCES record_company(id),
    PRIMARY KEY (id)
);

CREATE TABLE composer(
	id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80),
    city_birth VARCHAR(80),
    country_birth VARCHAR(80),
    date_birth DATE,
    date_death DATE,
    musical_period_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (musical_period_id) REFERENCES musical_period(id)
);

CREATE TABLE track(
	id INT NOT NULL AUTO_INCREMENT,
    time_execution INT,
    type_recording VARCHAR(80),
    number_track INT,
    `description` VARCHAR(80),
    type_composition_id INT,
    album_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (type_composition_id) REFERENCES type_composition(id),
    FOREIGN KEY (album_id) 
		REFERENCES album(id)
        ON DELETE CASCADE
);

CREATE TABLE tracks_composer(
	track_id INT,
    composer_id INT,
	FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (composer_id) REFERENCES composer(id)
);

CREATE TABLE tracks_playlist(
	track_id INT,
    playlist_id INT,
	FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);

CREATE TABLE tracks_interpreter(
	track_id INT,
    interpreter_id INT,
	FOREIGN KEY (track_id) REFERENCES track(id),
    FOREIGN KEY (interpreter_id) REFERENCES interpreter(id)
);