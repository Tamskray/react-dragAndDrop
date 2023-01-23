import Cards from "../components/Cards";
import { cards } from "../data";

export const CardsPage = () => {
  return (
    <>
      <Cards cardsList={cards} />
    </>
  );
};
