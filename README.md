# LIVE VERSION HERE https://bubble-hack.netlify.app/

# MÍNIMOS

- [ 💁‍♀️ ] Que salte el player
- [ 💁‍♀️ ] Que se pueda subir a una plataforma
- [ 💁‍♀️ ] Que haya colisión
- [ 💁‍♀️ ] Que el player lance burbujas
- [ 💁‍♀️ ] Si burbuja da a Enemy --> Lo encierra en burbuja y sube hacia arriba
- [ ] ¿?

# TO-DO

- [ ] Solo explotan burbujas azules
- [ ] Efecto flotando al llegar arriba
- [ ] Si jugador toca burbuja por arriba, salta

## INTRO

- [ 💁‍♀️ ] Preparar el Canvas de medida 900x500
- [ 💁‍♀️ ] Funciones clave

## BACKGROUND

- [ 💁‍♀️ ] Imagen que ocupe todo el canvas
- [ 💁‍♀️ ] Rectángulo negro que ocupe el 90% y esté centrado
- [ 💁‍♀️ ] Puntuación
- [ 💁‍♀️ ] Tiempo
- [ 💁‍♀️ ] Vidas

## PLATFORMS

- [ 💁‍♀️ ] Plataformas
- [ 💁‍♀️ ] Colisión plataformas por arriba
- [ 💁‍♀️ ] No choque con parte de abajo

## PLAYER

- [ 💁‍♀️ ] AddEventListeners
- [ 💁‍♀️ ] Dar movimiento al player
- [ 💁‍♀️ ] Salto y gravedad
- [ 💁‍♀️ ] Mejorar gravedad
- [ 💁‍♀️ ] Que no se salga de la pantalla
- [ 💁‍♀️ ] Volver a ver colisiones de salto con plataforma
- [ 💁‍♀️ ] Movimiento fluido
- [ 💁‍♀️ ] Impedir que el jugador pueda saltar dos veces seguidas
- [ 💁‍♀️ ] Gravedad fluida al tocar el suelo
- [ 💁‍♀️ ] Colisión con Enemies
- [ 💁‍♀️ ] 3 vidas
- [ 💁‍♀️ ] Si encierra al enemigo con la burbuja --> Suma 100 puntos
- [ 💁‍♀️ ] Al morir tarda 0.5s en reaparecer
- [ 💁‍♀️ ] Al reaparecer tarda un poco en dejarte mover

## BUBBLES

- [ 💁‍♀️ ] Crear burbujas
- [ 💁‍♀️ ] La burbuja solo avanza 200px y sube hacia arriba
- [ 💁‍♀️ ] Colisiona con enemigo
- [ 💁‍♀️ ] Si colisiona con enemigo se convierte enemigo en burbuja y sube hacia arriba
- [ 💁‍♀️ ] Máximo 12 burbujas en pantalla, si hay más se elimina la primera creada
- [ 💁‍♀️ ] Colisionan con plataformas <!-- REVISAR VELOCIDAD - BUGS -->
- [ 💁‍♀️ ] Las burbujas no pueden salir del canvas
- [ 💁‍♀️ ] Crear burbujas en ambos sentidos
- [ 💁‍♀️ ] Burbujas suben por la izquierda
- [ 💁‍♀️ ] Solo lanza una burbuja cada 1s
- [ 💁‍♀️ ] Jugador explota burbujas al tocarlas
- [ 💁‍♀️ ] Se pone encima de las burbujas

## ENEMIES

- [ 💁‍♀️ ] Dar movimiento dentro de la plataforma
- [ 💁‍♀️ ] Colisión con player
- [ 💁‍♀️ ] Colisión con bubble
- [ 💁‍♀️ ] Si colisiona con Bubble, se filtra del array
- [ 💁‍♀️ ] Si matan 3 veces al player --> Gameover

## FRUITS ( BONUS )

- [ 💁‍♀️ ] Aparece fruta
- [ 💁‍♀️ ] Si muere --> Suelta fruta
- [ 💁‍♀️ ] Suma puntos al coger fruta
- [ 💁‍♀️ ] Fruta colisiona con las plataformas

## GHOST ( BONUS )

- [ 💁‍♀️ ] Aparece ghost
- [ 💁‍♀️ ] Ghost persigue al jugador <!-- YAY -->
- [ 💁‍♀️ ] Ghost te quita puntos

##  GAMEOVER

- [ 💁‍♀️ ] Si mueres 3 veces o se acaba el tiempo
- [ 💁‍♀️ ] Aparece la puntuación
- [ 💁‍♀️ ] Añadir botón de restart
- [ 💁‍♀️ ] Añadir pantalla de victoria

##  SPRITES

- [ 💁‍♀️ ] Player
- [ 💁‍♀️ ] Enemigos
- [ ] Fruta
- [ ] Burbuja

## BONUS

- [ ] Nuevos niveles
- [ ] ¿Multiplayer? xd

## BUGS

- [ ] Clean code
- [ ] Revisar funcion checkbubbleplatformcollision
- [ ] Burbujas cada vez que lanzas una se aceleran en la colision con plataforma
- [ 💁‍♀️ ] Personaje acelera hasta el infinito
- [ 💁‍♀️ ] Enemigos velocidades distintas

### ANOTACIONES

- Para movimiento fluido hay que asociar el eventlistener a un booleano para que funcione correctamente con el intervalo. Hay que usar keyup y keydown
