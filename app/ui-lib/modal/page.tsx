'use client'
import Button from '@/components/ui-components/Button'
import InputContainerStyle from '@/components/ui-components/input-container-style'
import Modal from '@/components/ui-components/Modal'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <div className='w-full h-full overflow-y-auto space-y-4 p-10 '>
            <InputContainerStyle>
                <Button onClick={()=>setOpen(true)}>Open</Button>
            </InputContainerStyle>
        </div>
        <Modal height={500} maxwidth={500} open={open} setOpenModal={setOpen}>
            <Modal.Header>
                Modal
            </Modal.Header>
            <Modal.Panel>
                a
            </Modal.Panel>
            <Modal.Footer>
                <Button>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default page