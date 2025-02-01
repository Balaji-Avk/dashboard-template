'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, LineChart, Line } from 'recharts';
import ProductWiseRevenue from '../components/ProductWiseRevenue'
const data = [
    { month: 'Jan', activeUsers: 120000, activeSubscriptions: 300, revenue: 72000 }, 
    { month: 'Feb', activeUsers: 121200, activeSubscriptions: 320, revenue: 88000 }, 
    { month: 'Mar', activeUsers: 122500, activeSubscriptions: 310, revenue: 87000 }, 
    { month: 'Apr', activeUsers: 150800, activeSubscriptions: 330, revenue: 102000 },
    { month: 'May', activeUsers: 119600, activeSubscriptions: 320, revenue: 98000 }, 
    { month: 'Jun', activeUsers: 121800, activeSubscriptions: 340, revenue: 89000 }, 
    { month: 'Jul', activeUsers: 123000, activeSubscriptions: 350, revenue: 97000 }, 
    { month: 'Aug', activeUsers: 90400, activeSubscriptions: 345, revenue: 106000 }, 
    { month: 'Sep', activeUsers: 119800, activeSubscriptions: 360, revenue: 113000 }, 
    { month: 'Oct', activeUsers: 91500, activeSubscriptions: 355, revenue: 117000 }, 
    { month: 'Nov', activeUsers: 92800, activeSubscriptions: 370, revenue: 114000 }, 
    { month: 'Dec', activeUsers: 120343, activeSubscriptions: 365, revenue: 115129 },
];

export default class Analytics extends PureComponent{
    render(){

        return(
            <div className="w-screen px-2">
                <div className="h-12 text-3xl text-center py-2 ml-1 bg-white  w-full">Analyitcs</div>
                                
                <div className='text-xl font-medium py-4'>Key Metrics</div>
                <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                        <div className='flex bg-white p-3 rounded-md pl-8 w-full'>
                            <div className='pr-4'>
                                <div className='text-zinc-800 text-lg pb-2'>Total Revenue</div>
                                <div className='py-2'>$ 10,50,129</div>
                                <div >
                                    <span className='text-green-500'>+5.9% </span> since last week
                                </div>
                            </div>
                            <div>
                                <AreaChart width={200} height={100} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                            </linearGradient>
                                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </div>
                        </div>

                        <div className='flex bg-white p-4 rounded-md px-8 w-full'>
                            <div className='pr-4'>
                                <div className='text-zinc-800 text-lg pb-2'>Monthly Recurring Revenue (MRR)</div>
                                <div className='py-2'>$ 13,510</div>
                                <div >
                                    <span className='text-green-500'>+2.9% </span>
                                    <span>since last week</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex bg-white p-4 rounded-md px-8 w-full'>
                            <div className='pr-4'>
                                <div className='text-zinc-800 text-lg pb-2'>Total Users</div>
                                <div className='py-2'>1,51,20,343</div>
                                <div >
                                    <span className='text-green-500'>+15.9% </span>
                                    <span>since last week</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex bg-white p-4 rounded-md w-full'>
                            <div className='pr-4'>
                                <div className='text-zinc-800 text-lg pb-2'>Active Users</div>
                                <div className='py-2'>1,20,343</div>
                                <div >
                                    <span className='text-red-500'>-1.8% </span>
                                    <span>since last week</span>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='text-xl py-4 gap-2'>Overall</div>
                <div className='flex flex-col md:flex-row justify-evenly gap-4'>
                    <div className='bg-white w-full rounded-lg py-4 px-2'>
                        {/*Product wise revenue*/}
                        <ProductWiseRevenue />
                    </div>
                    <div className='flex flex-col gap-3'>
                        {/* active users , retention rate*/}
                        <div className='bg-white w-full -rounded-lg'>
                        <p className="text-center text-lg text-gray-700  py-2">Active Subscriptions</p>
                        <div  className="h-[200px] w-[350px] md:w-[650px]">
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                                data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                <YAxis />
                                <XAxis hide dataKey="month" />
                                <Tooltip />
                                <Line type="monotone" dataKey="activeSubscriptions" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        </div>
                        <div className='bg-white w-full -rounded-lg'>
                            <div className='text-center'>Active Users</div>
                            <div className="h-[200px] w-[350px] md:w-[650px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={730} height={175} data={data}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                        <YAxis />
                                        <XAxis hide dataKey="month"/>   
                                        <Tooltip />
                                        <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-2 px-8 py-4 bg-white rounded-md'>
                    <div className='text-xl'>Revenue by month</div>
                    <div className="h-[200px] w-[350px] md:w-[1600px] md:h-[290px]">
                        <ResponsiveContainer width="100%" height="100%">

                            <AreaChart width={1600} height={280} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month"/>   
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        )
    }
}