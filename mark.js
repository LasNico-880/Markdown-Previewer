const defaultMarkdown = `# Título H1
## Subtítulo H2

Este es un [enlace](https://www.freecodecamp.org)

Aquí hay código en línea: \`console.log('Hola mundo')\`

\`\`\`
Bloque de código:
function saludar() {
  return 'Hola!';
}
\`\`\`

- Lista
- Con
- Viñetas

> Esto es una cita en bloque

**Este texto está en negrita**

![Imagen de prueba](https://via.placeholder.com/150)
`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    };
  }

  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={this.handleChange}
          style={{ width: '100%', height: '200px' }}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.state.markdown, { breaks: true }),
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));
