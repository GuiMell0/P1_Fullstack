## 🛠️ Tecnologias Utilizadas

### **Backend**
* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para criação da API HTTP.

### **Bancos de Dados**
* **MySQL**: Banco relacional para dados estruturados de carros.
* **MongoDB**: Banco NoSQL para documentos de usuários.

### **Bibliotecas & Infra**
* **mysql2**: Driver de comunicação com MySQL via promises.
* **mongoose**: ODM para modelagem e manipulação do MongoDB.
* **Docker & Docker Compose**: Orquestração de containers.
* **Nodemon**: Reinício automático do servidor durante o desenvolvimento.

---

## 🏗️ Arquitetura do Projeto

A aplicação utiliza uma estrutura modular para facilitar a manutenção e escalabilidade:

```text
src/
├── config/       # Configurações de conexões (MySQL e MongoDB)
├── controllers/  # Recebe requisições e envia respostas
├── models/       # Estrutura de dados e Schemas
├── repositories/ # Camada de acesso direto aos bancos de dados
├── routes/       # Definição de endpoints
├── app.js        # Configuração do Express e Middlewares
└── server.js     # Inicialização e conexão com os serviços
```

### **Fluxo de Execução**
`Requisição HTTP` ➔ `Routes` ➔ `Controller` ➔ `Repository` ➔ `Model` ➔ `Database`

---

## 🐳 Executando com Docker

**Pré-requisitos:** Docker e Docker Compose instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Suba os containers:**
    ```bash
    docker-compose up --build
    ```

A API estará disponível em: `http://localhost:3000`

---

## 📡 Endpoints da API

### **Carros (MySQL - Relacional)**
*Banco: loja_de_carros | Tabela: carros*

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/cars` | Lista todos os carros |
| `GET` | `/cars/:id` | Busca um carro por ID |
| `POST` | `/cars` | Cria um novo carro |
| `PUT` | `/cars/:id` | Atualiza dados de um carro |
| `DELETE` | `/cars/:id` | Remove um carro |

### **Usuários (MongoDB - NoSQL)**
*Database: fullstack | Collection: users*

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/users` | Lista todos os usuários |
| `GET` | `/users/:id` | Busca um usuário por ID |
| `POST` | `/users` | Cria um novo usuário |
| `PUT` | `/users/:id` | Atualiza dados de um usuário |
| `DELETE` | `/users/:id` | Remove um usuário |

---

## ✅ Requisitos Implementados
* [x] API em Node.js com Express.
* [x] Docker Compose gerenciando 3 serviços (App, MySQL, MongoDB).
* [x] Integração SQL e NoSQL no mesmo serviço.
* [x] Persistência de dados via volumes.
* [x] Separação de responsabilidades (Repository Pattern).

## ⚠️ Observações Importantes
* **MySQL:** Requer a criação manual da tabela `carros` (campos: id, modelo, marca, ano).
* **MongoDB:** O schema é gerado automaticamente pelo Mongoose no primeiro insert.
* **Persistência:** Os volumes configurados no `docker-compose.yml` garantem que os dados não sejam perdidos ao reiniciar os containers.
