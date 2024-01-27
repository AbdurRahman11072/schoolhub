import Title1 from '../shared/Titles/title1'
const Specialfeatures = () => {

    const details =[
        {
            title:"Documentations",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        },
        {
            title:"Schedule Calendar",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        },
        {
            title:"Chat and Email Communication",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        },
        {
            title:"Complement Others",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        },
        {
            title:"Log Progress",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        },
        {
            title:"Automated Mock Interviews",
            description:"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers",
        }
    ]

    return (
        <div className="specialfeatures_box">
             <Title1 title={"Special features"} description={"The incorporation of AI-powered templates in Schools Hub is a valuable feature that can greatly benefit students looking to transition to new roles or careers"}/>
             <div className="featurs_post">
               {
                details?.map(Data =>(
                    <div key={Data.title}>
                        <h1>{Data.title}</h1>
                    {
                        Data.description?.length <"100" 
                        ?<p>{Data.description?.length}</p>
                        :<p>{Data.description?.slice(0,170)}...</p>
                    }
                        <button>Learn More</button>
                    </div>
                ))
               }
             </div>
            
        </div>
    )
}

export default Specialfeatures