import {
  Button,
  Row,
  Link,
  Text,
  Container,
  Spacer,
  Loading,
} from "@nextui-org/react";
import { object, string } from "yup";

import { Form } from "@/components/form";
import InputField from "@/components/form/InputField";
import { GoogleIcon } from "@/components/icons";
import { useAuth } from "@/lib/authorization";

type LoginFormProps = {
  onSuccess: () => void;
};

type LoginValues = {
  email: string;
  password: string;
};

const schema = object({
  email: string().required(),
  password: string().required(),
});

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { signin, isLoading } = useAuth()!;

  const handleSubmit = async (values: LoginValues) => {
    console.log(values);
    signin(values, onSuccess);
  };

  return (
    <Form<LoginValues, typeof schema> onSubmit={handleSubmit} schema={schema}>
      {({ register, formState: { errors } }) => (
        <Container
          css={{
            backgroundColor: "$backgroundContrast",
            width: "30rem",
            height: "37rem",
            borderRadius: "$md",
            padding: "1.5rem",
          }}
        >
          <Row justify="center">
            <Text h2>Login</Text>
          </Row>

          <Spacer y={2} />

          <Row fluid css={{ d: "flex", fd: "column", gap: "3rem" }}>
            <InputField
              fullWidth
              underlined
              required
              labelPlaceholder="Email"
              error={errors["email"]}
              registration={register("email")}
            />

            <div style={{ width: "100%" }}>
              <InputField
                fullWidth
                underlined
                required
                componentType="password"
                labelPlaceholder="Password"
                error={errors["password"]}
                registration={register("password")}
              />
              <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="#" color="primary" css={{ mt: "1rem" }}>
                  Forgot password
                </Link>
              </span>
            </div>

            <Container fluid css={{ d: "flex", jc: "center" }}>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loading
                    type="points-opacity"
                    color="currentColor"
                    size="sm"
                  />
                ) : (
                  "Sign in"
                )}
              </Button>
            </Container>
          </Row>

          <Spacer y={2} />

          <Row fluid css={{ fd: "column", ai: "center" }}>
            <Text h5 css={{ mb: "1.25rem" }}>
              - Or sign in with -
            </Text>

            <Button
              auto
              ghost
              color="gradient"
              icon={<GoogleIcon />}
              css={{ mb: "2rem" }}
            >
              Google
            </Button>

            <Text h5>
              Don&apos;t have an account yet?
              <Link href="#" color="primary" css={{ ml: "0.25rem" }}>
                Register now
              </Link>
            </Text>
          </Row>
        </Container>
      )}
    </Form>
  );
};
