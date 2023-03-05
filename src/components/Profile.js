import { useRecoilValue } from "recoil"
import { UserDetails } from "../Recoil/UserDetails"
import '../styles/Profile.css'
import Genqr from "./Genqr"
import Test from "./Test"

export const Profile = () => {
    const user = useRecoilValue(UserDetails)
    const email = localStorage.getItem('email')
    return (
        <div className='profile-pages'>
            <div className = 'profile-components'>
            <Test/>
            </div>
        </div>
        
    )
}
//<Genqr name={user} email={email} />