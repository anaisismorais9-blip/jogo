const Elements = {
    fire: {
        name: 'Fogo', icon: '🔥', color: 0xff4400, particleColor: 0xffaa00,
        attack: { damage: 20, range: 100, speed: 340, knockback: 130, type: 'projectile' },
        special: { name: 'Explosão', cost: 32, damage: 45, radius: 120 }
    },
    water: {
        name: 'Água', icon: '💧', color: 0x00aaff, particleColor: 0x88ddff,
        attack: { damage: 14, range: 110, speed: 300, knockback: 90, type: 'projectile', slow: 0.45, slowDuration: 2200 },
        special: { name: 'Cura', cost: 28, heal: 40 }
    },
    earth: {
        name: 'Terra', icon: '🌍', color: 0x88cc44, particleColor: 0xaadd66,
        attack: { damage: 17, range: 80, speed: 0, knockback: 160, type: 'melee' },
        special: { name: 'Muralha', cost: 36, shield: 50 }
    }
};

function getElementData(key) {
    return Elements[key] || Elements.fire;
}
