import type { ReactElement } from "react";
import { CenteredLayout } from "@/components/layouts";
import type { NextPageWithLayout } from "./_app";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import {
  Button,
  Container,
  Input,
  Link,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}`,
      });

      console.log({ res });

      if (res?.error) {
      }

      if (res?.url) router.push(res.url);

      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          <Input
            fullWidth
            underlined
            required
            id="email"
            name="email"
            type="email"
            labelPlaceholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            // error={errors["email"]}
          />

          <div style={{ width: "100%" }}>
            <Input.Password
              fullWidth
              underlined
              required
              id="password"
              name="password"
              labelPlaceholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="#" color="primary" css={{ mt: "1rem" }}>
                Forgot password
              </Link>
            </span>
          </div>

          <Container fluid css={{ d: "flex", jc: "center" }}>
            {/* <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loading type="points-opacity" color="currentColor" size="sm" />
            ) : (
              "Sign in"
            )}
          </Button> */}
            <Button flat type="submit">
              Sign in
            </Button>
          </Container>
        </Row>

        <Spacer y={2} />

        <Row fluid css={{ fd: "column", ai: "center" }}>
          <Text h5 css={{ mb: "1.25rem" }}>
            - Or sign in with -
          </Text>

          {/* <Button
          auto
          ghost
          color="gradient"
          icon={<GoogleIcon />}
          css={{ mb: "2rem" }}
        >
          Google
        </Button> */}

          <Text h5>Don&apos;t have an account yet?</Text>
          <Link href="#" color="primary" css={{ ml: "0.25rem" }}>
            Register now
          </Link>
        </Row>
      </Container>
    </form>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <CenteredLayout>{page}</CenteredLayout>;
};

export default Page;
