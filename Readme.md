# Proyecto 18-8

Aplicación web desarrollada con una arquitectura separada entre frontend y backend. El proyecto permite trabajar con información de planetas mediante una API REST y una interfaz web desarrollada con React.

# Tecnologías utilizadas
### Backend
- Node.js
- Express
- SQLite
- JavaScript

### Frontend
- React
- Vite
- JavaScript
- CSS
- ESLint

# Estructura del proyecto

```
18-8/
├── BackEnd/
│   ├── src/
│   │   ├── Controller/
│   │   │   └── Planetas.Controller.js
│   │   ├── db/
│   │   │   ├── data.db
│   │   │   └── database.js
│   │   └── Router/
│   │       └── Rutas.routes.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   │   └── Home/
│   │   │       ├── Encabezado.jsx
│   │   │       ├── Layouts.css
│   │   │       └── Layouts.jsx
│   │   ├── static/
│   │   │   └── Logo.gif
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
├── Documents/
│   └── Informe.pdf
│
├── Media/
└── Readme.md

```


## Instalación

1. Clonar el repositorio
```bash
    git clone <URL_DEL_REPOSITORIO>
    cd 18-8
```

2. Instalar las dependencias del backend
```bash
cd BackEnd
npm install
```

3. Configurar las variables de entorno

Crear un archivo .env dentro de BackEnd con las variables necesarias para ejecutar el servidor.

4. Ejecutar el backend
```bash
npm run server
```

Si el proyecto utiliza otro script definido en package.json, ejecutar el comando correspondiente.

5. Instalar las dependencias del frontend

Desde la carpeta principal:
```bash
cd FrontEnd
npm install
```

6. Ejecutar el frontend
```bash
npm run dev
```




Proyecto desarrollado como parte del trabajo práctico correspondiente al proyecto 18-8.