Aquí tienes el archivo `README.md` actualizado con los cambios solicitados:

```markdown
# Prueba APIBOOK
Realizado en [RedwoodJS](https://redwoodjs.com/).

## Tecnologías Utilizadas 🚀
- React.js
- GraphQL
- Prisma
- TypeScript
- Jest
- Storybook

## Prerequisitos 📌
Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/en/) (versión 20.x)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [MySQL](https://dev.mysql.com/downloads/installer/)

## Instalación 📋

Sigue estos pasos para configurar el proyecto:

1. **Instala Node.js y Yarn**:
   - Descarga e instala Node.js desde su [página oficial](https://nodejs.org/en/).
   - Instala Yarn siguiendo las instrucciones en su [documentación](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

2. **Instala MySQL**:
   - Descarga e instala MySQL desde su [página oficial](https://dev.mysql.com/downloads/installer/).

3. **Clona el repositorio** (si aún no lo has hecho):
   ```bash
   git clone https://github.com/tu_usuario/apibook.git
   cd apibook
   ```

4. **Instala las dependencias del proyecto**:
   ```bash
   yarn install
   ```

5. **Configura la conexión a la base de datos**:
   - Crea una base de datos en MySQL.
   - Edita el archivo `api/db/schema.prisma` para definir la conexión a tu base de datos.

6. **Corre las migraciones de Prisma**:
   ```bash
   yarn rw prisma migrate dev
   ```

7. **Inicia el servidor de desarrollo**:
   ```bash
   yarn redwood dev
   ```

8. **Accede a la aplicación**:
   - Abre tu navegador y visita [http://localhost:8910](http://localhost:8910) para ver la página de bienvenida.

## Rutas Generadas 🌐

- [http://localhost:8910/api/auth/register](http://localhost:8910/api/auth/register) - Registro de usuario
- [http://localhost:8910/api/auth/login](http://localhost:8910/api/auth/login) - Inicio de sesión de usuario
- [http://localhost:8910/api/books](http://localhost:8910/api/books) - Listar todos los libros
- [http://localhost:8910/api/books/:id](http://localhost:8910/api/books/:id) - Obtener un libro por ID
- [http://localhost:8910/api/books](http://localhost:8910/api/books) - Crear un nuevo libro (POST)
- [http://localhost:8910/api/books/:id](http://localhost:8910/api/books/:id) - Actualizar un libro (PUT)
- [http://localhost:8910/api/books/:id](http://localhost:8910/api/books/:id) - Eliminar un libro (DELETE)

## Prisma y la Base de Datos

Redwood utiliza [Prisma](https://www.prisma.io/) como ORM para interactuar con la base de datos. La configuración de tu esquema y las migraciones son esenciales para la funcionalidad de tu aplicación.

### Configuración del Modelo

Abre el archivo `api/db/schema.prisma` y define tu modelo. Por ejemplo:

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

Para crear las migraciones de Prisma, utiliza el siguiente comando:

```bash
yarn rw prisma migrate dev
```

Y proporciona un nombre para tu migración, como `create posts`.

## Documentación Útil 📚

- [Documentación de RedwoodJS](https://redwoodjs.com/docs/introduction)
- [Guía de configuración en Windows](https://redwoodjs.com/docs/how-to/windows-development-setup)
- [Referencia del CLI de Redwood](https://redwoodjs.com/docs/cli-commands)

## Autor ✒️
Esteban Villa Ramírez. 2022
```
