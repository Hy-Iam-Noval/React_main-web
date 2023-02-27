export default function Home(){
   return (
      <>
         <div className="flex flex-col justify-center items-center py-4 bg-[#1a1a1a]">
            <img src={`${process.env.PUBLIC_URL}/static/Logo.png`} alt=""  className="h-[10vh]"/>
            <div className="text-[1.5rem] font-bold font-rubic py-3 text-center mt-2 text-white">
               <p>I'am <span>Noval Dwiyana</span></p>
               <p>A Backend Dev</p>
            </div>
         </div>
      </>
   )
}