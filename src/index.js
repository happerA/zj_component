import React from "react";
import * as styles from "./index.css";

export default class ReactaDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  static defaultProps = {
    visibilityHeight: 200
  };
  scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      document.body.scrollTop = c - c / 8;
      document.documentElement.scrollTop = c - c / 8;
    }
  };

  bindScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(c)
    const visible = c >= (this.props.visibilityHeight||200);

    this.setState({ visible });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.bindScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindScroll);
  }
  render() {
    const { visible } = this.state;
    return (
      visible && (
        <div className={styles.down_wrapper} onClick={this.scrollToTop}>
          <div className={styles.down_arrow}></div>
        </div>
      )
    );
  }
}
