const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event, context) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something Went Wrong" });
  }
};
