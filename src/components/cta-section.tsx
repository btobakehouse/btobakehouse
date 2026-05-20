import PARTNERSHIP_2 from "@/assets/partnership-2.jpg";
import { Button } from "./ui/button";

const CtaSection = () => {
	return (
		<section
			className="w-full bg-cover bg-center"
			style={{ backgroundImage: `url(${PARTNERSHIP_2})` }}
		>
			<div className="w-full bg-secondary/75 backdrop-blur-[2px] flex items-center">
				<div className="max-w-7xl mx-auto px-4 py-22 sm:px-6 lg:px-8 lg:py-44">
					<div className="grid grid-cols-1">
						<div className="mx-auto max-w-3xl flex flex-col text-center gap-8">
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

							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc3XQClOhl44Nz95IVdDjMeJeumspqBdUyK6FssILV5liJzgw/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button variant="secondary">Request Bulk Pricing</Button>
								</a>

								<Button
									variant="outline"
									className="border-white/40 text-white"
								>
									Message on WhatsApp
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
