import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import Header from "../components/layout/Header";

const RootLayout = () => {
  return (
    <Fragment>
      <div id="modal" />
      <div className="min-h-screen w-full bg-gray-50 text-black antialiased dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex flex-col min-h-screen justify-between font-sans">
            <Header />
            <main className="mb-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RootLayout;
