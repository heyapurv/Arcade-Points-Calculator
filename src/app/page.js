import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="md:hidden block ">
        <div className="flex items-center justify-center h-screen mx-1 ">
           <div >
            <h1 className="text-center text-4xl font-bold">OOPS...</h1>
           <p className="text-center">This Site is not compatible for small screens</p>
           <p className="text-center" >For Better experience open this site on Laptop/Desktop</p>
           </div>
        </div>
      </div>
      <div className="bg-slate-950 font-mono hidden md:block">
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-slate-950">
        <h1 className="text-6xl my-2  pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center  font-semibold leading-none text-transparent from-white to-slate-900/10  ">Arcade Points Calculator</h1>
        <Form />
      </main>
      <Footer />
      </div>
    </>
  );
}
