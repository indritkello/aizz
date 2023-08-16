"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("508d3d5b-44a4-4202-9047-3ff430ab6ab3");
  }, []);

  return null;
};
