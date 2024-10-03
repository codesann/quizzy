import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/layout/Footer/footer';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <AppRoutes />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
