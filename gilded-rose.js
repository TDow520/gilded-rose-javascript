class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if(this.quality < 80 ){
      this.quality = 80
    } else {
      this.quality = 80
    }
  }
}

export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn -= 1;
    if(this.quality < 0 ){
      this.quality = 0
    } else {
      if (this.quality > 0) {
        this.quality -= 1;
        if (this.sellIn < 0 && this.quality > 0) {
          this.quality -= 1;
        }
      } 
      
      if(this.quality > 50){
        this.quality = 50
      }
    }
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn -= 1;
    if(this.quality < 0 ){
      this.quality = 0
    } else {
      if (this.quality > 0) {
        this.quality -= 2;
        if (this.sellIn < 0 && this.quality > 0) {
          this.quality -= 2;
        }
      } 
      
      if(this.quality > 50){
        this.quality = 50
      }
    }
  }
}

export class Ticket extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn -= 1;
    if(this.quality < 0 ){
      this.quality = 0
    } else {
      if (this.quality < 50) {
        this.quality += 1;
        if (this.sellIn < 10) {
          this.quality += 1;
        }
        if (this.sellIn < 5) {
          this.quality += 1;
        }
      }
      
      if(this.quality > 50){
        this.quality = 50
      }

      if (this.sellIn < 0) {
        this.quality = 0;
      }
    }
  }
}

export class Aged extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn -= 1;
    if(this.quality < 0 ){
      this.quality = 0
    } else {
      if (this.quality < 50) {
        this.quality += 1;
        if (this.sellIn < 0 && this.quality < 50) {
          this.quality += 1;
        }
      }
      
      if(this.quality > 50){
        this.quality = 50
      }
    }
  }
}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Aged("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

console.log(items)
