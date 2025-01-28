import fs from "fs";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Who's the host API",
      version: "1.0.0",
      description: "API routes documentation for the Who's the host service",
    },
    components: {
      schemas: {
        Participant: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "The participant's unique identifier",
            },
            name: {
              type: "string",
              description: "The name of the participant",
            },
            email: {
              type: "string",
              description: "Participant's email",
            },
          },
          required: ["id", "name", "email"],
        },
      },
    },
  },
  apis: ["./app/api/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

fs.writeFileSync(
  path.resolve("./public/swagger.json"),
  JSON.stringify(swaggerSpec, null, 2)
);
