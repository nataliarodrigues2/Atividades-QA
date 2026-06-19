## Testes Realizados

### Soma com valor inválido

**Comando:**

```bash
node calculadora.js soma 1 abc
```

**Resultado:**

```bash
NaN
```

Foi identificado que não existe validação para garantir que os valores informados sejam números. Ao informar "abc", a operação foi executada mesmo assim e retornou `NaN`.

---

### Divisão por zero

**Comando:**

```bash
node calculadora.js divisao 10 0
```

**Resultado:**

```bash
0
```

Foi verificado que existe uma validação para impedir divisão por zero. O sistema exibe a mensagem:

> "Não há divisões por 0"

---

### Operação inválida

**Comando:**

```bash
node calculadora.js teste 10 5
```

**Resultado:**

```bash
Operação inválida!
```

Foi verificado que o sistema trata operações não existentes. O sistema exibe a mensagem:

> "Operação inválida!"

---

### Multiplicação com valor inválido

**Comando:**

```bash
node calculadora.js multiplicacao abc 5
```

**Resultado:**

```bash
NaN
```

Novamente foi identificado que o sistema não valida se os valores informados são números.


### Conclusão

Com o uso do Debug foi possível acompanhar a execução do programa e analisar o comportamento das operações. Os testes mostraram que o sistema possui validações para divisão por zero e operações inválidas, mas permite que valores não numéricos sejam processados, retornando `NaN`.

---