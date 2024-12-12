import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type TestimonialCardProps = {
	name: string;
	status: string;
	comment: string;
	image: string;
}

export default function TestimonialCard({
	name,
	status,
	comment,
	image,
}: TestimonialCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<div className="flex items-center">
						<Avatar>
							<AvatarImage
								src={image}
								alt={name}
								className="w-12 h-12 rounded-full"
							/>
                            <AvatarFallback>
                                {name[0]}
                            </AvatarFallback>
						</Avatar>
						<div className="ml-4">
							<h1 className="text-lg font-bold">{name}</h1>
							<p className="text-sm text-muted-foreground">
								{status}
							</p>
						</div>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent>
                <p className="text-sm">{comment}</p>
            </CardContent>
		</Card>
	);
}
