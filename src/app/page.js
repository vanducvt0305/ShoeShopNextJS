import Image from "next/image";
import HeaderHome from "./(pages)/component/HeaderHome";
import { getAllProducts } from "./action/productServices";
import Link from "next/link";

export const metadata = {
  title: "Shoe Shop | Home",
  description:
    "Welcome to Shoe Shop! The best place to buy high-quality shoes online.",
  keywords: ["shoes", "shoe shop", "online shopping", "footwear"],
  openGraph: {
    title: "Shoe Shop",
    description:
      "Browse our latest collection of shoes. Trendy, comfortable, and affordable!",
    url: "https://bc-77-nextjs.vercel.app/",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoe Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe Shop",
    description: "Find the perfect pair of shoes for any occasion.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  jsonLD: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoe Shop",
    url: "https://yourwebsite.com",
    description:
      "Welcome to Shoe Shop! The best place to buy high-quality shoes online.",
    image: "https://yourwebsite.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Shoe Street",
      addressLocality: "Shoe City",
      addressRegion: "SC",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-800-555-5555",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/shoeshop",
      "https://www.instagram.com/shoeshop",
      "https://twitter.com/shoeshop",
    ],
  },
};

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
      <h1 className="text-center text-red-500 text-4xl mb-5">Shoe shop</h1>
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
