import { useContext , useState , useEffect} from 'react';
import { DiaryContext } from '../Context/DiaryContext';
import { Modal } from 'react-bootstrap';
const  Giris = () => {
	const [userName , setUserName] = useState("");
	const [password , setPasswor]= useState("");
	const {show} = useContext(DiaryContext);
	const {login} = useContext(DiaryContext);
	const {handleClose} = useContext(DiaryContext);
	// const [showClose , setShowClose]= useState(true);
	const {LoginUser} = useContext(DiaryContext);
	const handelSubmit =(e)=>{
		e.preventDefault();
	}
const sil = ()=>
{
	setPasswor("");
	setUserName("");

}
	return(
	<Modal show={show} onHide={handleClose}> 
		<form  onSubmit={handelSubmit}>
	
	<div class="form-group">
		<label for="inputMail">Kullanıcı Adı</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Kullanıcı adınızı girin." value={userName} onChange={(e) =>setUserName(e.target.value)} required/>
	</div>
	
	<div class="form-group">
		<label for="inputPassword">Şifreniz</label>
		<input type="password" class="form-control" id="inputPassword" placeholder="Şifre gir..." value={password} onChange={(e) =>setPasswor(e.target.value)} required/>
	</div>	
{userName!=""&&password!="" && login==null || login==0?	<button type="submit" class="btn btn-default"  onChange={()=>sil()} onClick={()=> LoginUser(userName , password)}>Gönder</button>:<></>}
{login==0?<p>Kullanıcı adı veya şifreniz hatalıdır</p>: login!=null? <p>Giriş Başarılı</p>:<></>}
	</form>
	</Modal>
)}
export default Giris;