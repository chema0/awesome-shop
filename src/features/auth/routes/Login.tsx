import {
  Button,
  Row,
  Input,
  Link,
  Text,
  Container,
  Spacer,
} from "@nextui-org/react";

import { GoogleIcon } from "@/components/icons";

export const Login = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
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
          <Input fullWidth underlined labelPlaceholder="Username or email" />

          <div style={{ width: "100%" }}>
            <Input.Password fullWidth underlined labelPlaceholder="Password" />
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="#" color="primary" css={{ mt: "1rem" }}>
                Forgot password
              </Link>
            </span>
          </div>

          {/* css={{ display: "flex", justifyContent: "center" }} */}
          <Container fluid css={{ d: "flex", jc: "center" }}>
            <Button>Sign in</Button>
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
    </main>
  );
};
