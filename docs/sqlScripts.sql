DROP SCHEMA IF EXISTS movieblog;
CREATE SCHEMA movieblog;
USE movieblog;

CREATE TABLE IF NOT EXISTS `movieblog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `userscol` VARCHAR(45) NULL,
  `dateCreated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
  
  CREATE TABLE IF NOT EXISTS `movieblog`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `dateCreated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `usersId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_movies_users_idx` (`usersId` ASC) VISIBLE,
  CONSTRAINT `fk_movies_users`
    FOREIGN KEY (`usersId`)
    REFERENCES `movieblog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
INSERT INTO users(email, password) VALUES
	('juku@juurikas.ee', '$2b$10$21b5RcGh6nlo08wlqXdga.7KhTEfQEfjPMcooun3Ks7yXA3LgIW.O');
  
INSERT INTO movies(title, description, usersId) VALUES
	('Esimene postitus', 'Esimese postituse sisu', 1),
    ('Teine postitus', 'Teise postituse sisu', 1);
    
SELECT * FROM users;
SELECT id, email FROM users;

SELECT * FROM movies;

SELECT P.id, P.title, P.description, U.email
	FROM movies P
    INNER JOIN users U on P.usersId = U.id;