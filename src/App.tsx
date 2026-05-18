import HeroSection from "./components/hero-section";
import HowItWorks from "./components/how-it-works";
import OurCatalogue from "./components/our-catalogue";
import ProblemSolution from "./components/problem-solution";
import TailoredPartnership from "./components/tailored-partnership";

const App = () => {
	return (
		<>
			<HeroSection />
			<ProblemSolution />
			<OurCatalogue />
			<TailoredPartnership />
			<HowItWorks />
		</>
	);
};

export default App;
