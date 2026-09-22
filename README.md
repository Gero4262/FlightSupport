# AeroOps GT — propuesta web

Demo interactiva para presentar una propuesta de servicios de operaciones aeronáuticas.

## GitHub Pages

El proyecto incluye un flujo de GitHub Actions en `.github/workflows/pages.yml`. Cada cambio enviado a la rama `main` reconstruye `dist/` y publica la versión resultante en GitHub Pages.

En la configuración del repositorio, Pages debe utilizar **GitHub Actions** como origen.

## Desarrollo local

```bash
npm run build
python3 -m http.server 8080 --directory dist
```

Abrir `http://localhost:8080`.

Para instrucciones de VPS, cPanel, Docker y privacidad, consultar `README_DEPLOY.md`.
