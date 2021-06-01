import "@testing-library/jest-dom/extend-expect";
import NavbarApp from "./NavbarApp";

describe("<NavbarApp />", () => {
  beforeEach(setFixture);
  test("shouldCreate() - it should mount", shouldCreate);

  let component;

  async function setFixture() {
    component = new NavbarApp();
  }

  async function shouldCreate() {
    expect(component).toBeDefined();
  }
});
