import { artGallery } from "../artGallery.js"
import {expect}    from "chai"
import { describe } from "mocha"
import { assert} from "chai"


describe('artGallery', () => {

    describe('test addArtwork', () => {
        it('should throw error for invalid title', () => {
            expect(() => artGallery.addArtwork(42,'50 x 70', 'Picasso')).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork([],'50 x 70', 'Picasso')).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork({},'50 x 70', 'Picasso')).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork(null,'50 x 70', 'Picasso')).to.throw('Invalid Information!')
        })
        it('should throw an error for invalid artist', () => {
            expect(() => artGallery.addArtwork('Dove of peace','50 x 70', 5)).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork('Dove of peace','50 x 70', [])).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork('Dove of peace','50 x 70', {})).to.throw('Invalid Information!')
            expect(() => artGallery.addArtwork('Dove of peace','50 x 70', null)).to.throw('Invalid Information!')

        })
        it('dimension is not a valid format',() => {
            expect(()=> artGallery.addArtwork(('Dove of peace', 42, 'Picasso')).to.throw('Invalid Information!'))
            expect(()=> artGallery.addArtwork(('Dove of peace', [], 'Picasso')).to.throw('Invalid Information!'))
            expect(()=> artGallery.addArtwork(('Dove of peace', {}, 'Picasso')).to.throw('Invalid Information!'))
            expect(()=> artGallery.addArtwork(('Dove of peace', null, 'Picasso')).to.throw('Invalid Information!'))
            expect(()=> artGallery.addArtwork(('Dove of peace', '30x40', 'Picasso')).to.throw('Invalid Information!'))
            expect(()=> artGallery.addArtwork(('Dove of peace', '-2 x -15', 'Picasso')).to.throw('Invalid Information!'))
        })
        it('should throw an error if incorrect artist', () => {
            expect(() => artGallery.addArtwork('Dove of peace', '50 x 70', 'Boyan Venkov')).to.throw('This artist is not allowed in the gallery!')

        })
        it('should return success message for valid input', () => {
            let message = `Artwork added successfully: 'Dove of peace' by Picasso with dimensions 50 x 70.`
            expect(artGallery.addArtwork('Dove of peace', '50 x 70', 'Picasso')).to.equal(message)
        })
    })
    describe('test calulations', () => {
        it('should return error for invalid input', () => {
            expect(() => artGallery.calculateCosts('5', 10, true)).to.throw('Invalid Information!')
            expect(() => artGallery.calculateCosts(5, '10', true)).to.throw('Invalid Information!')
            expect(() => artGallery.calculateCosts(5, 10, 'true')).to.throw('Invalid Information!')
            expect(() => artGallery.calculateCosts(5, -10, true)).to.throw('Invalid Information!')
            expect(() => artGallery.calculateCosts(5, '10', true)).to.throw('Invalid Information!')
        })
        it('should return correct message if sponsor is true', () => {
            let message = `Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.`
            expect(artGallery.calculateCosts(100, 200, true)).to.equal(message)

        })
        it('should return correct message if sponsor is false', () => {
            let message = `Exhibition and insurance costs are 300$.`
            expect(artGallery.calculateCosts(100, 200, false)).to.equal(message)

        })

    })
    describe('test organizeExhibits', () => {
        it('validate parameters -> thrown an error', () => {
            let message = 'Invalid Information!'
            expect(() => artGallery.organizeExhibits('5', 10)).to.throw(message)
            expect(() => artGallery.organizeExhibits(5, '10')).to.throw(message)
            expect(() => artGallery.organizeExhibits(-5, -10)).to.throw(message)
            expect(() => artGallery.organizeExhibits(0, 10)).to.throw(message)
            expect(() => artGallery.organizeExhibits(5, 0)).to.throw(message)
        })
        it('if result is lower than 5', () => {
            let message = `There are only 3 artworks in each display space, you can add more artworks.`
            expect(artGallery.organizeExhibits(24, 7)).to.equal(message)

        })
        it('if result is greater than 5', () => {
            let message = `You have 7 display spaces with 10 artworks in each space.`
            expect(artGallery.organizeExhibits(70, 7)).to.equal(message)
        })
    })
})