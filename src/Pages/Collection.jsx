import React, { useContext, useState ,useEffect} from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductsItem from '../components/ProductsItem'

const Collection = () => {

  const {products} = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)
  const [filterProdects,setFilterProducts] = useState([])

  useEffect(() => {
    setFilterProducts(products)
  }, []);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} onClick={() => setShowFilter(!showFilter)} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'Men'}/>Men 
                </p>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'Women'}/>Women
                </p>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'Kids'}/>Kids
                </p>
            </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'TopWear '}/>TopWear
                </p>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'BottomWear'}/>BottomWear 
                </p>
                <p className='flex gap-2 '>
                  <input className='w-3' type="checkbox" value={'WinterWear'}/>WinterWear
                </p>
            </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            <select className='border-gray-300 border-2 text-sm px-2 '>
              <option value="relavent">sort by: Relavent</option>
              <option value="low-high">sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>


          <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filterProdects.map((item,index)=>(
                  <ProductsItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
              }
          </div> 
      </div>
    </div>
  )
}
export default Collection;  