# Challenge Website - Insurezella

Insurezella es una web que facilita la adqusición de seguros a los interesados, y ayuda a determinar a los usuarios cuál es el seguro que más se ajusta a ellos de acuerdo a sus necesidades.

En este repositorio se realizó una landing page para Insurezella como challenge impuesto por A Teamwork para el puesto de Web Developer. Se buscó replicar con la mayor exactitud posible las características visuales y funcionales de el diseño proporcionado por A Teamwork.

Esta landing page cuenta con 3 breakpoints:

- sm: Idealmente para resoluciones de 390px horizontales
- md: Idealmente para resoluciones de 768px horizontales
- lg: Idealmente para resoluciones de 1024xp horizontales

## ¿Cómo instalar y correr este proyecto localmente?

Lo que tienes que hacer es bastante sencillo. Primero que todo, asegúrate de clonar este repositorio.

Cuando ya hayas hecho esto, dirígete al directorio en donde se encuentra el proyecto, y ejecuta el siguiente comando:

```bash
  npm i
```

Espera unos momentos para que se instalen las dependecias necesarias, y cuando ya todo esta listo, ejecutarás el siguiente comando:

```bash
  npm run dev
```

Si hiciste todo bien, deberías ver unas líneas en tu consola de comandos que indican que el proyecto ha empezado a correr de manera exitosa localmente. Puedes hacer click en el enlace que te proporciona Vite para acceder a la páginna.

## Proceso de desarrollo

Para empezar a desarrollar esta landing, me basé en la filosofía de "Mobile First", teniendo en cuenta que la mayor cantidad de usuarios en internet accede desde dispositivos móviles como teléfonos inteligentes, consideré prudente tomar este enfoque para la realización de dicho diseño.

Primero me aseguré de desarollar todos los estilos de la forma más similar posible al diseño proporcionado, yendo desde el breakpoint más pequeño (sm) hasta el breakpoint de mayor resolución (lg).

Cuando terminé todo en cuanto a estilos, procedí a escribir el JavaScript necesario para dotar a esta landing page con las funcionalidades mínimas, basándonos en lo que se puede ver en las imágenes compartidas por A Teamwork.

# ¿Qué se usó para el desarrollo de esta landing?

- React - 18.3.3
- Vite - 5.3.4
- Tailwind CSS - 3.4.7
- Font Awesome Icons - 0.2.2

Como se me dio la libertad para trabajar con las tecnologías que prefiriera, decidí trabajar con React y Tailwind por que son herramientas que en el pasado he utilizado con cierta frecuencia.

Por otro lado, utilicé Vite pues lo considero bastante útil y práctico para el desarrollo de aplicaciones web con React, facilitando mucho el proceso de configuración inicial y haciendo más rápido los tiempos de compilación a la hora de hacer tests.

Para los íconos usé la libería de Font Awesome pues me parece bastante completa, aun dentro de su versión gratuita. No obstante, hubo algunos íconos que no pude encontrar, por lo que tuve que usar reemplazos "parecidos" para ciertas secciones de la página.
