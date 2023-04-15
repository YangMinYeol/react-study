import { Component } from "react";
import { Title } from "../components";

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer, // 타입스크립트가 요구하는 방식
  };
  componentDidMount(): void {
    const duration = 1000;
    const intervalId = setInterval(() => this.setState({ today: new Date() }), duration);
    this.setState({ intervalId });
  }
  componentWillUnmount(): void {
    clearInterval(this.state?.intervalId);
  }
  render() {
    const { today } = this.state;
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    );
  }
}
