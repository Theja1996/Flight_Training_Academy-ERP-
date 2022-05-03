import { API_BASE_URL, ACCESS_TOKEN } from "../constants";

const request = (options) => {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // if(localStorage.getItem(ACCESS_TOKEN)) {
  //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  // }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  if (options.formData) {
    options.headers["Content-Type"] = "multipart/form-data";
    delete options["formData"];
  }

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getPositions(data) {
  // if(!localStorage.getItem(ACCESS_TOKEN)) {
  //     return Promise.reject("No access token set.");
  // }
  return request({
    url: API_BASE_URL + "",
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function add(data, url) {
  return request({
    url: API_BASE_URL + url,
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function uniqueCheck(data, url,field) {
  return request({
    url: API_BASE_URL + url+"/unique/"+field,
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function edit(data, url, key) {
  return request({
    url: API_BASE_URL + url + "/" + key,
    method: "PUT",
    body: JSON.stringify(data),
  });
}
export function remove(url, key) {
  return request({
    url: API_BASE_URL + url + "/" + key,
    method: "DELETE",
  });
}
export function get(url, key) {
  return request({
    url: API_BASE_URL + url + "/single/" + key,
    method: "GET",
  });
}
export function getAll(url) {
  return request({
    url: API_BASE_URL + url + "/all",
    method: "GET",
  });
}
export function getMaxId(url) {
  return request({
    url: API_BASE_URL + url + "/max",
    method: "GET",
  });
}

export function remove_key(url, key) {
  return request({
    url: API_BASE_URL + url+"_key" + "/" + key,
    method: "DELETE",
  });
}

export function testMultiPart(formData) {
  // if(!localStorage.getItem(ACCESS_TOKEN)) {
  //     return Promise.reject("No access token set.");
  // }
  //   console.log("data type", typeof productData);

  return request({
    url: API_BASE_URL + "fileuploadTest",
    method: "POST",
    body: formData,
    formData: true,
  });
}
