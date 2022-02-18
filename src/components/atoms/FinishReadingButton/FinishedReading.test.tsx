import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishReadingButton from "./FinishReadingButton";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <FinishReadingButton
        disabled={true ? true : false}
        bookId={0}
        setActive={() => {
          console.log("Finish reading button state is managed");
        }}
        handleFinish={() => {
          console.log("Handle finish button clicked.");
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByRole("finishReading")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("finishReading"), { button: 0 });
});
