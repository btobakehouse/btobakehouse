import CtaSection from "./components/cta-section";
import HeroSection from "./components/hero-section";
import HowItWorks from "./components/how-it-works";
import OurCatalogue from "./components/our-catalogue";
import ProblemSolution from "./components/problem-solution";
import TailoredPartnership from "./components/tailored-partnership";
import WhyChooseUs from "./components/why-choose-us";

const App = () => {
	return (
		<main className=" overflow-hidden">
			<HeroSection />
			<ProblemSolution />
			<OurCatalogue />
			<TailoredPartnership />
			<HowItWorks />
			<WhyChooseUs />
			<CtaSection />
		</main>
	);
};

export default App;
