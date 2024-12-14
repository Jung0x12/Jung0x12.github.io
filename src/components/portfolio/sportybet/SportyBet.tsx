import Image from "next/image";

import LinkWithIcon from "@/components/common/LinkWithIcon";

const SportyBet = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] w-full">
      <div className="flex flex-col w-[45vw] items-end pe-4 2xl:pe-6">
        <div className="h-[20vh]"></div>
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw]">
          <LinkWithIcon
            href="https://play.google.com/store/apps/details?id=com.sportybet.android.gp&hl=en_US"
            title="SportyBet"
          />
          <div className="text-lg mt-6 2xl:text-xl">
            SportyBet App is the ultimate destination for a thrilling sports
            betting experience. It offers a wide range of sports betting
            options, with a special focus on football. Users can enjoy diverse
            markets, competitive odds, attractive bonuses, and an in-house
            casino for added excitement. The platform also includes responsible
            gambling features, seamless bet placement, and live streaming of
            popular matches.
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="h-[16vh]"></div>
        <div className="flex gap-1">
          <div className="w-[17vw]">
            <Image
              src="/SB1.webp"
              alt="SportyBet APP"
              layout="responsive"
              width={0}
              height={0}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[17vw]">
            <Image
              src="/SB2.webp"
              alt="SportyBet APP"
              layout="responsive"
              width={0}
              height={0}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[17vw]">
            <Image
              src="/SB3.webp"
              alt="SportyBet APP"
              layout="responsive"
              width={0}
              height={0}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportyBet;