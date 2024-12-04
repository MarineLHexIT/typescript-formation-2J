import { MultiTalentedPerson, john } from '../src/atelier';

describe('MultiTalentedPerson Mixin', () => {

  it('john should be able to speak', () => {
    const logSpy = jest.spyOn(console, 'log');
    john.speak();
    expect(logSpy).toHaveBeenCalledWith('John is speaking.')
  });

  it('john should be able to drive', () => {
    const logSpy = jest.spyOn(console, 'log');
    john.drive();
    expect(logSpy).toHaveBeenCalledWith('John is driving.')
  });
});
