import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { characterActionTypes } from "../../redux/characters/action-types";
import HomePage from "../../pages/HomePage";
import { loadCharacters } from "../../redux/characters/action-creators";
jest.mock("../../redux/characters/action-creators");

describe("Given the component button", () => {
  describe("When the component is render", () => {
    describe("When there are previous characters", () => {
      beforeEach(() => {
        loadCharacters.mockReturnValue({
          type: characterActionTypes.load,
          payload: {
            info: {
              next: false,
              prev: true,
            },
            results: [],
          },
        });

        render(
          <Provider store={store}>
            <Router>
              <HomePage />
            </Router>
          </Provider>
        );
      });

      test("Then the buttons buttonPrev exist and buttonNext dont exist", () => {
        const buttonPrev = screen.getByText("prev");
        const buttonNext = screen.queryByText("next");

        expect(buttonPrev).toBeInTheDocument();
        expect(buttonNext).not.toBeInTheDocument();
      });

      describe("When the buttonPrev button is clicked", () => {
        test("The prevPage to have been called", () => {
          const button = screen.getByText("prev");
          fireEvent.click(button);
          expect(loadCharacters).toBeCalledTimes(2);
        });
      });
    });
    describe("when there are next characters", () => {
      beforeEach(() => {
        loadCharacters.mockReturnValue({
          type: characterActionTypes.load,
          payload: {
            info: {
              next: true,
              prev: false,
            },
            results: [],
          },
        });

        render(
          <Provider store={store}>
            <Router>
              <HomePage />
            </Router>
          </Provider>
        );
      });

      test("Then the button buttonNext exist", () => {
        const buttonNext = screen.getByText("next");
        expect(buttonNext).toBeInTheDocument();
      });

      test("Then the button buttonPrev dont exist", () => {
        expect(screen.queryByText("prev")).not.toBeInTheDocument();
      });

      describe("When the buttonNext button is clicked", () => {
        test("The prevNext to have been called", () => {
          const button = screen.getByText("next");
          fireEvent.click(button);
          expect(loadCharacters).toBeCalledTimes(2);
        });
      });
    });
  });
});
