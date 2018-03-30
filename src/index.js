import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';

const title = "React Webpack Minimal";

ReactDOM.render(<div>
  {title}
  <Button
    type="primary"
    onClick={() => { this.setState({ showing: 'cat' }); }}
  >cat
  </Button>
  <Button
    type="primary"
    onClick={() => { this.setState({ showing: 'dog' }); }}
  >dog
  </Button>
  </div>, document.getElementById("app"));

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}
