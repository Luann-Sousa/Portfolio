# Iniciando Projeto</br>

* Para criar um projeto em next-js navegue até onde deseja criar seu projeto(pasta) e em seu terminal digite o seguite comando .</br>
  
  -> npx create react-app myproject.</br>

## Configurando Typescript ao projeto.</br>
    * Precisamos fazer algumas configurações para esta instalando corretamente o *Typescript* no projeto, vamos precisar de 4(quatro) modúlos.</br>

    * yarn add typescript .
    * yarn add @types/react.
    * yarn add @types/react-dom.
    * yarn add @types/node.

    * Após a depedências acima foram instaladas agente agora precisar fazer as alterações nas extensãoes do nosso projeto mudando de js. para tsx já que configuramos nosso projeto para typescript.


## Adicionando Styled-components
    
    * Vamos está implementando a libary styled0=-components em nosso projeto.</br>

    * yarn add styled-components.
    * yarn add @types/styled-components.
    * npm install styled-components.
    * npm install @types/styled-componets.

1. Agora com o styled-components-instalado se você simplesmente já que usa-lo beleza irá ate conseguir usar em seu projeto mais quando você colocar pra seu navegador roda (yarn dev ), você vai ter um erro, isso por que ainda não congiguramos a configuração correta, e não se preocupem estamos fazendo isso em seguida. </br>


2. Adicionar o plugin do babel, mais precisamos instala-lo de forma que vamos utilizar em desenvolvimento.
   . yarn add -D babel-plugin-styled-components. </br>


3. Em seguida, iremos criar um arquivo na raiz do nosso projeto chamado .babelrc ou pedemos estár digitado em nosso terminar o seguinte comando (touch .babelrc => cria o arquivo automaticamente). </br>


4. Configuração do nosso arquio .babelrc vamos passar a seguinte configuração. </br>
   
  * Adicionar um babel/preset
  * Adicione m plugin de styled-components, e defina a bandeira do (ssr) como verdadeira no (DisplayNamet).

  * Nota: displayName gerará nomes de classe mais fáceis de depurar (conterá também o nome do componente em vez de apenas hashes); pré-processo – recurso experimental desligado explicitamente.



   *
   {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}


1. Criar um arquivo chamado _document.js dentro da pasta src e dentro de pages.
    * Você pode criar o arquivo _document.js na mão ou digitar seguinte comando.
      * touch pages/_document.js.

2. Quando criamos por padrão o nosso arquivo __document.js ele segue a seguinte configuração.

</b>
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }     
    return renderPage();
  }

  render () {    
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}*
</br>

    *Nota: Se você já usou o aplicativo create-react antes, você está acostumado a saber onde está seu documento principal, bem, próximo.js não expõe este arquivo, mas você pode substituir o documento padrão adicionando um arquivo _document.js na pasta de páginas.*
 


8. Quando criamos por  o nosso arquivo __document.js para podermos estar utilizando styled-componets devemos seguir essa configuração.

   [
       import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

   ]
 
9. Uma vez feito isso, reinicie seu servidor e o erro deve desaparecer, sua tag deve ser vermelha e os componentes estilizados SSR devem funcionar.
## Isso, é Para Recapitular.
    
    * Vamos está implementando a libary styled0=-components em nosso projeto.</br>

    * Crie um projeto e instale dependências.
    * Adicionar scripts.
    * Crie uma pasta de páginas e uma primeira página.
    * Adicionar Styled-components.
    * Adicione um plugin babel e um arquivo personalizado.babelrc.
    * Crie um arquivo _document.js personalizado.
## Libarys </br>

-> Styled-Components</br>