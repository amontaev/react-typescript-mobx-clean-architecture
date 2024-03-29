import { ContactsRepositoryImpl } from "app/data/contacts"
import { 
    CreateContactUseCase, 
    DeleteContactUseCase, 
    UpdateContactUseCase, 
    GetContactsUseCase,
    SearchContactsUseCase 
} from "app/domain/contacts"
import ContactsViewComponent from "./contacts-view.component"
import { ContactsViewModel } from "./contacts-view.model"

const ContactsView:React.FC = () => {

    //data
    const contactsRepository = new ContactsRepositoryImpl()
    //domain
    const getContactsUseCase = new GetContactsUseCase(contactsRepository) 
    const createContactUseCase = new CreateContactUseCase(contactsRepository) 
    const updateContactUseCase = new UpdateContactUseCase(contactsRepository) 
    const deleteContactUseCase = new DeleteContactUseCase(contactsRepository) 
    const searchContactsUseCase = new SearchContactsUseCase(contactsRepository) 
    //presentation
    const viewModel = new ContactsViewModel(
        getContactsUseCase, 
        createContactUseCase,
        updateContactUseCase,
        deleteContactUseCase,
        searchContactsUseCase
    )

    return (<ContactsViewComponent viewModel={viewModel}/>)
    
}

export default ContactsView