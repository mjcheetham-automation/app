const { app } = require("@azure/functions"); 

app.http('event', {
  methods: ['GET', 'POST'],
  handler: async (request, context) => {
    context.log('HTTP function processed request');

    const name = request.query.get('name')
      || await request.text()
      || 'world';

    return { body: `Hello, ${name}!` };
  }
});
