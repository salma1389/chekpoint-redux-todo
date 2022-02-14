import { Button , Stack} from '@mui/material';
import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';

const Edit = ({item}) => {
    const [toedit,setToedit] = useState(item.action)
    const dispatch=useDispatch()
  const  handelOnSubmit=(e)=>{
        e.preventDefault();
        const edite={
            id:item.id,action:toedit ,isDone:item.isDone,
        }
        dispatch(editTask(edite))
        // setToedit('')
        closeModal()
    }
    const customStyles = { 
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
        <Button className='btn' variant="contained" onClick={openModal}>Edit </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form className='form' onSubmit={handelOnSubmit}>
              <label >Edit the input</label>
              <input type="text" value={toedit} onChange={(e)=>setToedit(e.target.value)}/>
              <Stack direction="row" spacing={2}  justifyContent="center">
              <Button className='btn' variant="contained" type='submit' >Confirm </Button>
              <Button className='btn' variant="contained" onClick={closeModal}>Cancel </Button>
              </Stack>
          </form>
           </Modal>
    </div>
  )
}

export default Edit