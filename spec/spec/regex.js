describe('Regex', function() {

  describe('matchers', function() {
    describe('unit', function() {
      var match

      it('is true with a positive unit value', function() {
        match = ('10%').match(SVG.regex.unit)
        expect(match[1]).toBe('10')
        expect(match[2]).toBe('%')
      })
      it('is true with a negative unit value', function() {
        match = ('-11%').match(SVG.regex.unit)
        expect(match[1]).toBe('-11')
        expect(match[2]).toBe('%')
      })
      it('is false with a positive unit value', function() {
        match = ('NotAUnit').match(SVG.regex.unit)
        expect(match).toBeNull()
      })
    })
  })

  describe('testers', function() {

    describe('isHex', function() {
      it('is true with a three based hex', function() {
        expect(SVG.regex.isHex.test('#f09')).toBeTruthy()
      })
      it('is true with a six based hex', function() {
        expect(SVG.regex.isHex.test('#fe0198')).toBeTruthy()
      })
      it('is false with a faulty hex', function() {
        expect(SVG.regex.isHex.test('###')).toBeFalsy()
        expect(SVG.regex.isHex.test('#0')).toBeFalsy()
        expect(SVG.regex.isHex.test('f06')).toBeFalsy()
      })
    })

    describe('isRgb', function() {
      it('is true with an rgb value', function() {
        expect(SVG.regex.isRgb.test('rgb(255,66,100)')).toBeTruthy()
      })
      it('is false with a non-rgb value', function() {
        expect(SVG.regex.isRgb.test('hsb(255, 100, 100)')).toBeFalsy()
      })
    })

  })

})