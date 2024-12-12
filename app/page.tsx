import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import { TestimonialCardProps } from "@/components/testimonial-card";
export default function Home() {
    const testimonials: TestimonialCardProps[] = [
        {
            name: "John Doe",
            status: "CEO, Example Inc.",
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nisl.",
            image: "/images/user.jpeg"
        },
        {
            name: "Jane Doe",
            status: "CTO, Example Inc.",
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nisl.",
            image: "/images/user.jpeg"
        }
    ];
	return (
		<>
            <Navbar /> 
            <main className="">
                <Hero />
                <Testimonials testimonials={testimonials} />
            </main>
		</>
	);
}
