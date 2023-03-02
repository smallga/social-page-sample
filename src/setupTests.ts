import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

class IntersectionObserver {
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

const IntersectionObserverEntry = vi.fn(() => ({
}))

vi.stubGlobal('IntersectionObserverEntry', IntersectionObserverEntry)

const mockedUsedNavigate = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom") as any), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedUsedNavigate,
}));

// window.IntersectionObserverEntry = jest.fn();