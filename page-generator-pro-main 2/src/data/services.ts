export type Service = {
  slug: string;
  platform: string;
  metric: string;
  metricEn: string;
  title: string;
  shortLabel: string;
  description: string;
  heroDescription: string;
  unitLabel: string;
  startPrice: string;
  deliveryTime: string;
  faqs: { q: string; a: string }[];
};

const baseFaqs = (platform: string, metricEn: string, unitLabel: string): { q: string; a: string }[] => [
  {
    q: `Is it safe to buy ${metricEn} on ${platform}?`,
    a: `Yes. We use methods that comply with ${platform}'s terms of service and we never ask for your password. Your account stays 100% secure.`,
  },
  {
    q: `How long does delivery take?`,
    a: `Delivery starts within minutes after your order is confirmed, at a natural pace to keep your account safe.`,
  },
  {
    q: `What payment methods do you accept?`,
    a: `We accept SEPA bank transfers and USDC crypto payments. All payments are fully secured.`,
  },
  {
    q: `Are the ${unitLabel} permanent?`,
    a: `Our ${unitLabel} are high quality and stable. We offer a refill guarantee in case of any abnormal drop.`,
  },
  {
    q: `Do you need my password?`,
    a: `Never. We only need the public link of your ${platform} profile or post.`,
  },
  {
    q: `Can I order multiple times?`,
    a: `Yes, you can top up your balance and place as many orders as you want across our entire catalog.`,
  },
];

const def = (
  slug: string,
  platform: string,
  metric: string,
  metricEn: string,
  unitLabel: string,
  startPrice: string,
): Service => ({
  slug,
  platform,
  metric,
  metricEn,
  unitLabel,
  startPrice,
  deliveryTime: "Within minutes",
  shortLabel: `${platform} ${metricEn.charAt(0).toUpperCase()}${metricEn.slice(1)}`,
  title: `Buy ${platform} ${metricEn}`,
  description: `Boost your ${platform} with high-quality ${unitLabel}, delivered fast and securely.`,
  heroDescription: `Boost your ${platform} audience instantly. Backed by recognized expertise since 2011, we help your ${unitLabel} grow without any hassle. Whether you're an independent creator or an influencer, our growth solutions deliver fast, visible results. Place your order in 30 seconds and focus on your passion — we'll handle your visibility.`,
  faqs: baseFaqs(platform, metricEn, unitLabel),
});

export const services: Service[] = [
  def("buy-instagram-followers", "Instagram", "followers", "followers", "followers", "$1.99"),
  def("buy-instagram-likes", "Instagram", "likes", "likes", "likes", "$0.99"),
  def("buy-instagram-views", "Instagram", "views", "views", "views", "$0.99"),
  def("buy-tiktok-followers", "TikTok", "followers", "followers", "followers", "$1.99"),
  def("buy-tiktok-likes", "TikTok", "likes", "likes", "likes", "$0.99"),
  def("buy-tiktok-views", "TikTok", "views", "views", "views", "$0.49"),
  def("buy-facebook-followers", "Facebook", "followers", "followers", "followers", "$2.49"),
  def("buy-facebook-likes", "Facebook", "likes", "likes", "likes", "$1.49"),
  def("buy-twitter-followers", "Twitter", "followers", "followers", "followers", "$2.99"),
  def("buy-x-followers", "X (Twitter)", "followers", "followers", "followers", "$2.99"),
  def("buy-youtube-subscribers", "YouTube", "subscribers", "subscribers", "subscribers", "$4.99"),
  def("buy-youtube-views", "YouTube", "views", "views", "views", "$1.99"),
  def("buy-youtube-likes", "YouTube", "likes", "likes", "likes", "$1.49"),
  def("buy-twitch-followers", "Twitch", "followers", "followers", "followers", "$2.99"),
  def("buy-twitch-views", "Twitch", "views", "views", "views", "$1.99"),
  def("buy-kick-followers", "Kick", "followers", "followers", "followers", "$2.99"),
  def("buy-spotify-followers", "Spotify", "followers", "followers", "followers", "$3.49"),
  def("buy-spotify-plays", "Spotify", "plays", "plays", "plays", "$1.49"),
  def("buy-soundcloud-plays", "SoundCloud", "plays", "plays", "plays", "$1.49"),
  def("buy-linkedin-connections", "LinkedIn", "connections", "connections", "connections", "$4.99"),
  def("buy-google-reviews", "Google", "reviews", "reviews", "reviews", "$9.99"),
  def("buy-trustpilot-reviews", "Trustpilot", "reviews", "reviews", "reviews", "$9.99"),
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
