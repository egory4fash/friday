import {NavLink, Route, Routes} from "react-router-dom"
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";
import {Profile} from "./components/Profile/Profile";
import {Error404} from "./components/Error404/Error404";
import {SetNewPassword} from "./components/Passwords/SetNewPassword";
import {PasswordRecovery} from "./components/Passwords/PasswordRecovery";
import {Test} from "./components/Test/Test";



function AppRoutes() {
    return (
        <div>
            <NavLink to={'/'}>главная </NavLink>
            <NavLink to={'/login'}>логинизация </NavLink>
            <NavLink to={'/register'}>регистрация </NavLink>
            <NavLink to={'/profile'}>профайл  </NavLink>
            <NavLink to={'/password/set'}>ввод нового пароля  </NavLink>
            <NavLink to={'/password/recover'}>восстановление пароля  </NavLink>
            <NavLink to={'/test'}>test  </NavLink>
            <Routes>



                <Route  path={'/'} element={<div>Main</div> }/>
                <Route  path={'/login'} element={<Login/> }/>
                <Route  path={'/register'} element={<Register/> }/>
                <Route  path={'/profile'} element={<Profile/> }/>
                <Route  path={'/password/set'} element={<SetNewPassword/> }/>
                <Route  path={'/password/recover'} element={<PasswordRecovery/> }/>
                <Route  path={'/test'} element={<Test/> }/>
                <Route  path={'*'} element={<Error404/> }/>





            </Routes>
        </div>
    )
}

export default AppRoutes