let Zombies = 0;
let Exp = 0;
let Tick = 0;
let SentryTurrets = 0;
let SentryTurretBase = 10;
let SentryTurretCost = 10;
let Health = 100;
let Defence = 5;
let WoodenStakes = 0;
let WoodenStakeCost = 10;
let Running = false;
let ExpTotal = 0;

const items = [
    {
        name: "Sentry Turret",
        cost: 10,
        description: "Automatically kills zombies.",
        class: "turret-card",
        buttonId: "SentryButton"
    },
    {
        name: "Wooden Stake",
        cost: 10,
        description: "Deals 10 damage to a zombie.",
        class: "stake-card",
        buttonId: "WoodenStakeButton"
    },
    {
        name: "Silver Bullet",
        cost: 20,
        description: "Instantly kills a vampire.",
        class: "stake-card",
        buttonId: "SilverBulletButton"
    }
];