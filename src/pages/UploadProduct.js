import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Navbar from "../components/Navbar"
import { UploadProductFetch } from "../requestMethods"

const Container = styled.div`
position: relative;
overflow: hidden;`

const Line = styled.div`
width: 93vw;
margin: 0 auto;
border-bottom: 1px solid lightgray;`



// const Mask = styled.div`
// height: 100%;
// width: 100%;
// position: absolute;
// background: linear-gradient(rgba(225,225,0225, 0.5), rgba(274,135,014, 0.5));
// z-index: -2;`


const Heading = styled.h1`
margin: 0 10px;;`

const Input = styled.input`
padding: 10px;
border: 2px solid lightgray;
border-radius: 5px;`

const Button = styled.button`
margin: 10px 10px;
padding: 10px;
width: 10vw;
background-color: ${props => props.background};
border: 2px solid black;
color: ${props => props.color};
position: relative;
cursor: pointer;`

const Image = styled.img``

const UploadComponent = styled.div`
width: 50vw;
margin: 2vh auto;
background: white;
padding: 10px 20px;
`

const Form = styled.form`
border: 1px solid gray;`

const Label = styled.label`
margin: 10px 0;`

const PreviewImage = styled.img`
margin: 10px 0;
width: 220px;
height:195px;
border: 1px solid black;
background-color: lightgray;`

const BoxChoices = styled.div`
display: flex;
margin: 10px 0;
`

const Test = styled.input.attrs({ type: "checkbox" })`
`
const BoxLabel = styled.div``

const Cont = styled.div`
display: flex;
flex-direction:column;
padding: 10px;
`
const ImageCont = styled.div`
display: flex;
/* justify-content: space-between; */
`
const ImageInput = styled.input`
margin: 10px ;
background-color: white;
width: 20vw;
height: 100%;
position: absolute;
top: 0;
left: 0;
opacity: 0;`

const ImageButtonCont = styled.div`
display: flex;
width: 30%;
flex-direction: column;
margin: 0 20px;
`
const AddImage = styled.span`
position: relative;`

const CatCont = styled.div`
display: flex;
align-items: center;
margin-right: 10px;`



function UploadProduct({ user, setUser }) {
    const [imageSelected, setImageSelected] = useState("")
    const [productData, setProductData] = useState({
        username: "",
        userId: "",
        title: "",
        img: "",
        categories: [],
        desc: "",
        price: ""
    })
    const [previewImage, setPreviewImage] = useState("")




    const uploadImage = async (image) => {
        const formData = new FormData()
        // setImageSelected(e.target.files[0])
        formData.append("file", image)
        formData.append("upload_preset", "zpce5fqz")
        // await axios.post(
        //     "https://api.cloudinary.com/v1_1/dthuzb3gx/image/upload", formData)
        //     .then((res) => {
        //         console.log(res.data)
        //         console.log(res.data.public_id)
        //         return res.data.secure_url
        //     })
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dthuzb3gx/image/upload", {
            method: "POST",
            body: formData,
        },
        )
        const data = await res.json()
        setProductData({
            ...productData,
            img: data.public_id
        })
        return data.secure_url

    }
    const imageHandler = async (e) => {
        const url = await uploadImage(e.target.files[0])
        setPreviewImage(url)

        console.log(e.target.files);
    }

    useEffect(() => {
        console.log(user);
        setProductData({
            ...productData,
            userId: user.userId,
            username: user.username,

        })
    }, [])

    //////checkboxes for categories

    const categories = ["Bowl", "Plate", "Vase", "Sculpture", "Ceramic", "Mug", "Other"]
    const [checkedState, setCheckedState] = useState(
        new Array(categories.length).fill(false)
    )

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
            //if the index of the state array matches the index from the cateogory array the state in the state array will change to the opposite of what it is currently
            //matching two indexes is a useful way to apply change to something when it is selected
        )
        setCheckedState(updatedCheckedState)
        // console.log(checkedState)
    }
    //////image uploading


    /////upload data to db

    const UploadData = (e) => {
        e.preventDefault()
        const testArray = []
        checkedState.filter((item, index) => {
            return item === true && testArray.push(categories[index])
        })
        console.log(testArray);
        setProductData({
            ...productData,
            username: user.username,
            categories: testArray,
        })



            (console.log("uploaded") &
                console.log(productData))
        // console.log(user)
    }
    useEffect(() => {
        UploadProductFetch(productData)
    }, [productData.categories])

    useEffect(() => {
        setProductData({
            ...productData,
            userId: user.userId,
            username: user.username,
        })
    }, [user])
    useEffect(() => {
        console.log(checkedState);
        console.log(productData);
        console.log(user);


    }, [productData, checkedState])

    // const publicId = "ml5dhmg3m9yh8ulljjhf"
    return (
        <Container>

            <Navbar user={user} setUser={setUser} />
            <Line></Line>
            
            {/* <Mask></Mask> */}
                <UploadComponent>
                    <Heading>Upload a product to sell</Heading>
                    <Cont>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" onChange={(e) => setProductData({ ...productData, title: e.target.value })}></Input>
                    </Cont>


                    <Cont >

                        <Label>Image</Label>
                        <ImageCont>

                            {/* <PreviewImage src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${previewImage}.jpg`}></PreviewImage> */}
                            <PreviewImage src={previewImage}></PreviewImage>

                            <ImageButtonCont>

                                <Button
                                    // onClick={uploadImage} 
                                    background="white" color="black">
                                    <AddImage>ADD IMAGE</AddImage><ImageInput type="file" onChange={(e) => imageHandler(e)}></ImageInput>
                                </Button>
                            </ImageButtonCont>
                        </ImageCont>
                        {/* <Image src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${publicId}.jpg`}></Image> */}
                        {/* <Image src="http://res.cloudinary.com/dthuzb3gx/image/upload/v1641546000/srzyakrwrpcwrt0ylwfu.jpg"></Image> */}

                    </Cont>
                    <Cont>
                        <Label>Categories</Label>
                        <BoxChoices>
                            {categories.map((cat, index) => {
                                return <CatCont key={index}>
                                    <Test id={cat} name={cat} value={cat} type="checkbox"
                                        checked={checkedState[index]}
                                        onChange={() => handleChange(index)}
                                    />
                                    <BoxLabel>{cat}</BoxLabel>
                                </CatCont>
                            })}
                        </BoxChoices>

                    </Cont>

                    <Cont>
                        <Label for="desc">Description</Label>
                        <Input type="text" id="desc" onChange={(e) => setProductData({ ...productData, desc: e.target.value })}></Input>
                    </Cont>
                    <Cont>
                        <Label for="desc">Price</Label>
                        <Input type="text" id="price" onChange={(e) => setProductData({ ...productData, price: e.target.value })}></Input>
                    </Cont>

                    <Button onClick={UploadData} background="black" color="white">POST AD</Button>


                </UploadComponent>
            

        </Container>
    )
}


export default UploadProduct