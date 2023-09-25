import { useContext, useState } from 'react';
import {Modal , Form , FormGroup , FormControl , Button} from 'react-bootstrap';
import { DiaryContext } from '../Context/DiaryContext';


const AddDiary =()=>{

    const [title , setTitle] = useState("");
    const [note , setNote ]= useState("");
    const {PostDiary} = useContext(DiaryContext);
    const {showDiary} = useContext(DiaryContext);
    const {handleCloseDiary} = useContext(DiaryContext);
    const handelSubmit =(e)=>{
        e.preventDefault();
    };

    const AddDiaryModel =(title , note)=>{
        PostDiary(title, note);
    };

return(  
    <Modal show={showDiary}  onHide={handleCloseDiary}>
<Form onSubmit={handelSubmit}>
    <FormGroup>
    Title<FormControl name="name"  value={title} onChange={(e) =>setTitle(e.target.value)} type='text' placeholder='Name *' required>
        </FormControl>
    </FormGroup>
    <FormGroup>
    Note<FormControl name="name"  value={note} onChange={(e) =>setNote(e.target.value)} type='text' placeholder='Name *' required>
        </FormControl>
    </FormGroup><br></br>
    <Button variant='success' type='submit' onClick={()=>AddDiaryModel(title , note)}>
           Kaydet
    </Button>

</Form>
</Modal>)
}
export default AddDiary;