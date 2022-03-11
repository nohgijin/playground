import React, { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = React.lazy(() => import("./pages/index"));
const CartIndex = React.lazy(() => import("./pages/cart/index"));
const PaymentsIndex = React.lazy(() => import("./pages/payments/index"));
const ProductsIndex = React.lazy(() => import("./pages/products/index"));
const ProductsId = React.lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/cart", element: <CartIndex />, index: true },
      { path: "/payments", element: <PaymentsIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/payments" },
  { route: "/products" },
  { route: "/products/:id" },
];
