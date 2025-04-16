import Title from "../components/Title";
import { services } from "../data";
import ServiceItem from "../components/ServiceItem";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {services.map((s) => {
          return <ServiceItem key={s.id} {...s} />;
        })}
      </div>
    </section>
  );
};

export default Services;
