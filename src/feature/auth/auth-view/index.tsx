import { AuthUseCase } from "domain/auth/auth.use-case"
import { AuthRepositoryImpl } from "data/auth/auth.repository.impl"
import AuthViewComponent from "./auth-view.component"
import { AuthViewModel } from "./auth-view.model"

const AuthView:React.FC = () => {

    //infrastructure
    const authRepository = new AuthRepositoryImpl()
    //core
    const authUseCase = new AuthUseCase(authRepository) 
    //presentation
    const authViewModel = new AuthViewModel(authUseCase)

    return (<AuthViewComponent viewModel={authViewModel}/>)
    
}

export default AuthView