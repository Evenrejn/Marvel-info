import preloader from "../../assets/preloader.gif";
import s from "./spinner.module.css";

const Spinner = () => {
    return (<img className={s.spinner} src={preloader}></img>)
}

export default Spinner;