/* COLLISION DETECTION
 *  hasCollided() checks for collision between an object and anything else,
 *   detectCollision() checks for collision between two specific objects */

function detectCollision(entity, obstacle) {
  let entityLeft = entity.x;
  let entityRight = entity.x + entity.width;
  let entityUp = entity.y;
  let entityDown = entity.y + entity.height;

  let obstLeft = obstacle.x;
  let obstRight = obstacle.x + obstacle.width;
  let obstUp = obstacle.y;
  let obstDown = obstacle.y + obstacle.height;

  //Check for all the intersections between the player and the obstacle
  if (
    entityDown < obstUp ||
    entityUp > obstDown ||
    entityLeft > obstRight ||
    entityRight < obstLeft
  ) {
    return false;
  } else {
    return true;
  }
}

function hasCollided(entity) {
  let collision;
  collision = null;
  for (let i = 0; i < currentGame.obstacles.length; i++) {
    if (entity === currentGame.obstacles[i]) {
      continue;
    } else if (detectCollision(entity, currentGame.obstacles[i]) === true) {
      collision = true;
      break;
    } else {
      collision = false;
    }
  }
  return collision;
}
