import { IoBulbOutline } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import featurecard1 from "../../assets/images/FeatureCard1.png";
import { MdOutlineElectricBolt, MdOutlineCloudDownload } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import featurecard2 from "../../assets/images/featurecard2.png";

const Feature = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4">
      <div className="max-w-7xl w-full py-8">
        {/* Heading */}
        <div className="bg-white w-full text-center my-4">
          <h1 className="text-3xl font-semibold my-2">
            Engineered for Academic Mastery
          </h1>

          <p className="text-sm font-medium text-gray-500 tracking-wide">
            Precision tools designed to streamline your study workflow and
            maximize your exam performance.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* CARD 1 */}
            <div className="bg-gray-100/50 lg:w-8/12 flex flex-col lg:flex-row rounded-2xl border border-gray-100">
              <div className="lg:w-8/12 px-8 py-6 flex flex-col gap-3">
                <span className="bg-blue-700 flex justify-center items-center py-3 px-1 rounded-xl w-16 hover:scale-105 transition">
                  <IoBulbOutline className="text-3xl text-white" />
                </span>

                <h1 className="text-2xl font-semibold">
                  Contextual Smart Solutions
                </h1>

                <p className="text-base text-gray-600">
                  Our AI-enhanced engine doesn't just give answers; it provides
                  step-by-step methodologies contextualized to your specific
                  university curriculum.
                </p>

                <h3 className="flex text-indigo-600 font-medium items-center gap-2">
                  <IoCheckmarkDoneSharp />
                  Step-by-Step Derivations
                </h3>

                <h4 className="flex text-indigo-600 font-medium items-center gap-2">
                  <IoCheckmarkDoneSharp />
                  Conceptual Breakdown
                </h4>
              </div>

              <div className="lg:w-4/12 relative min-h-50">
                <div className="w-full h-full lg:w-11/12 lg:h-8/12 absolute bottom-0 right-0 sm:rounded-tl-2xl sm:rounded-br-2xl max-sm:rounded-b-2xl overflow-hidden">
                  <img
                    src={featurecard1}
                    alt="featurecard1"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gray-200/80"></div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-100/50 lg:w-4/12 rounded-2xl border px-8 py-6 flex flex-col gap-3 border-gray-100 relative">
              <span className="bg-emerald-800 flex justify-center items-center px-2.5 py-2 rounded-xl w-12 hover:scale-105 transition">
                <MdOutlineElectricBolt className="text-3xl text-white" />
              </span>

              <h1 className="text-2xl font-semibold">Instant Search</h1>

              <p className="text-base text-gray-600">
                Find any paper within milliseconds using our high-indexed
                academic database.
              </p>

              <div className="flex gap-3 mt-auto">
                <h1 className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold">
                  FAST-SYNC
                </h1>

                <h2 className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold">
                  LOW LATENCY
                </h2>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* CARD 3 */}
            <div className="bg-gray-100/50 lg:w-5/12 rounded-2xl border px-8 py-6 flex flex-col gap-3 border-gray-100">
              <span className="bg-purple-800 flex justify-center items-center px-2.5 py-2 rounded-xl w-12 hover:scale-105 transition">
                <IoIosPeople className="text-3xl text-white" />
              </span>

              <h1 className="text-2xl font-semibold">Community Driven</h1>

              <p className="text-base text-gray-600">
                Join a network of thousands of students contributing papers and
                peer-reviewed solutions every day.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-gray-100/50 lg:w-7/12 rounded-2xl border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-7/12 px-9 py-6 flex flex-col gap-3">
                <span className="bg-indigo-600 flex justify-center items-center px-2.5 py-2 rounded-xl w-12 hover:scale-105 transition">
                  <MdOutlineCloudDownload className="text-3xl text-white" />
                </span>

                <h1 className="text-2xl font-semibold">
                  Offline Library Access
                </h1>

                <p className="text-base text-gray-600">
                  Save your papers for offline viewing during long commutes or
                  zero-connectivity study zones.
                </p>
              </div>

              <div className="lg:w-5/12 flex justify-center items-center p-6">
                <div className="sm:h-40  sm:w-40 w-full h-full bg-white rounded-2xl hover:scale-105 transition">
                  <img
                    src={featurecard2}
                    alt="featurecard2"
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
