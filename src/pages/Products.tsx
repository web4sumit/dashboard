import { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import TableHOC from '../components/TableHOC'
import { Column } from 'react-table';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';




interface DataType {
photo:'ReactElement';
name:'string';
price:number;
stock:number;
action:ReactElement;
}

const columns:Column<DataType>[]=[
  {
  Header:'Photo',
  accessor:'photo',
},
{
  Header:'Name',
  accessor:'name',
},
{
  Header:'Price',
  accessor:'price',
},
{
  Header:'Stock',
  accessor:'stock',
},
{
  Header:'Action',
  accessor:'action',
},

];
const img = 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387672/33/sv01/fnd/IND/fmt/png/Rider-Future-Vintage-Unisex-Sneakers'
const img2 = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-640'
const arr:DataType[] = [
  {
    photo:<img src={img} alt='Shoes' /> ,
    name:'Puma Shoes Air Jordan Cook Nigga 2023',
    price:690,
    stock:3,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img2} alt='Laptop' /> ,
    name:'Macbook',
    price:104000,
    stock:8,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img} alt='Shoes' /> ,
    name:'Puma Shoes Air Jordan Cook Nigga 2023',
    price:690,
    stock:3,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img2} alt='Laptop' /> ,
    name:'Macbook',
    price:104000,
    stock:8,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img} alt='Shoes' /> ,
    name:'Puma Shoes Air Jordan Cook Nigga 2023',
    price:690,
    stock:3,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img2} alt='Laptop' /> ,
    name:'Macbook',
    price:104000,
    stock:8,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img} alt='Shoes' /> ,
    name:'Puma Shoes Air Jordan Cook Nigga 2023',
    price:690,
    stock:3,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
  {
    photo:<img src={img2} alt='Laptop' /> ,
    name:'Macbook',
    price:104000,
    stock:8,
    action:<Link to='/admin/product/pumashoes'>Manage</Link>
  },
]



const products = () => {

  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(
    TableHOC<DataType>(columns,data,'dashboard-product-box','Products',true,),
    []
  );
  return (
    <div className='admin-container'>
    <AdminSidebar/>
    <main>
     {Table()}
    </main>
    <Link to='/admin/product/new' className='create-product-btn'><FaPlus/></Link>
 </div>
  )
}

export default products