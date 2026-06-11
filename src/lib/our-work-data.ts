export interface ServiceWork {
  id: string;
  title: string;
  service: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    suffix?: string;
  }[];
  media: {
    type: "image" | "video" | "reel";
    url: string;
    thumbnail?: string;
    alt: string;
    caption?: string;
  }[];
  kpis: {
    label: string;
    value: number;
    suffix: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: number;
  }[];
  instagram?: {
    handle: string;
    posts: {
      id: string;
      url: string;
      thumbnail: string;
      caption?: string;
      likes: number;
      comments: number;
    }[];
  };
}

export const ourWorkData: ServiceWork[] = [
  {
    id: "social-media-marketing",
    title: "Hotel Luxuria Social Media Transformation",
    service: "Social Media Marketing",
    description:
      "Complete social media overhaul for a luxury hotel chain, resulting in 340% increase in engagement and 180% increase in direct bookings through social channels.",
    metrics: [
      { label: "Engagement Increase", value: "340%", suffix: "" },
      { label: "Direct Bookings", value: "180%", suffix: "" },
      { label: "Follower Growth", value: "85K+", suffix: "" },
      { label: "Content Reach", value: "12M+", suffix: "" },
    ],
    media: [
      {
        type: "image",
        url: "/assets/work-1.jpg",
        alt: "Hotel Luxuria social media campaign",
        caption: "Instagram carousel post showcasing hotel amenities",
      },
      {
        type: "video",
        url: "/assets/work-1-video.mp4",
        thumbnail: "/assets/work-1-video-thumb.jpg",
        alt: "Hotel Luxuria property tour video",
        caption: "30-second property tour video that drove booking inquiries",
      },
    ],
    kpis: [
      { label: "Engagement Rate", value: 8.7, suffix: "%", trend: "up", trendValue: 340 },
      { label: "Conversion Rate", value: 4.2, suffix: "%", trend: "up", trendValue: 180 },
      { label: "Follower Growth", value: 85, suffix: "K", trend: "up", trendValue: 220 },
    ],
    instagram: {
      handle: "@hotelluxuria",
      posts: [
        {
          id: "ig1",
          url: "https://instagram.com/p/abc123",
          thumbnail: "/assets/ig-post-1.jpg",
          caption: "Luxury suite reveal",
          likes: 12400,
          comments: 380,
        },
        {
          id: "ig2",
          url: "https://instagram.com/p/def456",
          thumbnail: "/assets/ig-post-2.jpg",
          caption: "Behind the scenes: spa day",
          likes: 9800,
          comments: 220,
        },
      ],
    },
  },
  {
    id: "performance-marketing",
    title: "Fashion Brand ROAS Optimization",
    service: "Performance Marketing",
    description:
      "Data-driven performance marketing campaign for a DTC fashion brand that achieved 8.2x ROAS while reducing CAC by 45%.",
    metrics: [
      { label: "ROAS", value: "8.2", suffix: "x" },
      { label: "CAC Reduction", value: "45%", suffix: "" },
      { label: "Revenue Increase", value: "220%", suffix: "" },
      { label: "Ad Spend Efficiency", value: "92%", suffix: "" },
    ],
    media: [
      {
        type: "image",
        url: "/assets/work-2.jpg",
        alt: "Fashion brand performance marketing dashboard",
        caption: "Real-time ROAS and conversion tracking dashboard",
      },
      {
        type: "image",
        url: "/assets/work-2-graph.jpg",
        alt: "Performance marketing performance over time",
        caption: "6-month performance trend showing consistent growth",
      },
    ],
    kpis: [
      { label: "ROAS", value: 8.2, suffix: "x", trend: "up", trendValue: 820 },
      { label: "CAC", value: 28, suffix: "$", trend: "down", trendValue: 45 },
      { label: "Conversion Rate", value: 3.8, suffix: "%", trend: "up", trendValue: 140 },
    ],
  },
  {
    id: "photography-videography",
    title: "Resort Brand Film & Photography Series",
    service: "Photography & Videography",
    description:
      "Cinematic brand film and photography series for a tropical resort that increased online engagement by 280% and became their most shared content asset.",
    metrics: [
      { label: "Engagement Increase", value: "280%", suffix: "" },
      { label: "Video Completion Rate", value: "78%", suffix: "" },
      { label: "Shares", value: "12K+", suffix: "" },
      { label: "Booking Inquiry Increase", value: "160%", suffix: "" },
    ],
    media: [
      {
        type: "video",
        url: "/assets/work-3-video.mp4",
        thumbnail: "/assets/work-3-video-thumb.jpg",
        alt: "Resort brand film trailer",
        caption: "60-second brand film showcasing resort experience",
      },
      {
        type: "image",
        url: "/assets/work-3-photo1.jpg",
        alt: "Resort beachfront photography",
        caption: "Golden hour beachfront shot",
      },
      {
        type: "image",
        url: "/assets/work-3-photo2.jpg",
        alt: "Resort villa interior photography",
        caption: "Luxury villa interior detail shot",
      },
    ],
    kpis: [
      { label: "Video Completion Rate", value: 78, suffix: "%", trend: "up", trendValue: 280 },
      { label: "Social Shares", value: 12, suffix: "K", trend: "up", trendValue: 320 },
      { label: "Engagement Rate", value: 12.4, suffix: "%", trend: "up", trendValue: 280 },
    ],
  },
  {
    id: "branding-identity",
    title: "Restaurant Group Brand Identity Refresh",
    service: "Branding & Identity",
    description:
      "Complete brand identity refresh for a 20-location restaurant group that increased brand recognition by 140% and improved customer perception scores.",
    metrics: [
      { label: "Brand Recognition", value: "140%", suffix: "" },
      { label: "Customer Perception", value: "89%", suffix: "" },
      { label: "Loyalty Program Signups", value: "65%", suffix: "" },
      { label: "Social Media Mentions", value: "220%", suffix: "" },
    ],
    media: [
      {
        type: "image",
        url: "/assets/work-4.jpg",
        alt: "Restaurant group brand identity application",
        caption: "Brand identity applied across menus, signage, and merchandise",
      },
      {
        type: "image",
        url: "/assets/work-4-logo.jpg",
        alt: "Restaurant group new logo",
        caption: "Primary and secondary logo variations",
      },
    ],
    kpis: [
      { label: "Brand Recognition", value: 140, suffix: "%", trend: "up", trendValue: 140 },
      { label: "Customer Perception", value: 89, suffix: "%", trend: "up", trendValue: 89 },
      { label: "Loyalty Signups", value: 65, suffix: "%", trend: "up", trendValue: 65 },
    ],
  },
];
