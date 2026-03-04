import Image from "next/image";
import { ExternalLink, BadgeCheck } from "lucide-react";
import { products } from "./products";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 py-16 px-4 sm:px-6">
			<div className="max-w-6xl mx-auto space-y-12">
				<header className="flex flex-col items-center text-center space-y-5">
					<div className="w-28 h-28 rounded-full bg-white ring-1 ring-slate-200 shadow-xl shadow-slate-200/50 p-1 overflow-hidden relative">
						<Image
							src="/your-profile.jpg" 
							alt="Gowtham"
							fill
							className="object-cover rounded-full"
							priority
						/>
					</div>

					<div className="space-y-2">
						<h1 className="text-3xl font-extrabold tracking-tight flex items-center justify-center gap-2 text-slate-900">
							The Architect's Desk
							<BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-50" />
						</h1>
						<p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
							Curating high-performance workspaces and engineering tools.
						</p>
					</div>
				</header>

				{/* Product Grid - 3 Columns on Desktop */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="group bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 p-1 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
						>
							{/* Image Container */}
							<div className="aspect-[4/3] w-full bg-white rounded-xl overflow-hidden relative flex items-center justify-center p-4">
								<Image
									src={product.imageUrl}
									alt={product.name}
									fill
									className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
									priority
								/>
							</div>

							{/* Product Details */}
							<div className="p-5 flex flex-col flex-grow space-y-4">
								<div className="flex items-center">
									<span className="inline-flex items-center px-2.5 py-1 bg-slate-100/80 border border-slate-200 text-slate-600 text-[11px] font-semibold uppercase tracking-wider rounded-md">
										{product.icon}
										{product.tag}
									</span>
								</div>

								<div className="space-y-1.5 flex-grow text-left">
									<h2 className="font-bold text-lg leading-snug text-slate-900 line-clamp-2">
										{product.name}
									</h2>
									<p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
										{product.description}
									</p>
								</div>

								<a
									href={product.affiliateLink}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow-md hover:bg-slate-800 transition-all active:scale-[0.98]"
								>
									Check Price on Amazon
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</div>
					))}
				</section>
				<footer className="text-center pt-10 border-t border-slate-200/60 mt-8">
					<p className="text-xs text-slate-400 font-medium italic">
						"As an Amazon Associate, I earn from qualifying purchases."
					</p>
				</footer>
			</div>
		</main>
	);
}
