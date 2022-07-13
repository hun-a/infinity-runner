import Phaser from "phaser";
import SceneKeys from "~/consts/SceneKeys";
import TextureKeys from "~/consts/TextureKeys";
import AnimationKeys from "~/consts/AnimationKeys";

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game);
  }

  preload() {}

  create() {
    const width: number = this.scale.width;
    const height: number = this.scale.height;

    this.add.tileSprite(0, 0, width, height, "background").setOrigin(0, 0);
    this.add
      .sprite(
        width * 0.5,
        height * 0.5,
        TextureKeys.RocketMouse,
        "rocketmouse_fly01.png"
      )
      .play(AnimationKeys.RocketMouseRun);
  }
}
