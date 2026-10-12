const ITEMS = {
    wood:      { name: 'Madeira',       icon: '🪵', color: 0x8B5A2B, stack: 99 },
    stone:     { name: 'Pedra',         icon: '🪨', color: 0x888888, stack: 99 },
    herb:      { name: 'Erva',          icon: '🌿', color: 0x44aa44, stack: 50 },
    berry:     { name: 'Fruta',         icon: '🫐', color: 0xaa44ff, stack: 30 },
    meat:      { name: 'Carne',         icon: '🥩', color: 0xcc4444, stack: 20 },
    essence:   { name: 'Essência',      icon: '✨', color: 0xffdd44, stack: 50 },
    crystal_f: { name: 'Cristal Fogo',  icon: '🔴', color: 0xff4400, stack: 20 },
    crystal_w: { name: 'Cristal Água',  icon: '🔵', color: 0x00aaff, stack: 20 },
    crystal_e: { name: 'Cristal Terra', icon: '🟢', color: 0x88cc44, stack: 20 },
    potion:    { name: 'Poção',         icon: '🧪', color: 0xff66aa, stack: 10 },
    elixir:    { name: 'Elixir',        icon: '🧉', color: 0x66ffaa, stack: 5 },
    sword:     { name: 'Espada',        icon: '⚔️', color: 0xccccdd, stack: 1 },
    amulet:    { name: 'Amuleto',       icon: '🔮', color: 0xaa66ff, stack: 1 },
    key:       { name: 'Chave do Boss', icon: '🔑', color: 0xffcc00, stack: 1 }
};

const RECIPES = [
    { result: 'potion', amount: 1, cost: { herb: 2, berry: 1 }, name: 'Poção de Cura' },
    { result: 'elixir', amount: 1, cost: { herb: 3, crystal_w: 1, essence: 1 }, name: 'Elixir Energético' },
    { result: 'sword',  amount: 1, cost: { wood: 5, stone: 8, crystal_e: 2 }, name: 'Espada de Pedra' },
    { result: 'amulet', amount: 1, cost: { crystal_f: 2, crystal_w: 2, crystal_e: 2, essence: 5 }, name: 'Amuleto Elemental' },
    { result: 'key',    amount: 1, cost: { crystal_f: 3, crystal_w: 3, crystal_e: 3, essence: 10 }, name: 'Chave do Boss' }
];
