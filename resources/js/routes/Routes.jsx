import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApp from "../components/MyApp";
import Example from "../components/Example";
import Documentation from "../components/Documentation/Documentation";
import Admin from "../components/Admin/Admin";

const routes = [
	{
		path: '/welcome',
		component: MyApp,
	},
	{
		path: '/welcome/example',
		component: Example,
	},
  {
		path: '/documentation',
		component: Documentation,
	},
  {
		path: '/admin',
		component: Admin,
	},
]

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

if (document.getElementById("routes")) {
    const Index = ReactDOM.createRoot(document.getElementById("routes"));

    Index.render(
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    );
}