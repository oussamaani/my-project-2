import React from "react";
import { Link } from "react-scroll";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => {
  toast.info('Wow so easy!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}
const ReviewCard = (props) => {
  const { rating } = props;
  return (
    <div className=" text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-3/4" src={props.img} alt="img" />
      </div>
        {/* <h1 className="		p-5 text-2xl justify-center flex flex-row  text-slate-700			" >{props.text}</h1> */}
        
        <h3 className=" font-semibold p-5 text-2xl justify-center text-slate-700 my-2">
          {props.text} <span className=" text-brightGreen">{props.text1}</span>
        </h3>

        <div className="flex flex-row justify-center py-6 text-yellow-400">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} size={25} />
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <FaStar key={index} size={25} className="text-slate-400" />
          ))}
        </div>

       <Link to="contact" spy={true} smooth={true} duration={1000}>
        <button className="bg-brightGreen text-white py-2 px-4 rounded transition-all
         hover:bg-white hover:border border-brightGreen
           hover:text-brightGreen text-l" style={{ height: '40px', width: '120px' }}onClick={notify}>Vote</button>
           <ToastContainer />
          {/* <Button title="Contact Us" /> */}
        </Link>
      </div>
    </div>
  );
};


export default ReviewCard;
