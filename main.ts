controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerProjectile.vy += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
let myPlayer: Sprite = null
let playerProjectile: Sprite = null
scene.setBackgroundImage(assets.image`game_bg`)
game.showLongText("Una raza de extraterrestres con forma reptiliana ha secuestrado a Sophie", DialogLayout.Bottom)
playerProjectile = sprites.create(assets.image`player_rojectile`, SpriteKind.Projectile)
myPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
let myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
myEnemy.follow(myPlayer)
while (true) {
    music.playMelody("E B C5 A B G A F ", 60)
}
