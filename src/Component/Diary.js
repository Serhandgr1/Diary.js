import { useContext , useState , useEffect} from 'react';
import { DiaryContext } from '../Context/DiaryContext';
import {Modal , Form , FormGroup , FormControl , Button} from 'react-bootstrap';
import AddDiary from './AddDiary';


const Diary =()=>{
    const {filtrediary} = useContext(DiaryContext);
    const {login} = useContext(DiaryContext);
    const {Diary} = useContext(DiaryContext);
    const {DeleteDiary} = useContext(DiaryContext);
    const {showDiary} = useContext(DiaryContext);
    const [title , setTitle ] = useState("");
    const [diaryId , setDiaryId ] = useState("");
    const [note , setNote] = useState("");
    const {UpdateDiary} = useContext(DiaryContext);
    const [showUpdate , setShowUpdate]= useState(false);
    const {setShowDiary} = useContext(DiaryContext);

    const handleCloseUpdate =()=>{
      setShowUpdate(false);
  }
  const handelSubmit =(e)=>{
    e.preventDefault();
    UpdateDiary(title , note , diaryId);
};
const Update = (data)=>{
  setShowUpdate(true);
 setNote(data.note);
 setTitle(data.title);
 setDiaryId(data.id);
}
    return(<>
   {login!=null && login!=0? <div style={{float:'right'}}><button type="button" class="btn btn-success" onClick={()=>setShowDiary(true)}>New Diary</button></div> : <></>}
   {showDiary==true ?  <div><AddDiary/></div>:<></>}
    {login==null || login==0?
    <div style={{marginTop:200 , marginLeft:300 , maxWidth:600}}><h5>Neden Günlük tutmalıyım?</h5>
    <p>Günlük tutmak, bilişsel işlevlerimizi artırmanın yanında, kısa süreli belleğimizi iyileştirebilir, stresli durumlarla başa çıkma yetisine yardımcı olabilir ve işte yapılan hataları azaltabilir. Bilim gösteriyor ki, hem beyinlerimiz hem de bedenlerimiz için sırlarımızın üstündeki gizliliği kaldırmalıyız.</p>
    </div>:Diary!=""?(filtrediary==""?<div style={{marginTop:200 , marginLeft:500}}><h5>Böyle bir kayıt bulunmuyor.</h5></div>:
    filtrediary.map((data)=> 
    (
   <div key={data.id} class="card" style={{marginTop:50}}>
        <div >
    <div class="card-header">
      {data.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{data.note}</p>
       <div>
       <button type="button" class="btn btn-secondary" onClick={()=>Update(data)}>Update</button>
       <button type="button" class="btn btn-danger" onClick={()=>DeleteDiary(data.id , login)}>Delete</button>
        </div>
        <div style={{float:"right"}}>
        <footer class="blockquote-footer">Tarih:<cite title="Source Title">{data.time}</cite></footer>
        </div>
      </blockquote>
       </div></div> 
       </div>
       ))):
       <>
       <div style={{marginTop:150}}><h5>Hiç Kaydın olmadığını farkettik sana örnek kayıt göstereceğiz:</h5></div>
       <div class="card" style={{marginTop:50}}>
        <div>
    <div class="card-header">
      Anlatamam
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>Bugün nasıl güzeldi anlatamam. Anlatırım da yorgunum yarın anlatırım. Aslında yarın  da anlatmam sanırım da sen anlatacakmışım gibi düşün uzatma hadi bay.</p>
       <div>
        </div>
        <div style={{float:"right"}}>
        <footer class="blockquote-footer">Tarih:<cite title="Source Title">05/06/2023</cite></footer>
        </div>
      </blockquote>
       </div></div> </div>
       <div class="card" style={{marginTop:50}}>
        <div>
    <div class="card-header">
      Anlatamam Dedim
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>Yarın da anlatmam demiştim sözümü tutuyorum. Bugün de anlatmayacağım ama belki yarın anlatırım. Şaka şaka anlatmam niye anlatıyım belki verilerim çalınacak bu siteyi yazanın dataları nasıl koruduğunu bilmiyorum güvenemem içimde tutacağım.</p>
       <div>
        </div>
        <div style={{float:"right"}}>
        <footer class="blockquote-footer">Tarih:<cite title="Source Title">06/06/2023</cite></footer>
        </div>
      </blockquote>
       </div></div> </div>
       </>}
       <div>
            <Modal show={showUpdate} onHide={handleCloseUpdate}>
            <Form onSubmit={handelSubmit}>
          <FormGroup>
          Title<FormControl name="name"  value={title} onChange={(e) =>setTitle(e.target.value)} type='text' placeholder='Name *' required>
              </FormControl>
          </FormGroup>
          <FormGroup>
          Note<FormControl name="name"  value={note} onChange={(e) =>setNote(e.target.value)} type='text' placeholder='Name *' required>
              </FormControl>
          </FormGroup><br></br>
          <Button variant='success' type='submit' onClick={()=>setShowUpdate(false)}>
                Kaydet
          </Button>
            </Form>
            </Modal>
      </div>
</>
 )
}
export default Diary;