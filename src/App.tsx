import { lazy } from "react";
import "./app.scss";
import { Suspensed } from "./widgets/suspensed/suspensed";

import { Navbar } from "./components/navbar/navbar";

// Components
const Brand = lazy(() =>
  import("./components").then((m) => ({ default: m.Brand }))
);
const CTA = lazy(() =>
  import("./components").then((m) => ({ default: m.CTA }))
);

// Containers
const Header = lazy(() =>
  import("./containers").then((m) => ({ default: m.Header }))
);
const Blog = lazy(() =>
  import("./containers").then((m) => ({ default: m.Blog }))
);
const Features = lazy(() =>
  import("./containers").then((m) => ({ default: m.Features }))
);
const Footer = lazy(() =>
  import("./containers").then((m) => ({ default: m.Footer }))
);
const GPT3 = lazy(() =>
  import("./containers").then((m) => ({ default: m.GPT3 }))
);
const Possiblity = lazy(() =>
  import("./containers").then((m) => ({ default: m.Possiblity }))
);

//
//
//

function App() {
  return (
    <div className="app">
      {/* Upper Section */}

      <div className="gradient__bg">
        <Navbar />
        <Suspensed height={720}>
          <Header />
        </Suspensed>
      </div>

      {/* Main */}

      <main className="main-content">
        <Suspensed>
          <Brand />
        </Suspensed>
        <Suspensed>
          <GPT3 />
        </Suspensed>
        <Suspensed>
          <Features />
        </Suspensed>
        <Suspensed>
          <Possiblity />
        </Suspensed>

        {/*  */}

        <Suspensed>
          <CTA />
        </Suspensed>
        <Suspensed>
          <Blog />
        </Suspensed>
      </main>

      {/* Footer */}

      <Suspensed>
        <Footer />
      </Suspensed>

      {/*  --- End  --- */}
    </div>
  );
}

export default App;
