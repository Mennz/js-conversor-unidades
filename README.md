# Conversor de Unidades

Programa de terminal em Node.js que converte temperatura, distancia, peso e
moeda (com taxa fixa, nao busca cotacao real em nenhuma api).

## O que pratiquei

- Modulos com `require`/`module.exports`
- `readline` para ler entrada do usuario no terminal
- `async`/`await` com Promises
- Validacao simples de entrada (numero invalido, unidade invalida, campo vazio)

## Como rodar

```
node index.js
```

Escolha uma opcao no menu, informe o valor e as unidades de origem e destino
(ex.: `C` e `F` pra temperatura, `KG` e `LB` pra peso).
