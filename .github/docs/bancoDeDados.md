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
| Curriculo              | BLOB         | NULL             |
| Logradouro             | VARCHAR(255) | NULL             |
| Numero                 | VARCHAR(10)  | NULL             |
| Complemento            | VARCHAR(255) | NULL             |
| Bairro                 | VARCHAR(100) | NULL             |
| CEP                    | VARCHAR(20)  | NULL             |
| Cidade                 | VARCHAR(100) | NULL             |
| Estado                 | VARCHAR(50)  | NULL             |
| Foto_Perfil            | BLOB         | NULL             |
| Formacao_Profissional  | TEXT         | NULL             |
| Motivacao_Empreendedor | TEXT         | NULL             |
| Ocupacao_Atual         | VARCHAR(100) | NULL             |
| Tempo_Experiencia      | TEXT         | NULL             |

---

#### Tabela: **Usuario_Rede_Social**

| Campo                        | Tipo         | Restrição          |
| ---------------------------- | ------------ | ------------------ |
| CPF                          | CHAR(11)     | FK -> Usuario(CPF) |
| Nome_Rede                    | VARCHAR(50)  | NOT NULL           |
| Link                         | VARCHAR(255) | NOT NULL           |
| PRIMARY KEY (CPF, Nome_Rede) |

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
| Foto_Perfil           | BLOB                     | NULL             |
| Formacao_Profissional | TEXT                     | NULL             |

---

#### Tabela: **Startup**

| Campo                                     | Tipo          | Restrição                    |
| ----------------------------------------- | ------------- | ---------------------------- |
| ID_Startup                                | INT           | PK, AUTO_INCREMENT           |
| Nome                                      | VARCHAR(100)  | NOT NULL                     |
| Logo                                      | BLOB          | NOT NULL                     |
| ID_Empreendedor                           | CHAR(11)      | FK -> Usuario(CPF), NOT NULL |
| ID_Analista                               | CHAR(11)      | FK -> Admin(CPF), NOT NULL   |
| CNPJ                                      | CHAR(14)      | UNIQUE, NULL                 |
| Data_Abertura                             | DATE          | NULL                         |
| Data_Ingresso                             | DATE          | NULL                         |
| Descricao                                 | TEXT          | NULL                         |
| Email                                     | VARCHAR(100)  | NULL                         |
| Logradouro                                | VARCHAR(255)  | NULL                         |
| Numero                                    | VARCHAR(10)   | NULL                         |
| Complemento                               | VARCHAR(255)  | NULL                         |
| Bairro                                    | VARCHAR(100)  | NULL                         |
| CEP                                       | VARCHAR(20)   | NULL                         |
| Cidade                                    | VARCHAR(100)  | NULL                         |
| Estado                                    | VARCHAR(50)   | NULL                         |
| Investimento_Inicial                      | DECIMAL(10,2) | NULL                         |
| Objetivo_PIBTec                           | TEXT          | NULL                         |
| Ramo_Atuacao                              | VARCHAR(100)  | NULL                         |
| Telefone                                  | VARCHAR(20)   | NULL                         |
| PRIMARY KEY (ID_Startup, ID_Empreendedor) |

---

#### Tabela: **Startup_Rede_Social**

| Campo                               | Tipo         | Restrição                 |
| ----------------------------------- | ------------ | ------------------------- |
| ID_Startup                          | INT          | FK -> Startup(ID_Startup) |
| Nome_Rede                           | VARCHAR(50)  | NOT NULL                  |
| Link                                | VARCHAR(255) | NOT NULL                  |
| PRIMARY KEY (ID_Startup, Nome_Rede) |

---

#### Tabela: **Socios**

| Campo                                     | Tipo     | Restrição                          |
| ----------------------------------------- | -------- | ---------------------------------- |
| ID_Startup                                | INT      | FK -> Startup(ID_Startup), NOT NUL |
| ID_Empreendedor                           | CHAR(11) | FK -> Usuario(CPF), NOT NULL       |
| PRIMARY KEY (ID_Startup, ID_Empreendedor) |

---

#### Tabela: **JornadaStartup**

| Campo                                         | Tipo         | Restrição                  |
| --------------------------------------------- | ------------ | -------------------------- |
| ID                                            | INT          | PK, AUTO_INCREMENT         |
| ID_Startup                                    | INT          | FK -> Startup(ID_Startup)  |
| ID_Jornada                                    | INT          | FK -> JornadaBase(ID)      |
| ID_Eixo                                       | INT          | FK -> JornadaEixo(ID_Eixo) |
| Data_Inicio                                   | DATE         | NOT NULL                   |
| Data_Fim                                      | DATE         | NULL                       |
| Historico_Monitoramento                       | TEXT         | NULL                       |
| Progresso                                     | DECIMAL(5,2) | NULL                       |
| Ultimo_Acesso                                 | DATETIME     | NULL                       |
| PRIMARY KEY (ID_Startup, ID_Jornada, ID_Eixo) |

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
| Input     | BLOB         | NULL                       |

---

#### Tabela: **Monitoramento**

| Campo                 | Tipo          | Restrição                 |
| --------------------- | ------------- | ------------------------- |
| ID                    | INT           | PK, AUTO_INCREMENT        |
| ID_Startup            | INT           | FK -> Startup(ID_Startup) |
| ID_Empreendedor       | CHAR(11)      | FK -> Usuario(CPF)        |
| ID_Analista           | CHAR(11)      | FK -> Admin(CPF)          |
| Data                  | DATE          | NOT NULL                  |
| Faturamento           | DECIMAL(10,2) | NULL                      |
| Num_Funcionario       | INT           | NULL                      |
| Plano_Desenvolvimento | TEXT          | NULL                      |

---

#### Tabela: **MonitoramentoItens**

| Campo            | Tipo | Restrição                  |
| ---------------- | ---- | -------------------------- |
| ID               | INT  | PK, AUTO_INCREMENT         |
| ID_Monitoramento | INT  | FK -> Monitoramento(ID)    |
| ID_Item          | INT  | FK -> JornadaItem(ID_Item) |
| Nota             | INT  | NOT NULL                   |

---

#### Tabela: **MonitoramentoSocios**

| Campo                                    | Tipo     | Restrição                     |
| ---------------------------------------- | -------- | ----------------------------- |
| ID                                       | INT      | PK, AUTO_INCREMENT            |
| ID_Monitoramento                         | INT      | FK -> Monitoramento(ID)       |
| ID_Socio                                 | CHAR(11) | FK -> Socios(ID_Empreendedor) |
| PRIMARY KEY (ID_Monitoramento, ID_Socio) |

---

#### Tabela: **Notificacoes**

| Campo        | Tipo     | Restrição                |
| ------------ | -------- | ------------------------ |
| ID           | INT      | PK, AUTO_INCREMENT       |
| Remetente    | CHAR(11) | FK -> Admin(CPF)         |
| Destinatario | CHAR(11) | FK -> Usuario(CPF), NULL |
| Mensagem     | TEXT     | NOT NULL                 |
| Data_Envio   | DATETIME | NOT NULL                 |
| Lida         | BOOLEAN  | DEFAULT FALSE            |

---
