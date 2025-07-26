'use client'
import React, { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [loaded,setloaded]=useState(false)
  useEffect(()=>{
    setloaded(true)
  },[])
  useEffect(() => {

    const hideElfsightBadge = () => {
      const badge = document.querySelector(
        'a[href*="elfsight.com/google-reviews-widget"]'
      );
      if (badge) {
        badge.style.display = "none";
      }
    };
    if(loaded){
      hideElfsightBadge();

    }
    // Try initially

    // Keep trying in case it loads late
    const interval = setInterval(hideElfsightBadge, 1000);

    // Stop after 10 seconds
    setTimeout(() => clearInterval(interval), 10000);
  }, [loaded]);

  return (
    <div className="py-6 md:py-12 px-2  md:px-[15%]">
        <h1 className="text-3xl font-bold mb-8 ">What our Customers Says About Us!</h1>
      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
      {loaded?<script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>:null}
      <div
        className="elfsight-app-e2ce0f3f-3b17-45fb-864a-d3267261c988"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
