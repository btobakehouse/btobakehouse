import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constant";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

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
						<li key={link}>
							<a
								href={`#${link.toLowerCase()}`}
								className="text-sm text-secondary/75 font-medium font-inter hover:text-secondary transition-colors"
							>
								{link}
							</a>
						</li>
					))}
				</ul>

				{/* CTA */}
				<div className="hidden md:flex items-center gap-4">
					<a
						href="#contact"
						className="text-sm rounded-lg tracking-wide bg-primary text-background px-5 py-2 hover:opacity-90 active:scale-95 font-inter font-light hover:bg-secondary transition-all duration-300"
					>
						Request Bulk Pricing
					</a>
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden flex flex-col gap-1.5 p-1"
					aria-label="Toggle menu"
				>
					<span
						className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${
							menuOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${
							menuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${
							menuOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden transition-all duration-300 overflow-hidden ${
					menuOpen ? "max-h-64 border-b border-white/5" : "max-h-0"
				}`}
			>
				<div className=" backdrop-blur-xl px-6 pb-6 pt-2 flex flex-col gap-4">
					{NAV_ITEMS.map((link) => (
						<a
							key={link}
							href={`#${link.toLowerCase()}`}
							onClick={() => setMenuOpen(false)}
							className="text-secondary/75 py-1 text-sm  font-inter"
						>
							{link}
						</a>
					))}
					<a
						href="#contact"
						className="text-sm rounded-lg tracking-wide bg-primary text-background px-5 py-2 hover:opacity-90 active:scale-95 font-inter font-light hover:bg-secondary transition-all duration-300"
					>
						Request Bulk Pricing
					</a>
				</div>
			</div>
		</nav>
	);
}
