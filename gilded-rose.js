import { it } from "vitest";

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {

  items.forEach((item) => {
    if ( item.name === 'Sulfuras, Hand of Ragnaros'){
      return;
    }
    item.sellIn = item.sellIn - 1;

    if (item.name === "Aged Brie"){
      increase(item)
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      ticketUpdate(item)
    }else {
        decrease(item)
      }
    if(item.name.includes("Conjured")){
      decrease(item)
    }
  })
}



function increase(item){
  if(item.quality < 0){
    item.quality = 0
  } else{
    if (item.quality < 50){
      item.quality = item.quality + 1;
      if (item.quality < 50 && item.sellIn < 0){
        item.quality = item.quality + 1;
      }
    }
  }
}


function decrease(item){
  if(item.quality < 0){
    item.quality = 0
  } else {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
        if(item.sellIn <= 0){
          item.quality = item.quality - 1;
        }
      }
    }
  }
}

function ticketUpdate(item){
  if(item.quality < 50){
    increase(item)
    if (item.sellIn < 11 ) {
      increase(item)
      if (item.sellIn <= 5 && item.sellIn >= 0) {
        increase(item)
      }
    }
  }
  if(item.sellIn < 0){
    item.quality = 0
  }
}
