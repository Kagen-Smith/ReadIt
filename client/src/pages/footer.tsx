/**
 * Footer component that renders a footer element with the current year and a copyright notice.
 *
 * @returns {JSX.Element} The rendered footer component.
 */

export default function Footer() {
  return (
    <footer className="footer py-3 custom-navbar">
      <div className="container-fluid text-center">
        <h6 className="p-2">
          &copy; {new Date().getFullYear()} Team 05. All Rights Reserved{" "}
        </h6>
      </div>
    </footer>
  );
}
