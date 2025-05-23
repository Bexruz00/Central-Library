"use client"
import { AuthorIcon, PayIcon } from "@/assets/icons";
import Header from "@/modules/Header";
import getRequest from "@/service/getRequest";
import { useParams } from "next/navigation";

  const SingleBookPage = () => {
  const { id } = useParams();
  
  const book = getRequest(`/books/${id}`);
  

  return (
    <>
      <Header />
      <div className="flex md:flex-row flex-col items-center p-[50px] !h-full">
        <div className="single-box1">
          <div>
            <h1 className="lg:text-[32px] text-[30px] font-bold text-white !pb-[5px]"> {book?.book_name}</h1>
            <p className="lg:text-[20px] text-[28px] font-bold text-[#FFDD7E]">{book?.book_author}</p>
          </div>
          <div className="flex items-center justify-center !mt-[50px] !sm:mb-0 !mb-[50px]"><img src={book?.book_image} alt={book?.book_name} className="md:w-[300px] w-[200px] h-auto rounded-md" /></div>
        </div>
        <div className="single-box2 sm:overflow-y-auto overflow-hidden">
          <div className="flex flex-col gap-[35px]">
            <span className="flex items-center gap-[10px]"><AuthorIcon/><strong className="sm:text-[24px] text-[20px] font-bold md:text-black text-white author_about">About author</strong></span>
            <p className="lg:text-[20px] sm:text-[18px] text-[18px] font-normal max-w-[600px] !leading-[30px] md:text-black text-white author-info">{book?.book_infoauthor}</p>
          </div>
          <div className="flex flex-col gap-[35px] max-w-[600px] md:!mt-[70px] !mt-[0px]">
          <span className="flex items-center gap-[10px] lg:!mt-[37px] md:!mt-[20px] !mt-0"><PayIcon/><strong className="italic text-[24px] font-normal text-[#CA891D]">Uzs / {book?.book_price}</strong></span>
            <span className="flex md:flex-row flex-col gap-[10px] justify-between md:items-center items-start">
              <strong className="sm:text-[24px] text-[20px] font-bold">About This Book</strong>
              <button className="w-[200px] h-[33px] rounded-md border-[#CC9600] border-[1px]">Add to Cart</button>
            </span>
            <p className="sm:text-[20px] text-[18px] font-normal max-w-[600px] !leading-[30px]">{book?.book_description}</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default SingleBookPage