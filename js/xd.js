if (this.player.isFacingRight) {
	if (
		// Chequea si colisionar con una plataforma
		p.platformPos.x < b.bubblePos.x + b.bubbleRadius &&
		p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleRadius &&
		p.platformPos.y < b.bubblePos.y + b.bubbleRadius &&
		p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleRadius
	) {
		// Cuando colisiones por ..., haz esto
		//// Izquierda
		if (p.platformPos.x < b.bubblePos.x + b.bubbleRadius) {
			b.bubbleVel.y += 2;
			b.bubbleVel.x = 0;
		}
		//// Derecha
		if (p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleRadius) {
			b.bubbleVel.y += 2;
			b.bubbleVel.x = 0;
		}
		//// Abajo
		if (p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleRadius) {
			b.bubbleVel.y = 0;
			b.bubbleVel.x += 1.4;
			b.bubblePos.x += b.bubbleVel.x;
		}
		console.log(b.bubbleVel.x);

		//// Si al colisionar y checkear el lado
	}
} else {
	if (
		// Chequea si colisionar con una plataforma
		p.platformPos.x < b.bubblePos.x + b.bubbleRadius &&
		p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleRadius &&
		p.platformPos.y < b.bubblePos.y + b.bubbleRadius &&
		p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleRadius
	) {
		// Cuando colisiones por ..., haz esto
		//// Izquierda
		if (p.platformPos.x < b.bubblePos.x + b.bubbleRadius) {
			b.bubbleVel.y += 2;
			b.bubbleVel.x = 0;
		}
		//// Derecha
		if (p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleRadius) {
			b.bubbleVel.y += 2;
			b.bubbleVel.x = 0;
		}
		//// Abajo
		if (p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleRadius) {
			b.bubbleVel.y = 0;
			b.bubbleVel.x -= 1.4;
			b.bubblePos.x += b.bubbleVel.x;
		}
		console.log(b.bubbleVel.x);

		//// Si al colisionar y checkear el lado
	}
}
