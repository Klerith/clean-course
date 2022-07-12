# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

# Notas del curso

1. Nombre de variables: Que se identifique facilmente que almacena la variable.
2. Nombre de funciones: Nombre de lo que realiza la funcion (no como lo hace).
3. DRY: Dont repeat yourself, evitar codigo repetitivo, utilizar funciones o refactorizar.
4. Clases: Aplicar principio de responsabilidad única y priorizar la composición frente a la herencia. 
5. Comentarios: No comentes el código mal escrito, reescríbelo. Nuestro código debe de ser suficientemente auto explicativo. Lo que debemos de comentar es el por qué en lugar de el que o el cómo, ya que el cómo lo vemos en el código y el que hace no deberia ser necesario ya que estamos escribiendo código auto explicativo, pero el por qué he decido resolver algo de cierta manera a sabiendas de que existen otras posibles soluciones, eso si debe ser explicado.
6. Uniformidad en el proyecto: Problemas similares, soluciones similares. Tener un estandar para la creacion de carpetas del proyecto.<br />
ej: product/product-list.html. <br />
Formato de codigo, ej: eslint <br />
Indentación: Depende del lenguaje.

  ### Estructura de las clases
  Comenzar con la lista de propiedades.
  - Propiedades estáticas.
  - Propiedades públicas de último.
  ### Métodos
  - Empezando por los constructores estáticos.
  - Luego el constructor.
  - Seguidamente métodos estáticos.
  - Métodos privados después.
  - Resto de métodos de instancia ordenados de mayor a menor importancia.
  - Getters y Setters al final.

# Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```