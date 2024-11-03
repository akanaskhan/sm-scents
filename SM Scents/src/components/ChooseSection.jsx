import { FaHandshake, FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { PiGiftBold, PiGiftDuotone } from "react-icons/pi";
import { TiMediaPauseOutline, TiMediaRewindOutline } from "react-icons/ti";
import { FieldTimeOutlined } from "@ant-design/icons";
import { CiDeliveryTruck, CiGift } from "react-icons/ci";
import { TbArrowsExchange, TbTruckDelivery } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
export default function ChooseSection() {
  return (
    <>
      <div className="container py-5  rounded">
        <div className="uppercase text-center text-black text-3xl font-bold">
          Why Choose Us?
        </div>
        <div className="grid grid-cols-1 h-2/3  md:grid-cols-3 lg:grid-cols-3 lg:h-full mt-6 lg:mt-10 gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <PiGiftDuotone className="w-1/6 h-full " />
            </div>
            <div className="uppercase text-2xl text-center">
              Free Fragrance Box & spray tester
            </div>
          </div>
          <div className="flex flex-col">
            <div  className="flex justify-center">
              <TbArrowsExchange className="w-1/6 h-full" />
            </div>
            <div className="uppercase text-2xl text-center">Easy return and exchange</div>
          </div>
          <div className="flex flex-col">
            <div  className="flex justify-center">
              <FaHandshake className="w-1/6 h-full" />
            </div>
            <div className="uppercase text-2xl text-center">
              Dedicated human representative to Assist you
            </div>
          </div>
          </div>
            
          <div className="grid grid-cols-1 h-2/3  md:grid-cols-2 lg:grid-cols-2 lg:h-full mt-7 lg:mt-28  mb-3 gap-4">
          <div className="flex flex-col">
            <div  className="flex justify-center">
              <IoIosTimer className="w-1/6 h-full" size={10} />
            </div>
            <div className="uppercase text-2xl text-center">Long lasting fragrance</div>
          </div>
          <div className="flex flex-col">
            <div  className="flex justify-center">
              <TbTruckDelivery className="w-1/6 h-full" />
            </div>
            <div className="uppercase text-2xl text-center">Orders ready to Ship</div>
          </div>
        </div>
      </div>
    </>
  );
}
