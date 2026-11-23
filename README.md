# velcore-web

Sitio web de **Velcore** (velcore.com.mx): gestión de Mercado Libre y Amazon, desarrollo web y soluciones digitales. Guadalajara · Ciudad de México.

Este repositorio es la **única fuente** del sitio. Lo editan Javier, Claude y ChatGPT. Hostinger lo publica automáticamente cada vez que se sube un cambio a la rama `main`.

## Estructura

```
index.html      Sitio de Velcore: HTML, CSS y JavaScript en un solo archivo
media/          Logos, logos de clientes, capturas de proyectos, favicon e imagen para redes
Xpaa/           Página del cliente Xpaá Cosmetología Integral → velcore.com.mx/Xpaa/
  index.html    Página completa de Xpaá (un solo archivo)
  media/        Fotos, logo (SVG), QR de la ruta, favicon e imagen para redes
README.md       Este archivo (no se publica)
robots.txt      Indicaciones para buscadores
sitemap.xml     Mapa del sitio para Google
.htaccess       Configuración del servidor (oculta archivos internos, caché)
```

Es un sitio estático: no hay paso de compilación, dependencias ni `package.json`. Lo que está en `main` es exactamente lo que se publica.

## Reglas para editar (personas e IAs)

1. **Edita `index.html` en su lugar.** No lo conviertas a otro framework ni lo partas en varios archivos sin acordarlo antes.
2. **Bilingüe ES/EN.** Cada texto visible va en pares:
   `<span lang="es">Texto</span><span lang="en">Text</span>`
   El CSS muestra un idioma a la vez según el selector ES/EN. Si agregas texto, agrega las dos versiones.
3. **Modo oscuro y claro.** Los colores salen de las variables del bloque `:root` (oscuro) y `:root[data-mode="light"]` (claro). Usa esas variables; no pongas colores fijos sueltos.
4. **Marca.** Tipografías Sora (títulos), Roboto (texto) y JetBrains Mono (etiquetas). Azul `#1e3dff` y el degradado azul → cian → violeta → magenta (`--grad`).
5. **Imágenes** van en `media/` y se enlazan con rutas relativas (`media/archivo.webp`). Prefiere `.webp` o `.svg`.
6. **WhatsApp.** El número está en `WA_NUMBER` dentro del `<script>` final. Los botones usan `data-wa="general" | "mp" | "dev"` para elegir el mensaje.
7. **Formulario.** Si se llena `FORM_ENDPOINT` en el script, el formulario envía por POST (JSON). Si está vacío, arma el mensaje para WhatsApp o correo.
8. **Antes de subir a `main`**, revisa la página en escritorio y en celular, en modo oscuro y claro, y en ES y EN.

## Publicación

- Hostinger despliega `main` automáticamente (despliegue estático desde GitHub).
- Para probar cambios grandes sin publicarlos, trabaja en otra rama y únela a `main` cuando esté aprobada.

## Página de Xpaá (`Xpaa/`)

Es un cliente con su propia identidad; las reglas 2 a 4 de arriba (bilingüe, modo oscuro, marca Velcore) **no** aplican aquí.

- Solo español, tema claro.
- Colores y tipografías de Xpaá, definidos en `:root` al inicio de su `<style>`: oliva `#738b4c` / `#435831`, tierra `#8a6d5a`, taupe `#b6a69e`, crema `#f7f4ee`; DM Serif Display (títulos) y Montserrat (texto).
- WhatsApp de Xpaá: `523319407434`. Cada servicio tiene su propio mensaje prellenado.
- Precios, duraciones y descripciones vienen de la información de la cosmetóloga. No agregues promesas de resultados ("sin dolor", "garantizado", porcentajes) sin que ella lo confirme.
- La carpeta se llama `Xpaa` con X mayúscula: la dirección `velcore.com.mx/Xpaa` distingue mayúsculas.

