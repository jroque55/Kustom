import BootstrapClient from "./features/Services/BootStrapClient";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const metadata = {
  title: "Kustom",
  description: "Somos una barberia ubicada en Argentina capital, especificamente en el barrio de Chacarita. Nuestra mision es brindar una buena atención al cliente, respetando las normas de calidad y seguridad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
