# UnaHur - Red Anti-Social

Se solicita el modelado y desarrollo de un sistema backend para una red social llamada **“UnaHur Anti-Social Net”**, inspirada en plataformas populares que permiten a los usuarios realizar publicaciones y recibir comentarios sobre las mismas.

![Imagen](./assets/ANTI-SOCIALNET.jpeg)

# Contexto del Proyecto

En una primera reunión con los sponsors del proyecto, se definieron los siguientes requerimientos para el desarrollo de un **MVP (Producto Mínimo Viable)**:

- El sistema debe permitir que un usuario registrado realice una publicación (post), incluyendo **obligatoriamente una descripción**. De forma opcional, se podrán asociar **una o más imágenes** a dicha publicación.

- Las publicaciones pueden recibir **comentarios** por parte de otros usuarios.

- Las publicaciones pueden estar asociadas a **etiquetas (tags)**. Una misma etiqueta puede estar vinculada a múltiples publicaciones.

- Es importante que los **comentarios más antiguos que X meses** (valor configurable mediante variables de entorno, por ejemplo, 6 meses) **no se muestren** en la visualización de los posteos.

####

# Entidades y Reglas de Negocio

Los sponsors definieron los siguientes nombres y descripciones para las entidades:

- **User**: Representa a los usuarios registrados en el sistema. El campo `nickName` debe ser **único** y funcionará como identificador principal del usuario.

- **Post**: Publicación realizada por un usuario en una fecha determinada que contiene el texto que desea publicar. Puede tener **cero o más imágenes** asociadas. Debe contemplarse la posibilidad de **agregar o eliminar imágenes** posteriormente.

- **Post_Images**: Entidad que registra las imágenes asociadas a los posts. Para el MVP, solo se requiere almacenar la **URL de la imagen alojada**.

- **Comment**: Comentario que un usuario puede realizar sobre una publicación. Incluye la fecha en la que fue realizado y una indicación de si está **visible o no**, dependiendo de la configuración (X meses).

- **Tag**: Etiqueta que puede ser asignada a un post. Una etiqueta puede estar asociada a **muchos posts**, y un post puede tener **múltiples etiquetas**.

# Requerimientos Técnicos

1. **Modelado de Datos**

   - Diseñar el **Diagrama Entidad-Relación (DER)** considerando relaciones de tipo uno a muchos y muchos a muchos.

   - Además de las claves primarias, identificar en qué entidades se requiere una **clave única** (`unique key`), y definirla explícitamente.

2. **Desarrollo del Backend**

   - Crear los **endpoints CRUD** necesarios para cada entidad.

   - Implementar las rutas necesarias para gestionar las relaciones entre entidades (por ejemplo: asociar imágenes a un post, etiquetas a una publicación, etc.).

   - Desarrollar las validaciones necesarias para asegurar la integridad de los datos (schemas, validaciones de integridad referencial).

   - Desarrollar las funciones controladoras con una única responsabiliad evitando realizar comprobaciones innecesarias en esta parte del código.

3. **Configuración y Portabilidad**

   - El sistema debe poder cambiar de **base de datos** de forma transparente, utilizando configuración e instalación de dependencias adecuadas.

   - El sistema debe permitir configurar el **puerto de ejecución y variables de entorno** fácilmente.

4. **Documentación**

   - Generar la documentación de la API utilizando **Swagger (formato YAML)**, incluyendo todos los endpoints definidos.

5. **Colecciones de Prueba**

   - Entregar las colecciones necesarias para realizar pruebas (por ejemplo, colecciones de Postman o archivos JSON de ejemplo).

# Bonus

- Hace el upload de las imganes que se asocian a un POST que lo guarden en una carpeta de imagenes dentro del servidor web.
- ¿Cómo modelarías que un usuario pueda "seguir" a otros usuarios, y a su vez ser seguido por muchos? Followers
- Con la información de los post no varia muy seguido que estrategias podrian utilizar la que la información no sea constantemente consultada desde la base de datos.

# UnaHur Anti-Social Net API

API REST para una red social antisocial llamada UnaHur Anti-Social Net, desarrollada con Node.js, Express, Sequelize y SQLite.

**Configuración del Proyecto**:

**Instalar dependencias**:

npm install

**Para inicializar el proyecto**:

npm run dev

**Visualizar documentacion swagger**:

http://localhost:3000/api-docs

**Variables de entorno (.env)**:

PORT=3000
NODE_ENV=development

# Base de datos
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=unasocial_db
DB_HOST=localhost
DB_DIALECT=sqlite

# Configuración de la app
MAXIMO_MESES=6

# ENDPOINTS:

**Users**:

Método	Ruta	                  Descripción
GET	   /user	                  Obtener todos los usuarios
GET	   /user/:idUser	         Obtener un usuario por ID
POST	   /user	                  Crear un usuario
DELETE	/user/:idUser	         Eliminar un usuario
GET	   /user/:idUser/posts	   Obtener posts de un usuario
POST	   /user/:idUser/post	   Crear un post para un usuario (incluye tags e imágenes opcionales)
POST	   /user/:idUser/comment	Crear un comentario en un post
GET	   /user/:idUser/followed	Obtener usuarios que sigue el usuario
GET	   /user/:idUser/followers	Obtener usuarios que siguen al usuario
POST	   /user/:idUser/follow	   Seguir a otro usuario (body: { "idUser": <ID> })
DELETE	/user/:idUser/unfollow	Dejar de seguir a un usuario (body: { "idUser": <ID> })

**Ejemplo JSON para crear usuario**:

{
  "nickName": "john_doe",
  "name": "John Doe",
  "email": "john@example.com"
}

**Posts**:

Método	   Ruta	                        Descripción
GET	      /post	                        Obtener todos los posts
GET	      /post/:idPost	               Obtener un post por ID
GET	      /post/:idPost/comentarios	   Obtener comentarios de un post (filtrando por antigüedad)
GET	      /post/:idPost/tags	         Obtener tags de un post
GET	      /post/:idPost/user	         Obtener el usuario creador del post
POST	      /post/:idPost/tags	         Agregar tags a un post
POST	      /post/:idPost/images	         Subir imágenes a un post

**Ejemplo JSON para agregar tags a un post**:

{
  "tags": [
    { "tagName": "gatitos" },
    { "tagName": "programacion" }
  ]
}


**Ejemplo JSON para subir imágenes**:

{
  "images": [
    { "urlImg": "https://example.com/imagen1.jpg" },
    { "urlImg": "https://example.com/imagen2.jpg" }
  ]
}

**Tags**:

Método	    Ruta	               Descripción
GET	       /tag	               Obtener todos los tags
GET	       /tag/:idTag	      Obtener un tag por ID
GET	       /tag/:idTag/posts	Obtener posts asociados a un tag
POST	       /tag	               Crear un tag

Ejemplo JSON para crear tag:

{
  "tagName": "gatitos"
}

**Comments**:

Los comentarios se crean a través de POST /user/:idUser/comment

Filtrado automático de comentarios antiguos según MAXIMO_MESES

**Ejemplo JSON para crear comentario**:

{
  "comentario": "Gran post!"
}

**Middlewares Implementados**

validateSchema → Valida datos con Joi para Users, Posts, Tags y Comments.

validarById → Verifica si el ID existe en la DB antes de procesar la ruta.

validarIdPorBody → Verifica el ID que llega por el Body.

existAttribute → Evita duplicidad en atributos únicos (como nickName o tagName).

**Estructura de Datos**:

# Entidades:

# User:

nickName (único)

name

email

Relaciones: posts, comments, following, followers

# Post:

descripcion

Relaciones: user, comments, tags, post_images

# Comment

comentario

Relaciones: user, post

Filtrado automático según antigüedad

# Tag

tagName (único)

Relaciones: posts

# Post_Images:

urlImg

PostId

# Followers:

Relación muchos a muchos con la tabla followers

Cada usuario puede seguir a muchos y ser seguido por muchos

# Relaciones:

User → Post: 1:N

User → Comment: 1:N

User ↔ User: N:M (seguidores/seguidos, tabla followers)

Post → Comment: 1:N

Post → Post_Images: 1:N

Post ↔ Tag: N:M (tabla intermedia Post_Tag)

# Características:

Validaciones con Joi

Middlewares genéricos para IDs y unicidad

Filtro de comentarios antiguos configurable

Gestión de seguidores y seguidos

Timestamps (createdAt, updatedAt)

Claves únicas en:

users.nickName

tags.tagName

# Dependencias utilizadas:

Node.js

Express

Sequelize (ORM)

SQLite

Joi (Validaciones)