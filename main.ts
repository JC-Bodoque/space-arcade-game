controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.startCutscene(function () {
        story.spriteSayText(myPlayer, "s'haja huj'os")
        story.printDialog("I'll destroy you!", 80, 90, 50, 150)
    })
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
info.setScore(0)
info.setLife(10)
playerProjectile = sprites.create(assets.image`player_rojectile`, SpriteKind.Projectile)
myPlayer = sprites.create(assets.image`main_player`, SpriteKind.Player)
let myEnemy = sprites.create(assets.image`main_enemy`, SpriteKind.Enemy)
myEnemy.follow(myPlayer)
while (true) {
    music.playMelody("E B C5 A B G A F ", 60)
}
