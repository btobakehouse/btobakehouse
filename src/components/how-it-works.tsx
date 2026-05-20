import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "@/constant";

const HowItWorks = () => {
	return (
		<section id="process" className="py-22 px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl flex flex-col gap-12 md:gap-14">
				<div className="flex flex-col gap-5">
					<p className="text-primary text-xs md:text-sm tracking-[.25em] font-inter font-regular">
						HOW IT WORKS
					</p>
					<h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-secondary">
						From first call to recurring supply.
					</h2>
				</div>

				<div className="grid grid-cols-1 border border-[#ded7ce] md:grid-cols-2 lg:grid-cols-5">
					{PROCESS_STEPS.map((step, index) => (
						<article
							key={step.id}
							className={`px-5 py-5 md:px-8 md:py-8 flex flex-col items-start justify-center gap-6 ${index !== PROCESS_STEPS.length - 1 ? "lg:border-r lg:border-[#ded7ce]" : ""} ${index < PROCESS_STEPS.length - 1 ? "border-b border-[#ded7ce] sm:border-b-0" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-[#ded7ce] lg:border-r" : ""}`}
						>
							<p className="text-5xl leading-none text-secondary/80">
								{step.id}
							</p>
							<div className="flex flex-col gap-2">
								<h3 className="text-2xl font-bold text-primary">
									{step.title}
								</h3>
								<p className="font-inter font-light text-sm md:text-base text-primary/70">
									{step.description}
								</p>
							</div>
						</article>
					))}
				</div>

				<div className="flex justify-center">
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSc3XQClOhl44Nz95IVdDjMeJeumspqBdUyK6FssILV5liJzgw/viewform"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 border border-border bg-transparent px-5 py-3 font-inter text-base font-light text-primary transition-colors duration-200 hover:bg-secondary hover:text-background"
					>
						Request a Sample Box
						<ArrowUpRight className="h-5 w-5" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
