import { WHY_CHOOSE_US } from "@/constant";

const WhyChooseUs = () => {
	return (
		<section className="bg-accent/40 py-22 px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl flex flex-col gap-12 md:gap-14">
				<div className="flex flex-col gap-4">
					<p className="text-primary text-xs md:text-sm tracking-[.25em] font-inter font-regular">
						WHY B2BAKEHOUSE
					</p>
					<h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-secondary">
						Unlimited Options With Zero Kitchen Work
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{WHY_CHOOSE_US.map((feature) => (
						<article
							key={feature.id}
							className="bg-white px-5 py-5 md:px-8 md:py-8 flex flex-col items-start justify-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
						>
							<p className="text-5xl leading-none text-secondary/80">
								{feature.id}
							</p>
							<h3 className="text-2xl font-bold text-primary">
								{feature.title}
							</h3>
							<p className="font-inter font-light text-sm md:text-base text-primary/70">
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
