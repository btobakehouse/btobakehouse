const ProblemSolution = () => {
	const problems = [
		"In house production is expensive to setup",
		"Maintaining consistency batch to batch is difficult",
		"Bakery equipment requires investment",
		"Skilled bakery staff is hard to hire and retain",
		"Menus need constant variety and seasonal SKUs",
		"Demand for certain items fluctuates",
	];

	const solutions = [
		"Ready to serve products on your schedule",
		"Bulk ready production at predictable cost",
		"Standardised recipes across every batch",
		"white label options with your branding",
		"Flexible quantities, formats, and SKUs",
		"Reliable recurring supply",
	];

	return (
		<div className="bg-accent/40 py-22 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
					{/* Problem Section */}
					<div className="md:pr-8 md:border-r md:border-secondary/30">
						<p className="text-primary text-sm md:text-base font-medium mb-4 tracking-widest">
							THE PROBLEM
						</p>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-secondary mb-6 leading-tight">
							Running a bakery inside your business is hard
						</h2>
						<ul className="space-y-4">
							{problems.map((problem) => (
								<li key={problem} className="flex gap-3">
									<span className="text-secondary mt-1">•</span>
									<span className="text-secondary text-base">{problem}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Solution Section */}
					<div className="md:pl-8">
						<p className="text-primary text-sm md:text-base font-medium mb-4 tracking-widest">
							OUR SOLUTION
						</p>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-secondary mb-6 leading-tight">
							A bakery partner you can plug into your menu
						</h2>
						<ul className="space-y-4 mb-8">
							{solutions.map((solution) => (
								<li key={solution} className="flex gap-3">
									<span className="text-secondary mt-1">•</span>
									<span className="text-secondary text-base">{solution}</span>
								</li>
							))}
						</ul>
						<button
							type="button"
							className="bg-primary hover:bg-secondary text-sm text-background px-6 py-2 rounded-lg font-inter font-light transition-colors duration-300 hover:cursor-pointer"
						>
							Build Your Bakery Menu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemSolution;
