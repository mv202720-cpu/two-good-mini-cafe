import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";

const HomePage = lazy(() => import("./pages/Home"));
const MenuPage = lazy(() => import("./pages/Menu"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CartPage = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

function PageFallback() {
  return (
    <div className="container mx-auto px-4 py-24 space-y-4">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-2/3" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <HomePage />
    </Suspense>
  ),
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <MenuPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <ContactPage />
    </Suspense>
  ),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <CartPage />
    </Suspense>
  ),
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <CheckoutPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  menuRoute,
  contactRoute,
  cartRoute,
  checkoutRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
