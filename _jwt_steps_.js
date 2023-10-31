/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client
 * 
 * 
 * 
 * 
 * 
 * 1. cors
 *  app.use(cors({
   origin:['http://localhost:5173'],
    credentials:true
   }));
 * 
 * 

 */
/***
 * 1.jwt ---> json web token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. httpOnly,secure, sameSite
 * 4. from client side: axios withCredentials true
 * 5. cors setup origin and credentials: true
*/
/**
 * 1. for secure api calls
 * 2. server side: install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call using axios withCredentials: true OR 
 * credentials : 'include' 
 */