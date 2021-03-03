'use strict';

  const fuelPrice = 13.99;
  // const amount = 1;
  const customer = {
    money: 132.7,
    vehicle: {
      maxTankCapacity: 40,
      fuelRemains: 14,
    },
  };

  let { money, vehicle } = customer;
  let { maxTankCapacity, fuelRemains } = vehicle;
  const emptyTank = +(maxTankCapacity - fuelRemains).toFixed(1);//скільки ще можливо вмістити палива
  const howManyFuel = +(money / fuelPrice).toFixed(1);

  if (typeof amount !== 'undefined' && amount >= 2) {
    if (amount <= emptyTank) {
      const payOfAmount = +(amount * fuelPrice).toFixed(1);

      if (money < payOfAmount) {
        fuelRemains += howManyFuel;
        money = 0;
      }

      if (money >= payOfAmount) {
        money -= payOfAmount;
        fuelRemains += amount;
      }
    }

    if (amount > emptyTank) {
      const payFullTank = +(emptyTank * fuelPrice).toFixed(1);//плата за паливо до повного баку

      if (money < payFullTank) {
        fuelRemains += howManyFuel;
        money = 0;
      }

      if (money >= payFullTank) {
        money -= payFullTank;
        fuelRemains += emptyTank;
      }
    }
  }

  if (typeof amount === 'undefined') {
    const payOfFull = +(emptyTank * fuelPrice).toFixed(1);
    console.log(payOfFull);
    if (money < payOfFull) {
      fuelRemains += howManyFuel;
      money = 0;
    }

    if (money > payOfFull) {
      money -= payOfFull;
      fuelRemains += emptyTank;
    }
  }
  console.log(`${fuelRemains} and ${money}`);