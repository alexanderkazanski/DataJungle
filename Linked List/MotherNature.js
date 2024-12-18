const Cassowary = require("./Cassowary");
const Deer = require("./Deer");
const KoriBustard = require("./KoriBustard");
const Ostrich = require("./Ostrich");
const Rhea = require("./Rhea");
const Shoebill = require("./Shoebill");
const Tiger = require("./Tiger");

// class Tiger | Cassowary | Deer | KoriBustard | Ostrich | Rhea | ShoeBill {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

const tiger = new Tiger({ name: 'tiger', origin: 'Africa', height: '3ft', weight: '220lbs' });
const deer = new Deer({ name: 'deer', origin: 'Africa', height: '32in', weight: '150lbs' });
const ostrich = new Ostrich({ name: 'ostrich', origin: 'Africa', height: '210cm', weight: '104kg' });
const koriBustard = new KoriBustard({ name: 'Kori Bustard', origin: 'Africa', height: '90cm', weight: '40kg' });
const cassowary = new Cassowary({ name: 'cassowary', origin: 'Africa', height: '155cm', weight: '45kg' });
const rhea = new Rhea({ name: 'rhea', origin: 'Africa', height: '155cm', weight: '45kg' });
const shoeBill = new Shoebill({ name: 'shoe bill', origin: 'Africa', height: '140cm', weight: '7kg' });

tiger.next = deer;
deer.next = ostrich;
ostrich.next = koriBustard;
koriBustard.next = cassowary;
cassowary.next = rhea;
rhea.next = shoeBill;

let species = tiger;
while (species.next) {
  console.log(species.meta.name);
  species = species.next;
}

// Outputs
// tiger
// deer
// ostrich
// Kori Bustard
// cassowary
// rhea


