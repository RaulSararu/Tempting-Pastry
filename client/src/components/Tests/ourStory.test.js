import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OurStory from "../OurStory/OurStory";
import React from "react";

describe("test OurStory component", () => {

  test("should render OurStory component", () => {
    render(<OurStory />);
    const ourStoryElement = screen.getByTestId("test-ourstory");
    expect(ourStoryElement).toBeInTheDocument();
    expect(ourStoryElement).toHaveTextContent("Our Story");
  });

  test("test if the first picture is working", () => {
      render(<OurStory />);
      const ourStoryPicture = screen.getByAltText("img1");
      expect(ourStoryPicture).toHaveAttribute("src", "cookies.jpg")
  })

  test("test if the second picture is working", () => {
    render(<OurStory />);
    const ourStoryPicture = screen.getByAltText("img2");
    expect(ourStoryPicture).toHaveAttribute("src", "tart.jpg")
  })
});
