-- 👩‍💻 EJERCICIO 1
SELECT
  *
FROM
  movies
WHERE
  year = 1999;

-- 👩‍💻 EJERCICIO 2
-- ¿Cómo sería el comando para obtener todas aquellas películas que tengan una duración menor a 90 minutos? En total son 9 películas que cumplen esta condición.
SELECT
  *
FROM
  movies
WHERE
  duration < 90;

-- 👩‍💻 EJERCICIO 3
--¿Cómo sería el comando para obtener todas aquellas películas creadas entre el año 1930 y 1940? En total son 4 películas que cumplen esta condición.
SELECT
  *
FROM
  movies
WHERE
  year BETWEEN 1930
  AND 1940;

-- 👩‍💻 EJERCICIO 4
-- ¿Cómo sería el comando para obtener todas aquellas películas que tengan en su titulo el substring 'til'? En total son 3 películas que cumplen esta condición.
SELECT
  *
FROM
  movies
WHERE
  title LIKE '%til%';

-- 👩‍💻 EJERCICIO 5
-- ¿Cómo sería el comando para obtener todas aquellas películas que tengan sólo 1 actor en su propiedad actors? En total son 27 películas que cumplen esta condición.
SELECT
  *
FROM
  movies
WHERE
  ARRAY_LENGTH(actors, 1) = 1;

SELECT
  *
FROM
  movies
WHERE
  CARDINALITY(actors) = 1;

-- 👩‍💻 EJERCICIO 6
-- ¿Cómo sería el comando para obtener el título de cada película, incluyendo el promedio de todas sus puntuaciones de rating? Recuerda que "rating" es una propiedad de la tabla movies, y es un arreglo de números.
SELECT
  title,
  ROUND(AVG(rating), 2) AS avg_rating
FROM
  movies,
  UNNEST(ratings) AS rating
GROUP BY
  title;

SELECT
  title,
  (
    SELECT
      ROUND(AVG(rating), 2) AS avg_rating
    FROM
      UNNEST(ratings) AS rating
  )
FROM
  movies;

-- 👩‍💻 EJERCICIO 7
-- ¿Cómo sería el comando para obtener a los actores de aquellas películas que incluyan en su nombre el string "Fast and", pero que también sean del año 2016? En total serán dos filas con nombres de actores.
SELECT
  actors
FROM
  movies
WHERE
  title LIKE '%Fast and%'
  AND year = 2016;