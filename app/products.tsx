import { Monitor, Keyboard, Mouse, BookOpen, ExternalLink } from "lucide-react";

export const products = [
	{
		id: 1,
		name: "Designing Data-Intensive Applications",
		tag: "System Design",
		icon: <BookOpen className="w-3 h-3 mr-1" />,
		description:
			"The definitive engineering bible for mastering macro-architecture. Essential reading for building highly scalable, reliable distributed systems.",
		imageUrl: "https://m.media-amazon.com/images/I/71YL95jVDpL._SL1331_.jpg",
		affiliateLink: "https://amzn.to/46AftPw",
	},
	{
		id: 2,
		name: 'Dell UltraSharp 40" Curved 5K Monitor',
		tag: "Workspace",
		icon: <Monitor className="w-3 h-3 mr-1" />,
		description:
			"The ultimate ultrawide for architects. 5K resolution with a built-in Thunderbolt 4 hub for a clean, single-cable engineering setup.",
		imageUrl: "https://m.media-amazon.com/images/I/71xmIM6e5vL._SL1500_.jpg",
		affiliateLink: "https://amzn.to/3OFm8lo",
	},
	{
		id: 3,
		name: "BenQ PD3225U 4K Pro-Design Monitor",
		tag: "MacBook Setup",
		icon: <Monitor className="w-3 h-3 mr-1" />,
		description:
			"Tailor-made for MacBook users. Features IPS Black technology with a 2000:1 contrast ratio for deep blacks and precise system diagrams.",
		imageUrl:
			"https://m.media-amazon.com/images/I/41uBg5CjWmL._SY300_SX300_QL70_FMwebp_.jpg",
		affiliateLink: "https://amzn.to/40BuH3f",
	},
	{
		id: 4,
		name: "Logitech G PRO X Superlight 2",
		tag: "Pro Peripherals",
		icon: <Mouse className="w-3 h-3 mr-1" />,
		description:
			"The industry standard for precision. Features Lightforce hybrid switches and the Hero 2 sensor for elite-level engineering performance.",
		imageUrl: "https://m.media-amazon.com/images/I/51Cps60NQpL._SL1500_.jpg",
		affiliateLink: "https://amzn.to/3ZYRBkZ",
	},
	{
		id: 5,
		name: "Razer Viper V3 Pro Wireless",
		tag: "High-Performance",
		icon: <Mouse className="w-3 h-3 mr-1" />,
		description:
			"Next-gen 8K polling technology meets a 54g ultra-lightweight design. Engineered for those who demand zero-latency response.",
		imageUrl: "https://m.media-amazon.com/images/I/61BJ2MpgTTL._SL1500_.jpg",
		affiliateLink: "https://amzn.to/4sfZf6r",
	},
	{
		id: 6,
		name: "Keychron K8 Pro QMK/VIA Wireless",
		tag: "Custom Mechanical",
		icon: <Keyboard className="w-3 h-3 mr-1" />,
		description:
			"Fully programmable via QMK/VIA. Features sound-absorbing foam and Gateron G Pro switches for the ultimate tactile coding experience.",
		imageUrl: "https://m.media-amazon.com/images/I/61XULBEea2L._SL1500_.jpg",
		affiliateLink: "https://amzn.to/47c5obB",
	},
	{
		id: 7,
		name: "Logitech MX Mechanical Wireless",
		tag: "Executive Setup",
		icon: <Keyboard className="w-3 h-3 mr-1" />,
		description:
			"Performance-focused low-profile mechanical typing. Smart backlighting and multi-device pairing designed for high-level productivity.",
		imageUrl: "https://m.media-amazon.com/images/I/61BGtLdXTLL._SL1500_.jpg",
		affiliateLink: "https://amzn.to/3MYP3QJ",
	},
];
