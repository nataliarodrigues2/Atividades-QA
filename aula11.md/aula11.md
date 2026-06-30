**26/06/2026**

---

### Automação de Testes de API

#### O que é?

Um teste de API é um tipo de teste de software que envolve a
verificação direta das APIs (interfaces de programação de
aplicativos) para determinar se elas estão funcionando conforme
esperado. Ao contrário dos testes de interface do usuário, que
testam a funcionalidade final através da interface gráfica, os
testes de API são realizados em nível de código, focando na
lógica de negócio e na resposta de serviço.

### Supertest

Biblioteca utilizada para realizar requisições HTTP durante os testes, permitindo testar a API sem a necessidade de iniciar o servidor manualmente.

**Instalação:**

```bash
npm i --save-dev supertest
```

### Configuração

Para que o Supertest possa utilizar a aplicação, é necessário exportar o `app` e impedir que o servidor seja iniciado durante os testes.

**Exemplo:**

```javascript
if (!process.env.TEST) {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}

export default app;
```

### Estrutura dos testes

```text
test/
└── api/
    └── index.test.js
```

### Testes de API

Os testes são realizados utilizando o Supertest para enviar requisições à API e validar:

- Código de status HTTP (`statusCode`);
- Corpo da resposta (`response.body`);
- Resultado esperado da operação;
- Tratamento de erros e exceções.

**Exemplo:**

```javascript
const response = await request(app)
    .post("/api/somar")
    .send({
        num1: 5,
        num2: 3
    });

expect(response.statusCode).toBe(200);
expect(response.body.resultado).toBe(8);
```

**Executar:**

```bash
npm test
```

---

### Atividade

Adicionar o **Supertest** ao projeto e configurar a aplicação para permitir testes de API.

Criar testes automatizados para todos os endpoints da calculadora:

- Soma
- Subtração
- Multiplicação
- Divisão
- Potência
- Raiz quadrada

Além dos cenários de sucesso, implementar testes para validação de erros, como envio de valores inválidos, divisão por zero e raiz quadrada de números negativos.

Ao final, executar os testes e gerar o relatório de cobertura (Coverage).

### Resultado

- Repositório da atividade: https://github.com/nataliarodrigues2/base-aulas-teste-debug-pt.git
- Relatório de cobertura (Coverage): [coverage.png](./coverage.png)

Cobertura obtida:

- Statements: 96,92%
- Branches: 96,42%
- Functions: 92,30%
- Lines: 96,92%

Foram executados 99 testes, todos aprovados.

---