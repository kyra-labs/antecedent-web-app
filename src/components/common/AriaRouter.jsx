import { RouterProvider } from "react-aria";
import { useHref, useNavigate } from "react-router";

// m3e-react links (buttons, cards, navigation items with href) use React Aria's useLink;
// RouterProvider makes them navigate client-side through react-router instead of reloading.
export function AriaRouter({ children }) {
  const navigate = useNavigate();
  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      {children}
    </RouterProvider>
  );
}
