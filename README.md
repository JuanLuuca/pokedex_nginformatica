# Pokedex

Bem-vindo ao projeto Pokedex! Este é um projeto de front-end desenvolvido com React usando a ferramenta `create-vite`. Ele permite visualizar informações e detalhes de diversos Pokémon. O projeto também possui um back-end para autenticação de usuário e gerenciamento de informações dos Pokémon capturados e favoritos.

## Instalação

Para começar, clone o repositório do front-end em sua máquina local:

```shell
git clone https://github.com/JuanLuuca/pokedex_nginformatica.git
```

Em seguida, acesse o diretório do projeto e instale as dependências:

```shell
cd pokedex_nginformatica
npm install
```

Para rodar o projeto, execute o seguinte comando:

```shell
npm run dev
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador.

Antes de executar o front-end, certifique-se de clonar e configurar o back-end também. O back-end fornece as informações de autenticação de usuário e os endpoints para gerenciar os Pokémon capturados e favoritos.

## Clonando e configurando o back-end

Usando o mongodb atlas clone o repositório do back-end em sua máquina local:

```shell
git clone https://github.com/JuanLuuca/back-endPokedex_nginformatica.git
```

Em seguida, acesse o diretório do projeto do back-end e instale as dependências:

```shell
cd back-endPokedex_nginformatica
npm install
```

Configure o arquivo `.env` com as seguintes informações:

```shell
PORT=4000
MONGOATLASUSER="juanluuca3"
MONGOATLASPASSWORD="BAnTE8QSKqWr4Kgy"
```

Certifique-se de fornecer as informações corretas para a conexão com o MongoDB.

## Executando o back-end

Após a conclusão da instalação e configuração, você pode iniciar o back-end executando o seguinte comando no diretório do projeto:

```shell
npm run start-dev
```

Isso iniciará o servidor do back-end e estabelecerá a conexão com o banco de dados MongoDB.

Agora você está pronto para explorar o sistema Pokedex! Basta acessar o aplicativo front-end e navegar pelas informações e detalhes dos Pokémon disponíveis.

## Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

- React: Uma biblioteca JavaScript para construir interfaces de usuário.
- TypeScript: Uma linguagem de programação que adiciona tipagem estática ao JavaScript.
- Tailwind CSS: Um framework de CSS utilitário para criar interfaces responsivas e estilizadas.
- React Modal: Uma biblioteca para criar modais (pop-ups) no React.
- Express: Um framework de aplicativo da web para Node.js.
- Mongoose: Uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelar os dados do aplicativo e interagir com o MongoDB.

## Espero que gostem do Projeto
