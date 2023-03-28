import Nav from "./Nav";

// Layout component to wrap the app with common layout elements
export default function Layout({ children }) {
  return (
    // Apply margin and font family to the entire layout
    <div className="mx-6 md:max-w-2xl md:mx-auto font-poppins">
      <Nav /> // Include the navigation bar component
      <main>{children}</main> // Render the main content passed as props
    </div>
  );
}
