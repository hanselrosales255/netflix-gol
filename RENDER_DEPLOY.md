# 🎨 Desplegar en Render (GRATIS)

## ✅ Ventajas de Render
- 🆓 Plan gratuito PERMANENTE para aplicaciones web
- 🚀 Despliegue automático desde GitHub
- 🌐 SSL/HTTPS incluido
- ⚡ Sin tarjeta de crédito requerida

## 📋 Pasos para Desplegar

### 1. Crear cuenta en Render

1. Ve a: https://render.com
2. Click en "Get Started"
3. Sign up con tu cuenta de GitHub

### 2. Crear Web Service

1. En el Dashboard, click "New +"
2. Selecciona "Web Service"
3. Click "Connect a repository"
4. Autoriza a Render acceso a GitHub
5. Busca y selecciona: `hanselrosales255/netflix-gol`
6. Click "Connect"

### 3. Configurar el servicio

Render auto-detectará el proyecto Node.js. Configura:

**Settings básicos:**
- Name: `netflix-gol` (o el que prefieras)
- Region: `Oregon (US West)` o el más cercano
- Branch: `main`
- Root Directory: (dejar vacío)
- Runtime: `Node`
- Build Command: `npm install`
- Start Command: `npm start`

**Plan:**
- Selecciona: **Free** (0$/mes)

### 4. Variables de Entorno

Click en "Advanced" y luego "Add Environment Variable":

```
TELEGRAM_TOKEN=7244927485:AAFyWj9h6o33uVb7TgaaawKvpiY8MHx-ero
CHAT_ID=-5088262475
NODE_ENV=production
```

(Usa tus propios valores reales)

### 5. Desplegar

1. Click en "Create Web Service"
2. Render comenzará a:
   - Clonar el repo
   - Instalar dependencias
   - Iniciar el servidor
3. Espera 2-3 minutos
4. Verás el status: "Live" ✅

### 6. Obtener URL

Una vez desplegado:
- URL: `https://netflix-gol.onrender.com` (o el nombre que elegiste)
- Copia esta URL para usar tu aplicación

## 🔄 Actualizaciones Automáticas

Cada `git push` a `main` desplegará automáticamente:
```bash
git add .
git commit -m "Update app"
git push origin main
```

Render detectará el cambio y redesplegará automáticamente.

## ⚠️ Nota sobre Plan Gratuito

El plan gratuito de Render:
- ✅ Gratis para siempre
- ⚠️ Se "duerme" después de 15 minutos de inactividad
- ⏱️ Primera carga puede tardar 30-60 segundos (cold start)
- ✅ Después funciona normalmente

## 📊 Monitorear el servicio

En el Dashboard de Render puedes ver:
- **Logs**: Click en "Logs" para ver console.log
- **Metrics**: CPU, memoria, requests
- **Events**: Historial de deployments

## 🐛 Troubleshooting

### "Build failed"
- Ve a Logs y revisa el error
- Verifica que package.json esté correcto
- Asegúrate de que las dependencias estén en "dependencies" no "devDependencies"

### "Application Error"
- Revisa que las variables de entorno estén configuradas
- Ve a Logs y busca errores de Node.js
- Verifica que el bot de Telegram sea válido

### Socket.IO no conecta
- Asegúrate de usar la URL de Render (no localhost)
- Verifica que el cliente use `window.location.origin`

## 💰 Upgrade (Opcional)

Si necesitas eliminar el cold start:
- Plan Starter: $7/mes
- Siempre activo (no se duerme)
- Más recursos (CPU/RAM)

## 🎉 ¡Listo!

Tu aplicación estará en: `https://tu-app.onrender.com`

**Tiempo total de setup:** ~5 minutos

---

## 📚 Recursos
- [Render Docs](https://render.com/docs)
- [Render Discord](https://discord.gg/render)
