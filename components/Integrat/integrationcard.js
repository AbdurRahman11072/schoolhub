 import custombg from "@/public/cs-bg.png"
import custombg1 from "@/public/cs-bg1.png"
import Image from "next/image"
const IntegrationCards = (data) => {
   const Data = data.data
    return (
        <div className="integration" >
            {
                Data.title == "AI Integration"&&   
                <div className="ai">
                <div className="ai_integartion">
                     <h1>{Data.title}</h1>
                     <p>{Data.description}</p>
                     <p>{Data.description1}</p>
                     
                     <button> Learn More</button>
                 </div>
                 <Image src={Data.img} alt="textimg" width={550} height={350}/>
              </div>
            }
            {
                Data.title == "Payment Integration"&& 
                <div className="payment">
                <Image src={Data.img} alt="textimg" width={450} height={450}/>
                <div className="ai_integartion">
                     <h1>{Data.title}</h1>
                     <p>{Data.description}</p>
                     <p>{Data.description1}</p>
                     
                     <button> Learn More</button>
                 </div>
                 
              </div>
            }
            {
                Data.title == "Custom Integration"&& 
                <div className="custom">
                    <div className="cs-bg">
                        <Image src={custombg} height={500} alt="taskimg" className="img1"/>
                        <Image src={custombg1} height={150} alt="taskimg" className="img2"/>
                        <Image src={custombg1} height={90} alt="taskimg" className="img3"/>
                        <Image src={Data.img} alt="rahman" width={380} height={380} className="img4"/>
                        <div className="cus_text">
                     <h1>{Data.title}</h1>
                     <p>{Data.description}</p>
                     <p>{Data.description1}</p>
                     
                     <button> Learn More</button>
                 </div>
                    </div>
                </div>
            }
            
        </div>
        
      
            

      
    )
}

export default IntegrationCards