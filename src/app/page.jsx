import Image from "next/image";
import result from "@/images/pages/home/results.svg";
import form from "@/images/pages/home/form.svg";

export default function Home() {
  return (
    <div className="pt-16vh flex flex-col justify-around items-center">
      <div className="w-[30vw] h-[15vh] mt-[20vh] mb-[8vh]">
        <Image src={result}></Image>
      </div>
      <div className="relative w-[48vw]">
        <Image className="w-full" src={form}></Image>
        <div className="absolute  top-0 left-negative-[3vw] w-[48vw] flex flex-col justify-start items-center">
          <form className="pt-[4vw] block" action="/register" method="post">
            <div>
              <div>
                <label
                  for="name"
                  className="mt-[1vw] text-yellow-400 text-left w-full h-[6vh] text-[2vw] font-medium leading-[4vw] tracking-tighter"
                >
                  Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-[28vw] h-[3vw] text-yellow-400 text-[1.5vw] border-2 border-yellow-400 rounded-md bg-opacity-10 bg-white"
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  for="email"
                  className="mt-[1vw] text-yellow-400 text-left w-full h-[6vh] text-[2vw] font-medium leading-[4vw] tracking-tighter"
                >
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[28vw] h-[3vw] text-yellow-400 text-[1.5vw] border-2 border-yellow-400 rounded-md bg-opacity-10 bg-white"
                  required
                />
              </div>
            </div>
          </form>

          <div className="pl-[2vw] flex justify-center flex-wrap">
            <button
              className="mt-[3vw] mr-[2.5vw] bg-yellow-400 w-[15vw] h-[3vw] text-white border-none rounded-md text-[1.5vw] font-normal font-goldman text-center"
              id="google"
            >Show Result</button>
          </div>
        </div>
      </div>
    </div>
  );
}
