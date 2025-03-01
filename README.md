# BTec - Incubadora de Negócios de Impacto e Base Tecnológica de Itabira

## Requisitos do Ambiente

Para rodar o projeto localmente, certifique-se de ter a seguinte ferramenta instalada:

- Node.js >= 20.18.0

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Maia-th/BTec.git
cd BTec
```

## Instale as dependências do projeto:

```bash
npm install
```

## Inicie o projeto:

```bash
npm start
```

## Fluxo de Desenvolvimento

Este projeto segue o modelo GitFlow para organização das branches e fluxo de desenvolvimento.

- `main`: Branch principal que contém o código em produção.
- `develop`: Branch de desenvolvimento com o código que será testado antes de ir para a produção.
- `feature` branches: Cada nova funcionalidade ou melhoria deve ser desenvolvida em uma branch de feature (feature/nome-da-feature).
- `hotfix` branches: Correções de bugs urgentes devem ser feitas em branches específicas (hotfix/nome-do-hotfix).
- `release` branches: Usadas para preparar uma nova versão de produção.

### Passos para contribuir com uma nova feature ou correção

1. Crie uma nova branch a partir de develop:

> Antes de criar a nova branch, execute um `git pull origin develop` para garantir que a sua branch `develop` local esteja atualizada com a versão mais recente do repositório remoto.

```bash
git checkout -b feature/nome-da-feature develop
```

2. Desenvolva a funcionalidade ou correção de bug.

3. Ao concluir, faça o commit das suas alterações:

```bash
git add .git commit -m "feat: Descrição da feature ou correção"
```

4. Faça o push da branch:

```bash
git push origin feature/nome-da-feature
```

5. Abra um Pull Request (PR) para a branch `develop`.

6. Exclua a branch criada após o merge com a branch `develop`:

```bash
git branch -d feature/nome-da-feature
```

### Passos para Criar uma Branch `release`

1. Crie uma nova branch `release` a partir da branch `develop`:

> Antes de criar a nova branch, execute um `git pull origin develop` para garantir que a sua branch `develop` local esteja atualizada com a versão mais recente do repositório remoto.
 
```bash
git checkout -b release/v-numero-da-versao develop
```

2. Faça os ajustes finais, correções de bugs e atualizações de documentação na branch `release`.

3. Quando a branch `release` estiver pronta para ser lançada, abra os Pull Request (PR) para as branches `main` e `develop`.

4. Exclua a branch `release` após o merge com as branches `main` e `develop`:

```bash
git branch -d release/v-numero-da-versao
```

## Regras para Aprovação de PR

- Todo PR deve ser revisado e aprovado por um desenvolvedor antes de ser mesclado à branch `develop` ou `main`.

## Bibliotecas

- [Phosphor - Icons](https://phosphoricons.com)

- [Axios - HTTP Client](https://axios-http.com/docs/intro)
