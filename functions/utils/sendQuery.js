const axios = require("axios");
require("dotenv").config();

module.exports = async (query, variables) => {
  const {
    data: { data, err },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });
  if (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
  return data;
};
