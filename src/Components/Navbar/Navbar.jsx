"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, Phone, ArrowLeft,CircleX,House,History, ShieldUser, BookKey, BookOpenCheck, LogOut, LogIn    } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuthBannerStore, useUserStore } from "@/store/store";
import { services } from "@/assets/data";

export default function Navbar() {
  const [activePanel, setActivePanel] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  // const [showServiceList, setShowServiceList] = useState(true);
  // const user=useUserStore((store)=>store.user)
  // const resetUser=useUserStore((store)=>store.resetUser)
  // const setAuthBanner=useAuthBannerStore((store)=>store.setAuthBanner)
  // const [query, setQuery] = useState("");

  // const filteredServices = query
  // ? services
  //     .flatMap((service) =>
  //       service.subcategories.map((sub) => ({
  //         ...sub,
  //         serviceName: service.name,
  //       }))
  //     )
  //     .filter((sub) =>
  //       sub.name.toLowerCase().includes(query.toLowerCase())
  //     )
  // : [];

  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname !== "/") {
      router.back();
    }
    setActivePanel(null);
  };

  return (
    <>
    <nav className="w-full bg-white shadow-md fixed  top-0 left-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo or Back Button */}
          <div className="flex items-center space-x-2">
            {activePanel ? (
              <button
                onClick={handleBack}
                className="btn btn-icons mr-2"
              >
                <ArrowLeft size={24} />
              </button>
            ) : (
              <Link href='/' className="flex justify-center items-center w-full"><Image src="/logo.png" width={200} height={100}  priority alt="logo" /></Link>
            )}
          </div>

          {/* Dynamic Content */}
          <div className="flex justify-end items-center">
            <AnimatePresence mode="wait">
              {!activePanel && (
                <motion.div
                  key="icons"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex "
                >
                  <a href="tel:923008933591" className="btn btn-icons ">
                    <Phone size={24} />
                  </a>
                  {/* <button
                    onClick={() => setActivePanel("search")}
                    className="btn btn-icons"
                  >
                    <Search size={24} />
                  </button> */}
                  {/* <button
                    onClick={() => setActivePanel("cart")}
                    className="btn btn-icons"
                  >
                    <ShoppingCart size={24} />
                  </button> */}
                  <button
                    onClick={() => setShowSidebar(true)}
                    className="btn btn-icons"
                  >
                    <Menu size={24} />
                  </button>
                </motion.div>
              )}

              {/* {activePanel === "search" && (
                <motion.div
                  key="search"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value);if(query){setShowServiceList(true)}}}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-[90%] lg:max-w-[70%] focus:outline-none"
                  />
                     {showServiceList && <div onClick={()=>setShowServiceList(!showServiceList)} className="ml-auto"><CircleX /></div>}

                </motion.div>
              )} */}

              {/* {activePanel === "cart" && (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-end text-lg font-semibold text-gray-700"
                >
                  Cart
                </motion.div>
              )} */}

                {showSidebar && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6"
                  >
                    <button
                      onClick={() => setShowSidebar(false)}
                      className="mb-4 text-gray-600 hover:text-black"
                    >
                     <CircleX/>
                    </button>

                    <div className="space-y-4">
                    <Link href='/' className="flex justify-center items-center w-full"><Image src="/logo.png" width={120} height={50} alt="logo" /></Link>
                    {/* <div className="flex flex-col justify-center w-full items-center shadow-lg bg-primary-color/40">
                      <p>{user?.name}</p>
                      <p>{user?.phone}</p>
                    </div> */}
                      <Link href='/'  onClick={() => setShowSidebar(false)}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black"
                      >
                        <House size={24}/>
                       <span className="text-[18px]">Home</span>
                      </Link>
                      {/* {user?
                      <Link href='/history'  onClick={() => setShowSidebar(false)}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black"
                      >
                        <History  size={24}/>
                       <span className="text-[18px]">Booking History</span>
                      </Link>:null} */}
                      {/* {user?
                      <Link href='/profile'  onClick={() => setShowSidebar(false)}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black"
                      >
                        <ShieldUser  size={24}/>
                       <span className="text-[18px]">Profile</span>
                      </Link>:null} */}
                      <Link href='/privacy'  onClick={() => setShowSidebar(false)}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black"
                      >
                        <  BookKey  size={24}/>
                       <span className="text-[18px]">Privacy</span>
                      </Link>
                      <Link href='/terms'  onClick={() => setShowSidebar(false)}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black"
                      >
                        <  BookOpenCheck  size={24}/>
                       <span className="text-[18px]">Terms & Conditions</span>
                      </Link>
                      {/* {user?
                      <button role='button' onClick={()=>{resetUser();setShowSidebar(false)}}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black w-full"
                      >
                        <LogOut  size={24}/>
                       <span className="text-[18px]">Log Out</span>
                      </button>:null} */}
                      {/* {user?null:
                      <button role='button' onClick={()=>{setAuthBanner({show:true, signIn:true}),setShowSidebar(false)}}
                        className="flex gap-2 shadow-lg bg-primary-color/40 p-2 text-black w-full"
                      >
                        <LogIn  size={24}/>
                       <span className="text-[18px]">Log In</span>
                      </button>} */}
                    </div>
                  </motion.div>
                )}

              {activePanel === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-end text-lg font-semibold text-gray-700"
                >
                  Contact Us
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
{/*     
    {(activePanel === "search" && showServiceList)  && (

       
        <motion.div
          key="search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-[80px] w-full max-h-[80vh]   mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden overflow-y-scroll z-100"
        >
          <div className=" max-w-[900px] w-[100%] mx-auto lg:w-[80%] bg-white shadow-md p-4 z-[-1]">
          {filteredServices.length > 0 ? (
              <ul className="space-y-2">
                {filteredServices.map((item,i) => (
                <div
                key={`${item.name}${i}`}
                className="flex items-center justify-between  px-2 py-1 rounded-lg shadow"
                
              >
                <div>
                  <p className="">{item.name}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-1 gap-2">
                    <span>⏱️ {item.duration} </span>
                    {item.off && <span className="bg-primary-color px-2 py-0 text-white rounded-2xl"> - {item.off} </span>}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-lg font-bold text-black">
                    {item.org_price && (
                      <span className="line-through text-gray-400 mr-1">
                        {item.org_price}
                      </span>
                    )}
                    {item.dis_price}
                  </div>
  
                  <Link href={item.link} onClick={()=>setActivePanel(null)} className="mt-2 border border-primary-color/50 text-primary-color/50 px-3 py-1 rounded-full text-sm hover:bg-primary-color/30">
                  Book
                  </Link>
                </div>
              </div>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No services found.</p>
            )}
          </div>

        </motion.div>
    )} */}
    </>
  );
}
