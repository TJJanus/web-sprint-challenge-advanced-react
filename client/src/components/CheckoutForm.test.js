import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.change(firstNameInput, { target: { name: 'firstName', value: "TJ" } });
    fireEvent.change(lastNameInput, { target: { name: 'lastName', value: "Janus" } });
    fireEvent.change(addressInput, { target: { name: 'address', value: "16 Lady Diana Circle" } });
    fireEvent.change(cityInput, { target: { name: 'city', value: "Marlton" } });
    fireEvent.change(stateInput, { target: { name: 'state', value: "New Jersey" } });
    fireEvent.change(zipInput, { target: { name: 'zip', value: "08053" } });

    
    fireEvent.click(submitButton)

    const newUser =  screen.findByText(/TJ Janus/i)
    
});
