import instance from "./instance";

export function getContactsAxios() {
  return instance.get("contacts").then((res) => res.data);
}

export function addContactAxios(contact) {
  return instance.post("contacts", contact).then((res) => res.data);
}

export function deleteContactAxios(id) {
  return instance.delete(`contacts/${id}`).then((res) => res.data);
}