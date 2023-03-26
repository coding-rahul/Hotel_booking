import React, { useState, useEffect } from "react";
import Home from "./Home";
import Booking from "./Book"


const Dashboard = () => {
    const [apiData, setApiData] = useState([])
    const [flag, setFlag] = useState(false);

    const [inputData, setInputdata] = useState({ Name: "", email: "", number: "", address: "" });
    const [type, setType] = useState("Standard");
    const [userSelect, setuserSelect] = useState("");
    const [room, updateRoom] = useState(1);

    const inputHandler = (e) => {
        setInputdata({ ...inputData, [e.target.name]: e.target.value })
    }

    const getApi = () => {
        fetch("http://localhost:1234/Hotels")
            .then(resApi => resApi.json())
            .then(resApi => setApiData(resApi))
    }
    const Book = (data) => {
        setuserSelect(data)
        setFlag(true)
    }

    const Decrement = () => {
        if (room > 1) {
            updateRoom(room - 1)
        }
    }

    const Increment = () => {
        updateRoom(room + 1);
    }

    const Booked = (data) => {
        if (!inputData.Name || !inputData.email || !inputData.number || !inputData.address) {
            alert("All field are mandatory !")
            console.log(inputData.Name, inputData.email, inputData.number, inputData.address)
        }
        else {
            let url = "http://localhost:1234/user";
            var orderData = {
                "name": inputData.Name,
                "number": inputData.number,
                "email": inputData.email,
                "room": room,
                "roomType": type,
                "address": inputData.address,
                "Hotel": data
            }
            var postData = {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(orderData)
            };
            fetch(url, postData)
                .then(postData => {
                    alert(`${inputData.Name} , Your Booking confirmed!`)
                    setType("Standard")
                    setInputdata({ Name: "", email: "", number: "", address: "" })
                    updateRoom(1)
                    setFlag(false)
                })
        }
    }

    useEffect(() => {
        getApi()
    }, []);

    return (
        <>
            {
                (flag) ?
                    <Booking Booked={Booked} inputData={inputData} inputHandler={inputHandler} setType={setType} userSelect={userSelect} Increment={Increment} Decrement={Decrement} room={room} type={type} />
                    :
                    <Home apiData={apiData} Book={Book} />
            }

        </>
    )
}
export default Dashboard;