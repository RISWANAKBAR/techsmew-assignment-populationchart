import React, { useState, useEffect } from 'react';
import './graphdata.css'
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {

        axios.get('http://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json')

            .then(res => {
                console.log(res?.data[1])
                setdata(res?.data[1])

            },
                console.log(data)
            )


    }, []);

    return (
        <div className='body'>
            <h1> Indian Population Chart (1960-2021) </h1><br />
           

            <div className='graphdiv'>
                <div className='graphdiv1'>
                    <div className='graphdiv2'>
                        <div className='scale'>
                            
                        <p style={{textAlign:'left',color:" #FF671F"}}>X-Axis:Year</p>
                        <p style={{textAlign:'left',color:" #FF671F"}}>Y-Axis:Population</p>

                        </div>
                       
                        <ResponsiveContainer width="100%" height={400} >
                            <BarChart data={data}>

                                <Line type="monotone" dataKey="value" stroke="black" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis width={100} />
                                <Tooltip  barsize={6}/>
                                <Bar dataKey="value" fill="#8884d8"  barSize={7} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
