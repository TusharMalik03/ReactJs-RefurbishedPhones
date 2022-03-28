import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import base_url from '../Api/api';
// import '../CSS/dropdown.css';

let data1 = [];
let Company;
let data2 = [];

const Dropdown = (props) => {

    const [state, setstate] = useState([]);
    const [value, setvalue] = useState("Choose1");
    const [value1, setvalue1] = useState("Select");

    const changed = (e) => {
        console.log("Value s1 is:"+value1);
            Company=e.target.value;
            setvalue1(Company);
            console.log(Company);
            props.progress(10);
            axios.get(`${base_url}mobici1/data?Company=${Company}&Model=Choose`).then(
                (response) => {
                    props.progress(30);
                    console.log(response.data);
                    data1 = [];
                    props.progress(60);
                    data1 = Object.values(response.data);
                    props.progress(90);
                    setvalue("Choose1");
                    setstate(data1);
                    props.progress(100);
                }, (error) => {
                    console.log(error);
                }
            )
    }

    const changed1 = (e) => {
        setvalue(e.target.value);
    }

    const fetchModel = (e) => {
        e.preventDefault();
        props.progress(10);
        console.log("Value is: "+value);
        axios.get(`${base_url}mobici1/data?Company=${Company}&Model=${value}`).then(
            (response) => {
                props.progress(47);
                data2 = [];
                props.progress(69);
                data2 = Object.values(response.data);
                console.log(data2);
                props.progress(88);
                props.setMobiles(data2);
                props.progress(100);
            }, (error) => {
                console.log(error);
            }
        )
    }

    return (
        <>
            <div className="w-4/5  xs:w-2/3 h-fit aa:w-3/5 py-14 md:mx-10 mx-auto xl:w-5/12 sm:w-4/5 md:w-7/12 lg:mr-20 px-4 space-y-12 bg-slate-200 border-2 rounded-xl border-black flex flex-col">

                <label id="label-1" className='font-bold aa:text-3xl md:text-md sm:text-5xl'>Apply Filters:</label>
                <div className='flex flex-col space-y-8'>
                    <select className='form-select border-black p-1 border-2 rounded-md' id="select-1" onChange={changed} defaultValue={value1}>
                        <option value="Select Company">Select Company</option>
                        <option value="Apple">Apple</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Realme">Realme</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>

                    <select className='form-select p-1 rounded-md border-black border-2 selectOptions' onChange={changed1} defaultValue={value}>
                        <option value="Choose">Select Model....</option>
                        {
                            state.map((item) => {
                                return (
                                    <option key={item.MobileUrl}>{item.Model}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type="button" className="border-2 border-black rounded-md bg-slate-50 mb-6" onClick={fetchModel}> <span>Continue</span> </button>

            </div>

        </>
    )
}

export default Dropdown