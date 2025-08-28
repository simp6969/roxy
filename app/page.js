import Image from "next/image";
import { Header } from "./components/Header";

export default function LangingPage() {
  return (
    <div className="w-[100dvw] h-[100dvh] overflow-hidden pt-[20px] flex justify-center items-center">
      <div className="max-w-screen-xl w-full h-full flex justify-between items-center flex-col px-4">
        <Header />
        <div className="w-full flex justify-center items-center gap-[10px] sm:gap-[30px] flex-col sm:flex-row">
          <h1 className="leftHeaderText text-2xl sm:text-[26px]">GODDESS</h1>
          <h1 className="text-center text-xl sm:text-[26px]">ROXY M.GREYRAT</h1>
          <h1 className="rightHeaderText text-2xl sm:text-[26px]">SHISHOU</h1>
        </div>
        <div className="mainImage">
          <Image
            className="w-full h-auto max-w-[500px]"
            alt="Full body portrait of Roxy Migurdia from Mushoku Tensei"
            src="/roxy.png"
            height="300"
            width="500"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--primary-bg-color)] to-50%"></div>
      </div>
      <div className="absolute z-[-1] flex flex-col w-full bottom-[30px] px-4 justify-center items-center">
        <p className="text-[120px] sm:text-[300px] md:text-[520px] main mainText">
          ROXY
        </p>
        <div className="w-full flex justify-between px-4">
          <div className="max-w-[715px] w-full flex justify-end mx-auto sm:justify-between">
            <div className="w-full sm:w-[350px]">
              <article className="leading-4 text-[12px] sm:text-[14px] font-medium mainText text-center sm:text-left">
                Roxy is shown as a short statured adult woman in her physical
                teenage appearance between 15 or 16 years old. Her complexion is
                like sand but paler, and has long blue hair tied in 2 braids
                that reach below her waist. Her eyes match the color of her
                hair. Her hair color sometimes appears green in sunlight, which
                makes people distrustful or even afraid of her because of the
                similarity between her and the Superd Tribe&apos;s green hair.
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
