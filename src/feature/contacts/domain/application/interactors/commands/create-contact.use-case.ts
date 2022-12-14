import { Contact } from "../../../../data/repository/models/contact.model";
import FormValidator from "../../../../../../core/application/utils/form-validator";
import { Resource } from "../../../../../../core/application/utils/resource";
import { ContactsRepository } from "../../repository/contacts.repository"

export class CreateContactUseCase {

    repository: ContactsRepository

    constructor(repository: ContactsRepository) {
        this.repository=repository
    }

    public async execute(name:string,phone:string):Promise<Resource<Contact>> {
        
        if (!name) {
            return Promise.resolve({
                error:'ФИО не может быть пустым!'
            });
        }

        if (!phone) {
            return Promise.resolve({
                error:'Введите номер телефона!'
            });
        }

        if (!FormValidator.isPhoneValid(phone)) {
            return Promise.resolve({
                error:'Номер телефона введен некорректно!'
            });
        }

        return await this.repository.createContact(name,phone)
    }
}