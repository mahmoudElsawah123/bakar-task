import React, { memo } from "react";
import { FaCcVisa } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"

export const HomePage = memo(({ data }) => {
  const cardSymbol = "\u2022";
  // Symbol the card number
  const CardNumberSymbol = `${cardSymbol.repeat(4)} ${cardSymbol.repeat(
    4
  )} ${cardSymbol.repeat(4)} ${data.last4}`;
  
  // Card content details
  const cardContent = [
    {
      title: "Card number",
      val: CardNumberSymbol,
    },
    {
      title: "CVV",
      val: cardSymbol.repeat(3),
    },
    {
      title: "Expiration",
      val: `${data.expiryMonth}/${data.expiryYear}`,
    },
    {
      title: "Brand",
      val: <RiVisaLine size={30} />,
    },
    {
      title: "Cardholder",
      val: data.cardholderName,
    },
    {
      title: "Card type",
      val: "Virtual",
    },
    {
      title: "Created at",
      val: "Nov 15, 2023, 9:32 PM",
    },
    {
      title: "Billing address",
      val: "123 Main Street",
    },
  ];

  // Card buttons labels
  const cardBtn = ["Freeze card", "Replace card", "Cancel card"];

  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[600px] m-auto h-auto shadow-lg p-5 rounded-lg">
        
        {/* Select card dropdown */}
        <Select defaultValue="m@example.com">
          <SelectTrigger>
            <SelectValue defaultValue="m@example.com" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="m@example.com">
              <div className="flex items-center gap-3">
                {data.brand == "Visa" ? (
                  <FaCcVisa size={25} className="text-blue-500" />
                ) : (
                  <RiMastercardLine size={25} />
                )}
                {data.cardholderName}
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Visa Card Section */}
        <div className="w-full h-auto border-2 border-black mt-14 px-4 sm:px-5 md:px-6 flex justify-center rounded-lg shadow-lg">
          <div className="w-full h-fit pb-8">
            {/* Card logo */}
            <div className="flex justify-end">
              {data.brand == "Visa" ? (
                <RiVisaLine size={50} className="text-blue-500" />
              ) : (
                <RiMastercardLine size={50} />
              )}
            </div>

            {/* Card number */}
            <div className="text-xl font-mono text-gray-900 my-4 sm:my-6">
              {CardNumberSymbol}
            </div>

            {/* Card details: Cardholder name, Expiry date, CVC */}
            <div className="flex justify-between mt-5 text-sm sm:text-base text-gray-700">
              <div>
                <p className="text-xs text-gray-500">Cardholder</p>
                <p className="font-semibold">{data.cardholderName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Expiry date</p>
                <p className="font-semibold">{`${
                  data.expiryMonth
                }/${data.expiryYear.toString().replace("20", "")}`}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">CVC</p>
                <p className="font-semibold font-mono">
                  {cardSymbol.repeat(3)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Content Section */}
        <div className="my-md">
          {cardContent.map((item, index) => {
            return (
              <div
                key={index}
                className="font-mono text-[16px] flex justify-between items-center py-1 "
              >
                <p>{item.title}</p>
                <p>{item.val}</p>
              </div>
            );
          })}
        </div>

        {/* Card Buttons Section */}
        <div className="mt-md">
            {cardBtn.map((item , index)=>{
                return (
                    <Button className="w-full font-semibold py-5 mt-5" key={index} variant="outline">{item}</Button>
                )
            })}
        </div>
      </div>
    </div>
  );
});

export default HomePage;
