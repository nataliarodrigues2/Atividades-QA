### Cenário 1 — Interrupção Temporária do Serviço devido à Manutenção Programada

- **Probabilidade:** B
- **Impacto:** 1
- **Matriz de Risco:** B1 — Muito Baixo
- **Testes utilizados:** Smoke Test, Teste de regressão
- **Estratégia de mitigação:** Comunicar usuários com antecedência, planejar janela de manutenção em horário de menor uso e executar smoke test ao retornar.
- **Tipos de Risco:**
  - **Operacional:** Indisponibilidade temporária do serviço
  - **Negócio:** Insatisfação pontual dos usuários

---

### Cenário 2 — Vulnerabilidade de Segurança Descoberta em uma Dependência de Terceiros

- **Probabilidade:** C
- **Impacto:** 5
- **Matriz de Risco:** C5 — Muito Alto
- **Testes utilizados:** Pentest, SAST/DAST, varredura de dependências
- **Estratégia de mitigação:** Atualizar a biblioteca imediatamente, verificar se houve exploração e notificar usuários se necessário.
- **Tipos de Risco:**
  - **Técnico:** Vulnerabilidade em biblioteca de terceiros
  - **Negócio:** Vazamento de dados, dano à reputação e possível violação da LGPD
  - **Operacional:** Exposição de dados sensíveis dos usuários

---

### Cenário 3 — Erro de Interface do Usuário que Causa Confusão entre os Usuários

- **Probabilidade:** C
- **Impacto:** 2
- **Matriz de Risco:** C2 — Médio
- **Testes utilizados:** Teste de usabilidade, Teste funcional, Teste exploratório
- **Estratégia de mitigação:** Agendar correção no próximo sprint e monitorar tickets de suporte para medir o impacto.
- **Tipos de Risco:**
  - **Técnico:** Alteração na UI sem validação adequada
  - **Humano:** Usuário interpreta incorretamente fluxos ou botões
  - **Negócio:** Aumento de chamados de suporte e redução da satisfação

---

### Cenário 4 — Falha em Processo de Backup de Dados

- **Probabilidade:** B
- **Impacto:** 5
- **Matriz de Risco:** B5 — Alto
- **Testes utilizados:** Teste de recuperação de desastre (DR), validação do processo de restore
- **Estratégia de mitigação:** Implementar alertas automáticos para falhas de backup, testar o processo de restore regularmente e manter redundância dos dados.
- **Tipos de Risco:**
  - **Operacional:** Backup falhou
  - **Negócio:** Perda irreversível de dados dos usuários

---

### Cenário 5 — Ataque de Phishing aos Usuários do Aplicativo

- **Probabilidade:** D
- **Impacto:** 4
- **Matriz de Risco:** D4 — Muito Alto
- **Testes utilizados:** Pentest, Teste de segurança
- **Estratégia de mitigação:** Implementar MFA (Autenticação Multifator), treinar usuários para identificar tentativas de phishing e monitorar acessos suspeitos.
- **Tipos de Risco:**
  - **Técnico:** Ausência de autenticação forte
  - **Humano:** Usuário clica em link malicioso sem perceber
  - **Negócio:** Comprometimento de contas e dados financeiros dos clientes

---