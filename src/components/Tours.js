import Title from "../components/Title";
import { tours } from "../data";
import TourItem from "../components/TourItem";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((t) => {
          return <TourItem key={t.id} {...t} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
