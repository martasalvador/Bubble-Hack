# MÍNIMOS

- [ 💁‍♀️ ] Que salte el player
- [ 💁‍♀️ ] Que se pueda subir a una plataforma
- [ 💁‍♀️ ] Que haya colisión
- [ 💁‍♀️ ] Que el player lance burbujas
- [ 💁‍♀️ ] Si burbuja da a Enemy --> Lo encierra en burbuja y sube hacia arriba
- [ ] ¿?

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
- [ 💁 ] Movimiento fluido
- [ ] Gravedad fluida al tocar el suelo
- Para movimiento fluido hay que asociar el eventlistener a un booleano para que funcione correctamente con el intervalo. Hay que usar keyup y keydown
- [ 💁‍♀️ ] Colisión con Enemies
- [ 💁‍♀️ ] 3 vidas
- [ 💁‍♀️ ] Si encierra al enemigo con la burbuja --> Suma 100 puntos

## BUBBLES

- [ 💁‍♀️ ] Crear burbujas
- [ 💁‍♀️ ] La burbuja solo avanza 200px y sube hacia arriba
- [ 💁‍♀️ ] Colisiona con enemigo
- [ 💁‍♀️ ] Si colisiona con enemigo se convierte enemigo en burbuja y sube hacia arriba
- [ 💁‍♀️ ] Máximo 12 burbujas en pantalla, si hay más se elimina la primera creada
- [ ] Colisionan con plataformas
- [ ] Las burbujas no pueden salir del canvas
- [ 💁‍♀️ ] Crear burbujas en ambos sentidos

## ENEMIES

- [ 💁‍♀️ ] Dar movimiento dentro de la plataforma
- [ 💁‍♀️ ] Colisión con player
- [ 💁‍♀️ ] Colisión con bubble
- [ 💁‍♀️ ] Si colisiona con Bubble, se filtra del array

- [ 💁‍♀️ ] Si matan 3 veces al player --> Gameover

##  GAMEOVER

- [ 💁‍♀️ ] Si mueres 3 veces o se acaba el tiempo
- [ 💁‍♀️ ] Aparece la puntuación
- [ ] Añadir botón de restart

## BONUS

- [ ] Teclas en pantalla se pulsan cuando las pulsas en el teclado
- [ ] Cambiar foto del personaja
- [ ] Si muere --> Suelta fruta
- [ ] Salta sobre las burbujas
- [ ] ¿Multiplayer? xd
- [ ] ¿Enemigos saltan? (si eso pa'l Bonus)
