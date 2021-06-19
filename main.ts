controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
function playMusic () {
    music.setVolume(25)
    while (true) {
        music.playMelody("E B C5 A B G A F ", 60)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function setBackground (bg: Image) {
    scene.setBackgroundImage(bg)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
function createPlayer (mySprite: Sprite) {
    myPlayer = mySprite
    info.setScore(0)
    info.setLife(5)
}
let myPlayer: Sprite = null
let myEnemy: Sprite = null
setBackground(assets.image`game_bg`)
playMusic()
createPlayer(sprites.create(assets.image`main_player`, SpriteKind.Player))
myEnemy.follow(myPlayer)
let playerProjectile = sprites.create(assets.image`player_rojectile`, SpriteKind.Projectile)
playerProjectile = sprites.createProjectileFromSide(assets.image`player_rojectile`, 50, 50)
myEnemy = sprites.create(assets.image`main_enemy`, SpriteKind.Enemy)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(5, 5))
