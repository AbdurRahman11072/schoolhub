import aboutusimage from "@/public/aboutus1.png"
import rating from "@/public/aboutusicon.png"
import Image from 'next/image'
import Title1 from '../shared/Titles/title1'

const AboutUs = () => {
    return (
        <div className="aboutus">
            <Title1 title={"What Our Clients Say About Us"} description={"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers"}/>

            <div className="content">
              <div>
              <div className="content_img">
                    <Image src={aboutusimage} alt="taskimg" className="image"/>
                </div>
                <div className="content_details">
                   <div className="content_name">
                   <div >
                    <h1>Megha Moni <span>/ Student</span></h1>
                    <div className="rating">
                        <Image src={rating} alt="taskimg" width={26}/>
                        <Image src={rating} alt="taskimg" width={26}/>
                        <Image src={rating} alt="taskimg" width={26}/>
                        <Image src={rating} alt="taskimg" width={26}/>
                        <Image src={rating} alt="taskimg" width={26}/>
                    </div>
                    </div>
                    <h1 className="date">31-01-2024, 10:30 AM</h1>
                   </div>
                    <p>
                    Shiblu Ahmad is a great teacher and I have taken some other courses of hers. This one seems to be of the same great quality. If you want a simple code-along, this is not for you. Shiblu will Challenge you to actually use what he teaches you many times along the way. You WILL know how to program Python when you finish this course!
                    </p>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default AboutUs