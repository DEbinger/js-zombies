/*jshint esversion: 6 */
/**
 * Class => Item(name)
 * -----------------------------
 * Creates an item.
 *
 * @name Item
 * @param {string} name     The item's name.
 * @property {string} name
 */
class Item {
  constructor ( name ){
    this.name = name;
  }
}


/**
 * Class => Weapon(name, damage)
 * -----------------------------
 * Creates a weapon item.
 * Weapon items can be equipped for use in battle.
 *
 * The Weapon class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Weapon
 * @param {string} name     The weapon's name.
 * @param {number} damage   The weapon's damage.
 * @property {number} damage
 */
class Weapon extends Item{
    constructor ( name, damage ){
      super ( name );
      this.damage = damage;
    }
}



/**
 * Weapon Extends Item Class
 * -----------------------------
 */



/**
 * Class => Food(name, energy)
 * -----------------------------
 * Creates a food item.
 * Food items give energy, restoring health to the player.
 *
 * The Food class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Food
 * @param {string} name       The food's name.
 * @param {number} energy     The energy the food provides.
 * @property {number} energy
 */
class Food extends Item{
    constructor ( name, energy ){
      super ( name );
      this.energy = energy;
    }
}

/**
 * Food Extends Item Class
 * -----------------------------
 */



/**
 * Class => Player(name, health, strength, speed)
 * -----------------------------
 * Creates a player in a zombie-infested world.
 *
 * @name Player
 * @param {string} name                    The player's name.
 * @param {number} health                  The player's health.
 * @param {number} strength                The player's strength.
 * @param {number} speed                   The player's speed.
 * @private {array} pack                   Default value should be empty.
 * @private {number} maxHealth             Default value should be set to `health`.
 * @property {string} name
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive             Default value should be `true`.
 * @property {Weapon/boolean} equipped     Default value should be `false`.
 * @property {method} getPack              Returns private variable `pack`.
 * @property {method} getMaxHealth         Returns private variable `maxHealth`.
 */

 /**
 * Player Class Method => checkPack()
 * -----------------------------
 * Player checks the contents of their pack.
 *
 * Nicely format and print the items in the player's pack.
 * To access the pack, be sure to use Player's getPack method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name checkPack
 */

/**
 * Player Class Method => takeItem(item)
 * -----------------------------
 * Player takes an item from the world and places it into their pack.
 *
 * Player's pack can only hold a maximum of 3 items, so if they try to add more
 *   than that to the pack, return false.
 * Before returning true or false, print a message containing the player's
 *   name and item's name if successful.  Otherwise, print a message saying
 *   that the pack is full so the item could not be stored.
 * Note: The player is allowed to store similar items (items with the same name).
 * You should be able to invoke this function on a Player instance.
 *
 * @name takeItem
 * @param {Item/Weapon/Food} item   The item to take.
 * @return {boolean} true/false     Whether player was able to store item in pack.
 */
/**
 * Player Class Method => discardItem(item)
 * -----------------------------
 * Player discards an item from their pack.
 *
 * Use Array's indexOf method to check if the pack contains the item.
 * If an item is not found in the pack, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * If the item is in the pack, remove it from the pack using Array's splice method.
 * Print the player and item names and a message saying the item was discarded.
 * Return true for the successful discard.
 * Note: The splice method can also be used for array element replacement.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * If the item is not in the pack, return a message with the item name saying
 *   nothing was discarded since the item could not be found.
 * Return false in this case.
 *
 * You should be able to invoke this function on a Player instance.
 *
 * @name discardItem
 * @param {Item/Weapon/Food} item   The item to discard.
 * @return {boolean} true/false     Whether player was able to remove item from pack.
 */



class Player{
  constructor ( name, health, strength, speed, pack, maxHealth, isAlive, equipped ){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this._pack = [];
    this._maxHealth = health;
    this.isAlive = true;
    this.equipped = false;
  }

  getPack(){
    return this._pack;
  }

  getMaxHealth(){
    return this._maxHealth;
  }

  checkPack(){
    console.log(this.getPack());
  }

  takeItem(item){
    if (this.getPack().length <= 2) {
      this.getPack().push(item);
    } else {
      console.log('the pack is way too full, so the item could not be stored');
      return false;
    }
  }

  discardItem(item){
    if (this.getPack().indexOf(item) > -1) {
      this.getPack().splice(this.getPack().indexOf(item), 1);
      console.log(this.name + 'this has been discarded ' + this.item);
      return true;
    } else {
      console.log('nothing has been discarded, since item is not found');
      return false;
    }
  }
  equip(itemToEquip){
    if (this.getPack().indexOf(itemToEquip) > -1 && itemToEquip instanceof Weapon){
      if (this.equipped){
            this.getPack().splice(this.getPack().indexOf(itemToEquip),1, this.equipped);
            this.equipped = itemToEquip;
      }else{
            this.getPack().splice(this.getPack().indexOf(itemToEquip),1);
            this.equipped = itemToEquip;
      }
  }
}


/**
 * Player Class Method => equip(itemToEquip)
 * -----------------------------
 * Player equips a weapon item.
 *
 * Player can only equip Weapon instances.
 * Player can only equip weapon items from their pack.
 *
 * If the player already has a weapon equipped (the equipped property
 *   is set to an Item), find the itemToEquip in the pack and replace
 *   it with the currently equipped item.  Then set the equipped property
 *   to the itemToEquip.
 * However, if the player doesn't already have a weapon equipped, simply
 *   equip that item and remove it from the pack.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equip
 * @param {Weapon} itemToEquip  The weapon item to equip.
 */


/**
 * Player Class Method => eat(itemToEat)
 * -----------------------------
 * Player eats a food item, restoring their health.
 *
 * Player can only eat Food instances.
 * Player can only eat food items from their pack.
 *
 * Remove itemToEat from the pack.

 * Increase the player's health by the food's energy amount, but do not
 *   exceed the player's max health.  If exceeded, simply set player's health
 *   to max health instead.
 * To access the player's max health, be sure to use Player's getMaxHealth method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name eat
 * @param {Food} itemToEat  The food item to eat.
 */
eat(itemToEat){
  if (this.getPack().indexOf(itemToEat) > -1 && itemToEat instanceof Food){
    this.getPack().splice(this.getPack().indexOf(itemToEat),1);
    if (itemToEat.energy + this.health <= this.getMaxHealth()){
      this.health = itemToEat.energy + this.health;
    }else{
      this.health = this.getMaxHealth();
    }
  }
}

/**
 * Player Class Method => useItem(item)
 * -----------------------------
 * Player uses an item from the pack.
 *
 * If the item is a weapon, the player should equip the item.
 * If the item is food, the player should eat the item.
 * You should be able to invoke this function on a Player instance.
 *
 * @name useItem
 * @param {Item/Weapon/Food} item   The item to use.
 */
useItem(item){
  if (item instanceof (Weapon) === true) {
    this.equip(item);
  }else if (item instanceof (Food) === true) {
    this.eat(item);
  }
}

/**
 * Player Class Method => equippedWith()
 * -----------------------------
 * Player checks their equipment.
 *
 * Prints the player's name and equipped weapon's name.
 * If nothing is equipped, prints a message saying so.
 * Also returns the equipped weapon's name or false if nothing is equipped.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equippedWith
 * @return {string/boolean}   Weapon name or false if nothing is equipped.
 */
  equippedWith() {
    if(this.equipped) {
      console.log("Player " + this.name + " you are equipped with " + this.equipped.name);
      return this.equipped.name;
    }else{
      console.log("Player " + this.name + " you are currently not equipped with an item");
      return false;
    }
  }
}

/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */
class Zombie{
  constructor ( health, strength, speed, maxHealth, isAlive){
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this._maxHealth = health;
    this.isAlive = true;
  }
}
/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */
 class FastZombie extends Zombie {
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
 }

/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */

 class StrongZombie extends Zombie {
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
 }


/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */
 class RangedZombie extends Zombie {
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
 }


/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */

 class ExplodingZombie extends Zombie {
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
 }


/**
 * Sample run.
 * Feel free to edit this check your game logic.
 */
function runGame() {
  var player = new Player("The Rock", 500, 100, 50);
  var zombie = new Zombie(20, 30, 10);
  var charger = new FastZombie(100, 25, 200);
  var tank = new StrongZombie(250, 200, 15);
  var spitter = new RangedZombie(125, 25, 10);
  var boomer = new ExplodingZombie(5, 15, 10);

  var turkey = new Weapon("turkey", 15);
  var saladSpinner = new Food("saladSpinner", 30);
  var cricketBat = new Weapon("cricketBat", 25);

  player.takeItem(turkey);
  player.takeItem(saladSpinner);
  player.takeItem(cricketBat);
  player.discardItem(new Weapon("sloppyKisses", 88));
  player.discardItem(turkey);
  player.checkPack();
  player.takeItem(turkey);
  player.checkPack();

  player.equippedWith();
  player.useItem(cricketBat);
  player.equippedWith();
  player.checkPack();

  player.useItem(turkey);
  player.equippedWith();
  player.checkPack();

  player.health = 487;
  console.log("Before health: " + player.health);
  player.useItem(sandwich);
  console.log("After health: " + player.health);
  player.checkPack();
}