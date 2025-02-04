import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Teste Frontend",
  description: "Projeto com Next.js e autenticação",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html>
        <body>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <AuthProvider>
              {children}
              <Toaster position="top-right" offset={80} richColors />
            </AuthProvider>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
