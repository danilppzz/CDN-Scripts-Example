const swaggerOptions = {
    swaggerDefinition: {
      "openapi": "3.0.3",
      "info": {
        "title": "danilppzz - Hoxid API ",
        "description": "This is the Hoxid API documentation made by danilppzz with Swagger.",
        "termsOfService": "http://danilppzz.dev/terms/",
        "contact": {
          "email": "contact@danilppzz.dev",
        },
        "license": {
          "name": "Apache 2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
        },
        "version": "1.0.0",
      },
      "servers": [
        {
          "url": "https://api.danilppzz.dev/v1/",
        },
        {
          "url": "http://localhost:3000/",
        },
      ],
    },
    apis: ['./src/router.yaml'],
};

export default swaggerOptions;