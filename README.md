
# Cypress POC

## Clonar o Projeto
`git clone https://github.com/lucian-cit/poc-cypress.git`

## Instalar as Dependências
`npm install`

## Executar pelo Cypress Runner
`npm run cypress:open` 

## Executar pelo CLI
`npm run test:e2e:ci`

## Estrutura do Projeto
```dir
poc-cypress
└───cypress
│    └───environments: configurações por ambiente
│    └───fixtures: dados para mocks
│    └───integration
│    │   └───features: cenários de teste em Gherkin
│    │   └───plugins: extensões e pré-processadores
│    │   └───supoort: 
│    │       └───elements: identificadores aos elementos DOM
│    │       └───functions: utilitários para conversão de dados, resolução, etc
│    │       └───page_data: dados a serem utilizados pelos testes nas interações com as páginas\APis
│    │       └───page_objects: classes para interação com os elementos
│    │       └───step_definitions: implementação das keyworks utilizadas no Gherkin
└───results: diretório dos relatórios de execução
|   cypress.json: configurações do Cypress
|   package.json: targets de execução e dependências
```
