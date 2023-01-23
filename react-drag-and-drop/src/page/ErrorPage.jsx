import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <main>
        <h1>Oooops!</h1>
        <p>Error</p>
        <p>{error.statusText ?? error.message}</p>
      </main>
    </>
  );
};
