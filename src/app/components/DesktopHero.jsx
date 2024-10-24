import Image from "next/image";
import React from "react";
import desktopHero from "../../../public/desktopHero.png";
import logo from "../../../public/map.png";
import aldar from "../../../public/aldar.png";
import WAIMG from "../../../public/whatsapp.png";
import DesktopForm from "./DesktopForm";

const DesktopHero = ({ showThankYouPopup }) => {
  const handleFormSuccess = () => {
    showThankYouPopup();
  };

  return (
    <div className="w-full mx-auto overflow-hidden bg-white">
      <div className="relative h-screen max-h-[1020px]">
        <Image
          alt="hero image"
          src={desktopHero}
          quality={80}
          priority={true}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          loading="eager"
        />

        <div className="absolute transform -translate-x-1/2 top-10 left-1/2">
          <Image
            src={logo}
            alt="Logo"
            width={147}
            height={55}
            priority={true}
          />
        </div>

        <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
          <Image
            src={aldar}
            alt="Logo"
            width={83}
            height={83}
            priority={true}
          />
        </div>

        <div className="absolute z-20 text-white transform -translate-y-1/2 top-1/2 left-[5%]">
          <h1 className="text-[55px] font-bold uppercase leading-[56px] mb-4">
            Biggest <br /> Investor’s Meet <br /> in Hyderabad
          </h1>
          <h2 className="text-[20px] leading-[28.9px] uppercase font-medium mb-4 text-[#FFD13A] ">
            9-10 Nov. 2024 <span className="mx-2">|</span> Park Hyatt Hotel,
            Hyderabad
          </h2>
        </div>
        <div className=" hidden w-[452px] mt-6 absolute z-20 bg-white rounded-[8px]  transform -translate-y-1/2 top-1/2 right-[8%] py-8 px-4 xl:flex xl:flex-col items-center ">
          <div className="flex justify-center gap-2 mb-3 text-center ">
            <span className="mt-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_441)">
                  <path
                    d="M7.5996 46.6857H7.59885C13.0393 47.0607 18.5171 47.2482 23.9978 47.2482C29.4764 47.2482 34.9585 47.0607 40.4003 46.6857C42.0291 46.5705 43.5615 45.8714 44.7163 44.717C45.871 43.5626 46.5703 42.0302 46.6859 40.4015C47.4352 29.4804 47.4352 18.5207 46.6859 7.5996C46.5705 5.97083 45.8713 4.43839 44.7167 3.28379C43.5621 2.1292 42.0297 1.42998 40.4009 1.3146C29.4799 0.564974 18.5204 0.564974 7.59937 1.3146C5.97072 1.42986 4.43834 2.12888 3.28368 3.28325C2.12903 4.43763 1.42965 5.96985 1.314 7.59847C0.564675 18.5196 0.564675 29.4793 1.314 40.4004C1.42936 42.0293 2.12864 43.5619 3.28336 44.7165C4.43808 45.8712 5.97069 46.5704 7.5996 46.6857Z"
                    fill="#F5E8DD"
                  />
                  <path
                    d="M36.75 18.75V34.905C36.7516 35.3909 36.5608 35.8577 36.2193 36.2034C35.8778 36.5491 35.4134 36.7456 34.9275 36.75H13.0725C12.5866 36.7456 12.1222 36.5491 11.7807 36.2034C11.4392 35.8577 11.2484 35.3909 11.25 34.905V18.75H36.75Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M14.25 34.905V20.25H11.25V34.905C11.2484 35.3909 11.4392 35.8577 11.7807 36.2034C12.1222 36.5491 12.5866 36.7456 13.0725 36.75H16.0725C15.5866 36.7456 15.1222 36.5491 14.7807 36.2034C14.4392 35.8577 14.2484 35.3909 14.25 34.905Z"
                    fill="#CCDCEB"
                  />
                  <path
                    d="M24 33.75C26.8995 33.75 29.25 31.3995 29.25 28.5C29.25 25.6005 26.8995 23.25 24 23.25C21.1005 23.25 18.75 25.6005 18.75 28.5C18.75 31.3995 21.1005 33.75 24 33.75Z"
                    fill="#FFCB07"
                  />
                  <path
                    d="M34.9275 13.5C35.4134 13.5044 35.8778 13.7009 36.2193 14.0466C36.5608 14.3923 36.7516 14.8591 36.75 15.345V20.25H11.25V15.345C11.2484 14.8591 11.4392 14.3923 11.7807 14.0466C12.1222 13.7009 12.5866 13.5044 13.0725 13.5H34.9275Z"
                    fill="#FF6461"
                  />
                  <path
                    d="M15.75 18.75C15.3522 18.75 14.9706 18.592 14.6893 18.3107C14.408 18.0294 14.25 17.6478 14.25 17.25V13.845C14.2507 13.7292 14.2623 13.6137 14.2846 13.5H13.0725C12.5866 13.5044 12.1222 13.7009 11.7807 14.0466C11.4392 14.3923 11.2484 14.8591 11.25 15.345V20.25H36.75V18.75H15.75Z"
                    fill="#F2524D"
                  />
                  <path
                    d="M18 15V11.25C18 11.0511 17.921 10.8603 17.7803 10.7197C17.6397 10.579 17.4489 10.5 17.25 10.5C17.0511 10.5 16.8603 10.579 16.7197 10.7197C16.579 10.8603 16.5 11.0511 16.5 11.25V15C16.3011 15 16.1103 15.079 15.9697 15.2197C15.829 15.3603 15.75 15.5511 15.75 15.75C15.75 15.9489 15.829 16.1397 15.9697 16.2803C16.1103 16.421 16.3011 16.5 16.5 16.5H18C18.1989 16.5 18.3897 16.421 18.5303 16.2803C18.671 16.1397 18.75 15.9489 18.75 15.75C18.75 15.5511 18.671 15.3603 18.5303 15.2197C18.3897 15.079 18.1989 15 18 15Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M24.75 16.5C24.9489 16.5 25.1397 16.421 25.2803 16.2803C25.421 16.1397 25.5 15.9489 25.5 15.75C25.5 15.5511 25.421 15.3603 25.2803 15.2197C25.1397 15.079 24.9489 15 24.75 15V11.25C24.75 11.0511 24.671 10.8603 24.5303 10.7197C24.3897 10.579 24.1989 10.5 24 10.5C23.8011 10.5 23.6103 10.579 23.4697 10.7197C23.329 10.8603 23.25 11.0511 23.25 11.25V15C23.0511 15 22.8603 15.079 22.7197 15.2197C22.579 15.3603 22.5 15.5511 22.5 15.75C22.5 15.9489 22.579 16.1397 22.7197 16.2803C22.8603 16.421 23.0511 16.5 23.25 16.5H24.75Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M31.5 15V11.25C31.5 11.0511 31.421 10.8603 31.2803 10.7197C31.1397 10.579 30.9489 10.5 30.75 10.5C30.5511 10.5 30.3603 10.579 30.2197 10.7197C30.079 10.8603 30 11.0511 30 11.25V15C29.8011 15 29.6103 15.079 29.4697 15.2197C29.329 15.3603 29.25 15.5511 29.25 15.75C29.25 15.9489 29.329 16.1397 29.4697 16.2803C29.6103 16.421 29.8011 16.5 30 16.5H31.5C31.6989 16.5 31.8897 16.421 32.0303 16.2803C32.171 16.1397 32.25 15.9489 32.25 15.75C32.25 15.5511 32.171 15.3603 32.0303 15.2197C31.8897 15.079 31.6989 15 31.5 15Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M26.25 27.75H24.75V26.25C24.75 26.0511 24.671 25.8603 24.5303 25.7197C24.3897 25.579 24.1989 25.5 24 25.5C23.8011 25.5 23.6103 25.579 23.4697 25.7197C23.329 25.8603 23.25 26.0511 23.25 26.25V28.5C23.25 28.6989 23.329 28.8897 23.4697 29.0303C23.6103 29.171 23.8011 29.25 24 29.25H26.25C26.4489 29.25 26.6397 29.171 26.7803 29.0303C26.921 28.8897 27 28.6989 27 28.5C27 28.3011 26.921 28.1103 26.7803 27.9697C26.6397 27.829 26.4489 27.75 26.25 27.75Z"
                    fill="#EDF8FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_441">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="">
              <h2 className="text-[#A18D7C] text-[30px] leading-[43.35px] font-bold  ">
                BOOK YOUR SPOT
              </h2>
              <p className="text-sm leading-[17.7px]  text-[#828282]  ">
                You will save 5-10% more if you’re booking <br /> on event day.
              </p>
            </div>
          </div>
          <DesktopForm formName={"topForm"} onSuccess={handleFormSuccess}/>
          <div className={"whatsAppIcon pt-2"}>
              <a
                id={"waLink"}
                href="https://wa.me/18106769485?text=Hi,%20I%20want%20to%20know%20more%20about%20Hyderabad%20Event"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Image
                  quality={100}
                  src={WAIMG}
                  width={170}
                  height={75}
                  alt="whatsapp bot"
                />
              </a>
            </div>
        </div>
      </div>

      <div className="bg-[#F5E9DE]">
        <div className="py-10 px-8 xl:px-24 max-w-[1920px] mx-auto">
          <h1 className="mb-2 mt-8 uppercase font-semibold text-[38px] leading-[54.91px]">
            Exclusive Event Offering
          </h1>

          <div className="text-[22px] text-left leading-[32.2px] font-medium ">
            <ul>
              <li>• Interest Free payment Plan</li>
              <li>• Free 2 Days Dubai Trip</li>
              <li>• 4% DLD Waiver</li>
              <li>• Zero service charges for 2 Years</li>
              <li>• Fully Furnished Apartments near Wynn Resort</li>
            </ul>
          </div>
          <div className="flex justify-center pt-4 ">
            <span>
              <svg
                width="35"
                height="17"
                viewBox="0 0 35 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7681 16.307C16.9478 16.4692 17.1825 16.5486 17.4171 16.5486C17.65 16.5486 17.8846 16.4692 18.0643 16.307L34.5643 1.41211C34.9218 1.08939 34.9218 0.564763 34.5643 0.242041C34.2068 -0.0806804 33.6256 -0.0806804 33.2681 0.242041L17.4171 14.551L1.56429 0.242041C1.20679 -0.0806804 0.625625 -0.0806804 0.268125 0.242041C-0.089375 0.564763 -0.089375 1.08939 0.268125 1.41211L16.7681 16.307Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
