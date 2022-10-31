CREATE TABLE picture (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  filename varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  blurhash varchar(255) NOT NULL,
  width int NOT NULL,
  height int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

