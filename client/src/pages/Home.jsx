import React, { useEffect, useState } from 'react'
import Progress from '../components/Progress'
import MenuAppBar from '../components/MenuAppBar'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
//import MaxHeightTextarea from '../components/StyledTextArea'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const Home = () => {
    const [color, setVarient] = useState('primary')
    const [reviewMesg, setReviewMsg] = useState('Good Review')
    const [reviewContent, setReviewContent] = useState('')

    const textAreaStyle = {
        border: '1px solid rgba(0,0,0,0.5)',
        outline:'none',
        resize:'none',
        backgroundColor:'#F5F5F5',
        padding:'20px'
    }
    useEffect(() => {

    }, [])
    const handleSubmit = async () => {
        alert(reviewContent)
        // const result =await axios.post('BACK END URL HERE', reviewContent)

    }
    return (
        <>
            <MenuAppBar />
            <div style={{ width: '80%' }} className='mx-auto'>
                <div className='mt-4 px-5 py-3 bg-white shadow-sm rounded' >
                    <Typography variant='h6' color={color} className='my-3' position={'center'}>{reviewMesg}</Typography>
                    <Progress done={50} />
                </div>
                <div className='d-flex flex-column justify-content-around px-5 mt-4 bg-white shadow-sm rounded'>
                    <Typography variant='h6' color={'primary'} className='my-3'>Enter The Review Here</Typography>
                    <textarea name="" id="" cols="30" rows="10"
                    onChange={e => setReviewContent(e.target.value)}
                    value={reviewContent}  
                    style={textAreaStyle}
                    >

                    </textarea>
                    {/* <TextField id="outlined-basic" label="Review" variant="outlined" onChange={e => setReviewContent(e.target.value)} value={reviewContent} /> */}
                    <Button variant='contained' className='mt-4' onClick={handleSubmit}>Submit</Button>

                </div>
            </div>


        </>
    )
}

export default Home