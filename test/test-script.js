/*jshint esversion: 6*/
const chai = require('chai');

chai.expect();
chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  let item = new Zombies.item;

  it('should be a class', () => {
    item.should.be.a.function;
  });
  it('should have a name', () => {
    item.should.have.property('name');
  });

});

describe('Weapon', () => {

  let Weapon = new Zombies.weapon;

  it('should be a class', () => {
    weapon.should.be.a.function;
  });
  it('should have a name', () => {
    weapon.should.have.a.property('name');
  });
  it('should have damage', () => {
    weapon.should.have.property('damage');
  });
});
