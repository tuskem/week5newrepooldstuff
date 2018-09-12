const Pet = require('./pet');


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Casper')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
      it('sets the name property', () => {
          const pet = new Pet('Casper');
          expect(pet.name). toEqual('Casper');
      });






      describe('growUp', () => {
        it('increments the age by 1 when called', () => {
          const pet = new Pet('Casper');
          pet.growUp();
          expect(pet.age).toEqual(1);
        });
      });
      
    