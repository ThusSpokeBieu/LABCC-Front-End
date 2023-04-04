
<img src="https://user-images.githubusercontent.com/110699389/229649688-216b7904-e32b-4c5c-8997-467e03841362.gif" alt="LAB Collection Gif" width="75%">


# LABClothingCollection

O projeto de finalização do módulo 1 do curso DEVinHouse: Audaces. Tem como objetivo por em prática conhecimentos aprendidos sobre front-end, usando o framework Angular.

- [Vídeo de Apresentação do Projeto](https://drive.google.com/file/d/11GtGP30kmYYzwdD1WsTa8Fedma5zWVeP/view?usp=sharing))
- [Kanban Usado no projeto](https://trello.com/b/lrtFNE00/lab-clothing-collection)


## Indice

- [Dependências e Tecnologias](#dependências-e-tecnologias)
- [Como instalar](#como-instalar)
- [Como rodar](#como-rodar)
- [Módulos e Componentes](#módulos-e-componentes)
   - [Lobby - Sign In](#lobby---sign-in)
   - [Lobby - Sign Up](#lobby---sign-up)
   - [Lobby - Forgot Password](#lobby---forgot-password)
   - [Lab - Menu](#lab---menu)
   - [Lab - Dashboard](#lab---dashboard)
   - [Lab - Collection](#lab---collection)
   - [Lab - Model](#lab---model)
- [Services](#services)
- [Guards](#guards)


## Dependências e Tecnologias
- NodeJS
- PNPM (ou outro gerenciador de pacotes)
- AngularCLI
- Json-Server

Foram também usadas as tecnologias:
- Angular Material
- Toastr

## Como instalar

- Após baixar o projeto em sua máquina, você pode instalar ele usando o seu gerenciador de pacotes favoritos na pasta raíz.

```bash
pnpm install
```

- Por padrão, o projeto está usando o PNPM, mas caso você não o tenha, poderá configurar isso no arqiuvo angular.json, inserindo o gerenciador de preferência no: "packageManager": "pnpm".

<img src="https://user-images.githubusercontent.com/110699389/229651246-e9f206c3-5edf-413a-9f6a-3dcdefeb7a59.png" alt="Package Manager example" width="50%">



## Como rodar

- Você pode rodar o código usando o comando do AngularCLI

```bash
ng serve --open
```

- O projeto será compilado e abrirá em seu navegador. 

- Agora você também precisará rodar o json server para criar uma API falsa que será consumida pelo nosso front. Faça isso com o seguinte comando no repositório raíz:

```bash
json-server db/db.json
```

- Você pode acessar o projeto após criar sua conta.


## Módulos e Componentes

O projeto possui dois módulos principais: o Lobby, e o Lab. O primeiro é referente ao acesso não-autenticado, onde usuários podem fazer a autenticação via login, criar conta ou recuperar a senha. O segundo, Lab, é acessado apenas por usuários já autenticados, onde podem verificar um dashboard, ou realizar operações de CRUD com Coleções e Modelos. Há outros módulos, como o Material que serve apenas para fazer as importações do Material Icon.

### Lobby - Sign In
<img src="https://user-images.githubusercontent.com/110699389/229651043-46d20b45-a75b-4bc4-8528-b4df124da3b9.png" alt="Sign In Component" width="30%">

A primeira tela da aplicação é a de login, existe nela um formulário onde você insere o email e senha. As credenciais serão validadas, e se for, você conseguirá entrar. Existe uma validação para cada credencial, como por exemplo, ambas precisam ter no mínimo oito caracteres. Estando acessado, um passaporte será criado e gravado no cache do navegador, isso permitirá o usuário a acessar o módulo Lab.

A tela redireciona para a tela de cadastro e de recuperar a senha.

### Lobby - Sign Up
<img src="https://user-images.githubusercontent.com/110699389/229653662-372cf2a4-f455-46ab-adcf-94e9a7a58171.png" alt="Sign Up Component" width="30%">

É a tela de cadastro, onde é possível fazer uma nova conta de acesso. É um formulário com algumas informações que são válidadas. O CPF, por exe![chrome_Yhyshw5wQD]
mplo, deve ser apenas númerico e ter 14 digitos. Com a criação concluída, será adicionado uma conta User através de um Post no json-server. Agora, com a conta criada será possível o usuário entrar e acessar o módulo Lab.

### Lobby - Forgot Password
<img src="https://user-images.githubusercontent.com/110699389/229653777-e8ac430d-2cd2-4378-af27-12f390b91767.png" alt="Forgot Password Component" width="30%">

Tela para recuperar a senha, apesar da confirmação do e-mail enviado, não foi implementado nenhum serviço de envio de e-mail, já que era um projeto com foco em front-end.

### Lab - Menu
<img src="https://user-images.githubusercontent.com/110699389/229653864-3639e37b-10a3-4f84-8dc1-ce3e3653276c.png" alt="Lab Menu">

É um menu lateral para que permite o usuário a navegar entre os conteúdos e outros componentes do lab. "Obter ajuda" e "Enviar comentários" não foram implementados, já que não eram obrigatórios para o projeto.

### Lab - Header
<img src="https://i.imgur.com/Us5TYuF.png" alt="Lab Header">

O header do lab tem um toogle menu que permite o usuário a deslogar ao apagar o cache do navegador, além de ter duas opções não implementadas: "Conta" e "Configurações". Ele também tem um espaço para o avatar e um sino de notificações.

### Lab - Dashboard
<img src="https://i.imgur.com/sASlUTa.png" alt="Lab Dashboard"> 

O dashboard possui três cards: o número total de coleções, o número total de modelos e a média dos orçamentos.
Embaixo possui uma tabela que mostra sempre os cinco maiores orçamentos cadastrados no Lab.
Todos esses dados são conseguidos através de resquisições get feitas pelos serviços.

### Lab - Collections
<img src="https://i.imgur.com/YQZLZef.png" alt="Collection List"> 
<img src="https://i.imgur.com/DVwWcyL.png" alt="Collection Register"> 
<img src="https://i.imgur.com/QfXJj0S.png" alt="Edit Collection"> 


Tela responsável para fazer o CRUD de coleções, você pode listá-los, e, ao clicar em uma coleção, será capaz de fazer edições nela. Há também um botão que redireciona para a criação de novas coleções. A coleção será salva no banco de dados com id único, data de criação e data de atualização, através de uma requisição post. A edição da coleção é feita com um patch, para que não seja necessário atualizar toda a estrutura sempre que atualizar no json-server. A tela de edição também tem um botão para deletar coleções.

### Lab - Models
![Model List](https://user-images.githubusercontent.com/110699389/229656889-9d02b4c3-54fe-44a1-a7c5-fe6bc2aca0ab.png)
![Model Register](https://user-images.githubusercontent.com/110699389/229656978-24421e02-88eb-4bf0-abff-00f24139c423.png)
![Edit Model](https://user-images.githubusercontent.com/110699389/229657091-77b1acc7-b26b-43d8-9c6d-30618dd94112.png)

O CRUD de models, muito parecido com as telas do Collection, funciona igual. No formulário de edição e de criação existe um campo dinamico que permite relacionar um modelo para uma coleção.

## Services

No projeto existem alguns serviços para implementação de regra de negócio, são eles que buscam as informações da API falsa do JSON-Server, cria toda a lógica de tratativa e envia para os componentes. Também é responsável pela lógica da autenticação.

## Guards

Foi usado um authGuard para impedir que o módulo Lab seja acessado sem que o usuário esteja autenticado.

## Outros

Há coisas no projeto que ainda não foram implementadas devido ao pouco tempo que tive para realizá-lo (três dias basicamente). Mas, decidi não tirar ainda porque tenho planos para finalizar o projeto. 
