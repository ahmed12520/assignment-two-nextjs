import About from "./components/about";
import Header from "./components/header";

import Mypage from "./components/mypage";
import Newpage from "./components/newpage";

export default function Home() {
  return (
    <>
    <h1>this is homepage </h1>
    <Header/>
    <About/>
    <Mypage/>
    <Newpage/>
    </>
  );
}
