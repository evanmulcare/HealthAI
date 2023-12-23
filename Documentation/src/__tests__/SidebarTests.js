import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

describe("Sidebar component", () => {
  test("renders Sidebar component", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
  });

  test("renders specific link and section as active", () => {
    render(
      <BrowserRouter initialEntries={["/healthai-web/registration"]}>
        <Sidebar />
      </BrowserRouter>
    );
  });
});
