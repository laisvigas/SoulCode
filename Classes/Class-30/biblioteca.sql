-- SQL (Structed Query Language)

-- Criar um novo banco de dados
CREATE DATABASE biblioteca;

-- Seleciona o banco de dados
USE biblioteca;

-- Apagar um banco de dados
-- DROP DATABASE biblioteca;

-- Criar uma nova tabela
CREATE TABLE livros (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	titulo TEXT NOT NULL,
    paginas INT UNSIGNED NOT NULL,
    autor TEXT NOT NULL,
    categoria ENUM("Terror", "Tecnologia", "Romance", "Ação") DEFAULT "Ação",
    ano_publicacao YEAR,
    edicao VARCHAR(20) DEFAULT "1ª Edição",
    data_publicacao DATE,
    isbn VARCHAR(13) UNIQUE
);

DESCRIBE livros;

DROP TABLE livros;

-- inserir uma nova linha na tabela

INSERT INTO 
	livros (titulo, paginas, autor) 
VALUES 
	("Java para iniciantes", 684, "Herbert Schildt"),
    ("Java para iniciantes", 684, "Herbert Schildt"),
    ("Java para iniciantes", 684, "Herbert Schildt");

SELECT * FROM livros;

