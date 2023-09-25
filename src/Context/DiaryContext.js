import { createContext , useState , useEffect} from "react";
import axios from 'axios';

export const DiaryContext = createContext();

const DiaryContextProvider =(props)=>{
   const [login , setlogin]=useState();
   const [name , setName ] = useState("");
   const [Diary , setDiary ] = useState([]);
   const [aramalar , setAramalar]=useState("");
   const [show , setShow]= useState(false);
   const [showkayit , setShowKayit]= useState(false);
   const [userName , setUserName] = useState("");
   const [showDiary , setShowDiary]= useState(false);
useEffect(()=>{
  console.log(login);
},[login!=""])
   const LoginUser=async(userName , password)=>{
       var data = await axios.get(`https://localhost:44354/api/Diarys/login-user?userName=${userName}&password=${password}`);
       if (data.data!=0)
       {
        setlogin(data.data);
        console.log(data.data);
        GetName(data.data);
        GetDiary(data.data)
       }
      else setlogin(0);
   }
   const arama=(e)=>{
     const aramasonuc = e.target.value;
     setAramalar(aramasonuc.toLowerCase());
 };
   const GetName=async(userId)=>
   {
        var nameData = await axios.get(`https://localhost:44354/api/Diarys/username-id?id=${userId}`);
        setName(nameData.data);
        console.log(nameData.data);
   }
   const GetDiary= async(userId)=>{
        var diart =await axios.get(`https://localhost:44354/api/Diarys/get-not-user?userId=${userId}`);
        setDiary(diart.data);
        console.log(diart.data);
   }
   const LoginOut= async()=>{
    setlogin(null);
    setName("");
    setDiary([]);
    setUserName("");
};
   const PostDiary =  async (title, note) =>
   { // time now
          console.log(title, note , login);
        await axios.post(`https://localhost:44354/api/Diarys/post-diary?note=${note}&userId=${login}&title=${title}`);
       // console.log(title, note , userId);
        GetDiary(login);
   }
   const UpdateDiary =  async (title, note , diaryId) =>
   { 
     await axios.put(`https://localhost:44354/api/Diarys/update-diary-user?id=${diaryId}&userId=${login}&note=${note}&title=${title}`);
     console.log(title , note , diaryId);
     GetDiary(login);
   }
   const Kayit =  async (userName , password , ad , soyad , güvenlik , güvenlikcevap) =>
   { 
    var username =  await axios.post(`https://localhost:44354/api/Diarys/post-user?userName=${userName}&firstName=${ad}&lastName=${soyad}&password=${password}&securtyQuestion=${güvenlik}&securtyResponse=${güvenlikcevap}`);
    if(username.data=="0") { console.log("User Kayıtlı" + username.data); setUserName(username.data)}
    else setUserName(username.data);

    console.log(userName , password , ad , soyad , güvenlik , güvenlikcevap );
   }
   const DeleteDiary =  async (diaryId, userId) =>
   { 
          console.log(diaryId , userId);
          await axios.delete(`https://localhost:44354/api/Diarys/delete-diary-user?diaryId=${diaryId}&userId=${userId}`)
          GetDiary(userId);
   }
   const handleClose =()=>{
    setShow(false);
}
const handleCloseKayit =()=>{
  setShowKayit(false);
}
const handleCloseDiary =()=>{
  setShowDiary(false);
}
   let filtrediary = Diary.filter((data)=>{
     return data.note.toLowerCase().indexOf(aramalar) !== -1
 });

    return(<DiaryContext.Provider value={{login ,  setShowDiary , showDiary , setShow , handleCloseDiary,show,  userName , setUserName, setShowKayit , handleCloseKayit , showkayit, handleClose,  Kayit , arama , LoginUser , LoginOut, filtrediary , name , Diary , PostDiary , DeleteDiary , UpdateDiary}}>{props.children}</DiaryContext.Provider>)
}
export default DiaryContextProvider;