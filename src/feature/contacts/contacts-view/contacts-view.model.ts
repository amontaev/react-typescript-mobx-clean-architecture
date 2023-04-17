import { makeAutoObservable } from "mobx";
import { 
    CreateContactUseCase, 
    GetContactsUseCase, 
    SearchContactsUseCase, 
    UpdateContactUseCase, 
    DeleteContactUseCase 
} from "domain/contacts";
import { ContactsViewState } from "./contacts-view.state";

export class ContactsViewModel {

    private getContactsUseCase:GetContactsUseCase
    private createContactUseCase:CreateContactUseCase
    private updateContactUseCase:UpdateContactUseCase
    private deleteContactUseCase:DeleteContactUseCase
    private searchContactsUseCase:SearchContactsUseCase

    uiState:ContactsViewState = {
        error: "",
        search: "",
        name: "",
        phone: "",
        contacts: []
    }

    public constructor(
        getContactsUseCase:GetContactsUseCase,
        createContactUseCase:CreateContactUseCase,
        updateContactUseCase:UpdateContactUseCase,
        deleteContactUseCase:DeleteContactUseCase,
        searchContactsUseCase:SearchContactsUseCase
    ) {
        this.getContactsUseCase = getContactsUseCase
        this.createContactUseCase = createContactUseCase
        this.updateContactUseCase = updateContactUseCase
        this.deleteContactUseCase = deleteContactUseCase
        this.searchContactsUseCase = searchContactsUseCase

        makeAutoObservable(this)
    }

    async createContact() {
        const result = await this.createContactUseCase.execute(this.uiState.name, this.uiState.phone)
        if (result.success) {
            this.uiState.contacts.push(result.success)
            this.uiState.name = ''
            this.uiState.phone = ''
        }
        if (result.error) {
            this.alertError(result.error)
        }
    }

    async getContacts() {
        const result = await this.getContactsUseCase.execute()
        if (result.success) {
            this.uiState.contacts = result.success
        }
        if (result.error) {
            this.alertError(result.error)
        }
    }

    async updateContact(index:number) {
        const result = await this.updateContactUseCase.execute(this.uiState.contacts[index])
        if (result.success) {
            this.uiState.contacts[index].is_edit=false
        }
        if (result.error) {
            this.alertError(result.error)
        }
    }

    async deleteContact(id:number) {
        const result = await this.deleteContactUseCase.execute(id)
        if (result.success) {
            let index = this.uiState.contacts.findIndex(item => item.id === id);
            if (index >= 0) this.uiState.contacts.splice(index, 1);
        }
        if (result.error) {
            this.alertError(result.error)
        }
    }
    
    async searchContact() {
        const result = await this.searchContactsUseCase.execute(this.uiState.search)
        if (result.success) {
            this.uiState.contacts = result.success
        }
        if (result.error) {
            this.alertError(result.error)
        }
    }

    onNewNameChanged(value: string) {
        this.uiState.name=value
    }

    onNewPhoneChanged(value: string) {
        this.uiState.phone=value
    }

    onNameChanged(index:number, value: string) {
        this.uiState.contacts[index].name = value
        this.uiState.contacts[index].is_edit = true
    }

    onPhoneChanged(index:number, value: string) {
        this.uiState.contacts[index].phone = value
        this.uiState.contacts[index].is_edit = true
    }

    onSearchChanged(search: string) {
        this.uiState.search=search
    }

    private alertError(error:string) {
        this.uiState.error = error
        alert(this.uiState.error)
        this.uiState.error=''
    }

}