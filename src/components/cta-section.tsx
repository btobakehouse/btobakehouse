import PARTNERSHIP_2 from "@/assets/partnership-2.jpg";

const CtaSection = () => {
	return (
		<section
			className="w-full bg-cover bg-center"
			style={{ backgroundImage: `url(${PARTNERSHIP_2})` }}
		>
			<div className="w-full bg-secondary/75 backdrop-blur-[2px] flex items-center">
				<div className="max-w-7xl mx-auto px-4 py-22 sm:px-6 lg:px-8 lg:py-44">
					<div className="grid grid-cols-1">
						<div className="text-center mx-auto max-w-3xl">
							<div className="flex flex-col gap-6 items-center">
								<p className="text-xs md:text-md font-inter font-regular tracking-[.25em] text-background/80 uppercase">
									Let's build your supply
								</p>

								<h2 className="text-background text-4xl sm:text-5xl md:text-6xl lg:text-7xl/snug">
									Ready To Upgrade{" "}
									<span className="italic">Your Kitchen Menu ?</span>
								</h2>

								<p className="text-background/80 text-base md:text-xl font-inter font-regular tracking-wide">
									Tell us what you need and we'll help you create a supply plan
									that works for your menu, margins and customers.
								</p>
							</div>

							<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
								<a
									href="mailto:btobakehouse@gmail.com?subject=Bulk%20Pricing%20Request"
									className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2 md:py-3 text-sm md:text-base font-inter text-primary shadow-md hover:bg-accent/80 transition"
								>
									Request Bulk Pricing
								</a>

								<a
									href="mailto:btobakehouse@gmail.com?subject=Bulk%20Pricing%20Request"
									className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-2 md:py-3 text-sm md:text-base font-inter text-background transition-colors duration-200 hover:bg-accent hover:text-primary"
								>
									Message on WhatsApp
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
