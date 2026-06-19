**22/05/2026**

---

### Automação de Testes

#### O que é?

É o processo de usar ferramentas e scripts para executar testes de software sem intervenção humana, simulando ações do usuário e verificando se o software funciona conforme o esperado.

- **Script de teste** — conjunto de instruções que automatizam um cenário de teste
- **Framework de teste** — estrutura para escrever e executar testes de forma organizada
- **Seletores** - identifica elementos na interface do usuário ou no código que serão manipulados durante o teste
- **Asserts** — verificam se o resultado real é igual ao esperado
- **Dados de teste** — inputs necessários para executar os testes (dados de entrada, configurações de ambiente, estados iniciais e resultados esperados)
- **Relatórios de teste** — documentos gerados após a execução com os resultados obtidos, testes executados e falhas encontradas
- **Reprodutibilidade** — os mesmos testes podem ser executados várias vezes com o mesmo resultado
- **Cobertura de código** — porcentagem do código exercida pelos testes automatizados

> "Seja esperto, evite retrabalho." — Um dos grandes benefícios da automação é prover feedback de forma frequente desde o início das atividades de desenvolvimento.

### Jest

Framework de testes em JavaScript. Funciona com Node.js, React, Vue.js e outros.

**Instalação:**
```bash
npm i --save-dev jest cross-env
```

**Script no `package.json`:**
```json
"test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
```

**Estrutura básica (`test/index.test.js`):**
```javascript
describe('Testes do primeiro exercício', () => {
  // Executado antes de TODOS os testes
  beforeAll(async() => { 
    console.info('Iniciando TDD com jest!');
  });

  //Executado após TODOS os testes
  afterAll(() => { 
    console.info('Encerrado os testes');

   });

  it('Should sum two numbers', () => {
    const result = exercicio1(1, 2)
    
    expect(result).toBe(3);
  })
})
```

| Função | O que faz |
|---|---|
| `describe` | Agrupa os testes |
| `it` | Define um teste específico |
| `beforeAll` | Executa antes de todos os testes |
| `afterAll` | Executa depois de todos os testes |
| `expect` | Valor recebido |
| `toBe` | Valor esperado |

**Executar:**
```bash
npm test
```

---

### Atividade

Ajuste o seu código para possuir as demais funções matemáticas e se tornar uma API com todos os 4 métodos básicos, não esqueça de tratar os erros base (como por exemplo `isNaN`).

Faça todos os testes unitários criados na planilha de teste.

**Código base**: https://github.com/renanponick/base-aulas-teste-debug-pt

**Fork da atividade**: https://github.com/nataliarodrigues2/base-aulas-teste-debug-pt.git

**Link para a planilha de Plano de Teste**: https://senacsc754-my.sharepoint.com/:x:/g/personal/natalia_rodrigues3_alunos_sc_senac_br/IQALEUmvudCdR6ldcJh2XGlGAQOEfBFpPPtOJARlUxkcP9w?e=N8pBwb

---