import { ArrowUpRight, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PARTNERSHIP_TABS } from "@/constant";

const TailoredPartnership = () => {
	return (
		<section className="bg-secondary text-background px-4 sm:px-6 lg:px-8 py-22 ">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl">
					<p className="mb-5 font-inter text-[0.7rem] uppercase tracking-[0.35em] text-background/70">
						Tailored Partnerships
					</p>
					<h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-background">
						A supply model for every kind of food business.
					</h2>
				</div>

				<Tabs defaultValue={PARTNERSHIP_TABS[0].id} className="w-full">
					<div className="mt-10 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
						<TabsList
							variant="line"
							className="inline-flex min-w-max gap-2 bg-transparent p-0 sm:gap-4"
						>
							{PARTNERSHIP_TABS.map((tab) => (
								<TabsTrigger
									key={tab.id}
									value={tab.id}
									className="shrink-0 px-4 py-3 text-sm font-inter font-light text-background/70 transition-colors duration-200 hover:text-background hover:bg-transparent data-active:bg-background! data-active:text-secondary! sm:px-5 after:hidden"
								>
									{tab.label}
								</TabsTrigger>
							))}
						</TabsList>
					</div>

					{PARTNERSHIP_TABS.map((tab) => (
						<TabsContent
							key={tab.id}
							value={tab.id}
							className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
						>
							<div>
								<img
									src={tab.image}
									alt="Assorted baked desserts displayed on a counter"
									className="aspect-5/3 md:aspect-7/3 lg:aspect-4/3 w-full object-cover"
								/>
							</div>

							<div className="max-w-xl lg:pl-4 flex flex-col items-start gap-6">
								<h3 className="font-cormorant-garamond text-4xl font-medium leading-none text-background sm:text-5xl">
									{tab.label}
								</h3>
								<p className="max-w-lg font-inter text-base leading-8 text-background/70 sm:text-lg">
									{tab.description}
								</p>

								<div>
									<ul className="space-y-3">
										{tab.benefits.map((benefit) => (
											<li
												key={benefit}
												className="flex items-center gap-3 font-inter text-sm text-background/70 sm:text-base"
											>
												<Check
													className="h-4 w-4 shrink-0 text-[#f5ecdf]"
													strokeWidth={2.5}
												/>
												<span>{benefit}</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<button
										type="button"
										className="inline-flex items-center rounded-lg gap-3 bg-background px-6 py-2 font-inter text-sm text-secondary hover:bg-accent/90 transition-colors duration-300 hover:cursor-pointer"
									>
										Plan Your Supply
										<ArrowUpRight className="h-4 w-4" />
									</button>
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
};

export default TailoredPartnership;
