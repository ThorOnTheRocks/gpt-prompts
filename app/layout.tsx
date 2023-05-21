import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import '../styles/global.css';

export const metadata = {
  title: "GPT-Prompts",
  description: "Create, Share & Discover AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
