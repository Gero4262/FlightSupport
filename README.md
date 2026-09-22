# Flight Support — propuesta web

Demo interactiva para presentar una propuesta de servicios de operaciones aeronáuticas.

## GitHub Pages

La publicación utiliza GitHub Pages desde la rama `main` y el directorio raíz. Los archivos `index.html`, `styles.css` y `app.js` forman la versión pública.

## Desarrollo local

```bash
npm run build
python3 -m http.server 8080 --directory dist
```

Abrir `http://localhost:8080`.

Para instrucciones de VPS, cPanel, Docker y privacidad, consultar `README_DEPLOY.md`.
