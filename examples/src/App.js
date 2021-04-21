import React from "react";
import TextSwap from "react-text-swap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

// ------------------------
//         Examples
// ------------------------

const Example1 = () => (
  <p>
    The <em>fade</em> animation is the default, and is super&nbsp;
    <TextSwap strings={["convenient.", "simple.", "easy.", "awesome."]} />
  </p>
);

const example1String = `<p>
  The <em>fade</em> animation is the default, and is super&nbsp;
  <TextSwap strings={["convenient.", "simple.", "easy.", "awesome."]} />
</p>`;

const Example2 = () => (
  <div>
    <p>
      Use the <em>slideUp</em> animation to show off your&nbsp;
      <TextSwap
        strings={["text.", "words.", "strings."]}
        animationType="slideUp"
      />
    </p>
    <p>
      Use the <em>slideDown</em> animation to show off your&nbsp;
      <TextSwap
        strings={["text.", "words.", "strings."]}
        animationType="slideDown"
      />
    </p>
    <p>
      Use the <em>blur</em> animation to show off your&nbsp;
      <TextSwap
        strings={["text.", "words.", "strings."]}
        animationType="blur"
      />
    </p>
  </div>
);

const example2String = `<p>
  Use the <em>slideUp</em> animation to show off your&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    animationType='slideUp'
  />
</p>

<p>
  Use the <em>slideDown</em> animation to show off your&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    animationType='slideDown'
  />
</p>

<p>
  Use the <em>blur</em> animation to show off your&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    animationType='blur'
  />
</p>`;

const Example3 = () => (
  <div>
    <p>
      Use the <em>seconds</em> prop to slow down your&nbsp;
      <TextSwap strings={["text.", "words.", "strings."]} seconds={3} />
    </p>
    <p>
      Or to speed up your&nbsp;
      <TextSwap strings={["text.", "words.", "strings."]} seconds={1} />
    </p>
    (By default, it's set to 2 seconds).
  </div>
);

const example3String = `<p>
  Use the <em>seconds</em> prop to slow down your&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    seconds={3}
  />
</p>

<p>
  Or to speed up your&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    seconds={1}
  />
</p>`;

const Example4 = () => (
  <div>
    <p>
      Putting&nbsp;
      <TextSwap strings={["text", "words", "strings"]} />
      &nbsp;in the middle of a sentence can be tricky.
    </p>
    <p>
      So use the <em>fixedWidthInPx</em> prop to keep your&nbsp;
      <TextSwap strings={["text", "words", "strings"]} fixedWidthInPx={50} />
      &nbsp;from resizing the sentence.
    </p>
  </div>
);

const example4String = `<p>
  Putting&nbsp;
  <TextSwap strings={["text", "words", "strings"]} />
  &nbsp;in the middle of a sentence can be tricky.
</p>

<p>
  So use the <em>fixedWidthInPx</em> prop to keep your&nbsp;
  <TextSwap
    strings={["text", "words", "strings"]}
    fixedWidthInPx={45}
  />
  &nbsp;from resizing the sentence.
</p>`;

const Example5 = () => (
  <div className="center-align">
    <p>
      We get the same problem when we center&nbsp;
      <TextSwap strings={["text.", "words.", "strings."]} />
    </p>
    <p>
      Once again, <em>fixedWidthInPx</em> brings order to our&nbsp;
      <TextSwap strings={["text.", "words.", "strings."]} fixedWidthInPx={50} />
    </p>
  </div>
);

const example5String = `<p>
  We get the same problem when we center&nbsp;
  <TextSwap strings={["text.", "words.", "strings."]} />
</p>

<p>
  Once again, <em>fixedWidthInPx</em> brings order to our&nbsp;
  <TextSwap
    strings={["text.", "words.", "strings."]}
    fixedWidthInPx={50}
  />
</p>`;

const Example5a = () => (
  <div className="center-align">
    <p>
      Sometimes we'll see weird spacing&nbsp;
      <TextSwap
        strings={["difficulties.", "issues.", "bugs."]}
        fixedWidthInPx={82}
      />
    </p>
    <p>
      But using the <em>fixedAlign</em> prop can solve those&nbsp;
      <TextSwap
        strings={["difficulties.", "issues.", "bugs."]}
        fixedWidthInPx={82}
        fixedAlign="left"
      />
    </p>
  </div>
);

const example5aString = `<p>
  Sometimes we'll see weird spacing&nbsp;
  <TextSwap
    strings={["difficulties.", "issues.", "bugs."]}
    fixedWidthInPx={82}
  />
</p>

<p>
  But using the <em>fixedAlign</em> prop can solve those&nbsp;
  <TextSwap
    strings={["difficulties.", "issues.", "bugs."]}
    fixedWidthInPx={82}
    fixedAlign="left"
  />
</p>`;

const Example6 = () => (
  <div className="center-align">
    <h2>
      Style your&nbsp;
      <div className="bold-yellow">
        <TextSwap
          strings={["text.", "words.", "strings."]}
          fixedWidthInPx={70}
          fixedAlign="left"
        />
      </div>
    </h2>
    <h2>
      Be&nbsp;
      <div className="display-font">
        <TextSwap
          strings={["creative", "unique", "clever", "artistic"]}
          fixedWidthInPx={85}
          animationType="blur"
        />
      </div>
      &nbsp;about it.
    </h2>
    <h2>
      Make your site look&nbsp;
      <div className="black-box">
        <TextSwap
          strings={["cool.", "awesome.", "weird."]}
          animationType="slideDown"
          fixedWidthInPx={110}
        />
      </div>
    </h2>
  </div>
);

const example6String = `<h2>
  Style your&nbsp;
  <div className="my-bold-yellow-class">
    <TextSwap
      strings={["text.", "words.", "strings."]}
      fixedWidthInPx={70}
      fixedAlign="left"
    />
  </div>
</h2>

<h2>
  Be&nbsp;
  <div className="my-display-font-class">
    <TextSwap
      strings={["creative", "unique", "clever", "artistic"]}
      animationType="blur"
      fixedWidthInPx={85}
    />
  </div>
  &nbsp;about it.
</h2>

<h2>
  Make your site look&nbsp;
  <div className="my-black-box-class">
    <TextSwap
      strings={["cool.", "awesome.", "weird."]}
      animationType="slideDown"
      fixedWidthInPx={100}
    />
  </div>
</h2>`;

// ------------------------
//         Helpers
// ------------------------

const Syntax = ({ children }) => (
  <div>
    <SyntaxHighlighter language="jsx" style={xonokai} wrapLines={true}>
      {children}
    </SyntaxHighlighter>
  </div>
);

const Example = ({ component, codeString }) => (
  <div className="example">
    {component}
    <Syntax>{codeString}</Syntax>
  </div>
);

// ------------------------
//       Sub-Components
// ------------------------

const Header = () => (
  <React.Fragment>
    <h1>react-text-swap</h1>
    <h2>
      an animation library for swapping{" "}
      <span className="header-text-swap">
        <TextSwap strings={["text", "words", "strings"]} fixedWidthInPx={38} />
      </span>
    </h2>
    <SyntaxHighlighter language="bash" style={xonokai}>
      {"npm install react-text-swap"}
    </SyntaxHighlighter>
    <a className="button" href="GITHUB_LINK">
      GitHub
    </a>
  </React.Fragment>
);

// ------------------------
//       Main Component
// ------------------------

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Examples</h1>
      <Example component={<Example1 />} codeString={example1String} />
      <Example component={<Example2 />} codeString={example2String} />
      <Example component={<Example3 />} codeString={example3String} />
      <Example component={<Example4 />} codeString={example4String} />
      <Example component={<Example5 />} codeString={example5String} />
      <Example component={<Example5a />} codeString={example5aString} />
      <Example component={<Example6 />} codeString={example6String} />
    </div>
  );
}

export default App;
