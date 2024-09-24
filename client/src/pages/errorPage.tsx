/**
 * ErrorPage component renders a 404 error message indicating that the requested page was not found.
 *
 * @returns {JSX.Element} A JSX element containing the error message.
 */

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center">
      <h1 className="display-1 m-0">404</h1>
      <p className="fs-4 text-secondary">Page not found</p>
    </div>
  );
};

export default ErrorPage;
