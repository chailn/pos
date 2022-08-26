import React,{useState} from 'react'
import Nav from "../Nav";
import useCollapse from 'react-collapsed';
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {sort} from "../../data" 


const Sort = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const [tab, setTab] = useState("");

    
  return (
    <div>
       <Nav />
       <div className='border'>
       <button
       className=' w-full text-left border pl-4 pr-4 pt-2 pb-2 text-base text-gray-700 flex justify-between'
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded )& setTab(""),

        })}
      >
        商品分類
        { (isExpanded ? <ExpandLess /> : <ExpandMore/>)}
      </button>
      <section className='pl-4 pr-4 pt-2 pb-2 ' {...getCollapseProps()}>
            <ul className='grid gap-4 grid-cols-3 text-center cursor-pointer'>
                 <li onClick={() => setTab(0)} className='p-2 bg-gray-200 text-sm rounded-md'>商品分類A</li>
                 <li onClick={() => setTab(1)} className='p-2 bg-gray-200 text-sm rounded-md'>商品分類B</li>
                 <li onClick={() => setTab(2)}  className='p-2 bg-gray-200 text-sm rounded-md'>商品分類C</li>
                 <li onClick={() => setTab(3)}  className='p-2 bg-gray-200 text-sm rounded-md'>商品分類D</li>
                 <li onClick={() => setTab(4)}  className='p-2 bg-gray-200 text-sm rounded-md'>商品分類E</li>
            </ul>
      </section>
      {tab === 0 && 
        <div {...getCollapseProps()}>
            {sort.list.map((page,index) => {
                const {title,content,value} = page;
                return(
                    <div key={index} className="border pl-4 flex flex-col">
                        <h1 className='text-gray-700 text-xl'>{title}</h1>
                        <p className='text-gray-500 text-base'>{content}</p>
                        <p className='text-gray-500 text-base'>{value}</p>
                    </div>

                )
            })}
        </div>
      }
      {tab === 1 && 
        <div {...getCollapseProps()}>
            {sort.list2.map((page,index) => {
                const {title,content,value} = page;
                return(
                    <div key={index} className="border pl-4 flex flex-col">
                        <h1 className='text-gray-700 text-xl'>{title}</h1>
                        <p className='text-gray-500 text-base'>{content}</p>
                        <p className='text-gray-500 text-base'>{value}</p>
                    </div>

                )
            })}
        </div>
      }
      {tab === 2 && 
        <div {...getCollapseProps()}>
            {sort.list3.map((page,index) => {
                const {title,content,value} = page;
                return(
                    <div key={index} className="border pl-4 flex flex-col">
                        <h1 className='text-gray-700 text-xl'>{title}</h1>
                        <p className='text-gray-500 text-base'>{content}</p>
                        <p className='text-gray-500 text-base'>{value}</p>
                    </div>

                )
            })}
        </div>
      }
      {tab === 3 && 
        <div {...getCollapseProps()}>
            {sort.list4.map((page,index) => {
                const {title,content,value} = page;
                return(
                    <div key={index} className="border pl-4 flex flex-col">
                        <h1 className='text-gray-700 text-xl'>{title}</h1>
                        <p className='text-gray-500 text-base'>{content}</p>
                        <p className='text-gray-500 text-base'>{value}</p>
                    </div>

                )
            })}
        </div>
      }
      {tab === 4 && 
        <div {...getCollapseProps()}>
            {sort.list5.map((page,index) => {
                const {title,content,value} = page;
                return(
                    <div key={index} className="border pl-4 flex flex-col">
                        <h1 className='text-gray-700 text-xl'>{title}</h1>
                        <p className='text-gray-500 text-base'>{content}</p>
                        <p className='text-gray-500 text-base'>{value}</p>
                    </div>

                )
            })}
        </div>
      }
      </div>
    </div>
  )
}

export default Sort