import logo from "../static/Logo.png"
import Card from "./Card"

export default function Work(){
   return (
      <div className="p-4">
         <p className="mb-3 text-lg font-light"><u>Work</u></p>
         <div className="grid grid-flow-rows grid-cols-2 grid-c gap-x-4">
            <Card img={`${process.env.PUBLIC_URL}/static/Logo.png`} name="Classroom Rip Off"/>
            <Card img={`${process.env.PUBLIC_URL}/static/Logo.png`} name="Snake game"/>
         </div>
      </div>
   )
}