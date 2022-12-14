import {describe, expect, test} from '@jest/globals';
import { ErrorMessages } from '../../../../core/application/utils/error-messages';
import { AuthRepositoryMockImpl } from '../../data/repository/auth.repository.mock';
import { AuthUseCase } from './auth.use-case';

describe('auth use-case', () => {

    const authRepositoryMock=new AuthRepositoryMockImpl()

    it('sign-in is success', () => {
        const authUseCase = new AuthUseCase(authRepositoryMock)
        authUseCase.execute('test@email.com','qwerty').then(response => {
            expect(response).toEqual({
                success:'random_access_token'
            });
        })
    });

    it('sign-in is failed', async () => {
        const authUseCase = new AuthUseCase(authRepositoryMock)
        authUseCase.execute('test@email.com','15165165').then(response => {
            expect(response).toEqual({error:ErrorMessages.SignInError});
        })
    });

})