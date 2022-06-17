import { render, screen } from "@testing-library/react";
import MediaCard from "../OurStory/MediaCard";
import React from "react"
import "@testing-library/jest-dom";

describe("testing mediaCard component", () => {
    test("test if mediaCard is rendering", () => {
        render(<MediaCard />);
        const mediaCardElement = screen.getByTestId("test-mediacard")
        expect(mediaCardElement).toBeInTheDocument();
    })
    
})