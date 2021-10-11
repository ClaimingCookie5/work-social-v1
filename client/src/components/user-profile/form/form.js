import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51Jj97mFjKtpO9Sxr3ooea52A6mRUwCAMAsFfSmkqQwiLRq2y2krLim9DeUOASuZwBPtYCSXvX5Nj2X3Lf0VfvHKB00r77vAAZ1";

export const Form = ({ onSubmit }) => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/profile/:userId/payment",
          {
            tokenId: stripeToken.id,
            amount: 500,
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Enter name here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Message</label>
        <input
          type="textarea"
          className="form-control"
          id="message"
          placeholder="Drop a message..."
        />
      </div>
      <div className="form-group">
        <StripeCheckout
          name="ItsOnMe"
          img="images/cocktail_emoji.jpeg"
          email
          description="your gift will be £5"
          amount={500}
          token={onToken}
          stripeKey={KEY}
        >
          <button className="form-control btn btn-primary" type="submit">
            Send
          </button>
        </StripeCheckout>
      </div>
    </form>
  );
};
export default Form;
