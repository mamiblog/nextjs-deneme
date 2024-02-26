"use client";

import { Button } from "@nextui-org/react";
import Atropos from "atropos/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Atropos>
        <div className="border-2 border-[#F5A524] relative">
          <Image
            src="/metaverse.webp"
            className="w-full h-full"
            width={380}
            height={360}
            alt="Metaverse"
            priority={true}
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-bold text-[30px] bg-black/30 text-white hover:backdrop-blur-sm  opacity-0 transition-opacity hover:opacity-100">
            <h1 className="p-10">Başlık ve Açıklama</h1>
          </div>
          <Link href="/">
            <Button className=" w-full rounded-none bold" color="warning">
              Ürün Detayı
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </Atropos>
    </>
  );
}
