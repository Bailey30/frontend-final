import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
const Container = styled.div``
const Input = styled.input``
const Button = styled.button``
const Image = styled.img``


function UploadImageTest() {
    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "zpce5fqz")

        axios.post(
            "https://api.cloudinary.com/v1_1/dthuzb3gx/image/upload", formData)
        .then((res)=> {
            console.log(res.data)
            console.log(res.data.public_id)
        
        })
    }

    const publicId = "ml5dhmg3m9yh8ulljjhf"
    return (
    <Container>
        <Input type="file"
        onChange={(e)=>setImageSelected(e.target.files[0])}></Input>
        <Button onClick={uploadImage}>Upload Image</Button>
        <Image src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${publicId}.jpg`}></Image>
        {/* <Image src="http://res.cloudinary.com/dthuzb3gx/image/upload/v1641546000/srzyakrwrpcwrt0ylwfu.jpg"></Image> */}
      
    </Container>
  )
}

export default UploadImageTest