"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function PartnersSection() {
  return (
    <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={partners} direction="right" speed="slow" />
    </div>
  );
}

const partners = [
  {
    name: "Facebook Ads",
    logo: (
      <img
        src="https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg"
        alt="facebook ads"
      ></img>
    ),
  },
  {
    name: "Google Ads",
    logo: (
      <img
        src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-ar21.svg"
        alt="Google Ads"
        className="h-10 w-auto fill-white"
      />
    ),
  },
  {
    name: "Shopify",
    logo: (
      <img src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg"></img>
    ),
  },
  {
    name: "TikTok Ads",
    logo: (
      <img
        src="https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg"
        alt="tiktok"
        className="h-10 w-auto text-white"
      />
    ),
  },
  {
    name: "Meta",
    logo: (
      <img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"></img>
    ),
  },
];
