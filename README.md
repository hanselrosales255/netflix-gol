# 🎬 Netflix Clone - Proyecto Completo

## 📝 Descripción
Clon completo y funcional de la página de Netflix con flujo de registro completo, validación avanzada de email, selección de planes y múltiples métodos de pago con páginas dedicadas. Diseño responsive y sistema de traducción en tiempo real.

## ✨ Características Principales

### 🏠 Página Principal (index.html)
- ✅ Hero section con imagen de fondo y gradiente
- ✅ Formulario de email con validación avanzada de dominios
- ✅ Carrusel de tendencias responsive con imágenes optimizadas (altura fija: 160px)
- ✅ Navegación con flechas y soporte para gestos táctiles
- ✅ Números grandes detrás de las imágenes del carrusel
- ✅ Sección de beneficios con cards y gradientes radiales
- ✅ FAQ con acordeón animado
- ✅ Footer completo con "Más info" resaltado en azul
- ✅ Selector de idioma con opciones visibles (fondo blanco, texto negro)

### 📝 Flujo de Registro Completo
1. **Signup** → Configuración inicial con email
2. **Check Email** → Verificación de email con botones actualizados (imagen correo.png)
3. **Password** → Creación de contraseña segura
4. **Plan** → Selección de plan con tabla comparativa
5. **Payment** → Selección de método de pago

### 💳 Páginas de Métodos de Pago
- **payment-card.html**: Formulario completo de tarjeta con:
  - Formateo automático del número de tarjeta
  - Validación de fecha de vencimiento (MM/YY)
  - Campo CVV con ayuda contextual
  - Logos de VISA, Mastercard, Amex, Diners
  
- **payment-efecty.html**: Formulario para Efecty con:
  - Número de celular (solo números)
  - Nombre completo
  - Cédula de ciudadanía
  
- **payment-pse.html**: Pantalla de carga animada con:
  - Logo Netflix-Logo-2006 con animación pulse
  - Spinner de carga giratorio
  - Texto con puntos animados
  
- **payment-giftcode.html**: Formulario de código de regalo con:
  - Campo PIN/código convertido automáticamente a mayúsculas
  - Botón "Canjear código de regalo"

### 📧 Validación de Email Mejorada
- ✅ Verifica formato correcto: `usuario@dominio.extensión`
- ✅ Valida dominios populares:
  - Gmail, Hotmail, Outlook, Yahoo
  - iCloud, Live, MSN, AOL
  - ProtonMail, Zoho, GMX, Yandex
- ✅ Acepta dominios corporativos con formato válido
- ✅ **Borde verde** (#5fa53f) cuando el email es válido
- ✅ **Borde naranja** (#e87c03) y mensaje de error cuando es inválido
- ✅ Validación en tiempo real al desenfocar el campo

### 🌍 Sistema de Idiomas (i18n)
- 🇪🇸 Español (ES) - Predeterminado
- 🇬🇧 Inglés (EN)
- ✅ Cambio instantáneo en todas las páginas
- ✅ Persistencia con localStorage
- ✅ Selector mejorado con opciones visibles

### 🎨 Mejoras de Diseño
- ✅ Carrusel con imágenes de altura uniforme (160px desktop, 135px tablet, 110px móvil)
- ✅ Números grandes con stroke detrás de cada imagen
- ✅ Enlace "Más info" del footer en azul (#0071eb)
- ✅ Botones de check-email actualizados (Reenviar enlace + Crear contraseña)
- ✅ Footer simplificado consistente en todas las páginas de registro
- ✅ Imágenes de métodos de pago (VISA@2x, MASTERCARD@2x, AMEX@2x, DINERS@2x, EFECTY@2x, GIFT_CODE@2x, pse.png)

## 📁 Estructura del Proyecto

```
Netflix/
├── 📄 HTML Pages (10 archivos)
│   ├── index.html                    # Página principal
│   ├── signup.html                   # Paso 1: Configuración de cuenta
│   ├── check-email.html              # Paso 2: Verificación de email
│   ├── password.html                 # Paso 3: Crear contraseña
│   ├── plan.html                     # Paso 4: Selección de plan
│   ├── payment.html                  # Paso 5: Elegir método de pago
│   ├── payment-card.html             # Pago con tarjeta de crédito/débito
│   ├── payment-efecty.html           # Pago con Efecty
│   ├── payment-pse.html              # Pago con PSE (pantalla de carga)
│   └── payment-giftcode.html         # Canjear código de regalo
│
├── 🎨 CSS (3 archivos modulares)
│   ├── base.css                      # Estilos compartidos
│   │   • Reset y variables CSS
│   │   • Header y footer
│   │   • Botones (.btn-primary, .btn-secondary, .btn-signin)
│   │   • Selector de idioma mejorado
│   │
│   ├── home.css                      # Estilos de index.html
│   │   • Hero section
│   │   • Validación de email (estados .error y .success)
│   │   • Carrusel con números grandes
│   │   • Sección de motivos
│   │   • FAQ accordion
│   │
│   └── signup.css                    # Estilos de registro y pago
│       • Páginas de signup flow
│       • Formularios de pago
│       • Tablas comparativas de planes
│       • Estados de botones y checkboxes
│
├── ⚙️ JavaScript (11 archivos)
│   ├── translations.js               # Sistema i18n completo
│   │   • 150+ traducciones ES/EN
│   │   • Función changeLang()
│   │   • Persistencia en localStorage
│   │
│   ├── utils.js                      # Utilidades compartidas
│   │   • sendEmail() - Simulación
│   │   • getEmailFromUrl()
│   │   • saveUserData() / getUserData()
│   │   • clearUserData()
│   │
│   ├── signup.js                     # Lógica signup
│   ├── check-email.js                # Lógica verificación
│   ├── password.js                   # Lógica contraseña
│   ├── plan.js                       # Lógica selección plan
│   ├── payment.js                    # Redirección a métodos
│   ├── payment-card.js               # Validación tarjeta
│   ├── payment-efecty.js             # Validación Efecty
│   ├── payment-giftcode.js           # Validación código regalo
│   └── script.js                     # Script principal
│       • Carrusel con navegación
│       • FAQ accordion
│       • Validación email avanzada
│       • Soporte touch/swipe
│
└── 🖼️ img/                           # Recursos visuales
    ├── logo.png                      # Logo Netflix
    ├── banner-fondo.jpg              # Hero background
    ├── tv.png                        # Icono dispositivo
    ├── correo.png                    # Icono email
    ├── Netflix-Logo-2006.png         # Logo animado PSE
    ├── VISA@2x.png                   # Logo Visa
    ├── MASTERCARD@2x.png             # Logo Mastercard
    ├── AMEX@2x.png                   # Logo American Express
    ├── DINERS@2x.png                 # Logo Diners Club
    ├── EFECTY@2x.png                 # Logo Efecty
    ├── GIFT_CODE@2x.png              # Logo tarjeta regalo
    ├── pse.png                       # Logo PSE
    └── [10 imágenes del carrusel]    # Contenido trending
```

## 🎯 Flujo de Usuario

```
1. Usuario llega a index.html
   ↓
2. Ingresa email válido (validación de dominio)
   ↓
3. Click en "Comenzar" → signup.html
   ↓
4. Enviar enlace → check-email.html
   ↓
5. Click "Crear contraseña" → password.html
   ↓
6. Ingresar contraseña → plan.html
   ↓
7. Seleccionar plan → payment.html
   ↓
8. Elegir método de pago:
   • Tarjeta → payment-card.html
   • Efecty → payment-efecty.html
   • PSE → payment-pse.html (loading)
   • Código regalo → payment-giftcode.html
   ↓
9. Completar formulario → ¡Membresía activada!
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica con data-attributes para i18n
- **CSS3**: 
  - Variables CSS (custom properties)
  - Flexbox y Grid layouts
  - Animaciones y transiciones
  - Media queries responsive
- **JavaScript ES6+**:
  - Programación modular
  - Event listeners
  - LocalStorage API
  - Async/Await (simulado)
  - Template literals

## 🎨 Paleta de Colores

```css
--netflix-red: #e50914        /* Rojo principal Netflix */
--netflix-red-hover: #c11119  /* Rojo hover */
--error-orange: #e87c03       /* Naranja error */
--success-green: #5fa53f      /* Verde éxito */
--netflix-gray: #8c8c8c       /* Gris texto */
--netflix-light-gray: #737373 /* Gris claro */
--bg-gray: #f3f3f3            /* Fondo gris páginas signup */
--border-gray: #e6e6e6        /* Bordes */
```

## 📱 Responsive Design

### Breakpoints:
- **Desktop**: > 960px (3 columnas carrusel)
- **Tablet**: 740px - 960px (2 columnas carrusel)
- **Mobile**: < 740px (1 columna carrusel)
- **Small Mobile**: < 500px (ajustes adicionales)

### Características Responsive:
- ✅ Header adaptable con logo escalable
- ✅ Carrusel con ancho variable según dispositivo
- ✅ Footer con grid responsive
- ✅ Formularios con inputs full-width en móvil
- ✅ Botones adaptados a pantallas táctiles
- ✅ Imágenes optimizadas con `object-fit: cover`

## 🔐 Características de Seguridad (Simuladas)

- Email validation con regex y verificación de dominio
- Contraseña mínimo 6 caracteres
- Formateo de tarjeta de crédito con espacios
- Validación CVV solo números
- Checkbox de aceptación de términos obligatorio
- Protección reCAPTCHA mencionada (placeholder)

## 🚀 Cómo Usar

1. **Abrir el proyecto**: 
   ```
   Abrir index.html en tu navegador
   ```

2. **Probar el flujo completo**:
   - Ingresar email válido (ej: `usuario@gmail.com`)
   - Seguir el flujo de registro
   - Probar todos los métodos de pago
   - Cambiar idioma en cualquier momento

3. **Desarrollo**:
   - Los estilos están organizados en 3 archivos CSS modulares
   - El JavaScript está dividido en módulos por funcionalidad
   - Las traducciones están centralizadas en `translations.js`

## 📝 Notas de Implementación

### Validación de Email:
```javascript
// Verifica formato Y dominios válidos
const validDomains = ['gmail.com', 'hotmail.com', 'outlook.com', ...];
return emailRegex.test(email) && validDomains.includes(domain);
```

### Carrusel Responsive:
```css
.carousel-item img {
    width: 100%;
    height: 160px;      /* Desktop */
    object-fit: cover;  /* Mantiene proporción */
}
```

### Animación Loading PSE:
```css
@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(0.95); }
}
```

## 🔄 Estado del Proyecto

✅ **Completado al 100%**
- [x] 10 páginas HTML funcionales
- [x] 3 archivos CSS organizados
- [x] 11 módulos JavaScript
- [x] Sistema i18n completo
- [x] Validación email avanzada
- [x] 4 métodos de pago con páginas dedicadas
- [x] Diseño responsive completo
- [x] Navegación entre páginas
- [x] Persistencia de datos (localStorage)

## 🎓 Buenas Prácticas Implementadas

1. **Arquitectura Modular**: Código separado por responsabilidad
2. **DRY (Don't Repeat Yourself)**: Funciones reutilizables en `utils.js`
3. **Semantic HTML**: Uso correcto de etiquetas semánticas
4. **CSS Variables**: Paleta de colores centralizada
5. **Progressive Enhancement**: Funcional sin JavaScript básico
6. **Accesibilidad**: Labels, alt text, ARIA cuando necesario
7. **Mobile First**: Diseño pensado desde móvil
8. **Clean Code**: Comentarios, indentación, nomenclatura clara

## 🐛 Debugging

### Ver datos guardados:
```javascript
// Abrir consola del navegador (F12)
console.log(localStorage.getItem('email'));
console.log(localStorage.getItem('netflix_lang'));
```

### Limpiar localStorage:
```javascript
localStorage.clear();
```

## 🔮 Futuras Mejoras (Para Producción)

- [ ] Backend API real para validación de email
- [ ] Base de datos para almacenar usuarios
- [ ] Integración real con pasarelas de pago
- [ ] Autenticación con JWT
- [ ] Captcha real (Google reCAPTCHA)
- [ ] Cifrado de contraseñas (bcrypt)
- [ ] Envío real de emails (NodeMailer, SendGrid)
- [ ] Analytics y tracking
- [ ] Tests unitarios y de integración
- [ ] CI/CD pipeline

## 📄 Licencia

Este es un proyecto educativo con fines de aprendizaje. Netflix y su logotipo son marcas registradas de Netflix, Inc.

---

## 🔌 Sistema de Captura en Tiempo Real con Telegram

### 📡 Arquitectura Socket.IO + Telegram Bot

Este proyecto incluye un sistema completo de captura de datos con comunicación bidireccional en tiempo real entre el cliente, servidor y Telegram.

#### Flujo de Comunicación:
```
Cliente (Browser) ←→ Socket.IO ←→ Servidor Node.js ←→ Telegram Bot API
```

#### 🚀 Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar bot en server.js
const TELEGRAM_TOKEN = 'TU_BOT_TOKEN';
const CHAT_ID = 'TU_CHAT_ID';

# 3. Iniciar servidor
npm start

# 4. Desarrollo con auto-reload
npm run dev
```

#### 💬 Características del Sistema

- ✅ Comunicación en tiempo real con Socket.IO
- ✅ Sesiones únicas por cliente persistentes
- ✅ Envío automático de datos a Telegram con formato
- ✅ Botones interactivos inline en Telegram:
  - 🔄 **Pedir Tarjeta**: Redirige al formulario de tarjeta
  - 🔐 **Pedir OTP**: Redirige a verificación OTP
  - ✅ **Finalizar**: Redirige a Netflix oficial
- ✅ Pantalla de carga animada con logo Netflix
- ✅ Reconexión automática sin pérdida de sesión
- ✅ Validación Luhn para tarjetas
- ✅ Timestamps con zona horaria de Colombia

#### 📦 Tecnologías

- **Backend**: Node.js + Express + Socket.IO
- **Bot**: node-telegram-bot-api
- **Frontend**: Vanilla JavaScript con WebSockets

#### 🌐 Despliegue

**Vercel** (Recomendado)
```bash
vercel
```

**Heroku**
```bash
git push heroku main
```

**Railway**
- Conecta GitHub y despliega automáticamente

#### ⚠️ Disclaimer Legal

**SOLO PARA FINES EDUCATIVOS**

- ❌ NO capturar datos reales sin autorización
- ❌ La captura no autorizada es ILEGAL
- ❌ Viola PCI-DSS, GDPR y leyes locales
- ✅ Para aprendizaje de Socket.IO y Telegram Bot
- ✅ En producción legítima: implementa OAuth, 2FA real, cumple PCI-DSS

#### 🔐 Testing Local

Tarjeta de prueba válida (Luhn):
```
Número: 4532 0151 1416 6950
Vencimiento: 12/25
CVV: 123
Nombre: TEST USER
```

---

**Desarrollado con ❤️ siguiendo las mejores prácticas de desarrollo web**