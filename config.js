const W = 960;
const H = 640;
const CHUNK = 512;
const VIEW_CHUNKS = 2;

const PLAYER_SPEED = 200;
const PLAYER_MAX_HP = 120;
const PLAYER_MAX_ENERGY = 100;
const ENERGY_REGEN = 10;
const ATTACK_CD = 380;
const SPECIAL_CD = 2800;
const MAX_ENEMIES = 14;

const ELEMENT_COLORS = { fire: 0xff4400, water: 0x00aaff, earth: 0x88cc44 };
const ELEMENT_ICONS = { fire: '🔥', water: '💧', earth: '🌍' };

const GAME_CONFIG = {
    width: W,
    height: H,
    backgroundColor: 0x1a2a1a,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false }
    },
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
