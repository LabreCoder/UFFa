# UFFa 🎒

**UFFa — Achados e Perdidos** é um projeto que busca explorar uma solução para o problema de objetos perdidos no ambiente universitário.

Atualmente, o projeto consiste em um **portfólio acadêmico desenvolvido para a disciplina de Interação Humano-Computador (IHC)** da Universidade Federal Fluminense (UFF).

> 🚧 **Status:** Portfólio acadêmico em desenvolvimento

## 📚 Sobre o projeto

O UFFa nasceu como uma proposta para trabalhar os conceitos e técnicas apresentados ao longo da disciplina de **Interação Humano-Computador**.

Neste primeiro momento, o objetivo não é desenvolver a aplicação em si, mas construir um **portfólio que registre e apresente todo o processo realizado durante a disciplina**, utilizando o tema de Achados e Perdidos como fio condutor.

O site funciona, portanto, como um grande histórico do projeto: nele são apresentadas as técnicas estudadas, as decisões tomadas, as atividades realizadas e a evolução da proposta ao longo da disciplina.

Dessa forma, o portfólio representa não apenas o resultado final, mas também **o caminho percorrido pela equipe durante o desenvolvimento do projeto**.

## 🎯 Objetivo atual

Aplicar os conceitos e técnicas de IHC apresentados em sala de aula por meio da construção de um portfólio relacionado ao tema de **Achados e Perdidos**.

O portfólio busca documentar:

* 📖 Conceitos e técnicas apresentados na disciplina;
* 🔎 Pesquisas e descobertas realizadas pela equipe;
* 🧠 Decisões tomadas durante o desenvolvimento;
* 🎨 Processo de construção da interface;
* 👥 Atividades e avaliações realizadas;
* 📈 Evolução da proposta ao longo da disciplina.

## 🔮 Visão futura

Embora o projeto atualmente tenha finalidade acadêmica, o conceito do UFFa pode futuramente evoluir para uma **aplicação real de Achados e Perdidos**, voltada ao ambiente universitário.

Essa possibilidade não faz parte do escopo atual do trabalho, mas o repositório foi organizado de maneira que o projeto possa crescer caso a equipe decida continuar seu desenvolvimento.

A ideia é que o portfólio represente o **primeiro capítulo da história do UFFa**, enquanto uma eventual aplicação poderá ser construída posteriormente a partir dos conhecimentos e decisões desenvolvidos nesta etapa.

## 🗂️ Estrutura do projeto

```text
UFFa/
├── site/                     # Aplicação web do portfólio acadêmico
│   ├── .figma/               # Configurações e manifesto do Figma Make
│   │   └── make/
│   │       └── site.json
│   ├── src/                  # Código-fonte da aplicação (React + TypeScript)
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── Dockerfile            # Configuração do container da aplicação
│   ├── index.html            # Ponto de entrada HTML
│   ├── package.json          # Dependências e scripts do projeto
│   ├── tsconfig.json         # Configurações do TypeScript
│   └── vite.config.ts        # Configuração do Vite e Tailwind CSS
│
├── docs/                     # Documentação e materiais do projeto
│   └── IHC/                  # Atividades e artefatos de IHC
│
├── docker-compose.yml        # Orquestração do ambiente de desenvolvimento Docker
├── LICENSE                   # Licença do projeto
├── README.md                 # Apresentação e documentação do repositório
└── .gitignore
```

Essa separação permite preservar o trabalho acadêmico original enquanto uma eventual aplicação pode ser desenvolvida de forma independente dentro do mesmo projeto.

## 🐳 Executando o projeto

O portfólio possui um ambiente Docker para facilitar sua execução entre os integrantes da equipe e reduzir problemas relacionados a versões e dependências.

```bash
docker compose up --build
```

Após a inicialização, o endereço para acesso ao portfólio será informado conforme a configuração do projeto.

## 🛣️ Roadmap

### Portfólio — IHC

* [X] Definição do tema
* [X] Definição do conceito UFFa
* [ ] Desenvolvimento do portfólio
* [ ] Aplicação das técnicas de IHC
* [ ] Documentação das atividades
* [ ] Avaliação da interface
* [ ] Finalização do trabalho

### Futuro

* [ ] Estudo de viabilidade da aplicação
* [ ] Definição dos requisitos
* [ ] Arquitetura da aplicação
* [ ] Desenvolvimento do frontend
* [ ] Desenvolvimento do backend
* [ ] Banco de dados
* [ ] Autenticação e usuários
* [ ] Cadastro de objetos perdidos e encontrados
* [ ] Busca e filtros
* [ ] Testes
* [ ] Publicação

> Os itens da seção **Futuro** representam possibilidades para a evolução do projeto e não fazem parte do escopo atual da disciplina.

## 🎓 Contexto acadêmico

Projeto desenvolvido como parte das atividades da disciplina de **Interação Humano-Computador (IHC)** da **Universidade Federal Fluminense (UFF)**.

O portfólio tem como objetivo registrar o processo de aprendizagem e aplicação prática dos conceitos apresentados durante a disciplina.

## 📄 Licença

Este projeto é distribuído sob os termos da **Apache License 2.0**.

Consulte o arquivo [`LICENSE`](LICENSE) para obter os detalhes completos da licença.
