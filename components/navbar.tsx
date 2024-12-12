"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetTitle,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
	const [isSticky, setIsSticky] = React.useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	const navLinks = [
		{
			name: "Accueil",
			href: "/",
		},
		{
			name: "A propos",
			href: "/about",
		},
		{
			name: "Contact",
			href: "/contact",
		},
	];
	return (
		<nav
			className={`fixed top-0 z-50 w-full backdrop-blur ${
				isSticky ? "bg-background/85" : "bg-transparent"
			} transition-colors`}
		>
			<div className="mx-auto max-w-[1340px] px-3">
				<div className="flex items-center justify-between h-[80px]">
					<Link href={"/"}>
						<Image
							src="/images/logo-complete.png"
							alt="logo"
							width={200}
							height={100}
							className="cursor-pointer w-full h-[50px] hidden md:block"
						/>
						<Image
							src="/images/mini-logo.png"
							alt="logo"
							width={200}
							height={100}
							className="cursor-pointer w-full h-[50px] block md:hidden"
						/>
					</Link>
					<div className="items-center gap-2 hidden md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-sm px-3 font-medium hover:text-primary"
							>
								{link.name}
							</Link>
						))}
					</div>
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button size={"toggleMenu"} variant={"ghost"}>
									<AlignJustify size={30} strokeWidth={3} />
								</Button>
							</SheetTrigger>
							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle>
										<div className="w-fit">
											<Image
												src="/images/logo-complete.png"
												alt="logo"
												width={200}
												height={100}
												className="cursor-pointer w-full h-[50px] block md:hidden"
											/>
										</div>
									</SheetTitle>
									<SheetDescription asChild>
										<p className="hidden">
											Description toggle menu
										</p>
									</SheetDescription>
									<div className="flex flex-col items-start gap-2 pt-5 w-full">
										{navLinks.map((link) => (
											<SheetClose asChild key={link.name}>
												<Link
													key={link.name}
													href={link.href}
													className="text-sm px-3 py-2 font-medium hover:text-primary w-full text-start"
												>
													{link.name}
												</Link>
											</SheetClose>
										))}
										<SheetClose asChild>
											<Link href={"/login"} className="">
												<Button variant={"ghost"}>
													Se connecter
												</Button>
											</Link>
										</SheetClose>
										<SheetClose asChild>
											<Link
												href={"/register"}
												className=""
											>
												<Button>S&#039;inscrire</Button>
											</Link>
										</SheetClose>
									</div>
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>
					<div className="md:flex items-center gap-3 hidden">
						<Link href={"/login"}>
							<Button variant={"ghost"}>Se connecter</Button>
						</Link>
						<Link href={"/register"}>
							<Button>S&#039;inscrire</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
