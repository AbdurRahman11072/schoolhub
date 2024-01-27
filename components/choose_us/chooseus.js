
import icon1 from "@/public/Frame (4).png"
import icon2 from "@/public/Frame (5).png"
import icon3 from "@/public/Frame (6).png"
import Image from "next/image"
import Title1 from "../shared/Titles/title1"

const WhyChooseUs = () => {
    const details =[
        {
            title: "Easy to Use",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
            icons: icon1
        },
        {
            title: "Premium Support",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
            icons: icon2
        },
        {
            title: "Advanced Features",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
            icons: icon3
        }
    ]
    return (
        <div className="chooseus_box">
                <Title1 title={"Why Choose Schools Hub"} description={"Schools Hub offers a comprehensive set of features and benefits for educational institutions, particularly those managing multiple schools under their company."}/>
                <div className="chooseus">
                    {
                        details?.map(Data =>(
                            <div key={Data.title}>
                                <Image src={Data.icons} alt="taskimg" width={50} height={50}/>
                                <h1>{Data.title}</h1>
                                <p>{Data.description}</p>
                            </div>
                        ))
                    }
                </div>

        </div>
    )
}

export default WhyChooseUs