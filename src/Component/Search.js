import { useContext, useState } from "react";
import Giris from "./Giris";
import { DiaryContext } from "../Context/DiaryContext";
import Kayit from "./Kayıt";
const Search =()=>
{
    const {name} = useContext(DiaryContext);
    const {LoginOut} = useContext(DiaryContext);
    const {setShow} = useContext(DiaryContext);
    const {show} = useContext(DiaryContext);
    const {setShowKayit} = useContext(DiaryContext);
    const {showkayit} = useContext(DiaryContext);
    const {arama} = useContext(DiaryContext);

    return(
    <div className="form-group row md-5 col-12" style={{marginTop:"50px" , marginLeft:"250px"}} > 
    <div  className="col-2"><img src='https://upload.wikimedia.org/wikipedia/commons/e/e2/LA-Logo-libri-wiki.png' style={{maxWidth:60}}/></div>
    <div className="col-4" ><input type="text " className="form-control" placeholder="Search a Diary"  style={{marginLeft:50}}onChange={(event)=>arama(event)}/></div>
    <div className="col-6" >
    {name=="" ?<button type="button" className="btn btn-md btn btn-secondary " value={name} style={{minWidth:155 , marginLeft:100 , marginRight:15}} onClick={()=>setShow(true)}>Giriş Yap</button>:<button type="button" className="btn btn-md btn btn-secondary " style={{minWidth:155 , marginLeft:100 , marginRight:15}} onClick={()=>LoginOut()}>{name} Çıkış Yap</button>}
    {name=="" ?  <button type="button" className="btn btn-md btn btn-secondary " onClick={()=>setShowKayit(true)}>Kayıt ol</button>:<></>}
   {show==true ?  <div><Giris/></div>:<></>}
   {showkayit==true ?  <div><Kayit/></div>:<></>}
    </div>
    </div>   
    )
}

export default Search;