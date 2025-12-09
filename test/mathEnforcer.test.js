import {mathEnforcer} from '../mathEnforcer.js'
import {describe} from 'mocha'
import {expect} from 'chai'
import {assert} from 'chai'


describe('test mathEnforcer', () => {

    describe('addFive',() =>{
        it('should return undefined if input parameter is not a number', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined)
            assert.equal(mathEnforcer.addFive([]), undefined)
            assert.equal(mathEnforcer.addFive({}), undefined)
            assert.equal(mathEnforcer.addFive(null), undefined)
            assert.equal(mathEnforcer.addFive(undefined), undefined)
        })
        it('should add five to the input number', () => {
            assert.equal(mathEnforcer.addFive(5), 10)
            assert.equal(mathEnforcer.addFive(-3), 2)
            assert.equal(mathEnforcer.addFive(7.5), 12.5)
            assert.closeTo(mathEnforcer.addFive(7.5), 12.5, 0.01)
        })
    })
    describe('subtractTen', () => {
        it('should return undefined if parameter is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined)
            assert.equal(mathEnforcer.addFive([]), undefined)
            assert.equal(mathEnforcer.addFive({}), undefined)
            assert.equal(mathEnforcer.addFive(null), undefined)
            assert.equal(mathEnforcer.addFive(undefined), undefined)
        })
        it('should subtract ten from the input number', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5)
            assert.equal(mathEnforcer.subtractTen(-3), -13)
            assert.equal(mathEnforcer.subtractTen(7.5), -2.5)
        })

    })
    describe ('sum', () => {
        it('should return undefined if any of the parameters is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 5), undefined)
            assert.equal(mathEnforcer.sum([]), undefined)
            assert.equal(mathEnforcer.sum({}), undefined)
            assert.equal(mathEnforcer.sum(null), undefined)
            assert.equal(mathEnforcer.sum(undefined), undefined)
        })
            it('should return undefined if second of the parameters is not a number', () => {
            assert.equal(mathEnforcer.sum(5, '5'), undefined)
            assert.equal(mathEnforcer.sum(3, []), undefined)
            assert.equal(mathEnforcer.sum(3, {}), undefined)
            assert.equal(mathEnforcer.sum(3, null), undefined)
            assert.equal(mathEnforcer.sum(3, undefined), undefined)
        })
            it('should return the sum of two numbers', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10)
            assert.equal(mathEnforcer.sum(-5, -10), -15)
            assert.equal(mathEnforcer.sum(3.6, 2.1), 5.7)
        })

    })
})