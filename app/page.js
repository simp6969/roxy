import Image from "next/image";
import { Header } from "./components/Header";

export default function LangingPage() {
  return (
    <div className="w-[100vw] h-[100vh] pt-[20px] flex justify-center items-center">
      <div className="w-[920px] h-[100%] flex justify-between items-center flex-col">
        <Header />
        <div className="w-[100%] flex justify-center items-center gap-[30px]">
          <h1 className="leftHeaderText">GODDESS</h1>
          <h1>ROXY M.GREYRAT</h1>
          <h1 className="rightHeaderText">SHISHOU</h1>
        </div>
        <div className="mainImage">
          <Image
            className=""
            alt="Full body portrait of Roxy Migurdia from Mushoku Tensei"
            src="/roxy.png"
            height="300"
            width="500"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--primary-bg-color)] to-50%"></div>
      </div>
      <div className="absolute z-[-1] flex flex-col w-[920px] bottom-[30px] justify-center items-center ">
        <p className="text-[520px] main mainText">ROXY</p>
        <div className="w-[715px] flex justify-between">
          <div className="w-[350px]">
            <article className="leading-4 text-[14px] font-medium mainText">
              Roxy is shown as a short statured adult woman in her physical
              teenage appearance between 15 or 16 years old. Her complexion is
              like sand but paler, and has long blue hair tied in 2 braids that
              reach below her waist. Her eyes match the color of her hair. Her
              hair color sometimes appears green in sunlight, which makes people
              distrustful or even afraid of her because of the similarity
              between her and the Superd Tribe&apos;s green hair.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
