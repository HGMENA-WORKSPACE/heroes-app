import "@testing-library/jest-dom/extend-expect";
import HeroesApp from "./HeroesApp";

describe("<HeroesApp />", () => {
  beforeEach(setFixture);
  test("shouldCreate() - it should mount", shouldCreate);

  let component;

  async function setFixture() {
    component = new HeroesApp();
  }

  async function shouldCreate() {
    expect(component).toBeDefined();
  }
});
