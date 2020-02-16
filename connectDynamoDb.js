var AWS = require("aws-sdk");

async function connectDynamoDb() {
  AWS.config.update({
    region: "us-west-2",
    endpoint: "http://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIA3RO2647EUO6PE3B3",
    secretAccessKey: "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"
  });

  const docClient = await new AWS.DynamoDB.DocumentClient({});
  return docClient;
}

module.exports = {
  connectDynamoDb
};
