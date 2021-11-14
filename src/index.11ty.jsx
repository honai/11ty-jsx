const { renderToStaticMarkup: r } = require("react-dom/server")
const { Header } = require("./components/Header")

module.exports = class Index {
  data() {
    return {
      layout: 'base',
      title: 'TITLE'
    }
  }

  render(data) {
    return r(<>
    <Header title={data.title} />
    <main>
      <h1>Hello</h1>
    </main>
    </>)
  }
}
