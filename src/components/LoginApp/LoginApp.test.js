import "@testing-library/jest-dom/extend-expect";
import LoginApp from "./LoginApp";

describe("<LoginApp />", () => {
  beforeEach(setFixture);
  test("shouldCreate() - it should mount", shouldCreate);

  let component;

  async function setFixture() {
    component = new LoginApp();
  }

  async function shouldCreate() {
    expect(component).toBeDefined();
  }
});
