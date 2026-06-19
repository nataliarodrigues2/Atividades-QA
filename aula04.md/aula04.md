**13/03/2026**

---

### Níveis de Teste

| Nível | Exemplo |
|---|---|
| **Componentes** | Testar uma função que calcula desconto |
| **Integração** | Verificar se o login se comunica com o banco |
| **Sistema** | Fluxo completo: login → carrinho → pagamento |
| **Aceite** | Cliente valida se o relatório está correto |


---

### Tipos de Teste

| Tipo | Exemplo |
|---|---|
| **Funcional** | Login válido redireciona para o painel |
| **Não Funcional** | Sistema responde em menos de 2s com 1000 usuários |
| **Caixa-Branca** | Garantir que todos os `if/else` sejam executados |
| **Relacionado à Mudança** | Após deploy, verificar se nada quebrou |

---

### Técnicas de Teste

**Caixa-Preta**

| Técnica | Exemplo |
|---|---|
| **Particionamento de equivalência** | Campo de 1 a 100: testar um valor abaixo, um dentro e um acima |
| **Análise de valor limite** | Campo de 1 a 100: testar 1, 2, 99 e 100 |
| **Tabela de decisão** | Empréstimo: maior de 18 E renda > R$1000 → aprovado |
| **Transição de estado** | Pedido: Novo → Confirmado → Enviado → Entregue |
| **Caso de uso** | Login: sucesso, senha incorreta, sem usuário preenchido |

---

**Caixa-Branca**

| Técnica | Exemplo |
|---|---|
| **Cobertura de instruções** | Garantir que cada linha de código seja executada ao menos uma vez |
| **Decisão e cobertura** | Testar cada `if/else` como verdadeiro e falso |
| **O valor da instrução e teste de decisão** | Executar todas as instruções e testar todas as possíveis condições dentro das decisões lógicas. |

---

**Baseadas na Experiência**

| Técnica | Exemplo |
|---|---|
| **Suposição de erro** | Antecipar falhas com base em experiências anteriores |
| **Exploratório** | Navegar pelo sistema sem roteiro, guiado pela intuição |
| **Lista de verificação** | Seguir um checklist para não omitir testes importantes |

---

### Erro x Defeito x Falha

- **Erro (engano)** — erro humano produzindo resultado incorreto.
- **Defeito (bug)** — algo implementado de maneira incorreta.
- **Falha** — comportamento inesperado do software

---

### Atividade

Anotar no repositório informações importantes sobre os Princípios, Tipos, Níveis e Técnicas de teste com exemplos de cada um deles.

> Princípios de Teste anotados em [aula03.md](../aula03.md/aula03.md)

---