import { CardWithIllustrationParams } from "./card-with-illustration-types";

import Card from "../Card/card";

import "./card-with-illustration.scss";

const CardWithIllustration: React.FC<CardWithIllustrationParams> = ({
  backgroundColor,
  children,
  illustration,
  title,
  callToAction,
  action,
  direction = "to-rigth",
}) => {
  return (
    <Card>
      <div
        className={`card-with-illustration
         card-with-illustration--${backgroundColor} 
         card-with-illustration--${direction}`}
      >
        <div className="card-with-illustration__illustration-container">
          {illustration}
        </div>

        <div className="card-with-illustration__content-container">
          <h3 className="card-with-illustration__title">{title}</h3>
          <p className="card-with-illustration__content">{children}</p>

          {callToAction && (
            <button className="card-with-illustration__button" onClick={action}>
              {callToAction}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
export default CardWithIllustration;
