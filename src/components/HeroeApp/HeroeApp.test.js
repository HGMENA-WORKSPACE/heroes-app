import "@testing-library/jest-dom/extend-expect";
import HeroeApp from "./HeroeApp";

describe("<HeroeApp />", () => {
  beforeEach(setFixture);
  test("shouldCreate() - it should mount", shouldCreate);

  let component;

  async function setFixture() {
    component = new HeroeApp();
  }

  async function shouldCreate() {
    expect(component).toBeDefined();
  }
});
