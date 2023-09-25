import { useContext , useState , useEffect} from 'react';
import { DiaryContext } from '../Context/DiaryContext';
import { Modal } from 'react-bootstrap';
const  Kayit = () => {
	const [password , setPasswor]= useState("");
    const [ad , setAd]= useState("");
    const [soyad , setSoyad]= useState("");
    const [güvenlik , setGüvenlik]= useState("");
    const [güvenlikcevap , setGüvenlikCevap]= useState("");
    const [showkayit , setShow]= useState(true);
    const [user , setUser]= useState("");
    const {userName} = useContext(DiaryContext);
    const {handleCloseKayit} = useContext(DiaryContext);
	const {Kayit} = useContext(DiaryContext);
	const handelSubmit =(e)=>{
		e.preventDefault();
  
	}
    const sil =()=>{
        setAd("");
        setGüvenlik("");
        setGüvenlikCevap("");
        setPasswor("");
        setSoyad("");
        setUser("");
      
    }

	return(
        <Modal show={showkayit} onHide={handleCloseKayit}>
		<form onSubmit={handelSubmit}>
	
	<div class="form-group">
		<label for="inputMail">Kullanıcı Adı</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Kullanıcı adınızı girin." value={user} onChange={(e) =>setUser(e.target.value)} required/>
	</div>
    <div class="form-group">
		<label for="inputMail">Ad:</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Adınız" value={ad} onChange={(e) =>setAd(e.target.value)} required/>
	</div>
	<div class="form-group">
		<label for="inputMail">SoyAd</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Soyadınız" value={soyad} onChange={(e) =>setSoyad(e.target.value)} required/>
	</div>
    <div class="form-group">
		<label for="inputMail">Güvenlik Sorusu</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Güvenlik sorusu" value={güvenlik} onChange={(e) =>setGüvenlik(e.target.value)} required/>
	</div>
    <div class="form-group">
		<label for="inputMail">Güvenlik sorusu cevabın</label>
		<input type="text" class="form-control" id="inputMail" placeholder="Güvenlik sorusu cevabın" value={güvenlikcevap} onChange={(e) =>setGüvenlikCevap(e.target.value)} required/>
	</div>
	<div class="form-group">
		<label for="inputPassword">Şifreniz</label>
		<input type="password" class="form-control" id="inputPassword" placeholder="Şifre gir..." value={password} onChange={(e) =>setPasswor(e.target.value)} required/>
	</div>
	{user!=""&& ad!="" && soyad!=""&&güvenlik!=""&& güvenlikcevap!=""&&password!="" && userName=="" || userName=="0"? <button type="submit" class="btn btn-default" onChange={()=>sil()} onClick={()=>Kayit(user , password , ad , soyad , güvenlik , güvenlikcevap)}>Kayıt Ol</button>:<></>}
    {userName=="0"?<p>Aynı bilgiler ile kayıtlı kullanıcı mevcut</p>:<p>Kayıt Başarılı giriş yapabilirsin</p>}

	</form>
</Modal>
)}
export default Kayit;