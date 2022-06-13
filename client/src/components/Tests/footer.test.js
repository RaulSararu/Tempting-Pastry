import Footer from "../Footer/Footer"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("test footer component", () =>{

    test("test if footer component is rendering", () => {
        render(<Footer />)
        const footerElement = screen.getByTestId("test-footer");
        expect(footerElement).toBeInTheDocument();
    })

   /*  test("test if the button is working", () => {
        render(<Footer />)
        const buttonElement = screen.getByTestId("test-button")
        expect(screen.getByText('View map').closest('a')).toHaveAttribute('href', 'https://www.google.com/maps/place/Hamburger+Str.+22,+22083+Hamburg/@53.5713153,10.0263494,17z/data=!4m5!3m4!1s0x47b18ecea6304ddb:0xcf39588eefd82a00!8m2!3d53.5716657!4d10.0294393?hl=de')
    }) */
})