"use client"
import React from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard, { TestimonialCardProps } from "../testimonial-card";

export default function Testimonials({
	testimonials,
}: {
	testimonials: TestimonialCardProps[];
}) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<div className="my-20 max-w-[1340px] mx-auto px-3 space-y-4">
            <h2 className="text-3xl font-bold text-center">Témoignages</h2>
            <p className="text-center text-lg font-medium">Ce que nos clients disent de nous.</p>
			<Carousel
				aria-label="My Favorite Images"
				opts={{
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 6000,
					}),
				]}
				setApi={setApi}
			>
				<CarouselContent>
					{testimonials.map((testimonial) => (
						<CarouselItem
							key={testimonial.name}
							className="md:basis-1/2 lg:basis-1/3"
						>
							<TestimonialCard {...testimonial} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground flex items-center gap-3 justify-center">
				{Array.from({ length: count }).map((_, i) => (
					<button
						key={i}
						onClick={() => api?.scrollTo(i)}
						className={`p-1 w-2 h-2 rounded-full transition-all ${
							i === current - 1
								? "rounded-md w-4 bg-primary"
								: "bg-foreground/60"
						}`}
					></button>
				))}
			</div>
		</div>
	);
}
