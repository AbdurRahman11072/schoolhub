"use client"

import Title2 from "../shared/Titles/titel2"
import IntegrationCards from "./integrationcard"

const Integration = () => {
    const details = [
        {
            id:1,
            title:"AI Integration",
            description:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these features:`,
            description1:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these feature. The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these features:`,
            img:"https://i.ibb.co/dBpX03f/itimg1.png"
            
        }
        ,
        {
            id:2,
            title:"Payment Integration",
            description:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these feature. The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these features:`,
            description1:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities...`,
            img:"https://i.ibb.co/7KYmrrM/integratimg2.png"
        },
        {
            id:3,
            title:"Custom Integration",
            description:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these feature. The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these features:`,
            description1:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities...`,
            img:"https://i.ibb.co/w0b8Nnj/intregratimg3.png"
        }
    ]
    return (
        <div>
            <div className="it_title">
            <Title2 title={"Integration"}/>
            </div>
          <div>
          {
                details?.map(data =>(
                   <IntegrationCards data={data} key={data.id}/>
                ))
            }
          </div>
            
        </div>
    )
}

export default Integration