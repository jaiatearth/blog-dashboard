import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AllPosts } from "./AllPosts";

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterAll(() => {
  delete global.IntersectionObserver;
});

vi.mock("@/redux/apiDetail", async (importActual) => {
  const actual = await importActual();

  return {
    ...actual,
    blogApi: {
      ...actual.blogApi,
      reducerPath: "blogApi",
      reducer: (state = { data: [] }) => state,
      middleware: () => (next) => (action) => next(action),
      useGetPostsQuery: vi.fn(() => ({
        data: [],
        error: null,
        isLoading: false,
      })),
    },
  };
});

import { blogApi } from "@/redux/apiDetail";

const mockStore = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

setupListeners(mockStore.dispatch);

describe.skip("AllPosts Component", () => {
  it("renders correctly", async () => {
    render(
      <Provider store={mockStore}>
        <AllPosts />
      </Provider>
    );

    screen.debug();

    await expect(
      screen.findByText(/No more posts to load/i)
    ).resolves.toBeInTheDocument();
  });
});
