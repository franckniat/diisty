import React from "react";
import { Button } from "../ui/button";
import { Activity, ArrowDownUp, ArrowRight, Replace, Scaling } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";


export default function Hero() {
    const features  = [
        {
            id: 1,
            icon: <Replace />,
            title: "Cross-sector Flexibility",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem magni repellendus molestias tempore non a laborum nobis fugit architecto, expedita atque asperiores ratione deserunt molestiae ullam iusto minus deleniti.",
        },
        {
            id: 2,
            icon: <Activity />,
            title: "Tailored Solutions",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem magni repellendus molestias tempore non a laborum nobis fugit architecto, expedita atque asperiores ratione deserunt molestiae ullam iusto minus deleniti.",
        },
        {
            id: 3,
            icon: <Scaling />,
            title: "Scalable Efficiency",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem magni repellendus molestias tempore non a laborum nobis fugit architecto, expedita atque asperiores ratione deserunt molestiae ullam iusto minus deleniti.",
        },
        {
            id: 4,
            icon: <ArrowDownUp />,
            title: "Streamlined Operations",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem magni repellendus molestias tempore non a laborum nobis fugit architecto, expedita atque asperiores ratione deserunt molestiae ullam iusto minus deleniti.",
        }
    ]
	return (
		<main className="flex max-sm:pt-[140px] sm:pt-[200px] bg-[#EFF6EA] pb-20">
			<div className="max-w-[1340px] mx-auto px-3">
				<div className="flex items-center justify-between gap-5">
					<div className="space-y-5 md:max-w-xl">
						<div className="text-sm py-1.5 px-3 bg-primary/40 rounded-full font-medium w-fit flex items-center gap-4">
							<span>Renforcez votre business</span>
							<span className="w-3 h-3 rounded-full bg-primary/80 animate-pulse"></span>
						</div>
						<h1 className="text-4xl font-bold tracking-tighter sm:tracking-normal">
							Une plateforme pour répondre à tous vos besoins
						</h1>
						<p className="text-base leading-normal text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Earum, voluptas? Necessitatibus, illum?
							Laborum veniam, exercitationem, quos reiciendis vel
							ut, cumque velit omnis amet repudiandae fugiat nihil
							culpa fuga cum et? Nemo repudiandae rerum voluptatum
							nihil quae quasi officia ea cupiditate, ut excepturi
							dolore suscipit sunt iusto adipisci odio maxime
							quia, tempore ratione praesentium! Accusantium
							ratione, aliquid non eum animi velit.
						</p>
						<Button size={"lg"} className="group gap-3 w-full sm:w-fit">
							<span>Commencer</span>
							<ArrowRight
								size={18}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</Button>
                        <Separator className="my-5 md:hidden" />
					</div>
					<div className="hidden md:block">
						<Image
							src={"/images/hero-image.png"}
							alt="hero image"
							width={1050}
							height={700}
							className="w-full object-cover"
						/>
					</div>
				</div>
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col gap-4"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/20">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                <p className="text-sm leading-relaxed text-justify">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
			</div>
		</main>
	);
}
