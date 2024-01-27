"use client"
import banner_icon1 from "@/public/check-circle 4 (3).png"
import Image from "next/image"
import Link from "next/link"
import Title2 from '../shared/Titles/titel2'
import Button from "../shared/buttons/button"

const GrowBuisness = () => {
    

    const growDetails = [
    
        {
            id:1,
            title:"Technical Test & Tasks",
            description:`The inclusion of "Technical Assessment" and "Technical Tests" features in Schools Hub provides students with valuable opportunities for skill development and assessment. Here are some key advantages and highlights of these features:`,
            skilldetail:[
                {
                    title:"Skill Development"
                },
                {
                    title:"Writing Skills"
                },
                {
                    title:"Concentration and Engagement"
                },
                {
                    title:"AI Assistance"
                }
            ],
            img:"https://i.ibb.co/BZmc4KZ/img3.png",
            direction:"growright"
        },
        {
            id:2,
            title:"Practical Assessment",
            description:`Schools Hub provides a comprehensive and technology-driven approach to assess students' understanding of specific topics. Here are some key points based on your description:`,
            skilldetail:[
                {
                    title:"Technical Test and Tasks"
                },
                {
                    title:"Recording and Teacher Conducted Assessments"
                },
                {
                    title:"Review by Teachers or Teacher Assistants"
                },
                {
                    title:"1:1 Interviews"
                
                },
                {
                    title:"AI-Powered Automated Mock Interviews"
                },
                {
                    title:"Continuous Progress Monitoring"
                }
            ],
            img:"https://i.ibb.co/Z6dJfDJ/img2.png",
            direction:"growleft"
        },
        {
            id:3,
            title:"Technical Test & Tasks",
            description:`Schools Hub places a significant emphasis on improving students' presentation skills, which is indeed a valuable skill for both students and employees in various contexts. Here are some key points about the importance and benefits of the Student Presentation or Show N Tell feature within Schools Hub:`,
            skilldetail:[
                {
                    title:"AI-Powered Assistance"
                },
                {
                    title:"Skill Development"
                },
                {
                    title:"Confidence Building"
                },
                {
                    title:"Continuous Improvement"
                }
            ],
            img:"https://i.ibb.co/8Kh1RXj/img4.png",
            direction:"growright"
        },
        {
            id:4,
            title:"Writing Summary",
            description:`The Schools Hub feature of writing summaries for each topic plays a crucial role in enhancing students' learning experiences and retention of knowledge. Here's a summary of its significance and benefits:`,
            skilldetail:[
                {
                    title:"AI-Powered Assistance"
                },
                {
                    title:"Skill Development"
                },
                {
                    title:"Confidence Building"
                },
                {
                    title:"Continuous Improvement"
                }
            ],
            img:"https://i.ibb.co/bd53PF3/img1.png",
            direction:"growleft"
        },
    ]

    return (
        <div>
    
            <Title2  title={"How We Will Help You to Grow Your Business"}/>
            <div className="grow_buisness">
                {
                   growDetails?.map(data =>(
                    <div className={data.direction} key={data.id}>
                        <div>
                        <h1>{data.title}</h1>
                    <div className="g_skill">
                    {
                    data?.skilldetail?.map(skilldata =>(
                            <p key={skilldata.title}><Image src={banner_icon1} width={20} height={20} alt="taskimg" className="ban_icon"/>{skilldata.title}</p>
                        ))
                    }
                    </div>
                    <Link href={`/${data.id}`}>

                    <Button bt_text={"Learn More"}/>
                    </Link>
                        </div>
                        <Image src={data.img} alt="this is" width={500} height={500} className="g_img"/>
                    </div>
                   ))
                }
            </div>
            
        </div>
    )
}

export default GrowBuisness