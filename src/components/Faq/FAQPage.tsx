import React from "react";
import faqs from "../../assets/json/faq.json";

const FAQPage = () => {
  return (
    <div className="sm:grid grid-cols-2 gap-4 m-8">
      {faqs.map((faq, i) => (
        <div key={i}>
          <div className="join join-vertical w-full ">
            <div>
              <h1 className="text-center py-12 text-rose-500 font-medium text-3xl">
                {faq.name}
              </h1>
            </div>
            {faq.other.map((list, i) => (
              <div className="collapse collapse-plus join-item border border-base-300 hover:text-rose-500">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  {list?.title}
                </div>
                <div className="collapse-content    whitespace-normal text-wrap	text-lg text-gray-500">
                  <p>
                  {list?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
