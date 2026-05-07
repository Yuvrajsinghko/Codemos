import {
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
	FaFacebookF,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full bg-black text-white border-t border-white/10 mt-28">
			<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

				{/* Brand */}
				<div>
					<h2 className="text-3xl font-[NeueMachina] font-bold">
						CODE<span className="text-amber-500">MOS</span>
					</h2>

					<p className="mt-5 text-white/60 leading-relaxed">
						Learn. Build. Get Placed.
						<br />
						Industry-ready developers start here.
					</p>

					<div className="flex gap-4 mt-6">
						<SocialBtn><FaInstagram /></SocialBtn>
						<SocialBtn><FaLinkedinIn /></SocialBtn>
						<SocialBtn><FaYoutube /></SocialBtn>
						<SocialBtn><FaFacebookF /></SocialBtn>
					</div>
				</div>

				{/* Links */}
				<div>
					<h3 className="text-xl font-semibold mb-5 text-amber-500">
						Quick Links
					</h3>

					<div className="flex flex-col gap-3 text-white/70">
						<FooterLink to="/">Home</FooterLink>
						<FooterLink to="/courses">Courses</FooterLink>
						<FooterLink to="/placements">Placements</FooterLink>
						<FooterLink to="/about">About Us</FooterLink>
					</div>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-xl font-semibold mb-5 text-amber-500">
						Contact
					</h3>

					<div className="space-y-5 text-white/70">
						<div className="flex gap-3 items-start">
							<FaEnvelope className="text-amber-500 mt-1" />
							<p>hello@codemos.in</p>
						</div>

						<div className="flex gap-3 items-start">
							<FaPhoneAlt className="text-amber-500 mt-1" />
							<p>+91 98765 43210</p>
						</div>

						<div className="flex gap-3 items-start">
							<FaMapMarkerAlt className="text-amber-500 mt-1" />
							<p>
								Indore, Madhya Pradesh
								<br />
								India
							</p>
						</div>
					</div>
				</div>

				{/* Map */}
				<div>
					<h3 className="text-xl font-semibold mb-5 text-amber-500">
						Find Us
					</h3>

					<div className="rounded-2xl overflow-hidden border border-white/10 h-[220px]">
						<iframe
							title="location"
							src="https://www.google.com/maps/embed?pb=!1m18..."
							className="w-full h-full"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
				© 2026 CODEMOS • All Rights Reserved
			</div>
		</footer>
	);
};

const SocialBtn = ({ children }) => (
	<button
		className="
			w-11 h-11 rounded-full
			bg-white/5 border border-white/10
			flex items-center justify-center
			text-lg
			transition duration-300
			hover:border-amber-500
			hover:text-amber-500
			hover:-translate-y-1
		"
	>
		{children}
	</button>
);

const FooterLink = ({ to, children }) => (
	<NavLink
		to={to}
		className="hover:text-amber-500 transition duration-300 w-fit"
	>
		{children}
	</NavLink>
);

export default Footer;
