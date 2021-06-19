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
function createEnemy () {
    myEnemy = sprites.create(assets.image`main_enemy`, SpriteKind.Enemy)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(myPlayer)
})
function createPlayer () {
    myPlayer = sprites.create(assets.image`main_player`, SpriteKind.Player)
    info.setScore(0)
    info.setLife(5)
}
let myEnemy: Sprite = null
let myPlayer: Sprite = null
setBackground(assets.image`game_bg`)
playMusic()
createPlayer()
createEnemy()
