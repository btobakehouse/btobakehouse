import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "../components/ui/sheet";
import { NAV_ITEMS } from "../constant";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled ? "bg-background/80 backdrop-blur" : "bg-background"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				{/* Logo */}
				<div className="shrink-0 cursor-pointer">
					<a href="/">
						<p className="text-2xl text-primary">BtoBakeHouse</p>
					</a>
				</div>

				{/* Desktop links */}
				<ul className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((link) => (
						<li key={link.id}>
							<a
								href={`${link.link}`}
								className="text-sm text-secondary/75 font-medium font-inter hover:text-secondary transition-colors"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				{/* CTA */}
				<div className="hidden md:flex items-center gap-4">
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSc3XQClOhl44Nz95IVdDjMeJeumspqBdUyK6FssILV5liJzgw/viewform"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button size="sm">Request Bulk Pricing</Button>
					</a>
				</div>

				{/* Mobile menu trigger */}
				<Sheet>
					<SheetTrigger
						render={
							<button
								type="button"
								className="md:hidden flex flex-col gap-1.5 p-1"
								aria-label="Open menu"
							/>
						}
					>
						<span className="block w-5 h-[1.5px] bg-primary transition-all duration-300" />
						<span className="block w-5 h-[1.5px] bg-primary transition-all duration-300" />
						<span className="block w-5 h-[1.5px] bg-primary transition-all duration-300" />
					</SheetTrigger>

					<SheetContent
						side="right"
						className="md:hidden w-[80vw] max-w-xs border-l border-white/10 bg-background px-6 pb-6 pt-14"
					>
						<div className="flex flex-col gap-4">
							{NAV_ITEMS.map((link) => (
								<SheetClose
									key={link.id}
									render={
										<button
											type="button"
											onClick={() => {
												window.location.hash = link.link;
											}}
											className="text-secondary/75 py-1 text-sm font-inter text-left"
										/>
									}
								>
									{link.name}
								</SheetClose>
							))}

							<SheetClose className="flex flex-row items-start justify-start">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc3XQClOhl44Nz95IVdDjMeJeumspqBdUyK6FssILV5liJzgw/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button size="xs">Request Bulk Pricing</Button>
								</a>
							</SheetClose>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
