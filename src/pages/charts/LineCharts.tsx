import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { LineChart } from '../../components/Charts'


const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const LineCharts = () => {
  return (
    <div className='admin-container'>
           <AdminSidebar/>
           <main className='chart-container'>
           <h1>Line Charts</h1>
           <section>
            <LineChart data={[200,444,444,556,778,455,990,1444,256,447,1000,1200,]} label='Users' labels={months} borderColor='rgb(53,162,255)' backgroundColor='rgba(53,162,255,0.5)' />
           <h2>Active Users</h2>
           </section>
           <section>
            <LineChart data={[40,60,244,100,143,120,41,47,50,56,32,45]} labels={months} borderColor={'hsl(269,80%,40%)'} backgroundColor={'hsla(269,80%,40%,0.4)'} />
           <h2>Total Products (SKU)</h2>
           </section>
           <section>
            <LineChart data={[24000,14400,24100,34300,9000,20000,25600,44700,99000,144400,100000,120000,]} label='Revenue' labels={months} borderColor={'hsl(129,80%,40%)'} backgroundColor={'hsl(129,80%,40%,0.4)'} />
           <h2>Total Revenue</h2>
           </section>
           <section>
            <LineChart data={[9000,12000,2100,34300,9000,8000,25000,44700,82000,14400,10000,12000,]} label='Discount' labels={months} borderColor={'hsl(29,80%,40%)'} backgroundColor={'hsl(29,80%,40%,0.4)'} />
           <h2>Discount Alloted</h2>
           </section>
           </main>
           </div>
  )
}

export default LineCharts;