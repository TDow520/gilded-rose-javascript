import { expect, describe, it } from "vitest";
import { items, Basic, Legendary, Aged, Conjured, Ticket } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


describe('updateQuality:Basic item with 0 sell days', () => {
  it('quaility decreases twice as fast', () => {
      const testItem = new Basic('basic', 0, 4)
      items.push(testItem)

      testItem.updateQuality();

      expect(testItem.quality).toBe(2);
      expect(testItem.sellIn).toBe(-1);
  })
})

describe('updateQuality:Legendary Item', () => {
  it('Sulfuras, Hand of Ragnaros', () => {
      const testItem = new Legendary('Sulfuras, Hand of Ragnaros', 0, 80)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(80);
      expect(testItem.sellIn).toBe(0);
  })
})

describe('updateQuality:cheese', () => {
  it('Aged Brie > 0', () => {
      const testItem = new Aged('Aged Brie', 2, -6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(1);
  });
});

describe('updateQuality:cheese', () => {
  it('Aged Brie < 0', () => {
      const testItem = new Aged('Aged Brie', -1, 4)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(6);
      expect(testItem.sellIn).toBe(-2);
  });
});


describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn > 6 and < 11', () => {
      const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 8, 25)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(27);
      expect(testItem.sellIn).toBe(7);
  });
});

describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn > 0 and < 6', () => {
      const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 4, 17)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(20);
      expect(testItem.sellIn).toBe(3);
  });
});

describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn < 0', () => {
      const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 0, 25)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-1);
  });
});


describe('updateQuality: Conjured', () => {
  it('Conjured Item, sellIn < 0', () => {
      const testItem = new Conjured('Conjured Mana Cake', -2, 6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(2);
      expect(testItem.sellIn).toBe(-3);
  });
});

describe('updateQuality: Conjured', () => {
  it('Conjured Item, sellIn > 0', () => {
      const testItem = new Conjured('Conjured Mana Cake', 3, 6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(4);
      expect(testItem.sellIn).toBe(2);
  });
});

describe('updateQuality: Negative', () => {
  it('Checking to see if quality < 0', () => {
      const testItem = new Basic('Conjured Mana Cake', -2, -2)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-3);
  });
});

describe('updateQuality: Quailty > 50', () => {
  it('Checking to see if quality over 50', () => {
      const testItem = new Basic('Mana Cake', 9, 60)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(50);
      expect(testItem.sellIn).toBe(8);
  });
});

describe('updateQuality: quality = 0', () => {
  it('Checking to see if quality = 0', () => {
      const testItem = new Conjured('Conjured Mana Cake', -2, 0)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-3);
  });
});