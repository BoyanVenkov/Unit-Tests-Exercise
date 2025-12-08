import { lookupChar } from "../charLookup.js"
import {expect} from 'chai'
import {describe} from 'mocha'

describe ('test_LookUpChar',() => {
         it('should return undefined if first parameter is not a string',() => {
            // Arrange

            expect(lookupChar(42, 5)).to.be.undefined
            expect(lookupChar([], 5)).to.be.undefined
            expect(lookupChar({}, 5)).to.be.undefined
            expect(lookupChar(null, 5)).to.be.undefined
            expect(lookupChar(undefined, 5)).to.be.undefined
            
         })
         it('should return undefined if second parameter is not an integer',() => {
            // Arrange

            expect(lookupChar('valid text', 5.5)).to.be.undefined
            expect(lookupChar('valid text', [4])).to.be.undefined
            expect(lookupChar('valid text', {})).to.be.undefined
            expect(lookupChar('valid text', null)).to.be.undefined
            expect(lookupChar('valid text', undefined)).to.be.undefined

         })
         it('should return "Incorrect index" if index is out of bounds',() => {
            // Arrange
            expect(lookupChar('hello', -1)).to.equal('Incorrect index')    
            expect(lookupChar('hello', 5)).to.equal('Incorrect index')
            expect(lookupChar('hello', 10)).to.equal('Incorrect index')                     
        
        })
        it('should return the correct character at the given index',() => {
            expect(lookupChar('hello', 0)).to.equal('h')
            expect(lookupChar('hello', 1)).to.equal('e')
            expect(lookupChar('hello', 2)).to.equal('l')
            expect(lookupChar('hello', 3)).to.equal('l')
            expect(lookupChar('hello', 4)).to.equal('o')


        })
}) 