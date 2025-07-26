import Image from "next/image";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import Services from "../Components/Home/Services/Services";
import GoogleReviews from "@/Components/GoogleReviews/GoogleReviews";
import Staff from "@/Components/staff/Staff";
export default function Home() {
 
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      {/* <div className="w-full p-1 md:p-4" style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03))"}}>
        <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg ">
      <video
        src="/cello.mp4"
        className="w-full aspect-[9/16] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/previewvid.png"
      />
    </div>
    </div> */}
      <ImageSlider />
      <Services/>
      {/* <Staff/> */}
    </div>
  );
}
