import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react"
import OurStory from "../OurStory/OurStory"

test('should render OurStory component', () => {
    render(<OurStory/>);
    const ourStoryElement = screen.getByTestId("test-ourstory");
    expect(ourStoryElement).toBeInTheDocument();
    expect(ourStoryElement).toHaveTextContent('Our Story');
})