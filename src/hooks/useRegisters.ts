import { getRegisters } from "@/API/registers";
import { Register } from "@/dtos/register";
import { useCallback, useEffect, useState } from "react";

export function useRegisters(fetchOnInitialLoad = false) {
  const [registers, setRegisters] = useState<Register[]>([]);

  const fetchRegisters = useCallback(async function () {
    const registers = await getRegisters();

    setRegisters(registers);
  }, []);

  useEffect(() => {
    fetchOnInitialLoad && fetchRegisters();
  }, [fetchOnInitialLoad]);

  return {
    registers,
    fetchRegisters,
  };
}
