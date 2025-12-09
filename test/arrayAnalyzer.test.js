import { analyzeArray } from "../arrayAnalyzer.js"
import { expect } from "chai"
import { describe } from "mocha"


describe('analyzeArray', () => {

    it('should return undefined if input is not an array or empty array', () => {
        expect(analyzeArray(42)).to.be.undefined
        expect(analyzeArray('string')).to.be.undefined
        expect(analyzeArray({})).to.be.undefined
        expect(analyzeArray(null)).to.be.undefined
        expect(analyzeArray(undefined)).to.be.undefined
        expect(analyzeArray([])).to.be.undefined
    })
        it('if input is a single element array', () => {
            expect(analyzeArray([5]).min).to.equal(5)
            expect(analyzeArray([5]).max).to.equal(5)
            expect(analyzeArray([5]).length).to.equal(1)
        })
            it('if input is a equal element array', () => {
            expect(analyzeArray([5, 5, 5, 5]).min).to.equal(5)
            expect(analyzeArray([5, 5, 5, 5]).max).to.equal(5)
            expect(analyzeArray([5, 5, 5, 5]).length).to.equal(4)
        })
            it('if input is an array of several numbers', () => {
                let array = [-3, 15, 7, 8]

            expect(analyzeArray(array).min).to.equal(-3)
            expect(analyzeArray(array).max).to.equal(15)
            expect(analyzeArray(array).length).to.equal(4)
        })
})