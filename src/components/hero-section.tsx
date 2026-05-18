import Hero_Image from "../assets/hero.webp";

const HeroSection = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-22">
			<div className="pt-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
				{/* left section */}
				<div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 order-2 md:order-1">
					<div>
						<p className="text-secondary/70 text-base md:text-lg">
							Scale your menu with zero kitchen work
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h1 className="leading-[0.95] text-secondary text-5xl md:text-6xl lg:text-7xl font-bold">
							Bulk bakery supply for cafés, restaurants and food businesses.
						</h1>
						<p className="leading-relaxed text-lg md:text-xl text-secondary/75">
							Brownies, tiramisu, breads and desserts, freshly baked for
							businesses that need quality, consistency and reliable supply.{" "}
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
						<button
							type="button"
							className="text-sm md:text-base hover:cursor-pointer rounded-lg bg-primary hover:bg-secondary px-4 sm:px-5 py-2 sm:py-2.5 text-background font-inter font-light transition-colors duration-300 whitespace-nowrap"
						>
							Request Bulk Pricing
						</button>
						<button
							type="button"
							className="text-sm md:text-base hover:cursor-pointer rounded-lg border border-primary hover:bg-primary px-4 sm:px-5 py-2 sm:py-2.5 text-primary hover:text-background font-inter font-light transition-colors duration-300 whitespace-nowrap"
						>
							Explore Range
						</button>
					</div>
				</div>
				{/* right section */}
				<div className="hidden md:flex w-full md:w-1/2 flex-row justify-center items-center order-1 md:order-2">
					<img
						src={Hero_Image}
						alt="Hero"
						className="h-auto w-full sm:w-4/5 md:w-64 lg:w-80 object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
