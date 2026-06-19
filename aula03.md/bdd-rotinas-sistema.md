#### Login

```
Dado que estou na tela de login
Quando preencho email e senha corretos e clico em Entrar
Então sou redirecionado para o painel principal
```
```
Dado que estou na tela de login
Quando preencho email ou senha incorretos e clico em Entrar
Então vejo a mensagem "Login ou Senha inválidas"
```

---

#### CREATE — Cadastrar Usuário

```
Dado que estou na tela de cadastro
Quando preencho nome, email e senha e clico em Salvar
Então o usuário é cadastrado e aparece na listagem
```
```
Dado que estou na tela de cadastro
Quando preencho nome e senha e deixo email em branco e clico em Salvar
Então vejo a mensagem "Preencha todos os campos obrigatórios"
```

---

#### READ — Listar Usuários

```
Dado que estou autenticado
Quando acesso a listagem de usuários
Então vejo todos os usuários cadastrados
```

---

#### UPDATE — Editar Usuário

```
Dado que estou na tela de edição de um usuário
Quando altero o nome ou email e clico em Salvar
Então as informações são atualizadas na listagem
```

---

#### DELETE — Remover Usuário

```
Dado que estou na listagem de usuários
Quando clico em Remover e confirmo a ação
Então o usuário é removido da listagem
```
---