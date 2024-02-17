import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ImageProvider from "@/context/EditorProvider.js";
import ToolProvider from "@/context/ToolProvider.js";
import EditorContainer from "@/components/EditorContainer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vividly editor</title>
        <meta name="description" content="Image editor created with Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <ImageProvider>
          <Header />
          <ToolProvider>
            <main className="flex grow bg-gray-100 px-6">
              <Sidebar />
              <EditorContainer />
            </main>
          </ToolProvider>
        </ImageProvider>
      </div>
    </>
  );
}
