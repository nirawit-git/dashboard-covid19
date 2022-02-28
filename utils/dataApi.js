import { request } from "./api";

const HOSNAME = process.env.baseURL;
const HOSNAME_CIDReader = process.env.apiCIDReader;

///////////////////////// อ่านบัตรประชาชน ///////////////////////////

export function readCIDSmartCard() {
  const url = `${HOSNAME_CIDReader}/read-card-only?readImageFlag=false`;
  return request("get", url, {}, false);
}

///////////////////////// CALL API ///////////////////////////
export function login(data) {
  const url = `${HOSNAME}/login`;
  return request("post", url, { data }, false);
}

export function checkData(cid) {
  const url = `${HOSNAME}/check/${cid}`;
  return request("get", url, {}, true);
}

export function checkDataToDB(cid) {
  const url = `${HOSNAME}/check-cvp-moph-todb/${cid}`;
  return request("get", url, {}, true);
}

export function sendAPIMessageMoph(data) {
  const url = `${HOSNAME}/send-message-to-user`;
  return request("post", url, data, true);
}

export function checkLabelCode(label_code) {
  const url = `${HOSNAME}/check_label_code/${label_code}`;
  return request("get", url, {}, true);
}

export function delLabelCode(label_code) {
  const url = `${HOSNAME}/del_label_code/${label_code}`;
  return request("get", url, {}, true);
}

export function getNationality() {
  const url = `${HOSNAME}/get_nationality`;
  return request("get", url, {}, true);
}

export function checkPasstportAPI(passport, nationality) {
  const url = `${HOSNAME}/get_cid_from_passport/${passport}/${nationality}`;
  return request("get", url, {}, true);
}
