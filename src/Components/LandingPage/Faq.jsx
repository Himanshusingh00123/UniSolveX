import { useState } from "react";

const faqData = [
  {
    question: "Is the PYQ library completely free?",
    answer:
      "Yes. Our entire library of previous year question papers is completely free to access. You can browse, search, and download papers without any subscription.",
  },
  {
    question: "Which universities are supported?",
    answer:
      "We currently provide PYQs for multiple universities and continuously expand our database based on student contributions and verified uploads.",
  },
  {
    question: "Do the papers include solutions?",
    answer:
      "Yes. Many papers include step-by-step smart solutions and concept explanations to help you understand how to solve the questions.",
  },
  {
    question: "Can I download papers for offline study?",
    answer:
      "Absolutely. You can download question papers and access them later even without an internet connection.",
  },
  {
    question: "Are the solutions verified?",
    answer:
      "Solutions are reviewed and validated before publishing to ensure accuracy and clarity for students.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl text-center font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6  transition-all duration-300
              ${
                active === index
                  ? "bg-indigo-50 border-indigo-600"
                  : "border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full cursor-pointer flex justify-between items-center text-left"
              >
                <h5 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h5>

                <span className="text-2xl">{active === index ? "−" : "+"}</span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
