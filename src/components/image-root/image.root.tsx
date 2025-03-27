"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ImageRootProps = {
  className?: string;
  src: string | StaticImport;
};

export const ImageRoot: React.FC<ImageRootProps> = (props) => {
  return (
    <figure>
      <Image
        {...props}
        src={props.src}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
    </figure>
  );
};
