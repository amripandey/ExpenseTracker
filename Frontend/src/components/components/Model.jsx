import Box from '@mui/material/Box';
import { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { date, add } from '../controller/controller';

import Tables from './Table';
import { Modal as Mod } from 'react-bootstrap'


const Model = ({ open, onClose, data, datas, setLists }) => {

    const style = {
        position: 'absolute',
        overflow: 'scroll',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 2,
        pb: 3,
    };

    function ChildModal() {
        const [open, setOpen] = useState(false);
        const [item, setItem] = useState("");
        const [price, setPrice] = useState();

        const handleClose = () => {
            setOpen(false);
        };

        const handleOpen = () => {
            setOpen(true);
        };

        const handleSave = () => {
            setLists([...datas, { item: item, price: price, time: date() }]);

            handleClose();
        }


        return (
            <>
                <Button className='mb-2' onClick={handleOpen}>Add Data</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 350, overflow: 'hidden' }}>
                        <Mod.Header >
                            <Mod.Title>Add Data</Mod.Title>
                        </Mod.Header>
                        <Mod.Body>
                            <TextField
                                required
                                id="outlined-required"
                                label="Items"
                                value={item}
                                sx={{ margin: 3 }}
                                onChange={(e) => { setItem(e.target.value); }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Amount"
                                type="number"
                                value={price}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ margin: 3 }}
                                onChange={(e) => { setPrice(e.target.value); }}
                            />
                        </Mod.Body>
                        <Mod.Footer>
                            <Button variant='contained' color='error' className='mx-2' onClick={handleClose}>close</Button>
                            <Button variant="contained" color='success' onClick={handleSave}>save</Button>
                        </Mod.Footer>
                    </Box>
                </Modal >
            </>
        )
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, height: 600 }}>
                <h2 id="parent-modal-title">
                    {data.type}
                </h2>
                <ChildModal />
                <div id="parent-modal-description">
                    {
                        (data.type === 'Income') ?
                            (<Tables values={datas} data={data} edit={true} />) :
                            (<Tables values={datas} data={data} edit={true} />)
                    }
                </div>
            </Box>
        </Modal>
    )
};


export default Model;
