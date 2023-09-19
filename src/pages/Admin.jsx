import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { mounticon, userimg } from "../assets";
import { admin } from "../constants";

// var isLoggedin = "false";
// let adminPassword = 12345678;
// let adminUsername = "admin@himrakshak";

const Admin = () =>{
    return(
        <>
        <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
     "bg-blue-700" 
      }`}
    >
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={mounticon} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Admin &nbsp;
            <span className='sm:block hidden'> | HimRakshak</span>
          </p>
        </Link>
    </div>
    </nav>
    <div className="my-20 flex justify-evenly px-5 py-5">
     <form className="form bg-slate-200 rounded-[20px] py-5 px-2 min-h-[250px] max-w-3xl flex justify-evenly items-center flex-col">
    <img src={userimg} alt="userlogo"  className="rounded-lg h-16 w-16"/>
      <input type="text" placeholder="Username" className="rounded-lg py-1 px-3"/>
      <input type="password" placeholder="Password" className="rounded-lg py-1 px-3"/>
      <button type="submit" className="bg-blue-700 py-2 px-2 rounded-lg text-white text-[15px] font-bold text-center">Login</button>
    </form>
    </div>
    </>
    );
}
export default Admin;