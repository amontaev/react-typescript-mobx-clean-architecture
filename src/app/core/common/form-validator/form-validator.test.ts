import {describe, expect } from '@jest/globals';
import { FormValidator } from './form-validator';

describe('form-validate', () => {

    it('email validate should be true', () => {
        expect(FormValidator.isEmailValid('example@mail.ru')).toBe(true);
    });

    it('email validate should be false', () => {
        expect(FormValidator.isEmailValid('example@mailru')).toBe(false);
        expect(FormValidator.isEmailValid('examplemailru')).toBe(false);
        expect(FormValidator.isEmailValid('example@mail.4654fdvf')).toBe(false);
        expect(FormValidator.isEmailValid('example')).toBe(false);
    });

    it('phone validate should be true', () => {
        expect(FormValidator.isPhoneValid('+79998887766')).toBe(true);
    });

    it('phone validate should be false', () => {
        expect(FormValidator.isPhoneValid('+7999888dfbfbdf')).toBe(false);
        expect(FormValidator.isPhoneValid('sddsfdsf')).toBe(false);
        expect(FormValidator.isPhoneValid('6511fs')).toBe(false);
    });

});