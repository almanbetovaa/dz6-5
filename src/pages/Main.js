import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../components/Tabs";
// import {SwiperSlide} from "swiper/react";
import {SwiperComponents} from "../components/one/Swiper"
import One from "../components/one/One"
import Two from "../components/two/Two";
import Three from "../components/three/Three";
import Four from "../components/four/Four";
import Five from "../components/five/Five";

const VALUES = {
    itemOne: 'one',
    itemTwo: 'two',
    itemThree: 'three',
    itemFour: 'four',
    itemFive: 'five'

}

const GetCategories = ({value}) => {

    switch (value) {
        case VALUES.itemOne: {
            return <SwiperComponents/>
        }
        case VALUES.itemTwo: {
            return <Two/>
        }
        case VALUES.itemThree: {
            return <Three/>
        }
        case VALUES.itemFour: {
            return <Four/>
        }
        case VALUES.itemFive: {
            return <Five/>
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