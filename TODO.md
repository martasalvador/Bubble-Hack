# LIVE VERSION HERE https://bubble-hack.netlify.app/

# LIVE VERSION HERE TOO https://martasalvador.github.io/Bubble-Hack/

# MΓNIMOS

- [ πββοΈ ] Que salte el player
- [ πββοΈ ] Que se pueda subir a una plataforma
- [ πββοΈ ] Que haya colisiΓ³n
- [ πββοΈ ] Que el player lance burbujas
- [ πββοΈ ] Si burbuja da a Enemy --> Lo encierra en burbuja y sube hacia arriba

# TO-DO

- [ πββοΈ ] Efecto flotando al llegar arriba
- [ πββοΈ ] Glitch ghost en misma posicion en x que player
- [ πββοΈ ] Si jugador toca burbuja por arriba, salta

## INTRO

- [ πββοΈ ] Preparar el Canvas de medida 900x500
- [ πββοΈ ] Funciones clave

## BACKGROUND

- [ πββοΈ ] Imagen que ocupe todo el canvas
- [ πββοΈ ] RectΓ‘ngulo negro que ocupe el 90% y estΓ© centrado
- [ πββοΈ ] PuntuaciΓ³n
- [ πββοΈ ] Tiempo
- [ πββοΈ ] Vidas

## PLATFORMS

- [ πββοΈ ] Plataformas
- [ πββοΈ ] ColisiΓ³n plataformas por arriba
- [ πββοΈ ] No choque con parte de abajo

## PLAYER

- [ πββοΈ ] AddEventListeners
- [ πββοΈ ] Dar movimiento al player
- [ πββοΈ ] Salto y gravedad
- [ πββοΈ ] Mejorar gravedad
- [ πββοΈ ] Que no se salga de la pantalla
- [ πββοΈ ] Volver a ver colisiones de salto con plataforma
- [ πββοΈ ] Movimiento fluido
- [ πββοΈ ] Impedir que el jugador pueda saltar dos veces seguidas
- [ πββοΈ ] Gravedad fluida al tocar el suelo
- [ πββοΈ ] ColisiΓ³n con Enemies
- [ πββοΈ ] 3 vidas
- [ πββοΈ ] Si encierra al enemigo con la burbuja --> Suma 100 puntos
- [ πββοΈ ] Al morir tarda 0.5s en reaparecer
- [ πββοΈ ] Al reaparecer tarda un poco en dejarte mover
- [ πββοΈ ] Sprite no se mueve al no pulsar ninguna tecla
- [ πββοΈ ] Sprite abre la boca al lanzar burbujas

## BUBBLES

- [ πββοΈ ] Crear burbujas
- [ πββοΈ ] La burbuja solo avanza 200px y sube hacia arriba
- [ πββοΈ ] Colisiona con enemigo
- [ πββοΈ ] Si colisiona con enemigo se convierte enemigo en burbuja y sube hacia arriba
- [ πββοΈ ] MΓ‘ximo 12 burbujas en pantalla, si hay mΓ‘s se elimina la primera creada
- [ πββοΈ ] Colisionan con plataformas
- [ πββοΈ ] Las burbujas no pueden salir del canvas
- [ πββοΈ ] Crear burbujas en ambos sentidos
- [ πββοΈ ] Burbujas suben por la izquierda
- [ πββοΈ ] Solo lanza una burbuja cada 1s
- [ πββοΈ ] Jugador explota burbujas al tocarlas
- [ πββοΈ ] Se pone encima de las burbujas
- [ πββοΈ ] Solo explotan burbujas sin enemigos

## ENEMIES

- [ πββοΈ ] Dar movimiento dentro de la plataforma
- [ πββοΈ ] ColisiΓ³n con player
- [ πββοΈ ] ColisiΓ³n con bubble
- [ πββοΈ ] Si colisiona con Bubble, se filtra del array
- [ πββοΈ ] Si matan 3 veces al player --> Gameover

## FRUITS ( BONUS )

- [ πββοΈ ] Aparece fruta
- [ πββοΈ ] Si muere --> Suelta fruta
- [ πββοΈ ] Suma puntos al coger fruta
- [ πββοΈ ] Fruta colisiona con las plataformas

## GHOST ( BONUS )

- [ πββοΈ ] Aparece ghost
- [ πββοΈ ] Ghost persigue al jugador <!-- YAY -->
- [ πββοΈ ] Ghost te quita puntos
- [ πββοΈ ] Se da la vuelta

##Β  GAMEOVER

- [ πββοΈ ] Si mueres 3 veces o se acaba el tiempo
- [ πββοΈ ] Aparece la puntuaciΓ³n
- [ πββοΈ ] AΓ±adir botΓ³n de restart
- [ πββοΈ ] AΓ±adir pantalla de victoria

##Β  SPRITES

- [ πββοΈ ] Player
- [ πββοΈ ] Enemigos
- [ πββοΈ ] Fruta
- [ πββοΈ ] Burbuja
- [ πββοΈ ] Ghost
- [ πββοΈ ] Background
- [ πββοΈ ] Plataformas

## BONUS

- [ πββοΈ ] Estrellas
- [ ] Nuevos niveles
- [ ] ΒΏMultiplayer? xd

## BUGS

- [ ] Clean code
- [ πββοΈ ] Burbujas salen por la derecha de la pantalla
- [ πββοΈ ] Burbujas salen de menor a mayor por la izq
- [ ] Revisar funcion checkbubbleplatformcollision
- [ πββοΈ ] Tarde en aparecer victory
- [ πββοΈ ] Burbujas cada vez que lanzas una se aceleran en la colision con plataforma
- [ πββοΈ ] Personaje acelera hasta el infinito
- [ πββοΈ ] Enemigos velocidades distintas

## STYLE

- [ πββοΈ ] Sonidos
- [ πββοΈ ] Fotos nuestras
- [ πββοΈ ] Pantalla de inicio bonita
- [ πββοΈ ] Pantalla game over bonita

## SONIDOS

- 2: salto
- 6: burbuja
- 14: ghost te ha pillado
- 15: game over
- 19: fruta
- 21: win

### ANOTACIONES

- Para movimiento fluido hay que asociar el eventlistener a un booleano para que funcione correctamente con el intervalo. Hay que usar keyup y keydown
