import { BsCarFront, BsList, BsListTask, BsPencil, BsPersonFill } from "react-icons/bs"
import BackAndContinueControls from "./BackAndContinueControls";
function Summary() {
  return (
    <div className="">
      <div className="px-5 py-5 font-bold text-pink-800 text-[30px]">
        <h1>SUMMARY</h1>
      </div>
      <div className="flex m-10 flex-col md:flex-row">
        <img src="/traveller.jpg" alt="CarImage" className="md:h-[120%] md:w-[65%] w-full h-full px-3 rounded-[30px] p-5"></img>
        <div className="align-middle">
          <h1 className="px-[50px] text-[40px] font-bold">Audi 328</h1>
          {/* Vehicle Details */}
          <div className="border-[2px] rounded-md w-[400px] h-[205px] m-[10px] p-5">
            <div className="flex px-0 py-5 text-pink-800">
              <BsCarFront className="text-[30px]" />
              <h1 className="px-4 font-bold text-[22px]">Vehicle Details</h1>
            </div>
            <div className="px-8">
              <h1 className="font-light flex">Type: <div className="font-bold px-5">Toyota Vitz</div></h1>
              <h1 className="font-light flex">Type: <div className="font-bold px-5">Toyota Vitz</div></h1>
              <h1 className="font-light flex">Type: <div className="font-bold px-5">Toyota Vitz</div></h1>
            </div>

            <div className="flex font-bold px-[10px] justify-end">
              <BsPencil />

              <h1 className="px-3">Change</h1>
            </div>

          </div>

          {/* Pick Up Details */}
         
          <div className="border-[2px] rounded-md w-[400px] h-[205px] m-[10px] p-5">
            <div className="flex px-0 py-5 text-pink-800">
              <BsList className="text-[30px]" />
              <h1 className="px-4 font-bold text-[22px]">Pick Up Details</h1>
            </div>
            <div className="px-8">
              <h1 className="font-light flex">Pick Up Location: <div className="font-bold px-5">Accra</div></h1>
              <h1 className="font-light flex">Pick Up Location: <div className="font-bold px-5">Accra</div></h1>
              <h1 className="font-light flex">Pick Up Location: <div className="font-bold px-5">Accra</div></h1>
            </div>

            <div className="flex font-bold px-[7px] justify-end">
              <BsPencil />

              <h1 className="px-3">Change</h1>
            </div>

          </div>

        </div>
      </div>
      {/* Order Details */}
      <div className="border-[2px] rounded-md md:w-[900px] m-[50px] p-5">
        <div className="flex px-0 py-5 text-pink-800">
          <BsListTask className="text-[30px]" />
          <h1 className="px-4 font-bold text-[22px]">Order Details</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>
        </div>


        <div className="flex font-bold px-[10px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div>

      </div>

      <div className="border-[2px] rounded-md md:w-[900px] m-[50px] p-5">
        <div className="flex px-0 py-5 text-pink-800">
          <BsPersonFill className="text-[30px]" />
          <h1 className="px-4 font-bold text-[22px]">My Details</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
            <h1 className="font-light flex">Lorem: <div className="font-bold px-5">Lorem Ipsum</div></h1>
          </div>

        </div>
        <div className="flex font-bold px-[10px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div>


      </div>
      <div className="flex md:pl-[70px] md:flex-row flex-col py-0">
        <div className="bg-pink-100 font-bold bg-opacity-20 md:w-[350px] md:h-[350px] m-[50px] rounded-md">
          <h1 className="text-[250%] text-pink-700 justify-center md:py-[140px] px-[60px]">Your Cost is <p> GHS320.00</p></h1>
        </div>

        <div className="md:w-[350px] md:h-[350px] m-[50px] rounded-md">
          <button>
          <h1 className="text-[30px] justify-center md:pt-[150px] px-[60px] hover:text-pink-800"> Pay Now</h1>
          </button>
          
          <button className="">
          <h1 className="text-[30px] justify-center px-[60px] hover:text-pink-800"> Pay Later</h1>
          </button>
          
        </div>
      </div>
     <div className="px-4 py-4">
     <BackAndContinueControls/>
      </div> 
     
    </div>
  );
}

export default Summary;
