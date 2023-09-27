import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Modal, Box, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';

const PrimaryData = {
    item: "lemon",
    price: "400",
    date: "06/09",
    index: 1
};

const Tables = ({ data, values, edit }) => {
    const [open, setOpen] = useState(false);
    const [primaryData, setprimaryData] = useState(PrimaryData);

    const handleClose = () => {
        setOpen(false);
    };

    //never used
    // const handleOpen = () => {
    //     if (edit === true) {
    //         setOpen(true);
    //     };
    // };
    function handleModel(i, index) {
        setprimaryData({ ...i, index: index });
        setOpen(true);
    }


    function Model({ open, onClose, data }) {
        const style = {
            position: 'absolute',
            overflow: 'hidden',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
        };
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='child-modal-title'
                aria-describedby='child-modal-description'
            >
                <Box sx={{ ...style, width: 350 }}>
                    <h3> Edit </h3>
                    <TextField
                        required
                        id="outlined-required"
                        label="Items"
                        defaultValue={data.item}
                        sx={{ margin: 3 }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={data.price}
                        sx={{ margin: 3 }}
                    />
                    <Button className='mx-1' variant='primary'>save</Button>
                    <Button className='mx-1' onClick={handleClose} variant='secondary'>close</Button>
                    {/* <Button variant='primary'>save</Button> */}

                </Box>
            </Modal>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 310, height: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Sn</TableCell>
                        <TableCell align='left'>{data.type}</TableCell>
                        <TableCell align='left'>Date</TableCell>
                        <TableCell align="right">{data.cast}</TableCell>
                        <TableCell>
                            {
                                (edit === true) ? 'Edit' : (null)
                            }
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {values.map((i, index) => (
                        <TableRow key={index}>
                            <TableCell align='left'>{index + 1}</TableCell>
                            <TableCell align='left'>{i.item}</TableCell>
                            <TableCell align='left'>{i.time}</TableCell>
                            <TableCell className={data.cast === "Price" ? 'text-danger' : 'text-success'} align='right'>{i.price}</TableCell>
                            <TableCell onClick={() => { handleModel(i, index) }}>
                                {(edit === true) ?
                                    (<svg fill="#000000" height="16px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.00 512.00" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="0" stroke="#000000" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"></path> </g> </g> </g></svg>) :
                                    (null)
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <Model open={open} onClose={setOpen} data={primaryData} />
            </Table>
        </TableContainer>
    )
};


export default Tables;