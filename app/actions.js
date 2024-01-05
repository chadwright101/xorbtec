"use server";

const email = "info@xorbtec.co.za";
const lanEmail = "xgt@xorbtec.co.za";
const phone = "+27 (0) 44 533 5639";

export async function showEmailAddress() {
  return email;
}

export async function showLanEmailAddress() {
  return lanEmail;
}

export async function showPhoneNumber() {
  return phone;
}
