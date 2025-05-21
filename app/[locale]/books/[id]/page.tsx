import { AuthorIcon, PayIcon } from "@/assets/icons";
import { instance } from "@/hooks/instance";
import Header from "@/modules/Header";

interface PageProps {
  params: {
    id: string;
    locale: string; // locale qo‘shildi chunki [locale] ham mavjud
  };
}

export default async function SingleBookPage({ params }: PageProps) {
  const { id } = params;

  try {
    const res = await instance().get(`/books/${id}`);
    const book = res.data;

    return (
      <>
        <Header />
        <div className="flex md:flex-row flex-col items-center p-[50px] !h-full">
          <div className="single-box1">
            <div>
              <h1 className="lg:text-[32px] text-[30px] font-bold text-white !pb-[5px]">
                {book.book_name}
              </h1>
              <p className="lg:text-[20px] text-[28px] font-bold text-[#FFDD7E]">
                {book.book_author}
              </p>
            </div>
            <div className="flex items-center justify-center !mt-[50px] !sm:mb-0 !mb-[50px]">
              <img
                src={book.book_image}
                alt={book.book_name}
                className="md:w-[300px] w-[200px] h-auto rounded"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-white text-[18px]">{book.book_description}</p>
              <div className="text-white text-[16px] flex items-start gap-2">
                <AuthorIcon />
                <p>{book.book_infoauthor}</p>
              </div>
              <div className="text-white text-[16px] flex items-center gap-2">
                <PayIcon />
                <span>{book.book_price} so'm</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-500 p-10">
        Kitob topilmadi yoki yuklanishda xatolik yuz berdi.
      </div>
    );
  }
}
