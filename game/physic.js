function update() {
  var delta = clock.getDelta(); // seconds.
  var moveDistance = 50 * delta; // 200 pixels per second
  var rotateAngle = (Math.PI / 2) * delta * 2; // pi/2 radians (90 degrees) per second

  if (keyboard.pressed("left")) player1.turnLeft(rotateAngle);
  if (keyboard.pressed("right")) player1.turnRight(rotateAngle);
  if (keyboard.pressed("up")) player1.accelerate(moveDistance);
  if (keyboard.pressed("down")) player1.decelerate(moveDistance);
  if (clock.elapsedTime % 3 < 1) ennemy1.decelerate(100);
  else ennemy1.accelerate(100);
  ennemy1.move();
  player1.move();
  controls.update();
}
