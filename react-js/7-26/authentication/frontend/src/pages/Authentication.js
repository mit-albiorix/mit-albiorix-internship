import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  console.log("formData call ", request);
  let data = await request.formData();
  console.log("formData", data);

  // here outside the components u can't use useSearchParams that's why you have to use this
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json(
      {
        message: "invalid mode!",
      },
      { status: 422 }
    );
  }

  const formData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.status === 422 || response.status === 401) {
    throw response;
  }

  if (!response.ok) {
    throw json(
      {
        message: "can't authenticate user!",
      },
      {
        status: 500,
      }
    );
  }

  const responseData =await  response.json()
  console.log("res",responseData);
  const token =await responseData.token;
  console.log("to",token);
  localStorage.setItem('token',token)

  return redirect("/");
}
