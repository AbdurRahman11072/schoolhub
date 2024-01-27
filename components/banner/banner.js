import bg_img2 from "@/public/Vector (7).png"
import bg_img3 from "@/public/Vector (8).png"
import bg_img1 from "@/public/banner_vector1.png"
import bg_img4 from "@/public/bannerimg2.png"
import bg_img5 from "@/public/bannerimg3.png"
import banner_icon1 from "@/public/check-circle 4 (2).png"
import Image from "next/image"
import Navbar from "../navbar/navbar"
const Banner = () => {
    return (
        <div className='banner'>
            <Navbar/>
            <div className='bg_img'>
                <Image src={bg_img1} alt="taskimg" className="bg_img1"/>
                <Image src={bg_img2} alt="taskimg" className="bg_img2"/>
                <Image src={bg_img3} alt="taskimg" className="bg_img3"/>
                
            </div>

            <div className="banner_content">
                

                <div className="banner_text">
                    <h1>Schools Hub is AI-Powered, Automated Solutions For Schools and Students. Learn to grow and Earn!</h1>
                    <div className="banner_text_icon">
                        <div className="banner_icon">
                            <Image src={banner_icon1}  alt="taskimg" className="ban_icon"/>
                        <p>Provide robust features to schools and students.</p>
                        </div>
                        <div className="banner_icon">
                            <Image src={banner_icon1}  alt="taskimg" className="ban_icon"/>
                        <p>Focuses on school systems to automate their process</p>
                        </div>
                        <div className="banner_icon">
                            <Image src={banner_icon1}  alt="taskimg" className="ban_icon"/>
                        <p>Prioritize and focus on students to learn, engage, and give mobility experience</p>
                        </div>
                        
                    </div>
                    <div className="ban_btn">
                        <button className="btn1">Book a Demo</button>
                        <button className="btn1">Let’s Get started</button>
                    </div>

                </div>
                <div className="bg_image">
            <Image src={bg_img4} alt="taskimg" className="bg_img4"/>
            <Image src={bg_img5} alt="taskimg" className="bg_img5"/>
                </div>
            </div>
        </div>
    )
}

export default Banner