"use client";
import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../ui/textRevialCard";
// import {
//     TextRevealCard,
//     TextRevealCardDescription,
//     TextRevealCardTitle,
// } from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#0e0e10] h-[15rem]  w-full">
            <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry "
            >
                <TextRevealCardTitle className="justify-center text-center" >
                    I am Eben, A creative software Engineer.
                </TextRevealCardTitle>
                <TextRevealCardDescription className="text-center">
                    Eben Designs and Builds Mobile and Web Apps with Javascript Technologies
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
