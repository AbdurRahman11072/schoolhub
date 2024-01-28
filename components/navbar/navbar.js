"use client"


import navbarlogo from "@/public/logo.png"
import navbaricon from "@/public/navbaricon.png"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"


const Navbar = () => {
    const navigate = useRouter();
    const showuser = useSelector((state) => state?.AuthReducer.user)
    console.log(showuser);
    const menu = [
        {
            item:"Feature",
            link:""
        },
        {
            item:"Solutions",
            link:""
        },
        {
            item:"AI-Powered",
            link:""
        },
        {
            item:"Resources",
            link:""
        },
        {
            item:"Company",
            link:""
        },
    ]

    const login = () =>{
        return navigate.push("/login")
    }
    const signup = () =>{
        return navigate.push("/signup")
    }
    return (
        <div className='navbar'>
            <Image src={navbarlogo} alt="taskimg" className='logo'/>
            <div className='navbar_list'>
                <ul>
                    {
                        menu?.map(data =>(
                            <li key={data.item}>{data.item} <Image src={navbaricon} alt="taskimg"/></li>
                        ))
                    }
                  
                </ul>
                
            </div>
            {
                !showuser?<div className="nav_btn">
                <div className="btn"><p onClick={login}>Login</p></div>
                <div className="btn1"><p onClick={signup}>Sign Up</p></div>

        </div>:
        <div className="user">
            <Image src={showuser.photo} alt="" width={50} height={50} className="userimg"/>
            <h4 >{showuser.username}</h4>
        </div>
            }
        </div>
    )
}

export default Navbar