import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Data Scientist</span>
            <h1 className="h1">
              Hello I'm <br /> <span> Sinan</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
    I am dedicated to transforming raw data into actionable insights and am proficient in Machine Learning, Python, SQL, and Power BI.
  </p>
            </div>
            {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};
  export default Home;