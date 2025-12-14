# 🧪 LABORATORIO FINAL – API Testing con Playwright + Postman + Docker + GitHub Actions

Laboratorio de **Integración Continua (CI)** que implementa pruebas automatizadas de **API REST** y **UI**, integrando **Postman/Newman**, **Playwright**, **Docker** y **GitHub Actions** para la ejecución automática de pruebas y generación de reportes.

---

## 🎯 Objetivo General

Implementar un pipeline de **testing automatizado** que valide servicios **API REST** y flujos **End-to-End (E2E)** de interfaz gráfica, utilizando herramientas modernas de automatización dentro de un entorno de **CI/CD**.

---

## 📁 Estructura del Repositorio

```text
ct-lab/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ newman/
│  ├─ T2NewTest.postman_collection.json
│  └─ DevTarea2.postman_environment.json
├─ playwright/
│  ├─ tests/
│  │  ├─ api/
│  │  │  └─ dummyjson.spec.ts
│  │  └─ ui/
│  │     ├─ saucedemo.spec.ts
│  │     ├─ demoqa.spec.ts
│  │     └─ automationpractice.spec.ts
│  ├─ playwright.config.ts
│  └─ fixtures/
├─ reports/
│  ├─ newman-report.html
│  └─ playwright-html/
├─ package.json
├─ tsconfig.json
└─ README.md
```

---
## 🔗 APIs Utilizadasa
DummyJSON API

API pública utilizada para las pruebas automatizadas de servicios REST.

**Base URL**
https://dummyjson.com

**Endpoints probados**

* POST /user/login

* POST /users/add

* GET /users/{id}

* Validación de error 404 para usuarios inexistentes

## 🔄 Integración Continua (CI)

El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente en:

* push a la rama main

* pull_request

El pipeline realiza:

*Instalación de dependencias

*Ejecución de pruebas API con Newman

*Ejecución de pruebas UI con Playwright


## 📌 Nota Final

Si alguna API o aplicación demo no se encuentra disponible temporalmente, puede ser reemplazada por otra.
