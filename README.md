# 📦 NeedJS CLI - Command Documentation

## ✅ Installation

To install the `needjs-cli` globally, run:

```bash
npm i -g needjs-cli
```

---

## 🏗️ Project Structure Generation

Create a new project with a specific architecture and style.

### MVC Structure

```bash
needjs-cli struct mvc
```
> Creates MVC structure with default SSR style.

```bash
needjs-cli struct mvc --style ssr
```
> MVC with Server-Side Rendering.

```bash
needjs-cli struct mvc --style rest
```
> MVC with REST API style.

```bash
needjs-cli struct mvc --style graphql
```
> MVC with GraphQL style.

### MVP Structure

```bash
needjs-cli struct mvp
```
> Creates MVP structure with default SSR style.

```bash
needjs-cli struct mvp --style ssr
```
> MVP with Server-Side Rendering.

```bash
needjs-cli struct mvp --style rest
```
> MVP with REST API style.

```bash
needjs-cli struct mvp --style graphql
```
> MVP with GraphQL style.

---

## 🔐 Security Configuration

Configure security middleware at the entry point of your application.

```bash
needjs-cli security
```
> Applies security settings to the default entry point (`index.js`).

```bash
needjs-cli security app.js
```
> Applies security settings to a custom entry point (`app.js`).

---

## 🗄️ Database Setup

Set up Sequelize ORM or MongoDB with your chosen database engine.

### Using Sequelize

```bash
needjs-cli db sequelize mysql
```
> Setup with MySQL.

```bash
needjs-cli db sequelize postgres
```
> Setup with PostgreSQL.

```bash
needjs-cli db sequelize mariadb
```
> Setup with MariaDB.

```bash
needjs-cli db sequelize sqlite
```
> Setup with SQLite.

```bash
needjs-cli db sequelize mssql
```
> Setup with Microsoft SQL Server.

```bash
needjs-cli db sequelize oracle
```
> Setup with Oracle DB.

### Using MongoDB

```bash
needjs-cli db mongodb
```
> Setup with MongoDB (without an ORM).

## 🔐 Setup Auth (JWT).

```bash
needjs-cli auth jwt
```
> Setup auth routes and controller.
---

## Setup Middleware.

```bash
needjs-cli middleware auth jwt
needjs-cli middleware auth basic
needjs-cli middleware role dbColumn:expectedValue
```
> Setup middleware isAuth to check users authentication.
> Setup middleware roles authorization.
---

## 👤 Author

**Created by Hamza Ichaoui**  
📧 Email: [me677499@gmail.com](mailto:me677499@gmail.com)  
🔗 LinkedIn: [https://www.linkedin.com/in/hamza-ichaoui/](https://www.linkedin.com/in/hamza-ichaoui/)
