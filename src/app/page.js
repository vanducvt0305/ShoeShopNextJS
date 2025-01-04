import Image from "next/image";
import HeaderHome from "./(pages)/component/HeaderHome";
import { getAllProducts } from "./action/productServices";
import Link from "next/link";

export default async function Home() {
    const data = await getAllProducts("");
    console.log("data: ", data);

    // hình default sẽ hiển thị khi image từ api bị lỗi
    const placeholderImage = "https://i.pravatar.cc?u=0";

    const isValidImageUrl = (url) => {
        return (
            url.startsWith("https://") &&
            (url.endsWith(".png") || url.endsWith(".jpg"))
        );
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl mb-5">
                Shoe shop
            </h1>
            {/* làm thêm show list product */}

            <div className="grid grid-cols-3 gap-3">
                {data.map((item) => {
                    const imageUrl = item.image.trimEnd(); // xóa khoảng trắng của url

                    /* kiểm tra url của image có hợp lệ không */
                    {
                        /* const isValidURL =
                        imageUrl.startsWith("https://") &&
                        (imageUrl.endsWith(".png") ||
                            imageUrl.endsWith(".jpg")); */
                    }
                    const isValidURL = isValidImageUrl(imageUrl);

                    return (
                        <div key={item.id} className="border border-gray-500">
                            <Image
                                src={isValidURL ? imageUrl : placeholderImage}
                                width={300}
                                height={300}
                                crossOrigin="anonymous"
                                alt={item.name}
                                // onError={}
                            />

                            <p>{item.name}</p>
                            <Link
                                className="bg-green-500 p-2 block"
                                href={`/detail/${item.id}`}
                            >
                                Detail
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// const Home = async () => {

// }
// export default Home;
