import { Register } from "@/dtos/register";
import directus from "@/helpers/directus";
import { createItem, readItems } from "@directus/sdk";

export async function getRegisters() {
  return await directus.request<Register[]>(readItems("registers"));
}

export async function createRegister(register: Register) {
  return await directus.request<Register>(createItem("registers", register));
}
