import { IconBrandInstagram } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
					{/* LEFT SECTION */}
					<div className="lg:col-span-2 flex flex-col gap-2 md:gap-4">
						<h3 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-background">
							We bake.
							<br />
							You serve.
						</h3>

						<p className="text-background/80 text-sm md:text-base font-inter font-regular max-w-md">
							A plug-and-play bakery partner for cafés, restaurants, hotels,
							caterers and food brands.
						</p>
						<Button variant="secondary" size="sm">
							Request Bulk Pricing
						</Button>
					</div>

					{/* RIGHT SECTION */}
					<div className="lg:col-span-3">
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
							{/* EXPLORE */}
							<div className="flex flex-col gap-4">
								<p className="text-[10px] md:text-[13px] tracking-[.25em] uppercase text-background/60 font-inter font-regular">
									Explore
								</p>

								<ul className="space-y-3 text-background/80 font-inter text-sm md:text-base">
									<li>Products</li>
									<li>Café &amp; Restaurant</li>
									<li>Corporate Gifting</li>
									<li>White Label</li>
								</ul>
							</div>

							{/* COMPANY */}
							<div className="flex flex-col gap-4">
								<p className="text-[10px] md:text-[13px] tracking-[.25em] uppercase text-background/60 font-inter font-regular">
									Company
								</p>

								<ul className="space-y-3 text-background/80 font-inter text-sm md:text-base">
									<li>About</li>
									<li>Contact</li>
									<li>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://instagram.com/btobakehouse"
										>
											Instagram
										</a>
									</li>
								</ul>
							</div>

							{/* CONTACT */}
							<div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
								<p className="text-[10px] md:text-[13px] tracking-[.25em] uppercase text-background/60 font-inter font-regular">
									Get in touch
								</p>

								<div className="text-background/80 font-inter text-sm md:text-base space-y-2">
									<div>btobakehouse@gmail.com</div>
									<div>+91 9266619427</div>
									<div>Mon–Sat · 9am – 7pm</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* BOTTOM */}
				<div className="mt-10 border-t border-background/20 pt-6 text-xs md:text-sm text-background/60 flex flex-col md:flex-row items-center justify-between font-inter font-regular">
					<div>© 2026 B2Bakehouse. Wholesale bakery supply.</div>
					<div className="flex flex-row items-center justify-between">
						<IconBrandInstagram size={18} />
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://instagram.com/btobakehouse"
							className="ml-2 text-background/60 hover:text-background transition-colors"
						>
							@btobakehouse
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
