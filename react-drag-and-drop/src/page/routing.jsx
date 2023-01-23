import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { IndexPage } from "./IndexPage";
import { ErrorPage } from "./ErrorPage";
import { CardsPage } from "./CardsPage";
import { TodoPage } from "./TodoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <IndexPage />,
        index: true,
      },
      {
        path: "/cards",
        element: <CardsPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
  },
]);
