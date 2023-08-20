# Beer Tap Dispenser

## Index

- <a href="#description">Descrição</a>
- <a href="#funcionalities">Funcionalidades</a>
- <a href="#technologies">Tecnologias</a>
- <a href="#organization">Organização do diretório</a>



## Descrição <a name="description"></a>

Este projeto consiste em uma API para gerenciar a fila virtual de um supermercado. Através dessa API, os clientes podem acessar o site pelo celular e entrar na fila virtual do supermercado, sem a necessidade de estar fisicamente nela. Enquanto esperam, os clientes têm a liberdade de fazer outras coisas no mercado. Eles também podem acompanhar a posição deles na fila através do aplicativo.


## Funcionalidades <a name="functionalities"></a>

### Cliente

Admin will have total control on the dispensers and will be able to generate final report.

- [x] Solicitar entrada na fila virtual
- [x] Verificar a posição na fila
- [x] Acompanhar atualizações da posição na fila




## Tecnologias <a name="technologies"></a>

- [x] NodeJs - Backend
- [x] Express - Framework web

### Dependências

1. Express-Async-Errors
2. Typescript
3. Cors - Cross-Origin Resource sharing



## Organização dos diretórios <a name="organization"></a>

A organização das pastas do projeto foi cuidadosamente planejada para garantir uma estrutura clara e modular. Toda a lógica do sistema está concentrada no diretório "src", onde encontramos três diretórios principais: "Controller" e "Service".

Os principais processos e funcionalidades do sistema são tratados nos diretórios "Service" e "Controller". Em "Service", cada entidade do projeto possui um diretório específico que contém classes que implementam a lógica de negócios relacionada a essas entidades.

Por outro lado, os controladores são responsáveis por receber informações do frontend como o ID do cliente, por exemplo. 

Além disso, a definição das rotas da API também é feita de maneira clara em "routes.ts", onde cada função do controlador é mapeada para uma rota específica e um método de requisição apropriado.

Essa estrutura modular permite uma manutenção mais eficiente e escalabilidade do projeto, tornando-o mais organizado e facilitando o trabalho de outros desenvolvedores que possam trabalhar no código. 
