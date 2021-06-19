controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`game_bg`)
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
let main_enemy = sprites.create(assets.image`enemy`, SpriteKind.Player)
while (true) {
    music.playMelody("E B C5 A B G A F ", 60)
}
