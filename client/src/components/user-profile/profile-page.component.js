import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Modal from "./modal";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/send`}>Send Gift</Link>
        {/* <Link to={{ pathname: this.props.match.url, search: "?login=true" }}>
          Leave Message
        </Link> */}

        <Route
          path={`${this.props.match.url}/send`}
          render={() => {
            return (
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    {" "}
                    <h3>Send Gift</h3>{" "}
                    <form>
                      {" "}
                      <div>
                        <input type="text" placeholder="Name" />{" "}
                      </div>{" "}
                      <div>
                        <input type="email" required placeholder="Email" />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <input
                          className="Message"
                          type="message"
                          placeholder="Enter message here"
                        />
                      </div>
                      <div>
                        <input type="submit" value="Send Gift" />
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
            );
          }}
        />
      </div>
    );
  }
}
