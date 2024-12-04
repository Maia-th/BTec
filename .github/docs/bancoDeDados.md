### Modelo Relacional

#### Tabela: **Usuario**

| Campo                  | Tipo         | Restrição        |
| ---------------------- | ------------ | ---------------- |
| CPF                    | CHAR(11)     | PK               |
| Nome                   | VARCHAR(100) | NOT NULL         |
| Email                  | VARCHAR(100) | UNIQUE, NOT NULL |
| Senha                  | VARCHAR(255) | NOT NULL         |
| Telefone               | VARCHAR(20)  | NOT NULL         |
| Data_Nascimento        | DATE         | NOT NULL         |
| Cidade_Nascimento      | VARCHAR(100) | NULL             |
| Curriculo              | TEXT         | NULL             |
| Endereco               | TEXT         | NULL             |
| Foto_Perfil            | TEXT         | NULL             |
| Formacao_Profissional  | TEXT         | NULL             |
| Motivacao_Empreendedor | TEXT         | NULL             |
| Ocupacao_Atual         | VARCHAR(100) | NULL             |
| Rede_Social            | TEXT         | NULL             |
| Tempo_Experiencia      | INT          | NULL             |

---

#### Tabela: **Admin**

| Campo                 | Tipo                     | Restrição        |
| --------------------- | ------------------------ | ---------------- |
| CPF                   | CHAR(11)                 | PK               |
| Nome                  | VARCHAR(100)             | NOT NULL         |
| Email                 | VARCHAR(100)             | UNIQUE, NOT NULL |
| Senha                 | VARCHAR(255)             | NOT NULL         |
| Perfil                | ENUM('ROOT', 'Analista') | NOT NULL         |
| Telefone              | VARCHAR(20)              | NOT NULL         |
| Data_Nascimento       | DATE                     | NOT NULL         |
| Cidade_Nascimento     | VARCHAR(100)             | NULL             |
| Foto_Perfil           | TEXT                     | NULL             |
| Formacao_Profissional | TEXT                     | NULL             |

---

#### Tabela: **Startup**

| Campo                | Tipo          | Restrição                    |
| -------------------- | ------------- | ---------------------------- |
| ID_Startup           | INT           | PK, AUTO_INCREMENT           |
| Nome                 | VARCHAR(100)  | NOT NULL                     |
| Logo                 | TEXT          | NOT NULL                     |
| ID_Empreendedor      | CHAR(11)      | FK -> Usuario(CPF), NOT NULL |
| ID_Analista          | CHAR(11)      | FK -> Admin(CPF), NOT NULL   |
| CNPJ                 | CHAR(14)      | UNIQUE, NULL                 |
| Data_Abertura        | DATE          | NULL                         |
| Data_Ingresso        | DATE          | NULL                         |
| Descricao            | TEXT          | NULL                         |
| Email                | VARCHAR(100)  | NULL                         |
| Endereco             | TEXT          | NULL                         |
| Investimento_Inicial | DECIMAL(10,2) | NULL                         |
| Objetivo_PIBTec      | TEXT          | NULL                         |
| Ramo_Atuacao         | VARCHAR(100)  | NULL                         |
| Rede_Social          | TEXT          | NULL                         |
| Telefone             | VARCHAR(20)   | NULL                         |

---

#### Tabela: **Socios**

| Campo           | Tipo     | Restrição                          |
| --------------- | -------- | ---------------------------------- |
| ID_Startup      | INT      | FK -> Startup(ID_Startup), NOT NUL |
| ID_Empreendedor | CHAR(11) | FK -> Usuario(CPF), NOT NULL       |

---

#### Tabela: **JornadaStartup**

| Campo                   | Tipo         | Restrição                 |
| ----------------------- | ------------ | ------------------------- |
| ID                      | INT          | PK, AUTO_INCREMENT        |
| ID_Startup              | INT          | FK -> Startup(ID_Startup) |
| ID_Jornada              | INT          | FK -> JornadaBase(ID)     |
| Data_Inicio             | DATE         | NOT NULL                  |
| Data_Fim                | DATE         | NULL                      |
| Historico_Monitoramento | TEXT         | NULL                      |
| Progresso               | DECIMAL(5,2) | NULL                      |
| Ultimo_Acesso           | DATETIME     | NULL                      |

---

#### Tabela: **JornadaBase**

| Campo | Tipo        | Restrição          |
| ----- | ----------- | ------------------ |
| ID    | INT         | PK, AUTO_INCREMENT |
| Etapa | VARCHAR(50) | NOT NULL           |

---

#### Tabela: **JornadaEixo**

| Campo   | Tipo        | Restrição          |
| ------- | ----------- | ------------------ |
| ID_Eixo | INT         | PK, AUTO_INCREMENT |
| Nome    | VARCHAR(50) | NOT NULL           |

---

#### Tabela: **JornadaItem**

| Campo     | Tipo         | Restrição                  |
| --------- | ------------ | -------------------------- |
| ID_Item   | INT          | PK, AUTO_INCREMENT         |
| ID_Base   | INT          | FK -> JornadaBase(ID)      |
| ID_Eixo   | INT          | FK -> JornadaEixo(ID_Eixo) |
| Item      | VARCHAR(100) | NOT NULL                   |
| Descricao | TEXT         | NULL                       |
| Input     | TEXT         | NULL                       |

---

#### Tabela: **Monitoramento**

| Campo                 | Tipo          | Restrição                  |
| --------------------- | ------------- | -------------------------- |
| ID                    | INT           | PK, AUTO_INCREMENT         |
| ID_Startup            | INT           | FK -> Startup(ID_Startup)  |
| ID_Empreendedor       | CHAR(11)      | FK -> Usuario(CPF)         |
| ID_Analista           | CHAR(11)      | FK -> Admin(CPF)           |
| Data                  | DATE          | NOT NULL                   |
| Faturamento           | DECIMAL(10,2) | NULL                       |
| Item_Nota             | INT           | FK -> JornadaEixo(ID_Eixo) |
| Num_Funcionario       | INT           | NULL                       |
| Plano_Desenvolvimento | TEXT          | NULL                       |
| Socios_Participantes  | TEXT          | NULL                       |

---

#### Tabela: **Relatorio**

| Campo        | Tipo                              | Restrição                 |
| ------------ | --------------------------------- | ------------------------- |
| ID           | INT                               | PK, AUTO_INCREMENT        |
| ID_Startup   | INT                               | FK -> Startup(ID_Startup) |
| Data_Geracao | DATETIME                          | NOT NULL                  |
| Tipo         | ENUM('Geral', 'Graduadas', '...') | NOT NULL                  |
| Conteudo     | TEXT                              | NULL                      |

---

#### Tabela: **Notificacao**

| Campo           | Tipo     | Restrição          |
| --------------- | -------- | ------------------ |
| ID              | INT      | PK, AUTO_INCREMENT |
| ID_Destinatario | CHAR(11) | FK -> Usuario(CPF) |
| ID_Remente      | CHAR(11) | FK -> Usuario(CPF) |
| Data            | DATETIME | NOT NULL           |
| Mensagem        | TEXT     | NOT NULL           |

---
