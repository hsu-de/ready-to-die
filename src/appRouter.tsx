import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import QuaQuaPage from "./pages/QuaQua";
import LittleScratchPage from "./pages/LottieScratch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>HomePage</h1>,
      },
      { path: "qua-qua-lu", element: <QuaQuaPage /> },
      { path: "lottie", element: <LittleScratchPage /> },
    ],
  },
]);

export default router;
