-- Crie um banco de dados chamado loja_online.
CREATE DATABASE loja_online;

Use loja_online;

-- Dentro do banco de dados loja_online, crie uma tabela chamada produtos com os seguintes campos:
-- id, nome, descricao, categoria, preco, quantidade, criado_em.
CREATE TABLE produtos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL,
    categoria TEXT NOT NULL,
    preco INT UNSIGNED NOT NULL,
    quantidade INT UNSIGNED NOT NULL,
    criado_em DATE
);

-- Insira pelo menos 8 registros na tabela produtos com valores fictícios.
INSERT INTO 
    produtos (nome, descricao, categoria, preco, quantidade, criado_em) 
VALUES 
    ('Stray', 'Stray é um jogo de aventuras felinas na terceira pessoa que decorre em becos iluminados por néon numa cibercidade decadente', 'Jogos', 100, 10, '2024-01-28'),
    ('Zelda Breath of the Wild', 'É o décimo nono título da série The Legend of Zelda e foi lançado mundialmente para Wii U e Nintendo Switch em 3 de março de 2017', 'Jogos', 300, 5, '2017-01-28'),
    ('Red Dead Redemption', 'Vive a aventura épica do faroeste que definiu os gostos de uma geração de jogadores', 'Jogos', 200, 3, '2010-01-28'),
    ('The Witcher 3: Wild Hunt', 'Acompanhe Geralt de Rívia em uma aventura épica para encontrar sua filha adotiva em um mundo cheio de monstros e intrigas', 'Jogos', 250, 5, '2015-05-19'),
    ('Elden Ring', 'Desvende os segredos de um vasto mundo interconectado e desafiador, criado em parceria com George R.R. Martin', 'Jogos', 270, 4, '2022-02-25'),
    ('Grand Theft Auto V', 'Mergulhe na vida de três protagonistas em uma Los Santos cheia de ação, crimes e liberdade total', 'Jogos', 210, 3, '2013-09-17'),
    ('Final Fantasy VII Remake', 'Reviva a jornada de Cloud e seus amigos em uma releitura moderna e emocionante de um clássico do RPG', 'Jogos', 220, 2, '2020-04-10'),
    ('Cyberpunk 2077', 'Mergulhe em um mundo futurista e distópico, onde suas escolhas moldam a narrativa em Night City', 'Jogos', 260, 4, '2020-12-10');

-- Exiba todos os produtos cadastrados.
SELECT * FROM produtos;

-- Exiba apenas os produtos com preço maior que 50.
SELECT * FROM produtos WHERE preco > 50;

-- Exiba o nome e a quantidade de todos os produtos em estoque.
SELECT nome, quantidade FROM produtos;

-- Liste os produtos ordenados por preço em ordem decrescente.
SELECT * FROM produtos ORDER BY preco DESC;

-- Encontre os 5 produtos mais baratos.
SELECT * FROM produtos ORDER BY preco ASC LIMIT 5;

-- Exiba os produtos cujo nome contenha a palavra "smart".
SELECT * FROM produtos WHERE nome LIKE '%smart%';

-- Conte a quantidade total de produtos cadastrados no banco.
SELECT COUNT(*) AS total_produtos FROM produtos;

-- Mostre o preço médio de todos os produtos por categoria.
SELECT categoria, AVG(preco) AS preco_medio FROM produtos GROUP BY categoria;

-- Atualize o preço de um produto específico para um novo valor.
UPDATE produtos SET preco = 150 WHERE id = 1;  

-- Delete um produto cujo ID seja fornecido.
DELETE FROM produtos WHERE id = 4;  






