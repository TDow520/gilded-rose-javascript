import {describe, test, expect} from 'vitest';
import {Item, items, updateQuality} from './gilded-rose.js';

describe('updateQuality:Basic item with 0 sell days', () => {
    it('quaility decreases ttwice as fast', () => {
        const testItem = new Item('basic', 0, 4)
        items.push(testItem)

        updateQuality();

        expect(testItem.quality).toBe(2);
        expect(testItem.sellIn).toBe(0);
    })
})