import { describe, expect, test } from 'vitest'
import { divide, muliply, subtract, sumary } from './mat.helpers';

describe('add', () => {
    test ('shuld add two positive numbers' , () => {

    //! 1. Arrange
    const a = 1;
    const b = 3;

    //! 2. Act
    const result = sumary(a,b);
    
    //! 3 Assert
    expect(result).toBe(a + b);
});
});

describe('subract', () => {
    test ('shuld subract two positive numbers' , () => {

    //! 1. Arrange
    const a = 1;
    const b = 3;

    //! 2. Act
    const result = subtract(a,b);
    
    //! 3 Assert
    expect(result).toBe( a - b);
});

    test ('shuld subract two negative numbers' , () => {

    //! 1. Arrange
    const a = -1;
    const b = -3;

    //! 2. Act
    const result = subtract(a,b);
    
    //! 3 Assert
    expect(result).toBe( a - b);
});
});

describe('multiply', () => {
    test ('shuld multiply two positive numbers' , () => {

    //! 1. Arrange
    const a = 1;
    const b = 3;

    //! 2. Act
    const result = muliply(a,b);
    
    //! 3 Assert
    expect(result).toBe( a * b);
});

    test ('shuld multiply two negative numbers' , () => {

    //! 1. Arrange
    const a = -1;
    const b = -3;

    //! 2. Act
    const result = muliply(a,b);
    
    //! 3 Assert
    expect(result).toBe( a * b);
});

    test ('shuld divide two positive numbers' , () => {

    //! 1. Arrange
    const a = 1;
    const b = 3;

    //! 2. Act
    const result = divide(a,b);
    
    //! 3 Assert
    expect(result).toBe( a / b);
});


});
