import { IconArrowUpRight } from "@tabler/icons-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { catalogueItems } from "@/constant";

const OurCatalogue = () => {
	return (
		<section className="py-22 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="max-w-4xl flex flex-col items-start gap-5">
					<p className="text-primary text-sm md:text-base font-medium tracking-widest">
						OUR CATALOGUE
					</p>
					<h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-secondary mb-8">
						Wholesale bakery products made for service, resale and gifting
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{catalogueItems.map((item) => (
						<Card
							key={item.id}
							className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
						>
							<div className="overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<CardHeader>
								<CardTitle>{item.title}</CardTitle>

								<CardDescription>{item.subtitle}</CardDescription>
							</CardHeader>

							<CardContent>
								<div className="flex flex-wrap gap-2">
									{item.tags.map((t) => (
										<span
											key={t}
											className="rounded-full bg-accent/60 px-2 py-1 text-sm text-secondary"
										>
											{t}
										</span>
									))}
								</div>
							</CardContent>

							<CardFooter>
								<div className="flex w-full items-center justify-between">
									<a
										href="/"
										className="font-inter text-sm font-normal text-secondary transition-all duration-300 hover:underline"
									>
										Enquire for Pricing
										<IconArrowUpRight
											className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
											size={16}
										/>
									</a>
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurCatalogue;
