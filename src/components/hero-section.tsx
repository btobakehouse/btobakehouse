import Hero_Image from "../assets/hero.webp";
import { Button } from "./ui/button";

const HeroSection = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-22 relative">
			{/* decorative gradients (non-interactive, behind content) */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-20 top-90 w-120 h-120 rounded-full opacity-60 blur-2xl"
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(186,139,128,0.45), rgba(245,238,230,0.04))",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute md:-right-24 lg:right-20 top-40 bottom-0 w-120 h-120 rounded-full opacity-70 blur-2xl"
				style={{
					background:
						"radial-gradient(circle at 60% 40%, rgba(115,61,57,0.36), rgba(250,244,241,0.02))",
				}}
			/>

			<div className="pt-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
				{/* left section */}
				<div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 order-2 md:order-1">
					<div>
						<p className="text-secondary/70 text-xs md:text-sm tracking-widest font-inter font-light">
							Scale your menu with zero kitchen work
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h1 className="leading-[0.95] text-secondary text-5xl md:text-6xl lg:text-7xl font-bold">
							Bulk bakery supply for cafés, restaurants and food businesses.
						</h1>
						<p className="leading-relaxed text-sm md:text-base text-secondary/75 font-inter font-regular">
							Brownies, tiramisu, breads and desserts, freshly baked for
							businesses that need quality, consistency and reliable supply.{" "}
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSc3XQClOhl44Nz95IVdDjMeJeumspqBdUyK6FssILV5liJzgw/viewform"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<Button className="w-full">Request Bulk Pricing</Button>
						</a>

						<a href="#explore-range" className="w-full">
							<Button variant="outline" className="w-full">
								Explore Range
							</Button>
						</a>
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
