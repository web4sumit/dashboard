import React, { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Column } from 'react-table';
import TableHOC from '../components/TableHOC';
import { Link } from 'react-router-dom';

interface DataType {
  user: 'string';
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'User',
    accessor: 'user',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
   {
    Header: 'Discount',
    accessor: 'discount',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
 
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const arr:DataType[] = [
  {
    user: 'Steves',
    amount: 3000,
    discount: 40,
    quantity: 5,
    status: <span className='red'>Processing</span>,
    action: <Link to='/admin/transaction/dsqdqgf'>Manage</Link>
  },
  {
    user: 'Jordan',
    amount: 9000,
    discount: 720,
    quantity: 3,
    status: <span className='green'>Shipped</span>,
    action: <Link to='/admin/transaction/hgygfh'>Manage</Link>
  },
  {
    user: 'Martin',
    amount: 72000,
    discount: 520,
    quantity: 4,
    status: <span className='purple'>Delivered</span>,
    action: <Link to='/admin/transaction/jbbjhv'>Manage</Link>
  },
]

const Transaction = () => {
  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(
    TableHOC<DataType>(columns,data,'dashboard-product-box','Transactions',true,),
    []
  );
  return (
    <div className='admin-container'>
           <AdminSidebar/>
           <main>
           {Table()}
           </main>
        </div>
  )
}

export default Transaction