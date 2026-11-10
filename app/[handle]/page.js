import Link from "next/link";
import clientPromise from "@/lib/mongodb";

export default async function Profile({ params }) {
  
  const { handle } = await params;

  const client = await clientPromise
    const db= client.db("LinkUp")
    const collection = db.collection("Links")

    
    const items = await collection.findOne({handle: handle})


 
    if(!items){
      return <p>Item Not Found!</p>
    }

  return (

    // <div className="bg-purple-500 items-start justify-center flex min-h-screen " >
      
    //   <div className="pic flex flex-col items-center gap-4">
    //     <img className="border" src={items.pic} alt="" />
    //   </div>

    //   <h1>Welcome {items.handle}</h1>

    //   <div className="items">
    //     {items.links.map((item, index)=>(
    //       <Link key={index} href={item.link}>
    //         <div >
         
    //         {item.linktext}
    //       </div>
    //         </Link>
    //     ))}
    //   </div>
     
    // </div>

   <div className="min-h-screen bg-gray-500 flex flex-col items-center py-16 px-4">

  <div className="flex flex-col items-center gap-4">

    <img
      className="w-24 h-24 rounded-full object-cover border-2 border-purple-200"
      src={items.pic}
      alt="Profile"
    />

    <h1 className="text-xl font-semibold text-gray-800">
      {items.handle}
    </h1>

  </div>

  <div className="w-full max-w-sm flex flex-col gap-3 mt-8">

    {items.links.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        target="_blank"
        className="border border-purple-200 bg-white text-gray-800 text-center py-3 rounded-lg hover:bg-purple-50 transition"
      >
        {item.linktext}
      </Link>
    ))}

  </div>

</div>
  );
}
