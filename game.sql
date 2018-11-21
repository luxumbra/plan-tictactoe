CREATE TABLE games (
        id int(11) NOT NULL AUTO_INCREMENT,
        player1email varchar(128) NOT NULL,
		player2email varchar(128) NOT NULL,
        winner varchar(128) NOT NULL,
        PRIMARY KEY (id),
        KEY winner (winner)
)