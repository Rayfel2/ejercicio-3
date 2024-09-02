# Ejercicio 3 - Grupo D
- Rayfel Ogando #1107535 (Rayfel2)
- Eladio Tavarez #1108874 (Eventr077)
- Diego Rodriguez #1105880 (D1egoSebastian)
- Axel Felix #1106662 (Notengonombredisponible)
- Andres taveras #1107975 (FandresT101)
- Angel Soriano #1107555 (LoyaKnight)

## CI/CD Pipeline

Este proyecto utiliza un pipeline de integración y entrega continua (CI/CD) configurado con GitHub Actions. El pipeline se encarga de automatizar el proceso de construcción, instalación de dependencias y ejecución de pruebas. A continuación se describe cómo funciona:

### Activación del Pipeline

El pipeline se activa en las siguientes situaciones:
- **Push**: Cuando se realizan cambios y se hacen `push` a las ramas `dev` o `main`.
- **Pull Request**: Cuando se crea un `pull_request` dirigido a las ramas `dev` o `main`.

### Configuración del Pipeline

El pipeline está definido en el archivo `.github/workflows/ci-cd-pipeline.yml` y consta de los siguientes pasos:

1. **Entorno de Ejecución**
   - El pipeline se ejecuta en una máquina virtual con Ubuntu (`ubuntu-latest`).

2. **Pasos del Trabajo**
   - **Checkout del Código**: Se utiliza `actions/checkout@v2` para obtener el código del repositorio.
   - **Configuración de Node.js**: Se instala Node.js versión `14` usando `actions/setup-node@v2`.
   - **Instalación de Dependencias**: Se ejecuta `npm install` para instalar las dependencias definidas en `package.json`.
   - **Ejecución de Pruebas**: Se ejecuta `npm test` para correr las pruebas unitarias.

### Pruebas Definidas

Las pruebas automatizadas en `npm test` verifican las siguientes funciones matemáticas:

- **Suma**: Verifica que `sum(1, 2)` devuelve `3`.
- **Resta**: Verifica que `subtract(5, 3)` devuelve `2`.
- **Multiplicación**: Verifica que `multiply(4, 3)` devuelve `12`.
- **División**:
  - Verifica que `divide(10, 2)` devuelve `5`.
  - Verifica que `divide(10, 0)` lanza un error con el mensaje "No se puede dividir por cero".

Este pipeline asegura que todas las pruebas se ejecuten automáticamente para verificar que el código esté funcionando correctamente antes de ser fusionado o desplegado.
