import React from 'react';
import {
    CiShop,
    CiHeart,
  CiUser,
  CiShoppingCart,
} from 'react-icons/ci';
import {motion} from "framer-motion";
import {Link} from "react-router-dom"
// import SearchBox from '../SearchBox/SearchBox';
import "./nav.css"
// import { useParams,useLocation } from 'react-router-dom';



const Nav = ({show}) => {
//   const params = useParams();
// console.log(params.page)

// const location = useLocation();
// console.log(location)

// class="{'home-page': $route.path === '/', 'other-page': $route.path !== '/'}"
  return (<>
    <motion.div initial={{ y: -100 }}
  
    animate={{ y: 0 }}
    style={{display:"flex",justifyContent:"center"}}
    transition={{
      duration: 0.5,
      delay: 0.5,
      ease: 'easeOut',
    }}>
      <ul className="ulStyle ">
        
        <li className='navLi2 navheading font-nunito'>
          {/* <CiShop className='text-3xl' /> */}
          <img src="/images/logo.jpg" className='logo' alt="" />
        </li>

        <Link to={"/"} className='navLi2 navheading font-nunito li1'>
        <li className='navLi2 navheading font-nunito'>
          {/* <CiShop className='text-3xl' /> */}
          <p className='text-base font-nunito'>Home</p>
        </li>
        </Link>
   
        <Link to={"/mangal"} className='navLi2 navheading font-nunito li1'>
        <li className='navLi2 navheading font-nunito'>
          {/* <CiShop className='text-3xl' /> */}
          <p className='text-base font-nunito'>Mangalyaan</p>
        </li>
        </Link>
        <Link to={"/chandrayaan3"} className='navLi2 navheading font-nunito li1'>
        <li className='navLi2 navheading font-nunito'>
          {/* <CiShop className='text-3xl' /> */}
          <p className='text-base font-nunito'>Chandrayaan-3</p>
        </li>
        </Link>
        <Link to={"/active"} className='navLi2 navheading font-nunito li1'>
        <li className='navLi2 navheading font-nunito'>
          {/* <CiShop className='text-3xl' /> */}
          <p className='text-base font-nunito'>Aditya L1</p>
        </li>
        </Link>
       
       
        {/* <li className='navLi2 navheading'> */}
         
          
        {/* </li> */}
      </ul>

{/* <SearchBox />  */}

      
    </motion.div>


    </>
  );
};

export default Nav;

// {position:"absolute",right:0,top:0,zIndex:1000}