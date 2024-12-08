import {Form} from "react-router";

const Newsletter = () => {
  return (
    <main>
      <Form method="post">
        <fieldset>
          <input type="email" placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </fieldset>
      </Form>
    </main>
  );
};

export default Newsletter;
