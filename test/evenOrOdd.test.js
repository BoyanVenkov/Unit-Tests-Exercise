import {isOddOrEven} from '../evenOrOdd.js'
import{describe} from 'mocha'
import { expect } from 'chai'

describe('test_isOddOrEven',() => {

    it('should return undefined if input is not a string', ()=> {
        // Arrange
        let input = 42
        // Act
        let result = isOddOrEven(input)

        // Assert
        expect(result).to.be.undefined
        expect(isOddOrEven[42]).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven(null)).to.be.undefined


    })
    it('should return text even if input parameter is with even length',() => {
        // Arrange
        let input = 'test'
        let expected = 'even'
        // Act
        let result = isOddOrEven(input)

        // Assert
        expect(result).to.equal(expected)

    })
    it('should return text odd if input parameter is with odd length',() => {

        // Arrange
        let input = 'test1'
        let expected = 'odd'
        // Act
        let result = isOddOrEven(input)

        // Assert
        expect(result).to.equal(expected)
    })
})