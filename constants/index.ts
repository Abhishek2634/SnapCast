export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/screencastapp",
  CDN_URL: "https://screencastapp.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-1c1e8fe4-1b1.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id:"1",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (1).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"2",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (2).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"private",
    duration: 399,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"3",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (3).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"4",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (4).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"5",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (5).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"6",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (6).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"7",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (7).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
  {
    id:"8",
    title:"My first video",
    thumbnail:"/assets/samples/thumbnail (8).png",
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:10,
    createdAt:new Date("2025-05-01"),
  },
]