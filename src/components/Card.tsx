type Props = {
   name:string,
   img:string
}

export default function Card(props:Props){
   return (
      <div className="border">
         <img src={props.img} alt="" className="w-full h-[23vh] object-cover object-center" />
         <p className="px-2 py-3 font-medium">{props.name}</p>
      </div>
   )
}