# AeroOps GT — código portable

Este paquete contiene la demo interactiva de la propuesta de servicios de operaciones aeronáuticas.

## Contenido

- `dist/`: versión lista para publicar.
- `index.html`, `styles.css` y `app.js`: código fuente editable.
- `package.json`: comandos opcionales de construcción y prueba.
- `Dockerfile`: despliegue rápido mediante Docker.
- `nginx.conf.example`: configuración de referencia para un VPS con Nginx.

El sitio es estático: no necesita base de datos, PHP ni Node.js en producción.

## Ejecutarlo localmente

### Con Python

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8080 --directory dist
```

En Windows también puede usarse:

```powershell
py -m http.server 8080 --directory dist
```

Después, abrir `http://localhost:8080`.

También puede abrirse `dist/index.html` directamente, aunque un servidor local reproduce mejor el comportamiento del hosting.

## Hosting compartido o cPanel

1. Abrir el Administrador de archivos.
2. Entrar a `public_html` o a la carpeta asignada al dominio.
3. Subir **el contenido de `dist/`**, no la carpeta completa.
4. Verificar que `index.html` quede directamente dentro de `public_html`.
5. Activar HTTPS desde el panel del proveedor.

No se requieren reglas de reescritura porque la navegación utiliza fragmentos como `#servicios` y `#contacto`.

## VPS con Nginx

Copiar los archivos:

```bash
sudo mkdir -p /var/www/aeroops
sudo cp -r dist/* /var/www/aeroops/
```

Usar `nginx.conf.example` como referencia, reemplazar `propuesta.example.com` por el dominio real y validar Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

El DNS del dominio debe apuntar a la IP del VPS. Después puede configurarse HTTPS con el proveedor o con Certbot.

## Docker

Construir y ejecutar:

```bash
docker build -t aeroops-web .
docker run --rm -p 8080:80 aeroops-web
```

Abrir `http://localhost:8080`.

## Netlify, Cloudflare Pages o servicios similares

- Comando de construcción: `npm run build`
- Directorio de publicación: `dist`

El proyecto no requiere instalar dependencias para construirlo.

## Editar y reconstruir

Editar `index.html`, `styles.css` o `app.js` y ejecutar:

```bash
npm run build
npm run check
```

Los archivos actualizados se copiarán a `dist/`.

## Antes de publicarlo para clientes

- Sustituir `AeroOps GT` si no será el nombre definitivo.
- Reemplazar el correo demostrativo `contacto@dominio-por-confirmar.gt`.
- Confirmar precios, impuestos, alcance y condiciones comerciales.
- Cargar enlaces oficiales y recursos aprobados.
- Preparar y validar la traducción al inglés.
- Añadir fotografías y certificaciones únicamente con autorización.

Importante: al subir `dist/` a un hosting convencional, el sitio normalmente quedará público. Si debe conservarse privado, configure autenticación o una lista de usuarios desde el hosting, Nginx o el proveedor elegido.
