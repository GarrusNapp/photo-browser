import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "333f35dba1d96f6e0054af3239568d40a4d493a1665e6f013e157af048584c11",
  secret: "ced182e1cd9d327cba794467874a80008b9d64bfb2abce45b74296187a506d04"
});

export { unsplash, toJson };
