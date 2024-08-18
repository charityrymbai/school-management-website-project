const testMiddleware = async (c, next) => {
     console.log('I am in testMiddleware');
     if (c.req.header('Authorization')) {
          await next();
     } else {
          c.json({
               message: 'You are not authorised',
          });
     }
};

export default testMiddleware;
