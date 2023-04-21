import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Inventory } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Inventory("basic", 5, 3);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


describe('updateQuality:Basic item with 0 sell days', () => {
  it('quaility decreases twice as fast', () => {
      const testItem = new Inventory('basic', 0, 4)
      items.push(testItem)

      testItem.updateQuality();

      expect(testItem.quality).toBe(2);
      expect(testItem.sellIn).toBe(-1);
  })
})

describe('updateQuality:Legendary Item', () => {
  it('Sulfuras, Hand of Ragnaros', () => {
      const testItem = new Inventory('Sulfuras, Hand of Ragnaros', 0, 80)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(80);
      expect(testItem.sellIn).toBe(-1);
  })
})

describe('updateQuality:cheese', () => {
  it('Aged Brie > 0', () => {
      const testItem = new Inventory('Aged Brie', 2, -6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(1);
  });
});

describe('updateQuality:cheese', () => {
  it('Aged Brie < 0', () => {
      const testItem = new Inventory('Aged Brie', -1, 4)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(6);
      expect(testItem.sellIn).toBe(-2);
  });
});


describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn > 6 and < 11', () => {
      const testItem = new Inventory('Backstage passes to a TAFKAL80ETC concert', 8, 25)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(27);
      expect(testItem.sellIn).toBe(7);
  });
});

describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn > 0 and < 6', () => {
      const testItem = new Inventory('Backstage passes to a TAFKAL80ETC concert', 4, 17)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(20);
      expect(testItem.sellIn).toBe(3);
  });
});

describe('updateQuality:Ticket', () => {
  it('Backstage passes to a TAFKAL80ETC concert, sellIn < 0', () => {
      const testItem = new Inventory('Backstage passes to a TAFKAL80ETC concert', 0, 25)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-1);
  });
});


describe('updateQuality: Conjured', () => {
  it('Conjured Item, sellIn < 0', () => {
      const testItem = new Inventory('Conjured Mana Cake', -2, 6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(2);
      expect(testItem.sellIn).toBe(-3);
  });
});

describe('updateQuality: Conjured', () => {
  it('Conjured Item, sellIn > 0', () => {
      const testItem = new Inventory('Conjured Mana Cake', 3, 6)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(4);
      expect(testItem.sellIn).toBe(2);
  });
});

describe('updateQuality: Negative', () => {
  it('Checking to see if quality < 0', () => {
      const testItem = new Inventory('Conjured Mana Cake', -2, -2)
      items.push(testItem);

      testItem.updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-3);
  });
});