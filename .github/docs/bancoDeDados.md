# Banco de Dados

## Modelo Relacional

### Tabela: **Usuario**

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

### Tabela: **Usuario_Rede_Social**

| Campo     | Tipo         | Restrição              |
| --------- | ------------ | ---------------------- |
| CPF       | CHAR(11)     | PK, FK -> Usuario(CPF) |
| Nome_Rede | VARCHAR(50)  | PK                     |
| Link      | VARCHAR(255) | NOT NULL               |

---

### Tabela: **Admin**

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

### Tabela: **Startup**

| Campo                | Tipo          | Restrição                  |
| -------------------- | ------------- | -------------------------- |
| ID_Startup           | INT           | PK, AUTO_INCREMENT         |
| Nome                 | VARCHAR(100)  | NOT NULL                   |
| Logo                 | BLOB          | NOT NULL                   |
| ID_Empreendedor      | CHAR(11)      | PK, FK -> Usuario(CPF)     |
| ID_Analista          | CHAR(11)      | FK -> Admin(CPF), NOT NULL |
| CNPJ                 | CHAR(14)      | UNIQUE, NULL               |
| Data_Abertura        | DATE          | NULL                       |
| Data_Ingresso        | DATE          | NULL                       |
| Descricao            | TEXT          | NULL                       |
| Email                | VARCHAR(100)  | NULL                       |
| Logradouro           | VARCHAR(255)  | NULL                       |
| Numero               | VARCHAR(10)   | NULL                       |
| Complemento          | VARCHAR(255)  | NULL                       |
| Bairro               | VARCHAR(100)  | NULL                       |
| CEP                  | VARCHAR(20)   | NULL                       |
| Cidade               | VARCHAR(100)  | NULL                       |
| Estado               | VARCHAR(50)   | NULL                       |
| Investimento_Inicial | DECIMAL(10,2) | NULL                       |
| Objetivo_PIBTec      | TEXT          | NULL                       |
| Ramo_Atuacao         | VARCHAR(100)  | NULL                       |
| Telefone             | VARCHAR(20)   | NULL                       |

---

### Tabela: **Startup_Rede_Social**

| Campo      | Tipo         | Restrição                     |
| ---------- | ------------ | ----------------------------- |
| ID_Startup | INT          | PK, FK -> Startup(ID_Startup) |
| Nome_Rede  | VARCHAR(50)  | PK                            |
| Link       | VARCHAR(255) | NOT NULL                      |

---

### Tabela: **Socios**

| Campo           | Tipo     | Restrição                     |
| --------------- | -------- | ----------------------------- |
| ID_Startup      | INT      | PK, FK -> Startup(ID_Startup) |
| ID_Empreendedor | CHAR(11) | PK, FK -> Usuario(CPF)        |

---

### Tabela: **JornadaStartup**

| Campo                   | Tipo         | Restrição                      |
| ----------------------- | ------------ | ------------------------------ |
| ID_Startup              | INT          | PK,FK -> Startup(ID_Startup)   |
| ID_Jornada              | INT          | PK, FK -> JornadaBase(ID)      |
| ID_Eixo                 | INT          | PK, FK -> JornadaEixo(ID_Eixo) |
| Data_Inicio             | DATE         | NOT NULL                       |
| Data_Fim                | DATE         | NULL                           |
| Historico_Monitoramento | TEXT         | NULL                           |
| Progresso               | DECIMAL(5,2) | NULL                           |
| Ultimo_Acesso           | DATETIME     | NULL                           |

---

### Tabela: **JornadaBase**

| Campo | Tipo        | Restrição          |
| ----- | ----------- | ------------------ |
| ID    | INT         | PK, AUTO_INCREMENT |
| Etapa | VARCHAR(50) | NOT NULL           |

---

### Tabela: **JornadaEixo**

| Campo   | Tipo        | Restrição          |
| ------- | ----------- | ------------------ |
| ID_Eixo | INT         | PK, AUTO_INCREMENT |
| Nome    | VARCHAR(50) | NOT NULL           |

---

### Tabela: **JornadaItem**

| Campo              | Tipo                                                | Restrição                  |
| ------------------ | --------------------------------------------------- | -------------------------- |
| ID_Item            | INT                                                 | PK, AUTO_INCREMENT         |
| ID_Base            | INT                                                 | FK -> JornadaBase(ID)      |
| ID_Eixo            | INT                                                 | FK -> JornadaEixo(ID_Eixo) |
| Item               | TEXT                                                | NOT NULL                   |
| Descricao          | TEXT                                                | NOT NULL                   |
| Input              | BLOB                                                | NULL                       |
| Exemplos_Genericos | TEXT                                                | NULL                       |
| Ferramentas        | TEXT                                                | NULL                       |
| Material_Apoio     | TEXT                                                | NOT NULL                   |
| Video              | TEXT                                                | NULL                       |
| Entregas_Concretas | TEXT                                                | NOT NULL                   |
| Status             | ENUM('vazio', 'em analise', 'aprovado', 'recusado') | DEFAULT 'vazio'            |

---

### Tabela: **Feedback**

| Campo         | Tipo     | Restrição                      |
| ------------- | -------- | ------------------------------ |
| ID_Feedback   | INT      | PK, AUTO_INCREMENT             |
| ID_Item       | INT      | PK, FK -> JornadaItem(ID_Item) |
| Observacoes   | TEXT     | NULL                           |
| Data_Feedback | DATETIME | NOT NULL                       |

---

### Tabela: **Monitoramento**

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

### Tabela: **MonitoramentoItens**

| Campo            | Tipo | Restrição                  |
| ---------------- | ---- | -------------------------- |
| ID               | INT  | PK, AUTO_INCREMENT         |
| ID_Monitoramento | INT  | FK -> Monitoramento(ID)    |
| ID_Item          | INT  | FK -> JornadaItem(ID_Item) |
| Nota             | INT  | NOT NULL                   |

---

### Tabela: **MonitoramentoSocios**

| Campo            | Tipo     | Restrição                         |
| ---------------- | -------- | --------------------------------- |
| ID_Monitoramento | INT      | PK, FK -> Monitoramento(ID)       |
| ID_Socio         | CHAR(11) | PK, FK -> Socios(ID_Empreendedor) |

---

### Tabela: **Notificacoes**

| Campo        | Tipo     | Restrição                |
| ------------ | -------- | ------------------------ |
| ID           | INT      | PK, AUTO_INCREMENT       |
| Remetente    | CHAR(11) | FK -> Admin(CPF)         |
| Destinatario | CHAR(11) | FK -> Usuario(CPF), NULL |
| Mensagem     | TEXT     | NOT NULL                 |
| Data_Envio   | DATETIME | NOT NULL                 |
| Lida         | BOOLEAN  | DEFAULT FALSE            |

---

## Dicionário de Dados

### Tabela: **Usuario**

| Campo                  | Descrição                                                                       |
| ---------------------- | ------------------------------------------------------------------------------- |
| CPF                    | Número de Cadastro de Pessoa Física, usado como identificador único do usuário. |
| Nome                   | Nome completo do usuário.                                                       |
| Email                  | Endereço de email do usuário, deve ser único.                                   |
| Senha                  | Senha de acesso do usuário.                                                     |
| Telefone               | Número de telefone do usuário.                                                  |
| Data_Nascimento        | Data de nascimento do usuário.                                                  |
| Cidade_Nascimento      | Cidade onde o usuário nasceu.                                                   |
| Curriculo              | Arquivo de currículo do usuário.                                                |
| Logradouro             | Endereço do usuário.                                                            |
| Numero                 | Número do endereço do usuário.                                                  |
| Complemento            | Complemento do endereço do usuário.                                             |
| Bairro                 | Bairro do endereço do usuário.                                                  |
| CEP                    | Código Postal do endereço do usuário.                                           |
| Cidade                 | Cidade do endereço do usuário.                                                  |
| Estado                 | Estado do endereço do usuário.                                                  |
| Foto_Perfil            | Foto de perfil do usuário.                                                      |
| Formacao_Profissional  | Formação profissional do usuário.                                               |
| Motivacao_Empreendedor | Motivação do usuário para ser empreendedor.                                     |
| Ocupacao_Atual         | Ocupação atual do usuário.                                                      |
| Tempo_Experiencia      | Tempo de experiência do usuário.                                                |

---

### Tabela: **Usuario_Rede_Social**

| Campo     | Descrição                                                                                |
| --------- | ---------------------------------------------------------------------------------------- |
| CPF       | Número de Cadastro de Pessoa Física do usuário, chave estrangeira para a tabela Usuario. |
| Nome_Rede | Nome da rede social.                                                                     |
| Link      | Link para o perfil do usuário na rede social.                                            |

---

### Tabela: **Admin**

| Campo                 | Descrição                                                                             |
| --------------------- | ------------------------------------------------------------------------------------- |
| CPF                   | Número de Cadastro de Pessoa Física, usado como identificador único do administrador. |
| Nome                  | Nome completo do administrador.                                                       |
| Email                 | Endereço de email do administrador, deve ser único.                                   |
| Senha                 | Senha de acesso do administrador.                                                     |
| Perfil                | Perfil do administrador, pode ser 'ROOT' ou 'Analista'.                               |
| Telefone              | Número de telefone do administrador.                                                  |
| Data_Nascimento       | Data de nascimento do administrador.                                                  |
| Cidade_Nascimento     | Cidade onde o administrador nasceu.                                                   |
| Foto_Perfil           | Foto de perfil do administrador.                                                      |
| Formacao_Profissional | Formação profissional do administrador.                                               |

---

### Tabela: **Startup**

| Campo                | Descrição                                                     |
| -------------------- | ------------------------------------------------------------- |
| ID_Startup           | Identificador único da startup.                               |
| Nome                 | Nome da startup.                                              |
| Logo                 | Logotipo da startup.                                          |
| ID_Empreendedor      | CPF do empreendedor, chave estrangeira para a tabela Usuario. |
| ID_Analista          | CPF do analista, chave estrangeira para a tabela Admin.       |
| CNPJ                 | Número de Cadastro Nacional da Pessoa Jurídica da startup.    |
| Data_Abertura        | Data de abertura da startup.                                  |
| Data_Ingresso        | Data de ingresso da startup no programa.                      |
| Descricao            | Descrição da startup.                                         |
| Email                | Endereço de email da startup.                                 |
| Logradouro           | Endereço da startup.                                          |
| Numero               | Número do endereço da startup.                                |
| Complemento          | Complemento do endereço da startup.                           |
| Bairro               | Bairro do endereço da startup.                                |
| CEP                  | Código Postal do endereço da startup.                         |
| Cidade               | Cidade do endereço da startup.                                |
| Estado               | Estado do endereço da startup.                                |
| Investimento_Inicial | Valor do investimento inicial na startup.                     |
| Objetivo_PIBTec      | Objetivo da startup no programa PIBTec.                       |
| Ramo_Atuacao         | Ramo de atuação da startup.                                   |
| Telefone             | Número de telefone da startup.                                |

---

### Tabela: **Startup_Rede_Social**

| Campo      | Descrição                                                                |
| ---------- | ------------------------------------------------------------------------ |
| ID_Startup | Identificador único da startup, chave estrangeira para a tabela Startup. |
| Nome_Rede  | Nome da rede social.                                                     |
| Link       | Link para o perfil da startup na rede social.                            |

---

### Tabela: **Socios**

| Campo           | Descrição                                                                |
| --------------- | ------------------------------------------------------------------------ |
| ID_Startup      | Identificador único da startup, chave estrangeira para a tabela Startup. |
| ID_Empreendedor | CPF do empreendedor, chave estrangeira para a tabela Usuario.            |

---

### Tabela: **JornadaStartup**

| Campo                   | Descrição                                                                    |
| ----------------------- | ---------------------------------------------------------------------------- |
| ID_Startup              | Identificador único da startup, chave estrangeira para a tabela Startup.     |
| ID_Jornada              | Identificador único da jornada, chave estrangeira para a tabela JornadaBase. |
| ID_Eixo                 | Identificador único do eixo, chave estrangeira para a tabela JornadaEixo.    |
| Data_Inicio             | Data de início da jornada.                                                   |
| Data_Fim                | Data de fim da jornada.                                                      |
| Historico_Monitoramento | Histórico de monitoramento da jornada.                                       |
| Progresso               | Progresso da jornada em porcentagem.                                         |
| Ultimo_Acesso           | Data e hora do último acesso à jornada.                                      |

---

### Tabela: **JornadaBase**

| Campo | Descrição                     |
| ----- | ----------------------------- |
| ID    | Identificador único da etapa. |
| Etapa | Nome da etapa.                |

---

### Tabela: **JornadaEixo**

| Campo   | Descrição                    |
| ------- | ---------------------------- |
| ID_Eixo | Identificador único do eixo. |
| Nome    | Nome do eixo.                |

---

### Tabela: **JornadaItem**

| Campo              | Descrição                                                                            |
| ------------------ | ------------------------------------------------------------------------------------ |
| ID_Item            | Identificador único do item da jornada.                                              |
| ID_Base            | Identificador único da etapa, chave estrangeira para a tabela JornadaBase.           |
| ID_Eixo            | Identificador único do eixo, chave estrangeira para a tabela JornadaEixo.            |
| Item               | Descrição do item da jornada.                                                        |
| Descricao          | Descrição detalhada do item da jornada.                                              |
| Input              | Arquivo de entrada para o item da jornada.                                           |
| Exemplos_Genericos | Exemplos genéricos relacionados ao item da jornada.                                  |
| Ferramentas        | Ferramentas recomendadas para o item da jornada.                                     |
| Material_Apoio     | Material de apoio para o item da jornada.                                            |
| Video              | Vídeo relacionado ao item da jornada.                                                |
| Entregas_Concretas | Entregas concretas esperadas para o item da jornada.                                 |
| Status             | Status do item da jornada, pode ser 'vazio', 'em analise', 'aprovado' ou 'recusado'. |

---

### Tabela: **Feedback**

| Campo         | Descrição                                                                            |
| ------------- | ------------------------------------------------------------------------------------ |
| ID_Feedback   | Identificador único do feedback.                                                     |
| ID_Item       | Identificador único do item da jornada, chave estrangeira para a tabela JornadaItem. |
| Observacoes   | Observações do feedback.                                                             |
| Data_Feedback | Data e hora do feedback.                                                             |

---

### Tabela: **Monitoramento**

| Campo                 | Descrição                                                                |
| --------------------- | ------------------------------------------------------------------------ |
| ID                    | Identificador único do monitoramento.                                    |
| ID_Startup            | Identificador único da startup, chave estrangeira para a tabela Startup. |
| ID_Empreendedor       | CPF do empreendedor, chave estrangeira para a tabela Usuario.            |
| ID_Analista           | CPF do analista, chave estrangeira para a tabela Admin.                  |
| Data                  | Data do monitoramento.                                                   |
| Faturamento           | Faturamento da startup no período do monitoramento.                      |
| Num_Funcionario       | Número de funcionários da startup no período do monitoramento.           |
| Plano_Desenvolvimento | Plano de desenvolvimento da startup.                                     |

---

### Tabela: **MonitoramentoItens**

| Campo            | Descrição                                                                            |
| ---------------- | ------------------------------------------------------------------------------------ |
| ID               | Identificador único do item de monitoramento.                                        |
| ID_Monitoramento | Identificador único do monitoramento, chave estrangeira para a tabela Monitoramento. |
| ID_Item          | Identificador único do item da jornada, chave estrangeira para a tabela JornadaItem. |
| Nota             | Nota atribuída ao item de monitoramento.                                             |

---

### Tabela: **MonitoramentoSocios**

| Campo            | Descrição                                                                            |
| ---------------- | ------------------------------------------------------------------------------------ |
| ID_Monitoramento | Identificador único do monitoramento, chave estrangeira para a tabela Monitoramento. |
| ID_Socio         | CPF do sócio, chave estrangeira para a tabela Socios.                                |

---

### Tabela: **Notificacoes**

| Campo        | Descrição                                                     |
| ------------ | ------------------------------------------------------------- |
| ID           | Identificador único da notificação.                           |
| Remetente    | CPF do remetente, chave estrangeira para a tabela Admin.      |
| Destinatario | CPF do destinatário, chave estrangeira para a tabela Usuario. |
| Mensagem     | Mensagem da notificação.                                      |
| Data_Envio   | Data e hora do envio da notificação.                          |
| Lida         | Indica se a notificação foi lida (TRUE) ou não (FALSE).       |
