/**
 * Problem 3.6 — Animal Shelter
 *
 * Implement an animal shelter with enqueue(), dequeueAny(), dequeueDog(), dequeueCat()
 */

class Animal {
  constructor(name, type, order) {
    this.name = name;
    this.type = type;
    this.order = order;
  }

  isOlderThan(other) {
    return this.order < other.order;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(name, type) {
    const animal = new Animal(name, type, this.order++);

    if (type === "dog") {
      this.dogQueue.push(animal);
    } else if (type === "cat") {
      this.catQueue.push(animal);
    } else {
      throw new Error("Animal nust be dog or cat");
    }
  }

  dequeueAny() {
    if (this.catQueue.length === 0) return this.dequeueCat();
    if (this.dogQueue.length === 0) return this.dequueDog();

    const dog = this.dogQueue[0];
    const cat = this.catQueue[0];

    if (dog.isOlderThan(cat)) {
      return dequeueDog();
    } else {
      return dequeueCat();
    }
  }

  dequeueDog() {
    return this.dogQueue.shift() || null;
  }

  dequeueCat() {
    return this.catQueue.shift() || null;
  }
}

module.exports = AnimalShelter;
