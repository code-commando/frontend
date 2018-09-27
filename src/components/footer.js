const Footer = ({ title }) => (<footer>{title}</footer>);

class App extends React.Component {
  render() {
    const { footer } = this.props;
    return (
      <div className="app">

        <Footer title={footer} />
      </div>
    );
  }
};

ReactDOM.render(
  <App

    footer="I am the footer" />,
  document.getElementById('react')
);