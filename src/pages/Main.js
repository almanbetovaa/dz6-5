import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../components/Tabs";
import {SwiperSlide} from "swiper/react";
import {SwiperComponents} from "../components/one/Swiper";
import One from "../components/one/One";
import Two from "../components/two/Two";
import Three from "../components/three/Three";

const VALUES = {
    itemOne: 'one',
    itemTwo: 'two',
    itemThree: 'three',
    itemFour: 'four',
    itemFive: 'five'

}

const GetCategories = ({value}) => {

    const swiperImages = [
        { url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' },
        { url: 'https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?cs=srgb&dl=pexels-mo-eid-9454915.jpg&fm=jpg' },
        { url: 'https://i.pinimg.com/474x/6c/12/fd/6c12fdc402726c513901a61f512ba3c6.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg'},
    ]

    switch (value) {
        case VALUES.itemOne: {
            return (
                <>
                    <One/>
                    <SwiperComponents swiperImages={swiperImages} />
                </>
                )
        }
        case VALUES.itemTwo: {
            return <Two/>
        }
        case VALUES.itemThree: {
            return <Three/>
        }
        case VALUES.itemFour: {
            return <p>Four</p>
        }
        case VALUES.itemFive: {
            return <p>Five</p>
        }
        default: return <></>
    }
}

const Main = () => {

    const categoriesSelect = [
        {value: VALUES.itemOne, label:'One'},
        {value: VALUES.itemTwo, label:'Two'},
        {value: VALUES.itemThree, label:'Three'},
        {value: VALUES.itemFour, label:'Four'},
        {value: VALUES.itemFive, label:'Five'}
    ]

    const [value, setValue] = useState(categoriesSelect[0].value)



    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>

        </Container>
    );
}

export default Main;