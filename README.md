# authTddJest
Projeto com login, e testes unitários e de integração TDD com jest. 

dependencias: nodejs e docker.

crie um container docker com postgress assim:
docker run --name postgres-container -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=nodeauth -p 5432:5432 -d postgres

rode:
yarn install

execute os teste com :
yarn test
