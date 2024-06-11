import { FaArrowRight } from "react-icons/fa6";

function Enam() {
    return ( 
        <div className="grid lg:grid-cols-2 relative h-screen w-full items-center justify-center gap-[150px]" > {/* Parent with relative positioning */}
         


        <div className="flex flex-col gap-5 px-14">
          <h1 className="text-fuchsia-800 font-semibold text-7xl"> 
            Lorem <br /> ipsum  dolor sit amet consectetur. 

            </h1>
            <p>            Lorem ipsum dolor sit amet consectetur. Etiam ullamcorper sed id pharetra felis lacus at. Malesuada in. Id maecenas neque diam suscipit
</p>

            <button className="bg-fuchsia-900 w-[200px] h-[52px] text-white font-semibold text-lg rounded-3xl mt-10 animate-pulse flex flex-row justify-center items-center gap-5" >
              Book Me
              <FaArrowRight color="white"/>

            </button>

        </div>
        <div>
        <div className="flex justify-center border-dashed border-[4px] border-fuchsia-800 py-2 rounded-3xl w-fit px-2">
        <img src={'/myimage.jpeg'} alt="Description of the image" className="w-[700px] h-[80vh]" />

        </div>
        </div>
      
     </div>
      
     ); 
}

export default Enam