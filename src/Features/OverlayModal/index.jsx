import React, {useState} from 'react'
import Modal from './Modal'

export default function ModalApp() {
     const [open, setOpen] = useState(true);
  return (
    <Modal onClose={() => setOpen(false)} open={open}/>
  )
}
