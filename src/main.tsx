import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Footer from "./shared/footer.tsx";
import Navbar from "./shared/navbar.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<Navbar />
		<App />
		<Footer />
	</StrictMode>,
);
