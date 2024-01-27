
import partnershipimg2 from "@/public/Ellipse 1992.png"
import partnershipimg3 from "@/public/Frame (3).png"
import partnershipimg from "@/public/image 578.png"
import Image from "next/image"
import Button from "../shared/buttons/button"

const Partnership = () => {
    return (
        <div className="partnership">
            <div className="partnership_img">
            <Image src={partnershipimg} alt="taskimg" className="pimage"/>
            <div className="Pimage_container">
            <Image src={partnershipimg2} alt="taskimg" className="pimage2"/>
            <Image src={partnershipimg3} alt="taskimg" className="pimage3"/>
            </div>
            </div>
            <div>
                <h1>Partnership of Schools</h1>
                <p>Count on our trusted partners to be there for you whenever you need reliable assistance and support.</p>
                <p>Count on our trusted partners to be there for you whenever you need reliable assistance and support.</p>
                <Button bt_text={"Explore Our Finance Partner"}/>
            </div>
            
        </div>
    )
}

export default Partnership