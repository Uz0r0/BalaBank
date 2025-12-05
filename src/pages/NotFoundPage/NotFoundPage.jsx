import style from './NotFoundPage.module.css';
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import Bird from '../../assets/NotFoundBird.png';

function NotFoundPage() {
    const navigate = useNavigate();
    const { registerData } = useContext(AuthContext);
    const nav = registerData.role == 'parent' ? 'parent' : 'child';
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <p className={style.big}>Упс!</p>
                <h1 className={style.title}>404</h1>
                <img src={Bird} alt="404 Bird Icon" className={style.bird}/>
                <p>Мы такую страницу еще <br /> не придумали</p>
                <button onClick={(e) => navigate(`/${nav}`)} className={style.comeBackBtn}>Вернуться</button>
            </div>
        </div>
    )
}

export default NotFoundPage