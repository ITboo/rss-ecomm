import React from 'react';
import items from '../../shared/lib/faq.json';
import './FAQ.css';

const FAQ = () => {
  const [selected, setSelected] = React.useState();
  return (
    <div>
      <div className="faq__content">
        <div className="wrapper">
          <h2 className="accordion__title">
            Welcome, Let’s Talk About Our Ecobazar
          </h2>
          <div className="accordion">
            {items.map((item, index) => (
              <div className="accordion__item">
                <div
                  className="question"
                  onClick={() =>
                    setSelected(index === selected ? false : index)
                  }
                >
                  <div>{item.question}</div>
                  {selected === index ? (
                    <div className="icon">-</div>
                  ) : (
                    <div className="icon">+</div>
                  )}
                </div>
                <div className="answer">
                  {selected === index && <div>{item.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img src="./public/faq.png" alt="" width={500} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
