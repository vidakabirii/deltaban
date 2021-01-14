import httpRequestHandler from "@/service/api/httpRequestHandler";

export const get = async (requestUrl) => {
  const URL = `customsearch/v1?key=AIzaSyBOhhoHK54OUsYee8FDQkOsLEg23vGjqzg&cx=407f30d1f6bdc2ea3&q=${requestUrl}`;
  return await httpRequestHandler.get(URL).then((response) => response);
};
