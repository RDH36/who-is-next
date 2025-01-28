import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Who's the host API",
      version: "1.0.0",
      description:
        "Documentation des API routes pour le service Who's the host",
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
