import React from "react";

const Login : React.FC = () => {

    const handleLogin = (provider : string) => {
        window.location.href = `http://localhost:3005/auth/${provider}`;
      };

return(
    <div>
         <div>
          <button onClick={() => handleLogin('twitter')}>Login with Twitter</button>
          <button onClick={() => handleLogin('twitch')}>Login with Twitch</button>
        </div>
    </div>
)

}

export default Login;