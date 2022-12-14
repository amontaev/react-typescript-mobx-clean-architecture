import { Contact } from "../../../../data/repository/models/contact.model";
import { Resource } from "../../../../../../core/application/utils/resource"
import { ContactsRepository } from "../../repository/contacts.repository"

export class SearchContactsUseCase {

    repository: ContactsRepository

    constructor(repository: ContactsRepository) {
        this.repository=repository
    }

    public async execute(search:string):Promise<Resource<Contact[]>> {
        return await this.repository.searchContacts(search)
    }
}